import { Grid2 } from "@mui/material";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import { navAboutUs } from "../constants";
import AboutUSView from "../organisums/AboutUSView";

const AboutUS: React.FC = () => {
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Header currentPage={navAboutUs} />
      </Grid2>

      <Grid2 size={12}>
        <AboutUSView />
      </Grid2>

      <Grid2 size={12}>
        <Footer />
      </Grid2>
    </Grid2>
  );
};
export default AboutUS;
