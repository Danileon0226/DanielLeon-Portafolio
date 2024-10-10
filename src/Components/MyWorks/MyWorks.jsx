import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Tecnotics from "../../assets/Images/Tecnotics.png";
import Afw from "../../assets/Images/AFW.png";
import Eng from "../../assets/Images/EnigLogic.png";

const proyectos = [
  {
    id: 1,
    titulo: "Tecnotics Web",
    descripcion:
      "Pagina Web completa para la empresa Tecnotics, desarrollada en React, MUI, Node",
    imagen: Tecnotics,
    enlaceProyecto: "https://tecnotics.com/",
  },
  {
    id: 2,
    titulo: "Apps For The World",
    descripcion: "Aplicativo web desarrollado en React, MUI, Node y Mongo DB",
    imagen: Afw,
    enlaceProyecto: "https://appsfortheworld.com/",
  },
  {
    id: 3,
    titulo: "Enig Logic",
    descripcion: "ERP y sistema de gestion desarrollado en React",
    imagen: Eng,
    enlaceProyecto: "https://samn.netlify.app/",
  },
];

const HoverCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    opacity: 0.95,
  },
}));

function MyWorks() {
  return (
    <Box sx={{ flexGrow: 1, p: 4, mb: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          textAlign: "center",
          fontFamily: "Major Mono Display",
          fontWeight: "bold",
          color: "var(--text-color)",
          marginBottom: "40px",
        }}
      >
        Proyectos Significativos
      </Typography>
      <Grid container spacing={4}>
        {proyectos.map((proyecto) => (
          <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
            <HoverCard>
              <CardMedia
                component="img"
                height="200"
                sx={{
                  objectFit: "cover",
                  borderRadius: "12px 12px 0 0",
                }}
                image={proyecto.imagen}
                alt={proyecto.titulo}
              />
              <CardContent
                sx={{
                  backgroundColor: "var(--bg-color)",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  fontWeight="bold"
                  sx={{
                    color: "var(--text-color)",
                    fontFamily: "Major Mono Display",
                    marginBottom: "10px",
                  }}
                >
                  {proyecto.titulo}
                </Typography>
                <Typography
                  sx={{
                    color: "var(--subtitle-color)",
                    fontFamily: "monospace",
                    marginBottom: "15px",
                  }}
                  variant="body2"
                >
                  {proyecto.descripcion}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  backgroundColor: "var(--bg-color)",
                  justifyContent: "center",
                  paddingBottom: "20px",
                }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  href={proyecto.enlaceProyecto}
                  target="_blank"
                  sx={{
                    backgroundColor: "var(--link-color)",
                    color: "white",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    padding: "8px 16px",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "var(--link-hover-color)",
                    },
                  }}
                >
                  Ver Proyecto
                </Button>
              </CardActions>
            </HoverCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyWorks;
