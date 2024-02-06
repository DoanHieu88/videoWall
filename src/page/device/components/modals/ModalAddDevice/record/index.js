import React, { useCallback, useState } from "react";
import { days, hours, storagePlanHeader } from "../../../../utils";
import { Box, FormControlLabel, Typography } from "@material-ui/core";
import CustomSwitch from "../../../Accordion/CustomSwitch";
import BaseButton from "../../../BaseButton";
import SelectContainTable from "../../../SelectContainTable";

const list = [
  {
    name: "Plan-001",
    period: "3 days",
    activated: "6/10",
    expiration: "10/12/2023",
  },
  {
    name: "Plan-001",
    period: "3 days",
    activated: "6/10",
    expiration: "10/12/2023",
  },
  {
    name: "Plan-001",
    period: "3 days",
    activated: "6/10",
    expiration: "10/12/2023",
  },
  {
    name: "Plan-001",
    period: "3 days",
    activated: "6/10",
    expiration: "10/12/2023",
  },
  {
    name: "Plan-001",
    period: "3 days",
    activated: "6/10",
    expiration: "10/12/2023",
  },
  {
    name: "Plan-001",
    period: "3 days",
    activated: "6/10",
    expiration: "10/12/2023",
  },
];
const RecordDevice = () => {
  const [selectedCells, setSelectedCells] = useState({});
  const [selectedStoragePlan, setSelectedStoragePlan] = useState("");

  const handleMouseDown = (event, day, hour) => {
    if (event.buttons === 1) {
      setSelectedCells((prevSelectedCells) => ({
        ...prevSelectedCells,
        [`${day}-${hour}`]: !prevSelectedCells[`${day}-${hour}`],
      }));
    }
  };
  const handleMouseEnter = (event, day, hour) => {
    if (event.buttons === 1 && Object.keys(selectedCells).length > 0) {
      setSelectedCells((prevSelectedCells) => ({
        ...prevSelectedCells,
        [`${day}-${hour}`]: !prevSelectedCells[`${day}-${hour}`],
      }));
    }
  };

  const handleMouseUp = () => {
    // setSelectedCells({});
  };
  const handleClickColumns = useCallback((data) => {
    setSelectedStoragePlan(data);
  });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Box style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 50,
          }}
        >
          <Box style={{ display: "flex", gap: 24 }}>
            <FormControlLabel
              control={<CustomSwitch name="checkedB" />}
              label="Recording"
            />
            <SelectContainTable
              width={334}
              dropdownWidth={420}
              searchBarType={"storagePlan"}
              btnText={"-- Select Storage Plan --"}
              list={list}
              tableHeader={storagePlanHeader}
              selectedStoragePlan={selectedStoragePlan}
              handleClickColumns={handleClickColumns}
            />
          </Box>
          <Box style={{ display: "flex", gap: 24 }}>
            <BaseButton label={"Record All"} type={"redBackground"} />
            <BaseButton
              label={"Do Not Record All"}
              type={"normal"}
              width={180}
            />
          </Box>
        </Box>
        <Typography
          style={{ fontStyle: "italic", textAlign: "end", fontSize: 12 }}
        >
          Hold Ctrl to select multiple. Hold Shift to select consecutive groups
          of items
        </Typography>
      </Box>
      <table className="schedule-table">
        <thead>
          <tr>
            <th></th>
            {hours.map((hour) => (
              <th
                key={hour}
                style={{
                  width: 35,
                  height: 15,
                  fontWeight: 500,
                }}
              >
                {hour}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => (
            <tr key={day}>
              <th
                style={{
                  width: 35,
                  height: 15,
                  fontWeight: 500,
                  color:
                    (index === 5 || index === 6) && " rgba(221, 61, 75, 1)",
                }}
              >
                {day}
              </th>
              {hours.map((hour) => (
                <td
                  key={`${day}-${hour}`}
                  style={{
                    width: 35,
                    height: 20,
                    borderRadius: 2,
                    background: selectedCells[`${day}-${hour}`]
                      ? "rgba(68, 170, 255, 1)"
                      : "#E9E9E9",
                  }}
                  onMouseDown={(event) => handleMouseDown(event, day, hour)}
                  onMouseEnter={(event) => handleMouseEnter(event, day, hour)}
                  onMouseUp={handleMouseUp}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Box
            style={{
              width: 24,
              height: 24,
              borderRadius: 2,
              backgroundColor: " rgba(68, 170, 255, 1)",
            }}
          ></Box>
          <Typography>Record</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Box
            style={{
              width: 24,
              height: 24,
              borderRadius: 2,
              backgroundColor: " rgba(238, 238, 238, 1)",
            }}
          ></Box>
          <Typography>Do Not Record</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default RecordDevice;
