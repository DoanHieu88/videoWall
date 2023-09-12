import React, { useContext } from "react";

import { Box } from "@material-ui/core";
import DownloadIcon from "@material-ui/icons/GetApp";

import { useStatusEventStyle } from "./styles";
import BaseButton from "../BaseButton";
import { PrintIcon } from "../../Icons";
import { TrafficContext } from "../../TrafficContent";
import { ListTrafficModalContext } from "../../Modals/ListTrafficModal";

const FormattedButtons = () => {
  const classes = useStatusEventStyle();
  const {
    handleOpenReasonModal,
    handlePrintViolationImg,
    handlePrintNoti,
    handlePrintDispatch,
  } = useContext(TrafficContext);

  const {
    handleOpenHistoryModal,
  } = useContext(ListTrafficModalContext)

  return (
    <Box className={classes.root}>
      <Box className={classes.leftButtons}>
        <BaseButton
          startIcon={<PrintIcon color="#fff" />}
          content="In hình ảnh vi phạm"
          typeStyle="contained"
          customStyle={{ minWidth: "206px" }}
          onClick={handlePrintViolationImg}
        />
        <BaseButton
          startIcon={<DownloadIcon style={{ color: "#fff" }} />}
          content="Tải xuống"
          typeStyle="contained"
          customStyle={{ minWidth: "150px" }}
        />
        <BaseButton
          content="Lịch sử vi phạm"
          typeStyle="simple"
          customStyle={{ minWidth: "150px" }}
          onClick={handleOpenHistoryModal}
        />
        <BaseButton
          content="Chuyển không lỗi"
          customStyle={{ minWidth: "150px" }}
          onClick={handleOpenReasonModal}
        />
      </Box>
      <Box className={classes.rightButtons}>
        <BaseButton
          startIcon={<PrintIcon color="#fff" />}
          content="In thông báo VP"
          typeStyle="contained"
          customStyle={{ minWidth: "206px" }}
          onClick={handlePrintNoti}
        />
        <BaseButton
          startIcon={<PrintIcon color="#fff" />}
          content="In phiếu gửi"
          typeStyle="contained"
          customStyle={{ minWidth: "150px" }}
          onClick={handlePrintDispatch}
        />
      </Box>
    </Box>
  );
};

export default FormattedButtons;