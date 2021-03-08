import { useState } from "react";
import styles from "./Header.module.scss";
import Menu from "../Menu";
import Link from "next/link";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Switch, FormControlLabel } from "@material-ui/core";

const themeObject = {
  palette: {
    type: "light"
  },
  themeName: "Blue Lagoon 2020",
  typography: {
    fontFamily: "Bitter"
  }
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const {
    palette: { type }
  } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light"
      }
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

const Header = () => {
  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createMuiTheme(theme);
  console.log(themeConfig);

  return (
    <MuiThemeProvider theme={themeConfig}>
      <header className={styles.header}>
        <Link href="/movies">
          <img className={styles.img_logo} src="/logo.svg" />
        </Link>
        <FormControlLabel
        style={{position:"absolute", right:"150px"}}
          control={
            <Switch onClick={toggleDarkMode} label={`Toggle Dark Mode`} />
          }
        />
        <Menu />
      </header>
    </MuiThemeProvider>
  );
};

export default Header;
