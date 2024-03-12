import { Box, Typography, IconButton, Grid, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)", 
        borderTop: "1px solid var(--bg-color)", 
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <IconButton
            sx={{
              color: "var(--link-color)",
              "&:hover": {
                color: "var(--link-hover-color)",
              },
            }}
            component={Link}
            href="https://twitter.com"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "var(--link-color)",
              "&:hover": {
                color: "var(--link-hover-color)",
              },
            }}
            component={Link}
            href="https://facebook.com"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "var(--link-color)",
              "&:hover": {
                color: "var(--link-hover-color)",
              },
            }}
            component={Link}
            href="https://www.instagram.com/_____z_e_r_o_____/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            sx={{
              color: "var(--link-color)",
              "&:hover": {
                color: "var(--link-hover-color)",
              },
            }}
            component={Link}
            href="https://linkedin.com"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ mt: 2 }}>
        &copy; {year} Daniel. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
