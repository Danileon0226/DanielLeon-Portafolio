import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function CallToAction() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(6),
        backgroundColor: "transparent",
        margin: theme.spacing(5, 0),
        marginBottom: "110px",
        height: "500px",
      }}
    >
      <Typography
        variant="h5"
        component="p"
        sx={{
          color: "var(--text-color)",
          marginBottom: theme.spacing(3),
          textAlign: "center",
          fontWeight: "bold",
          fontSize: matches ? "2.5rem" : "2.25rem",
        }}
      >
        ¿Estas listo para llevar tu proyecto a otro nivel?
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        sx={{
          borderColor: theme.palette.primary.main,
          color: "var(--link-color)",
          textTransform: "none",
          padding: theme.spacing(1, 4),
          borderRadius: theme.shape.borderRadius,
          ":hover": {
            backgroundColor: "transparent",

            color: "var(--link-hover-color)",
          },
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        Contactame
      </Button>
    </Box>
  );
}

export default CallToAction;
