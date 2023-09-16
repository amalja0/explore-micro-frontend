import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        pink: {
            main: "#FB2E86"
        },
        red: {
            main: "#FB2448"
        },
        blue: {
            main: "#151875",
            light: "#3F509E",
            dark: "#151875"
        },
        purple: {
            main: "#7E33E0",
            light: "#E0D3F5",
            dark: "#9F63B5"
        }
    },
    typography: {
        fontFamily: [
            'Lato',
            'Josefin Sans'
        ].join(',')
    }
});

theme = responsiveFontSizes(theme);

export default theme;