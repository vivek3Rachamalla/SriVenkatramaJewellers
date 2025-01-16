import { Grid2 } from "@mui/material";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import { navHome } from "../constants";
import HomePageView from "../organisums/HomePageView";

const HomePage: React.FC = () => {
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Header currentPage={navHome} />
      </Grid2>

      <Grid2 size={12}>
        <HomePageView />
      </Grid2>

      <Grid2 size={12}>
        <Footer />
      </Grid2>
    </Grid2>
  );
};
export default HomePage;
