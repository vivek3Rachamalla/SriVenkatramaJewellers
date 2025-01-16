import { Grid2 } from "@mui/material";
import NewArraival from "../molecules/NewArraivle";
import DesignDetails from "../molecules/DesignDetails";
import CatlogHomeMenu from "../molecules/CatlogHomeMenu";

const HomePageView: React.FC = () => {
  return (
    <Grid2
      container
      direction="column"
      justifyContent="center"
      spacing={2}
      sx={{ margin: 2 }}
    >
      <Grid2 size={12}>
        <NewArraival />
      </Grid2>
      <Grid2 size={12}>
        <DesignDetails />
      </Grid2>
      <Grid2 size={12}>
        <CatlogHomeMenu />
      </Grid2>
    </Grid2>
  );
};

export default HomePageView;
