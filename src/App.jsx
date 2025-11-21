import React from "react";
import bytwenty from "./assets/bytwenty.png";
import meat from "./assets/meat.png";
import tech from "./assets/tech.png";
import dp from "./assets/dp.jpg";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link as MuiLink,
  TextField,
  Paper,
} from "@mui/material";
import { GitHub, LinkedIn, Email, CloudUpload } from "@mui/icons-material";

// Sample data: replace with your real projects
const projects = [
  {
    id: 1,
    title: "E-commerce Jewellery Store",
    description:
      "Customized a WooCommerce theme, integrated payment gateways and optimized product templates for conversion.",
    features: ["Theme customization", "WooCommerce", "Speed optimization"],
    link: "https://by2wenty5.com/",
    image: bytwenty,
  },
  {
    id: 2,
    title: "Online Meat Store",
    description:
      "Built a Woocommerce store with custom checkout pages, email notifications and automated order processing.",
    features: ["Plugin development", "Admin UI", "Email integration"],
    link: "#",
    image: meat,
  },
  {
    id: 3,
    title: "Medical Equipment Website Deployment",
    description:
      "Hospital equipment supplier site migration to new hosting with SSL, backups and performance tuning.",
    features: ["Development", "Hosting setup", "Backups & SSL"],
    link: "https://techmedsmartsense.com/",
    image: tech,
  },
];

export default function App() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        minHeight: "100vh",
      }}
    >
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: "secondary.main" }}>NS</Avatar>
            <Box>
              <Typography variant="h6">Nagendra Sharma</Typography>
              <Typography variant="caption">
                WordPress Developer — Plugins & Theme Customization
              </Typography>
            </Box>
          </Box>

          <Box>
            <IconButton color="inherit" component="a" href="#contact">
              <Email />
            </IconButton>
            <IconButton color="inherit" component="a" href="#projects">
              <CloudUpload />
            </IconButton>
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/nagendrasha"
              target="_blank"
            >
              <GitHub />
            </IconButton>
            <IconButton
              color="inherit"
              component="a"
              href="https://www.linkedin.com/in/nagendra-sharma-0bb63b1b4/"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        <Container sx={{ py: 6 }}>
          {/* Hero */}
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h3" component="h1" gutterBottom>
                WordPress Developer — Plugins, Themes & Hosting
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                3+ years experience building and customizing WordPress sites:
                plugin development, theme customization, site migration, hosting
                configuration and performance tuning. I deliver production-ready
                sites with maintainable code and clear documentation.
              </Typography>

              <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                <Button variant="contained" href="#projects">
                  See Projects
                </Button>
                <Button variant="outlined" href="#contact">
                  Contact Me
                </Button>
                {/* <Button variant="text" href="/resume.pdf" target="_blank">Download Resume</Button> */}
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle1">Core skills:</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
                  {[
                    "PHP",
                    "WordPress",
                    "WooCommerce",
                    "Plugin Development",
                    "Theme Development",
                    "REST API",
                    "MySQL",
                    "cPanel & Hosting",
                    "Performance Optimization",
                  ].map((s) => (
                    <Chip key={s} label={s} variant="outlined" />
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <Avatar
                  alt="Profile"
                  src={dp}
                  sx={{ width: 160, height: 160, mx: "auto" }}
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Nagendra Sharma
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  WordPress Developer
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Button
                    href="mailto:nagendrasha191@gmail.com"
                    startIcon={<Email />}
                    variant="contained"
                  >
                    Hire Me
                  </Button>
                </Box>

                <Divider sx={{ my: 2 }} />

                <List dense>
                  <ListItem>
                    <ListItemText primary="Experience" secondary="3+ years" />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Availability"
                      secondary="Freelance / Contract"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Location"
                      secondary="New Delhi, India"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        {/* Projects */}
        <Container id="projects" sx={{ pb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Selected WordPress Projects
          </Typography>

          <Grid container spacing={3}>
            {projects.map((p) => (
              <Grid item xs={12} md={4} key={p.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={p.image}
                    alt={p.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{p.title}</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {p.description}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {p.features.map((f) => (
                        <Chip size="small" key={f} label={f} />
                      ))}
                    </Box>
                  </CardContent>

                  <CardActions>
                    <Button size="small" href={p.link} target="_blank">
                      View
                    </Button>
                    <Button size="small">Case Study</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Services & Process */}
        <Container sx={{ pb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Services I Offer
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6">Website Development</Typography>
                <Typography variant="body2" color="text.secondary">
                  Custom Website Development using WordPress, WooCommerce and
                  Elementor Page Builder. Html,Css,Javascript,Reactjs,Nextjs
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6">Plugin Development</Typography>
                <Typography variant="body2" color="text.secondary">
                  Custom plugins with admin panels, shortcodes and REST
                  endpoints.
                </Typography>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6">Theme Customization</Typography>
                <Typography variant="body2" color="text.secondary">
                  From child themes to full theme builds with page builders or
                  headless setups.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6">Hosting & Migration</Typography>
                <Typography variant="body2" color="text.secondary">
                  cPanel/Plesk setups, DNS, SSL, backups and site migrations
                  with minimal downtime.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">My Process</Typography>
            <Typography variant="body2" color="text.secondary">
              Requirements → Proposal → Development → Testing → Deployment →
              Support
            </Typography>
          </Box>
        </Container>

        {/* Testimonials (optional) */}
        <Container sx={{ pb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Testimonials
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 2 }}>
                <Typography variant="body1">
                  "Delivered the project on time and the site conversion
                  improved significantly."
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  — Aashish, Seonext
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 2 }}>
                <Typography variant="body1">
                  "Great communication and clean code. Highly recommended for
                  WordPress work."
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  — Gunwant, TechMed SmartSense
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Contact */}
        <Container id="contact" sx={{ pb: 10 }}>
          <Typography variant="h4" gutterBottom>
            Contact
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <form
                  action={`mailto:nagendrasha191@gmail.com`}
                  method="get"
                  encType="text/plain"
                >
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" type="submit">
                    Send
                  </Button>
                </form>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 2 }}>
                <Typography variant="h6">Quick Info</Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Email"
                      secondary={"nagendrasha191@gmail.com"}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Phone"
                      secondary={"(+91) 7303662771"}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Location"
                      secondary={"New Delhi, India"}
                    />
                  </ListItem>
                </List>

                <Box sx={{ mt: 2 }}>
                  <MuiLink
                    href="https://github.com/nagendrasha"
                    target="_blank"
                    underline="none"
                  >
                    GitHub
                  </MuiLink>
                  <Box component="span" sx={{ mx: 1 }}>
                    |
                  </Box>
                  <MuiLink
                    href="https://www.linkedin.com/in/nagendra-sharma-0bb63b1b4/"
                    target="_blank"
                    underline="none"
                  >
                    LinkedIn
                  </MuiLink>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      <Box
        component="footer"
        sx={{ py: 3, textAlign: "center", bgcolor: "background.paper" }}
      >
        <Container>
          <Typography variant="body2">
            © {new Date().getFullYear()} Nagendra Sharma — WordPress Developer
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
