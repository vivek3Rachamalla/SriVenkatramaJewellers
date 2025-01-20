import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Grid2, Box, Typography } from "@mui/material";

const collections = [
  "Gold Collection",
  "Diamond Collection",
  "Kundan Collection",
  "Gemstone & Pearl",
  "Polki Collection",
  "Solitaire Collection",
];

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: 2 }}>
      <Grid2 container spacing={2}>
        <Grid2
          container
          spacing={0.5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, sm: 4 }}
        >
          <Grid2 size={12}>
            <img
              src="assets/images/logoName.png"
              alt="Company logo"
              style={{ maxWidth: "100%", height: "auto", marginBottom: "16px" }}
            />
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="body2">
              Our family has been in the jewelry business for over 20 years,
              offering a diverse variety of designs and a wide range of
              customization options to suit every customer's unique preferences.
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Grid2
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <InstagramIcon
                onClick={() =>
                  window.open("https://www.instagram.com/svr_jewels")
                }
                fontSize="large"
                sx={{
                  bgcolor: "#fff",
                  color: "#777777",
                  borderRadius: 2,
                  ":hover": {
                    bgcolor: "#c29958",
                    color: "#fff",
                  },
                }}
              />
              <YouTubeIcon
                onClick={() =>
                  window.open("https://www.youtube.com/@svr_jewels")
                }
                fontSize="large"
                sx={{
                  bgcolor: "#fff",
                  color: "#777777",
                  borderRadius: 2,
                  ":hover": {
                    bgcolor: "#c29958",
                    color: "#fff",
                  },
                }}
              />
              <WhatsAppIcon
                fontSize="large"
                sx={{
                  bgcolor: "#fff",
                  color: "#777777",
                  borderRadius: 2,
                  ":hover": {
                    bgcolor: "#c29958",
                    color: "#fff",
                  },
                }}
              />
              <FacebookOutlinedIcon
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/people/Sri-Venkataramana-Jewellers/61569839144053/"
                  )
                }
                fontSize="large"
                sx={{
                  bgcolor: "#fff",
                  color: "#777777",
                  borderRadius: 2,
                  ":hover": {
                    bgcolor: "#c29958",
                    color: "#fff",
                  },
                }}
              />
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2
          container
          spacing={0.5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, sm: 4 }}
        >
          <Grid2 size={12}>
            <Typography
              variant="body1"
              align="center"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              COLLECTIONS
            </Typography>
          </Grid2>
          <Grid2 size={12} container spacing={0.5} direction="column">
            {collections.map((collection) => (
              <Typography variant="caption" align="center" key={collection}>
                {collection}
              </Typography>
            ))}
          </Grid2>
        </Grid2>

        <Grid2
          container
          spacing={0.5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, sm: 4 }}
        >
          <Grid2 size={12}>
            <Typography
              variant="body1"
              align="center"
              sx={{ marginBottom: 2, fontWeight: "bold" }}
            >
              FIND US
            </Typography>
          </Grid2>
          <Grid2
            size={12}
            onClick={() =>
              window.open("https://maps.app.goo.gl/r83z66k2Tq2WCkrT7")
            }
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#ffffff",
                color: "#c29958",
                border: "2px solid #3e0e02",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography
              variant="body2"
              align="center"
              sx={{ display: "inline-block" }}
            >
              <HomeOutlinedIcon
                fontSize="small"
                sx={{ verticalAlign: "sub" }}
              />{" "}
              8-6-117/5/NR, Nagarjuna Sagar Rd, beside Nagarjuna colony, Arch,
              Hastinapuram, Hyderabad, Telangana 500079
            </Typography>
          </Grid2>
          <Grid2
            size={12}
            onClick={() => {
              window.location.href = "mailto:svrj@gmail.com";
            }}
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#ffffff",
                color: "#c29958",
                border: "2px solid #3e0e02",
                borderRadius: 2,
                transition: "all 0.3s ease",
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="body2" align="center">
              <EmailOutlinedIcon
                fontSize="small"
                sx={{ verticalAlign: "sub" }}
              />{" "}
              svrj@gmail.com
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="body2" align="center">
              <LocalPhoneOutlinedIcon
                fontSize="small"
                sx={{ verticalAlign: "sub" }}
              />{" "}
              +91 9182344852
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Footer;
