import { Grid, Typography } from "@mui/material";
import React from "react";
import ReactCompareImage from "react-compare-image";

const Scope = () => {
  return (
    <Grid container sx={{ mt: "", pl: "6rem", pr: "6rem" }}>
      <Grid item xs={12} sx={{ textAlign: "center", mb: "5rem" }}>
        <Typography sx={{ fontSize: "45px", fontWeight: "600" }}>
          mpartialScope
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography
          sx={{ fontSize: "45px", fontWeight: "600", pl: "6rem", pr: "1rem" }}
        >
          GROUND-TRUTH DATA EVERYONE TRUSTS
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ pr: "2rem" }}>
          We have combined the best-of-breed technology platforms with an eye
          towards relieving you of administrative burden. Geospatial Platforms
          3D scans augmented by TruePlan are used to generate consistent
          Xactimate or Symbility sheets that are delivered in accord with
          Actionable Insights compliance rule sets. Each mpartial is produced
          with full transparency, unprecedented forensic photography, and
          infallible geospatial data that collectively result in rapid
          approvals.
        </Typography>
      </Grid>
      <Grid item width={"100%"} xs={12}>
        <img-comparison-slider className='reds' >
          <img
            slot="first"
            src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
            width={"100%"}
          />
          <img
            slot="second"
            src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
            width={"100%"}
          />

          
          <img    slot="handle"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAoCAMAAAD61DXgAAAAclBMVEVHcEw5woA5wX85woA1woI6woA4woA5woA5woA1xIM2yZI5woA5xoE5woA5woA4woA4woA5woA5wX84x4M5wYA5wYE6woD///+d4cDz/Pi16NBfzZhGxYja9OiE2bBSyZCQ3bh31ajC7Nhr0aCp5MjO8OClpPfmAAAAFnRSTlMAh/GsGtiO95oUBMEn5MVmV9B4DZE3vEThUAAAAW5JREFUWMPFmNlygzAMRW32sBOIzBogbf//F0ugmQaQZ5piK/cRxj7IcyUkM7bSKXXMzAB1MjLTSU9MKotnoEcZt3Ci44I+uY5FTFyomyP2PdAvz19ZJwYKxU+R+jRIgOA3Ug+o5D2QCdAp+bGsS8h0LeKTvau4I0NS5BIoHua1Orr50DVSG9nYi1LUR5lNVaFQW3K09XGkHBqysy6kFHpmpjakDGqyQB8SoO2qcV8AWbR9dBNXdZnRdmLcm2hbhD7EVi9lzbBb/rVrV9i2+ekrcStXeinsfr22rMTnnmn/1eL/EuYNG/GQQihqxwDLlaZTBMUzwERrwuQ2Bd5tazEAWhNC0ASV7hFKavy0oD3ILCVImzFW4F85Ho2zl3iCU7cmAO7cb3JSJp/7odwgRBr50vilhMz00eBy4pOdFRAhzecZKSJBRvmbZ0GSoSXZz/ahp3W290L8RqHQRTUcS351cnFiO1JJdiM75pc15BsOgm5iVOJSvwAAAABJRU5ErkJggg==" />
        </img-comparison-slider>
        <ReactCompareImage
          leftImage="https://img-comparison-slider.sneas.io/demo/images/before.webp"
          rightImage="https://img-comparison-slider.sneas.io/demo/images/after.webp"
          sliderPosition={(position, handleRef) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: `calc(${position * 100}% - ${
                  handleRef.clientWidth / 2
                }px)`,
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "red",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
              ref={handleRef}
            >
              {/* Render your custom buttons here */}
              <button
                onClick={() => handleSliderPositionChange(position - 0.1)}
              >
                Left
              </button>
              <button
                onClick={() => handleSliderPositionChange(position + 0.1)}
              >
                Right
              </button>
            </div>
          )}
        />{" "}
      </Grid>
    </Grid>
  );
};

export default Scope;
