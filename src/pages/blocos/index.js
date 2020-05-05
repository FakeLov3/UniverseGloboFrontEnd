import React from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import noticias from "./news.json";
import esportes from "./esporte.json";
import futebol from "./futebol.json";
import novelas from "./novelas.json";
import Sessao from "./styled";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: "#009DDB" },
  },
});
export default function Blocos() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              UniversoGlobo
            </Typography>
          </Toolbar>
        </AppBar>
        <Sessao sessao="Noticias" noticias={noticias} />
        <Sessao sessao="Esportes" noticias={esportes} />
        <Sessao sessao="Futebol" noticias={futebol} />
        <Sessao sessao="Novelas" noticias={novelas} />
      </div>
    </ThemeProvider>
  );
}
