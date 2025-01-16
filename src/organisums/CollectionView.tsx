import { Box, Button, Grid2 } from "@mui/material";
import { useState } from "react";
import { catlogList } from "../constants";
import Footer from "../molecules/Footer";

interface ItemData {
  img: string;
  id: string;
}

const itemData: { [key: string]: ItemData[] } = {
  KUNDHAN: [
    { img: "src/assets/images/psv1.jpg", id: "kundhan-1" },
    { img: "src/assets/images/psv1.jpg", id: "kundhan-2" },
    { img: "src/assets/images/psv1.jpg", id: "kundhan-3" },
    { img: "src/assets/images/psv1.jpg", id: "kundhan-4" },
  ],
  NAKSHI: [
    { img: "src/assets/images/vj1.jpg", id: "nakshi-1" },
    { img: "src/assets/images/vj1.jpg", id: "nakshi-2" },
    { img: "src/assets/images/vj1.jpg", id: "nakshi-3" },
    { img: "src/assets/images/vj1.jpg", id: "nakshi-4" },
  ],
  "DEEP NAKSHI": [
    { img: "src/assets/images/vj1.jpg", id: "deep-nakshi-1" },
    { img: "src/assets/images/vj1.jpg", id: "deep-nakshi-2" },
    { img: "src/assets/images/vj1.jpg", id: "deep-nakshi-3" },
    { img: "src/assets/images/vj1.jpg", id: "deep-nakshi-4" },
  ],
  "CUBIC ZIRCONIA": [
    { img: "src/assets/images/psv1.jpg", id: "cubic-zirconia-1" },
    { img: "src/assets/images/psv1.jpg", id: "cubic-zirconia-2" },
    { img: "src/assets/images/psv1.jpg", id: "cubic-zirconia-3" },
    { img: "src/assets/images/psv1.jpg", id: "cubic-zirconia-4" },
  ],
  DIAMOND: [
    { img: "src/assets/images/psv1.jpg", id: "diamond-1" },
    { img: "src/assets/images/psv1.jpg", id: "diamond-2" },
    { img: "src/assets/images/psv1.jpg", id: "diamond-3" },
    { img: "src/assets/images/psv1.jpg", id: "diamond-4" },
  ],
  POLKI: [
    { img: "src/assets/images/psv1.jpg", id: "polki-1" },
    { img: "src/assets/images/psv1.jpg", id: "polki-2" },
    { img: "src/assets/images/psv1.jpg", id: "polki-3" },
    { img: "src/assets/images/psv1.jpg", id: "polki-4" },
  ],
};

const CollectionView: React.FC = () => {
  const [currentCatlog, setCurrentCatlog] = useState<string>("CUBIC ZIRCONIA");
  const [displayCatlog, setDisplayCatlog] = useState<ItemData[]>(
    itemData["CUBIC ZIRCONIA"]
  );

  const onButtonClick = (name: string) => {
    setCurrentCatlog(name);
    setDisplayCatlog(itemData[name]);
  };

  return (
    <Grid2 container>
      <Grid2
        size={12}
        container
        spacing={2}
        justifyContent="center"
        justifyItems="center"
        sx={{
          marginTop: "0px",
          position: "sticky",
          top: -0.01,
          zIndex: 1000,
          backgroundColor: "#3e0e02",
        }}
      >
        {catlogList.map(({ name }) => (
          <Grid2>
            <Button
              key={name}
              color={currentCatlog === name ? "primary" : "secondary"}
              sx={{
                borderRadius: "0px",
                borderBottom: currentCatlog === name ? "2px solid" : "",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={() => onButtonClick(name)}
            >
              {name}
            </Button>
          </Grid2>
        ))}
      </Grid2>
      <Grid2 container spacing={2} size={12} sx={{ margin: 2 }}>
        {displayCatlog.map(({ img, id }) => (
          <Grid2 size={{ xs: 6, sm: 4 }} key={id}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src={img}
                style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              />
            </Box>
          </Grid2>
        ))}
      </Grid2>
      <Grid2 size={12}>
        <Footer />
      </Grid2>
    </Grid2>
  );
};

export default CollectionView;
