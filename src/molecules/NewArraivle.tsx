import { Grid2, Typography } from "@mui/material";

const NewArraival: React.FC = () => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{ height: "200px", borderRadius: 2, margin: 1 }}
    >
      <Grid2
        size={{ xs: 12, sm: 5 }}
        container
        spacing={2}
        sx={{
          background: "#f5f5f5",
          height: "100%",
          display: "flex",
          padding: 1,
          borderRadius: 1,
        }}
      >
        <Grid2 size={12}>
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            NEW ARRIVAL
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            This week's new arrival features a stunning 18K necklace, adorned
            with sparkling cubic zirconia stones, elegant hanging 'mothi'
            pearls, and vibrant emerald stones, all coming together to create a
            truly dazzling, sophisticated piece
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 7 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          alt="new arrival"
          src="src/assets/images/psv1tilit.jpg"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            margin: "8px",
            borderRadius: "8px",
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default NewArraival;
