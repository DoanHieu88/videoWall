import React, { useRef, useState } from "react";
import { Stage, Layer, Ellipse } from "react-konva";
import simplify from "simplify-js";
import _ from "lodash";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Box, Grid } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { LineIcon, RefreshIcon, ZoneIcon } from "../../Icon";
import RenderTriangle from "./RenderTriangle";
import RenderLineZOne from "./RenderLineZone";
import ToolsControl from "./ToolsControl";
import ModalAddZoneLine from "./modals/ModalAddLine";

const DrawingComponent = () => {
  const imageRef = useRef(null);
  const stageRef = useRef(null);
  const [isUpdatePoint, setIsUpdatePoint] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [lines, setLines] = useState([]);
  const [filledAreaPoints, setFilledAreaPoints] = useState([]);
  const [lastDragPosition, setLastDragPosition] = useState({ x: 0, y: 0 });
  const [selectedLine, setSelectedLine] = useState(null);
  const [pointIndex, setPointIndex] = useState(null);
  const [canDraw, setCanDraw] = useState(null);
  const [points, setPoints] = useState([]);
  const [centerLine, setCenterLine] = useState([]);

  const handleMouseDown = (e, selectedLine) => {
    if (selectedLine !== null || isDragging || !canDraw) return;
    setIsDrawing(true);
    const stage = e.target.getStage();
    const { x, y } = stage.getPointerPosition();
    setLines([...lines, { points: [{ x, y }] }]);
  };

  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const { x, y } = stage.getPointerPosition();
    const temptLine = _.cloneDeep(lines);
    if (selectedLine == null && !isDragging && isDrawing && canDraw === 1) {
      let lastLine = temptLine[temptLine.length - 1];
      lastLine.points.push({ x, y });
      temptLine.splice(temptLine.length - 1, 1, lastLine);
      setLines(temptLine);
    }
    if (
      isUpdatePoint &&
      pointIndex !== null &&
      selectedLine !== null &&
      canDraw === 1
    ) {
      const tempAreaPoints = _.cloneDeep(filledAreaPoints);
      tempAreaPoints[pointIndex] = { x, y };
      temptLine[selectedLine].points = tempAreaPoints;
      setFilledAreaPoints(tempAreaPoints);
      setLines(temptLine);
    }
    const tempPoints = _.cloneDeep([...points]);
    if (canDraw === 0 && tempPoints.length === 2) {
      const midPoint = getMidpoint(tempPoints[0], tempPoints[1]);
      if (midPoint) {
        setCenterLine([midPoint, { x, y }]);
      }
    }
    if (isUpdatePoint && pointIndex !== null && canDraw === 0) {
      const tempAreaPoints = _.cloneDeep(filledAreaPoints);
      tempAreaPoints[pointIndex] = { x, y };
      const midPoint = getMidpoint(tempPoints[0], tempPoints[1]);
      tempAreaPoints.splice(2, 1, midPoint);
      setPoints(tempAreaPoints);
      setFilledAreaPoints(tempAreaPoints);
    }
  };

  const handleMouseUp = (e) => {
    setIsDrawing(false);
    setIsDragging(false);
    setIsUpdatePoint(false);
    setPointIndex(null);
    // Automatically close the last line by connecting its last point to its first point
    if (lines.length > 0 && canDraw === 1) {
      const temptLine = _.cloneDeep([...lines]);
      const lastLine = temptLine[temptLine.length - 1];
      const tolerance = 6; // Tolerance for simplification
      lastLine.points = simplify(lastLine.points, tolerance, true);
      if (lastLine.points.length <= 2) {
        temptLine.splice(temptLine.length - 1, 1);
      }
      setLines([...temptLine]);
    }
  };

  const handleLineClick = (index, type) => {
    if (canDraw === null) return;
    setIsDrawing(false);
    setIsDragging(true);
    if (type === "zone" && canDraw === 1) {
      setFilledAreaPoints([...lines[index].points]);
      setTimeout(() => {
        setSelectedLine(index);
      }, 150);
    } else if (type === "line" && canDraw === 0) {
      setFilledAreaPoints(points);
    }
  };

  const getMidpoint = (p1, p2) => {
    if (!p1 || !p2) return null;
    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };
  };

  const handleStageClick = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedLine(null);
      setIsDragging(false);
      setIsDrawing(false);
      setIsUpdatePoint(false);
      setPointIndex(null);
    }
    if (canDraw === 0) {
      const pointerPos = stageRef.current.getPointerPosition();
      if (points.length < 2) {
        setPoints([...points, pointerPos]);
        setFilledAreaPoints([...points, pointerPos]);
      } else {
        setPoints((prev) => [...prev, ...centerLine]);
        setFilledAreaPoints([...points, ...centerLine]);
        setCenterLine([]);
      }
    }
  };

  const handleLineDragStart = (index, e) => {
    setIsDrawing(false);
    setIsDragging(true);
  };

  const handleLineDragMove = (index, event) => {
    const { x, y } = event.target.position();
    const deltaX = x - lastDragPosition.x;
    const deltaY = y - lastDragPosition.y;
    const newFilledAreaPoints = filledAreaPoints.map((point) => ({
      x: point.x + deltaX,
      y: point.y + deltaY,
    }));

    setLastDragPosition({ x, y });
    setFilledAreaPoints(newFilledAreaPoints);
  };

  const handleLineDragMoveEnd = (index, event, filledAreaPoints) => {
    if (canDraw === 0) {
      setPoints(filledAreaPoints);
    } else {
      const newLines = _.cloneDeep([...lines]);
      newLines[index].points = filledAreaPoints;
      setLines(newLines);
    }
    event.target.position({ x: 0, y: 0 });
    setLastDragPosition({ x: 0, y: 0 });
  };

  const onClickPoint = (e, index) => {
    if (selectedLine == null && canDraw === 1) return;
    setIsDrawing(false);
    setIsDragging(false);
    setPointIndex(index);
    setIsUpdatePoint(true);
  };

  const toolControl = [
    {
      icon: <LineIcon />,
      action: () => {
        setCanDraw(0);
        setFilledAreaPoints([...points]);
        setSelectedLine(null);
      },
    },
    {
      icon: <ZoneIcon />,
      action: () => {
        setCanDraw(1);
        setFilledAreaPoints([]);
      },
    },
    {
      icon: <DeleteOutlineIcon />,
      action: () => {
        setCanDraw(null);
        if (selectedLine === null) return;
        const tempData = _.cloneDeep(lines);
        tempData.splice(selectedLine, 1);
        setLines(tempData);
        setFilledAreaPoints([]);
      },
    },
    {
      icon: <RefreshIcon />,
      action: () => {
        setLines([]);
        setFilledAreaPoints([]);
        setCanDraw(null);
        setPoints([]);
      },
    },
  ];

  const handleGroupMouseOver = (e) => {
    e.target.getStage().container().style.cursor = "pointer";
    // setStage(e.target.getStage());
  };

  const handleGroupMouseOut = (e) => {
    e.target.getStage().container().style.cursor = "default";
  };

  return (
    <Box style={{ width: "100%", height: "100%", position: "relative" }}>
      <TransformWrapper
        doubleClick={{
          disabled: true,
        }}
        panning={{
          lockAxisX: true,
          lockAxisY: true,
        }}
      >
        <TransformComponent>
          <div
            onContextMenu={(e) => e.preventDefault()}
            // onDoubleClick={(e) => handleOnDoubleClick(e)}
            ref={imageRef}
            style={{
              backgroundImage:
                "url('https://cdn.vjshop.vn/tin-tuc/5-cach-cai-thien-bo-cuc-anh-phong-canh-thong-qua-phoi-sang-lau/cai-thien-anh-phong-canh-bang-phuong-phap-chup-phoi-sang-lau.jpg')",
              height: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              minWidth: 900,
              minHeight: 500,
              position: "relative",
            }}
          >
            <Stage
              width={900}
              height={500}
              onMouseDown={(e) => handleMouseDown(e, selectedLine)}
              onMousemove={handleMouseMove}
              onMouseup={handleMouseUp}
              onTouchStart={(e) => handleMouseDown(e, selectedLine)}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
              onClick={handleStageClick}
              ref={stageRef}
              style={{
                border: "solid 1px ",
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
            >
              <Layer>
                {lines.map((line, i) => (
                  <RenderLineZOne
                    key={i}
                    index={i}
                    line={line}
                    handleLineClick={() => handleLineClick(i, "zone")}
                    closed={!isDrawing}
                    draggable={canDraw === 1}
                    onDragStart={handleLineDragStart}
                    onDragMove={handleLineDragMove}
                    onDragEnd={handleLineDragMoveEnd}
                    filledAreaPoints={filledAreaPoints}
                    onMouseOver={canDraw === 1 && handleGroupMouseOver}
                    onMouseOut={canDraw === 1 && handleGroupMouseOut}
                  />
                ))}

                {(selectedLine !== null || canDraw === 0) &&
                  filledAreaPoints.map((point, index) => (
                    <Ellipse
                      key={index}
                      x={point.x}
                      y={point.y}
                      radiusX={5}
                      radiusY={5}
                      fill="red"
                      onMouseDown={(e) => onClickPoint(e, index)}
                      onMouseOver={handleGroupMouseOver}
                      onMouseOut={handleGroupMouseOut}
                    />
                  ))}
                {
                  <RenderTriangle
                    points={points}
                    canDraw={canDraw}
                    centerLine={centerLine}
                    onClickPoint={onClickPoint}
                    handleLineClick={handleLineClick}
                    handleLineDragMove={handleLineDragMove}
                    handleLineDragStart={handleLineDragStart}
                    handleLineDragMoveEnd={handleLineDragMoveEnd}
                    filledAreaPoints={filledAreaPoints}
                    isDragging={isDragging}
                    onMouseOver={canDraw === 0 && handleGroupMouseOver}
                    onMouseOut={canDraw === 0 && handleGroupMouseOut}
                  />
                }
              </Layer>
            </Stage>
          </div>
        </TransformComponent>
      </TransformWrapper>
      <ToolsControl toolControl={toolControl} canDraw={canDraw} />
      {<ModalAddZoneLine type={"New"} />}
    </Box>
  );
};

export default DrawingComponent;
