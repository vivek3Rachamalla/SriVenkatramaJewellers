import { Avatar, Grid2, Link, Typography } from "@mui/material";
import "./Header.css";
import { navItems } from "../constants";

interface headerPost {
  currentPage: string;
}

const Header: React.FC<headerPost> = ({ currentPage }) => {
  const goldPrice = import.meta.env.VITE_APP_GOLD_PRICE;
  const silverPrice = import.meta.env.VITE_APP_SILVER_PRICE;
  const platinumPrice = import.meta.env.VITE_APP_PLATINUM_PRICE;
  return (
    <div className="header-background">
      <Grid2 container spacing={1}>
        <Grid2
          size={12}
          sx={{
            background: "#651a08",
            paddingX: 2,
            borderBottom: "2px solid #3e0e02",
            overflowX: "hidden",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              direction: "rtl",
              textAlign: "right",
              animation: "marqueeRightToLeft 15s linear infinite",
              whiteSpace: "nowrap",
              "&:hover": {
                animationPlayState: "paused",
                transform: "none",
              },
            }}
          >
            <span style={{ color: "#fff" }}>Today: Gold 22k - 1g = Rs. </span>
            <span style={{ color: "#c29958", fontWeight: "bold" }}>
              {goldPrice}
            </span>
            <span className="divider"></span>
            <span style={{ color: "#fff" }}>Today: Silver - 1g = Rs. </span>
            <span style={{ color: "#c29958", fontWeight: "bold" }}>
              {silverPrice}
            </span>
            <span className="divider"></span>
            <span style={{ color: "#fff" }}>Today: Platinum - 1g = Rs. </span>
            <span style={{ color: "#c29958", fontWeight: "bold" }}>
              {platinumPrice}
            </span>
          </Typography>
        </Grid2>
        <Grid2
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid2
            size={1}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Avatar alt="Logo" src="src/assets/images/logo.png" />
          </Grid2>
          <Grid2 size={11}>
            <Typography variant="h4" color="#c29958" align="center">
              SRI VENKATRAMANA JEWELLERS
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2 size={12} container justifyContent="center" spacing={2}>
          {navItems.map(({ name, url }) => (
            <Grid2 key={name}>
              <Link href={url} underline="none">
                <Typography
                  variant="body1"
                  color={name === currentPage ? "#c29958" : "#ffffff"}
                  sx={{
                    fontWeight: name === currentPage ? "bold" : "normal",
                    transition: "all 0.3s ease",
                    letterSpacing: "0px",
                    "&:hover":
                      name != currentPage
                        ? { fontWeight: "bold", letterSpacing: "1px" }
                        : {},
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Header;
