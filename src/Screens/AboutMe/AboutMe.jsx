import {
  Box,
  Typography,
  Grid,
  Avatar,
  IconButton,
  Card,
  CardContent,
  CardActions,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "../../Components/Navbar/Navbar";
import PersonalPhoto from "../../assets/Images/Foto_hoja_vida.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import "./AboutMe.css";

function AboutMe() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const socialIcons = [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/daniel-alejandro-salgado-leon/",
    },
    { icon: <GitHubIcon />, link: "https://github.com/Danileon0226" },
    {
      icon: <EmailIcon />,
      link: "mailto:your.danielalejandrosalgadoleon@gmail.com",
    },
  ];

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          p: 3,
        }}
        className="about-me-background"
      >
        <Card
          sx={{
            maxWidth: 800,
            width: "100%",
            backgroundColor: "var(--bg-color)",
          }}
        >
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Box display="flex" justifyContent="center">
                  <Avatar
                    alt="Daniel Alejandro Salgado León"
                    src={PersonalPhoto}
                    sx={{
                      width: theme.spacing(20),
                      height: theme.spacing(20),
                      border: 2,
                      borderColor: "var(--link-color)",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography
                  variant={isSmallScreen ? "h4" : "h2"}
                  component="div"
                  sx={{
                    color: "var(--text-color)",
                  }}
                >
                  ¿Quién soy?
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{
                    color: "var(--subtitle-color)",
                    fontWeight: "bold",
                  }}
                  gutterBottom
                >
                  Un amante de la tecnología
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--text-color)",
                  }}
                >
                  Soy un desarrollador con pasión por crear soluciones
                  innovadoras y eficientes. Con experiencia en desarrollo de
                  software, especialmente en tecnologías web como React,
                  Node.js, y bases de datos. Me encanta aprender nuevas
                  tecnologías y aplicarlas en proyectos que ayuden a mejorar y
                  agilizar los procesos de la vida de las personas.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions disableSpacing sx={{ justifyContent: "center" }}>
            {socialIcons.map((social, index) => (
              <IconButton
                key={index}
                aria-label="social link"
                sx={{
                  color: "var(--subtitle-color)",
                }}
                onClick={() => window.open(social.link, "_blank")}
              >
                {social.icon}
              </IconButton>
            ))}
            <a
              href={`../../../public/Documents/CV - Daniel León .pdf`}
              download
              style={{
                color: "var(--subtitle-color)",
                marginLeft: "2rem",
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <DownloadIcon />
              Descargar CV
            </a>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default AboutMe;
