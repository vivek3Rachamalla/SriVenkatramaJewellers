import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

// karigare
// our expireaince
// our store video

const AboutUSView: React.FC = () => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid2
        container
        spacing={2}
        margin={2}
        direction="column"
        justifyContent="center"
        justifyItems={"center"}
      >
        <Grid2 size={12}>
          <Typography variant="body2">
            Step into Sri Venkatrama Jewellers from wherever you are! Watch this
            short video to explore our store, see our exquisite collections, and
            experience the passion and craftsmanship that goes into every piece
            we create.
          </Typography>
        </Grid2>
        <Grid2
          size={12}
          sx={{
            position: "relative",
            width: "80%",
            paddingTop: "45%",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/iCGfApB8sVg?si=VtvQlM5Zyf9pZRh2"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default AboutUSView;
