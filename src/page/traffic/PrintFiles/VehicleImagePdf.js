import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";

const VehicleImagePdf = () => {
  const classes = styles();
  return (
    <Grid style={styles.rowSpan}>
      <Grid
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <image src="/csgt.jpg" style={{ width: 30, height: 40 }} />

        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Typography style={{ ...styles.uppercaseText, textAlign: "center" }}>
            HỆ THỐNG GIÁM SÁT TRẬT TỰ
          </Typography>
          <Typography style={{ ...styles.uppercaseText, textAlign: "center" }}>
            AN TOÀN GIAO THÔNG ĐƯỜNG BỘ BẰNG HÌNH ẢNH
          </Typography>
          <Grid
            style={{
              width: 180,
              height: 1,
              backgroundColor: "#000",
              marginTop: 10,
            }}
          ></Grid>
        </Grid>
      </Grid>
      <Typography
        style={{
          textAlign: "center",
          ...styles.fontSmall,
          paddingVertical: 30,
          fontWeight: 600,
        }}
      >
        HÌNH ẢNH PHƯƠNG TIỆN VI PHẠM
      </Typography>

      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Typography style={{ ...styles.fontSmall }}>- Vào hồi :</Typography>
        <Grid style={{ width: 300 }}>
          <Typography style={{ ...styles.fontSmall }}>05:33:35 ngày 29/06/2023</Typography>
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
        }}
      >
        <Typography style={{ ...styles.fontSmall }}>- Địa điểm :</Typography>
        <Grid style={{ width: 300 }}>
          <Typography style={{ ...styles.fontSmall }}>
            Nút giao Phạm Văn Đồng - đường tỉnh 363 (phường Hải Thành, quận
            Dương Kinh, thành phố Hải Phòng)
          </Typography>
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
        }}
      >
        <Typography style={{ ...styles.fontSmall }}>- Hành vi vi phạm :</Typography>
        <Grid style={{ width: 300 }}>
          <Typography style={{ ...styles.fontSmall }}>
            Không chấp hành hiệu lệnh của đèn tín hiệu giao thông
          </Typography>
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
        }}
      >
        <Typography style={{ ...styles.fontSmall }}>
          - Biển số phương tiện vi phạm :
        </Typography>
        <Grid style={{ width: 300 }}>
          <Typography style={{ ...styles.fontSmall }}>15A-235.18</Typography>
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
        }}
      >
        <Typography style={{ ...styles.fontSmall }}>- Thiết bị phát hiện:</Typography>
        <Grid style={{ width: 300 }}>
          <Typography style={{ ...styles.fontSmall }}>CAMERA Ngã tư 363 (2)</Typography>
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
        }}
      >
        <Typography style={{ ...styles.fontSmall }}>- Đơn vị vận hành :</Typography>
        <Grid style={{ width: 300 }}>
          <Typography style={{ ...styles.fontSmall }}>
            Công an thành phố Thái Nguyên - Công an tỉnh Thái Nguyên
          </Typography>
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          marginTop: 10,
        }}
      >
        <Typography style={{ ...styles.fontSmall }}>- Toạ độ :</Typography>
        <Grid style={{ width: 300 }}>
          <Typography style={{ ...styles.fontSmall }}>20.79274500 106.71510200</Typography>
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          width: "100%",
          marginTop: 20,
        }}
      >
        <Grid style={{ width: 150 }}>
          <Grid
            style={{ width: "100%", height: 200, backgroundColor: "#808080" }}
          ></Grid>
          <Grid
            style={{
              width: "100%",
              backgroundColor: "#b3b3b3",
              marginTop: 5,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography style={{ fontSize: 8, textAlign: "center" }}>
              Ảnh chụp phương tiện
            </Typography>
          </Grid>
        </Grid>
        <Grid style={{ flex: 1 }}>
          <Grid
            style={{ width: "100%", height: 200, backgroundColor: "#808080" }}
          ></Grid>
          <Grid
            style={{
              padding: 5,
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: 3,
              backgroundColor: "#b3b3b3",
              marginTop: 5,
              height: 30,
            }}
          >
            <Typography style={{ fontSize: 8, textAlign: "center", width: 80 }}>
              Ảnh chụp màn hình
            </Typography>
            <Typography style={{ fontSize: 8, width: 230 }}>
              Nút giao Phạm Văn Đồng - đường tỉnh 363 (phường Hải Thành, quận
              Dương Kinh, thành phố Hải Phòng)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          width: "100%",
          marginTop: 10,
        }}
      >
        <Grid style={{ width: 150 }}>
          <Grid
            style={{ width: "100%", height: 100, backgroundColor: "#808080" }}
          ></Grid>
          <Grid
            style={{
              padding: 5,
              width: "100%",
              backgroundColor: "#b3b3b3",
              marginTop: 5,
            }}
          >
            <Typography style={{ fontSize: 8, textAlign: "center" }}>
              Ảnh chụp biển số
            </Typography>
          </Grid>
        </Grid>
        <Grid style={{ flex: 1 }}>
          <Grid style={{ width: "100%", height: 100 }}>
            <image
              src={{
                uri: "https://maps.googleapis.com/maps/api/staticmap?center=21.0285,105.8542&zoom=16&size=600x400&key=AIzaSyDI3p_xqPNiCKgtK_yIDkXiq-BJ_aRNjpI&markers=color:red%7C21.0285,105.8542",
              }}
              alt="image Map"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
          <Grid
            style={{
              padding: 5,
              width: "100%",
              backgroundColor: "#b3b3b3",
              marginTop: 5,
            }}
          >
            <Typography style={{ fontSize: 8, textAlign: "center" }}>Bản đồ</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = makeStyles({
  rowSpan: {
    display: "flex",
    marginTop: 10,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    paddingRight: 30,
    paddingLeft: 50,
    paddingBottom: 130,
  },
  uppercaseText: {
    textTransform: "uppercase",
    fontSize: 15,
  },
  fontSmall: {
    fontSize: 11,
    letterSpacing: 0.5,
  },
  line: {
    width: 150,
    height: 1,
    backgroundColor: "#000",
    margin: "5px 0 10px 0",
  },
  textIndent: {
    textIndent: "25px",
    wordWrap: "break-word",
  },
  footer: {
    display: "flex",
    marginTop: 40,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 120,
    width: "100%",
    gap: 40,
  },
});
export default VehicleImagePdf;
