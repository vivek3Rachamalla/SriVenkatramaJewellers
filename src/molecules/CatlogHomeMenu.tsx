import { Box, Grid2, Typography } from "@mui/material";

const catlogList = [
  { name: "KUNDHAN", imageUrl: "assets/images/psv1.jpg" },
  { name: "NAKSHI", imageUrl: "assets/images/psv1.jpg" },
  { name: "DEEP NAKSHI", imageUrl: "sassets/images/psv1.jpg" },
  { name: "CUBIC ZIRCONIA", imageUrl: "assets/images/psv1.jpg" },
  { name: "DIAMOND", imageUrl: "assets/images/psv1.jpg" },
  { name: "POLKI", imageUrl: "assets/images/psv1.jpg" },
];

const CatlogHomeMenu: React.FC = () => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        paddingTop: 2,
        paddingLeft: 2,
        backdropFilter: "blur(10px)",
        borderRadius: 2,
      }}
    >
      {catlogList.map(({ name, imageUrl }) => (
        <Grid2 size={{ xs: 6, sm: 4 }}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "1 / 1",
            }}
          >
            <Typography variant="h6">{name}</Typography>
            <img
              src={imageUrl}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CatlogHomeMenu;
