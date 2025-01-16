import { Grid2 } from "@mui/material";
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import { navContactUs } from "../constants";
import ContactUSVIew from "../organisums/ContactUSVIew";

const ContactUS: React.FC = () => {
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Header currentPage={navContactUs} />
      </Grid2>

      <Grid2 size={12}>
        <ContactUSVIew />
      </Grid2>

      <Grid2 size={12}>
        <Footer />
      </Grid2>
    </Grid2>
  );
};
export default ContactUS;
