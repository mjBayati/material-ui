import { createTheme} from "@mui/material/styles";
import theme from "./defaultTheme";


const selectedItemTheme = createTheme(theme, {
    palette: {
        type: "selected",
        primary:{
            main: "#FFFFFF"
        },
        background: {
            default: "#2D31A6",
        },
        badgeText: {
            dark: "#1A1E79",
            main: "#2D31A6",
            light: "#EAEAFC",
            contrastText: "#F4F7FF",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#FFFFFFCC",
        },
        border: {
            main: "#FFFFFF"
        },
        grey: {
            300: "#FFFFFF80",
            400: "#FFFFFF80"
        }
    }
})

export default selectedItemTheme;