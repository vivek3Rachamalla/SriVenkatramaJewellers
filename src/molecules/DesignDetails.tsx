import { Grid2, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const detailsLeft = [
  {
    primary: "Understanding Your Vision",
    secondary:
      "We work closely with you to transform your ideas into detailed sketches that reflect your unique style and needs.",
  },
  {
    primary: "Research & Discovery",
    secondary:
      "Through in-depth market analysis and trend exploration, we ensure that your design resonates with current styles and your target audience.",
  },
  {
    primary: "Ideation & Conceptualization",
    secondary:
      "We engage in a creative brainstorming process to develop innovative concepts and solutions that align with your vision.",
  },
];
const detailsBottm = [
  {
    primary: "Iterative Prototyping",
    secondary:
      "We continuously visualize, test, and refine designs to ensure the final product meets your expectations and objectives.",
  },
  {
    primary: "Attention to Detail",
    secondary:
      "Our focus is on creating polished, cohesive designs, with meticulous attention to every element, ensuring quality and functionality.",
  },
  {
    primary: "Bring Alive",
    secondary:
      "We bring your concepts to life, turning them into tangible products that reflect your vision with precision and creativity.",
  },
];

const DesignDetails: React.FC = () => {
  return (
    <Grid2 container direction="column" spacing={2}>
      <Grid2
        container
        size={12}
        justifyContent="center"
        alignItems="center"
        sx={{ borderRadius: 2 }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src="assets/images/DesignBG.webp"
            style={{
              width: "80%",
              height: "80%",
              borderRadius: "8px",
              margin: "8px",
              objectFit: "cover",
            }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <List>
            {detailsLeft.map(({ primary, secondary }) => (
              <ListItem>
                <ListItemText
                  primary={primary}
                  secondary={secondary}
                  sx={{
                    "& .MuiListItemText-primary": { color: "#000000" },
                    "& .MuiListItemText-secondary": { color: "#000000" },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid2>
      </Grid2>

      <Grid2 size={12}>
        {detailsBottm.map(({ primary, secondary }) => (
          <ListItem>
            <ListItemText
              primary={primary}
              secondary={secondary}
              sx={{
                "& .MuiListItemText-primary": { color: "#000000" },
                "& .MuiListItemText-secondary": { color: "#000000" },
              }}
            />
          </ListItem>
        ))}
      </Grid2>
    </Grid2>
  );
};

export default DesignDetails;
