import {
  Box,
  Button,
  Stack,
  Typography,
  Paper,
  Grid,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import Daniel from "../../assets/Images/Foto_hoja_vida.jpg";
import "./Home.css";
import MyWorks from "../../Components/MyWorks/MyWorks";
import WppBoton from "../../Components/WppBoton/WppBoton";
import MyStackTech from "../../Components/MyStackTech/MyStackTech";
import CallToAction from "../../Components/CallToAction/CallToAction";
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const avatarStyle = {
    width: 200,
    height: 200,
    border: 2,
    borderColor: "var(--link-color)",
  };

  // Estilos para los textos
  const textStyle = {
    mt: 2,
    mb: 2,
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
    "Programador",
    "Constructor",
    "Explorador",
    "Pensador",
    "Curioso",
    "Ágil",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000); // Cambia la palabra cada 3000 milisegundos (3 segundos)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          pt: 8,
          marginTop: "110px",
        }}
        className="fondo-box"
      >
        <Paper elevation={3} sx={{ p: 3, mb: 5 }} className="fondo-paper">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box
                className="fondo-box2"
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
                      from: { transform: "scaleX(0)", transformOrigin: "left" },
                      to: { transform: "scaleX(1)", transformOrigin: "left" },
                      "50%": {
                        transform: "scaleX(1)",
                        transformOrigin: "right",
                      },
                      "100%": {
                        transform: "scaleX(0)",
                        transformOrigin: "right",
                      },
                    },
                  }}
                  className="title"
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
                  }}
                >
                  <i className="ri-reactjs-fill"></i> React Front End{" "}
                  <i className="ri-reactjs-fill"></i>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 2, mb: 2, color: "var(--text-color)" }}
                >
                  Apasionado por crear soluciones digitales innovadoras. Con
                  experiencia en React, MUI, Remix Icon, y mucho más.{" "}
                  <i className="ri-html5-line"></i>
                  <i className="ri-css3-line"></i>
                  <i className="ri-javascript-line"></i>
                  <i className="ri-git-branch-line"></i>
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--link-color)",
                    }}
                    component={RouterLink}
                    to="/about"
                  >
                    Conoce más sobre mí
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<span className="ri-code-line"></span>}
                    component="a"
                    href="https://github.com/danielleon"
                    target="_blank"
                    sx={{
                      color: "var(--link-color)",
                    }}
                  >
                    Mira mi código
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" justifyContent="center">
                <Stack alignItems="center" spacing={2}>
                  <Avatar alt="Daniel León" src={Daniel} sx={avatarStyle} />
                  <Typography
                    variant="body1"
                    sx={{
                      ...textStyle,
                      color: "var(--text-color)",
                      fontWeight: "bold",
                    }}
                  >
                    Daniel Alejandro Salgado León
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ ...textStyle, color: "var(--subtitle-color)" }}
                  >
                    2 Años y 6 Meses de experiencia.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <MyWorks />
      <WppBoton />
      <MyStackTech />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
