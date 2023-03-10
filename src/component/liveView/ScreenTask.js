import React, { memo, useCallback, useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import video1 from "../../asset/image/video1.mp4";
import video2 from "../../asset/image/video2.mp4";
import video3 from "../../asset/image/video3.mp4";
import { VideoScreenDetail } from ".";

const RenderVideoView = memo((props) => {
  const {
    deviceList,
    isSideBar,
    isDeviceOfScreenRecord,
    setScreenRecording,
    screenRecording,
    resetScreen,
  } = props;
  const countDevice = deviceList ? deviceList.length : 0;
  const [deviceLive, setDeviceLive] = useState("");
  const [indexStart, setIndexStart] = useState(0);
  const [stayTimeLive, setStayTimeLive] = useState(0);

  const handleSetDeviceLive = useCallback(
    (indexStart) => {
      if (!countDevice) {
        setDeviceLive("");
        return;
      }
      if (indexStart >= countDevice) return;
      setDeviceLive(deviceList[indexStart]);
      setStayTimeLive(deviceList[indexStart].stayTime);
    },
    [deviceList]
  );

  useEffect(() => {
    setIndexStart(0);
    if (countDevice) {
      handleSetDeviceLive(0);
      return;
    }
    setDeviceLive("");
    setStayTimeLive(0);
  }, [deviceList]);

  useEffect(() => handleSetDeviceLive(indexStart), [indexStart]);

  useEffect(() => {
    if (stayTimeLive === 0) return;
    if (isDeviceOfScreenRecord) {
      setScreenRecording("");
    }
    const timer = setTimeout(() => {
      setIndexStart((indexPrev) =>
        indexPrev === countDevice - 1 ? 0 : indexPrev + 1
      );
    }, stayTimeLive * 1000);
    return () => clearTimeout(timer);
  }, [deviceLive]);

  return (
    <Box style={{ height: "100%" }}>
      {Object.keys(deviceLive).length !== 0 && (
        <VideoScreenDetail
          deviceLive={deviceLive}
          isSideBar={isSideBar}
          setScreenRecording={setScreenRecording}
          screenRecording={screenRecording}
          isDeviceOfScreenRecord={isDeviceOfScreenRecord}
          resetScreen={resetScreen}
        />
      )}
    </Box>
  );
});

const ScreenTask = memo((props) => {
  const { screenDetail, screenRecording } = props;
  const deviceList = [
    { url: video1, stayTime: 260, id: 1 },
    // { url: video2, stayTime: 370 },
    // { url: video3, stayTime: 440 },
    // { url: video2, stayTime: 380 },
    // { url: video1, stayTime: 400 },
  ];

  if (screenDetail.screenDetail.length !== 0) {
    return (
      <Box
        style={{
          backgroundColor: "#e2e2e2",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            color: "white",
            textAlign: "end",
            pointerEvents: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
        >
          <Box style={{ fontWeight: "bold", fontSize: "36px" }}>viettel</Box>
          <Box>hight tech</Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box style={{ backgroundColor: "#e2e2e2", width: "100%", height: "100%" }}>
      <RenderVideoView
        screenDetail={screenDetail}
        setScreenRecording={() => props.setScreenRecording(screenDetail.key)}
        resetScreen={() => props.setScreenRecording("")}
        deviceList={deviceList}
        isDeviceOfScreenRecord={screenRecording === screenDetail.key}
        screenRecording={screenRecording}
      />
    </Box>
  );
});

export default ScreenTask;
