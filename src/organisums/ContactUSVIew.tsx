import { Box, Grid2, Link, Typography } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const contactItems = [
  {
    icon: <WhatsAppIcon fontSize="large" />,
    title: "WhatsApp",
    description: "Send us your queries on WhatsApp for a quick reply",
    linkText: "START CHATTING",
    link: "",
  },
  {
    icon: <LocationOnOutlinedIcon fontSize="large" />,
    title: "Our Location",
    description:
      "Find us at our office location for in-person support and consultations.",
    linkText: "Get Directions",
    link: "https://maps.app.goo.gl/r83z66k2Tq2WCkrT7",
  },
  {
    icon: <LocalPhoneOutlinedIcon fontSize="large" />,
    title: "Phone",
    description:
      "Call us for immediate assistance or support. We're here to help!",
    linkText: "Call Now",
    link: "",
  },
  {
    icon: <EmailOutlinedIcon fontSize="large" />,
    title: "Email",
    description: "Send us your queries via email for more detailed responses.",
    linkText: "Send Email",
    link: "mailto:svrj@gmail.com",
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    title: "Instagram",
    description:
      "Follow us on Instagram for the latest updates and exclusive content.",
    linkText: "Follow Us",
    link: "https://www.instagram.com/svr_jewels",
  },
  {
    icon: <YouTubeIcon fontSize="large" />,
    title: "YouTube",
    description:
      "Subscribe to our YouTube channel for informative videos and tutorials.",
    linkText: "Subscribe Now",
    link: "https://www.youtube.com/@svr_jewels",
  },
];

const ContactUSView: React.FC = () => {
  return (
    <Grid2 container spacing={2} sx={{ margin: 2 }}>
      {contactItems.map(({ icon, title, description, linkText, link }) => (
        <Grid2 size={4} key={title} onClick={() => window.open(link)}>
          <Box
            sx={{
              background: "#f5f5f5",
              height: "100%",
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              margin: "2px",
              "&:hover": {
                color: "#c29958",
                border: "2px solid #3e0e02",
                margin: "0px",
              },
            }}
          >
            {icon}
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: 1, textAlign: "center" }}
            >
              {description}
            </Typography>
            <Link variant="caption" color="inherit">
              {linkText}
            </Link>
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ContactUSView;
