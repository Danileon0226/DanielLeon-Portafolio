import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import cssIcon from "../../assets/Resources/css-icon.webp";
import nodeIcon from "../../assets/Resources/node-icon.png";
import muiIcon from "../../assets/Resources/mui-icon.png";

function MyStackTech() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const techStack = [
    { name: "HTML", icon: "ri-html5-fill", color: "#E34F26", isImage: false },
    { name: "CSS", icon: cssIcon, color: "#1572B6", isImage: true },
    {
      name: "JavaScript",
      icon: "ri-javascript-fill",
      color: "#F7DF1E",
      isImage: false,
    },
    {
      name: "React",
      icon: "ri-reactjs-fill",
      color: "#61DAFB",
      isImage: false,
    },
    { name: "Node.js", icon: nodeIcon, color: "#339933", isImage: true },
    { name: "MUI", icon: muiIcon, color: "#007FFF", isImage: true },
    {
      name: "Remix Icons",
      icon: "ri-remixicon-fill",
      color: "#25F4EE",
      isImage: false,
    },
    { name: "Npm", icon: "ri-npmjs-line", color: "#CB3837", isImage: false },
    {
      name: "GitHub",
      icon: "ri-github-fill",
      color: "#181717",
      isImage: false,
    },
  ];

  const renderIcon = (tech) => {
    if (tech.isImage) {
      return (
        <img
          src={tech.icon}
          alt={tech.name}
          style={{ width: "100%", height: "auto", maxWidth: 58 }}
        />
      );
    } else {
      return (
        <Box
          component="i"
          className={`ri ${tech.icon}`}
          style={{ fontSize: 58, color: tech.color }}
        />
      );
    }
  };

  return (
    <Box sx={{ p: 4, marginBottom: "100px" }}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold" }}
      >
        Mi Stack de Tecnología
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {techStack.map((tech) => (
          <Grid item key={tech.name} xs={6} sm={4} md={3} lg={2}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  backgroundColor: "var(--bg-color)",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    height: "120px",
                  }}
                >
                  {renderIcon(tech)}
                  <Typography
                    sx={{ color: "var(--text-color)", fontWeight: "bold" }}
                    variant="subtitle1"
                  >
                    {tech.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyStackTech;
