import {
  Box,
  Button,
  Stack,
  Typography,
  Paper,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MyWorks from "../../Components/MyWorks/MyWorks";
import WppBoton from "../../Components/WppBoton/WppBoton";
import MyStackTech from "../../Components/MyStackTech/MyStackTech";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Daniel from "../../assets/Images/danielavatar.jpg";
import "./Home.css";

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Estilos reutilizables
  const avatarStyle = {
    width: 200,
    height: 200,
    border: 2,
    borderColor: "var(--link-color)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  };

  const textStyle = {
    fontFamily: "monospace",
    mt: 2,
    mb: 2,
    color: "var(--text-color)",
  };

  const buttonStyle = {
    transition: "all 0.3s ease",
    fontFamily: "monospace",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  };

  const [index, setIndex] = useState(0);
  const words = [
    "Full Stack",
    "Soñador",
    "Innovador",
    "Creativo",
    "Estratega",
    "Líder",
    "Visionario",
    "Emprendedor",
    "Colaborador",
    "Analítico",
    "Solucionador",
    "Motivador",
    "Diseñador",
    "Constructor",
    "Explorador",
    "Pensador",
    "Curioso",
    "Ágil",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <Paper
        elevation={4}
        sx={{
          p: 3,
          mb: 5,
          marginTop: "110px",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
        className="fondo-paper"
      >
        <Grid container spacing={5} alignItems="center">
          {/* Sección de información personal */}
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography
                variant={isSmallScreen ? "h4" : "h2"}
                component="h1"
                gutterBottom
                sx={{
                  color: "var(--text-color)",
                  fontWeight: "bold",
                  fontFamily: "Major Mono Display",
                  position: "relative",
                  overflow: "hidden",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentcolor",
                    animation: "slideIn 3s infinite",
                  },
                  "@keyframes slideIn": {
                    "0%, 100%": {
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                    },
                    "50%": { transform: "scaleX(1)", transformOrigin: "right" },
                  },
                }}
              >
                Desarrollador {words[index]}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{
                  color: "var(--text-color)",
                  fontWeight: "bold",
                  fontFamily: "Major Mono Display",
                }}
              >
                <i className="ri-reactjs-fill"></i> React Front End{" "}
                <i className="ri-reactjs-fill"></i>
              </Typography>
              <Typography variant="body1" sx={{ ...textStyle }}>
                Apasionado por crear soluciones digitales innovadoras. Con
                experiencia en React, MUI, Remix Icon, y mucho más.{" "}
                <i className="ri-html5-line"></i>{" "}
                <i className="ri-css3-line"></i>{" "}
                <i className="ri-javascript-line"></i>{" "}
                <i className="ri-git-branch-line"></i>
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "var(--link-color)", ...buttonStyle }}
                  component={RouterLink}
                  to="/AboutMe"
                >
                  Conoce más sobre mí
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<span className="ri-code-line"></span>}
                  component="a"
                  href="https://github.com/Danileon0226"
                  target="_blank"
                  sx={{ color: "var(--link-color)", ...buttonStyle }}
                >
                  Mira mi código
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Sección del Avatar */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
              <Stack alignItems="center" spacing={2}>
                <Avatar alt="Daniel León" src={Daniel} sx={avatarStyle} />
                <Typography
                  variant="body1"
                  sx={{
                    ...textStyle,
                    fontWeight: "bold",
                  }}
                >
                  Daniel Alejandro Salgado León
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--subtitle-color)",
                    fontFamily: "Major Mono Display",
                  }}
                >
                  2 Años y 6 Meses de experiencia.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Componentes adicionales */}
      <MyWorks />
      <WppBoton />
      <MyStackTech />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
