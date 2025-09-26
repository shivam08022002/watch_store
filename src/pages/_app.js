import { createTheme, ThemeProvider } from "@mui/material";
import { grey } from "@mui/material/colors";
import "../styles/home.css"
import Header from "../component/header";
import Footer from "../component/footer";
import store from "../store/store";
import { Provider } from "react-redux";
import ClientOnly from "../component/ClientOnly";
const theme = createTheme({
  palette: {
    mode: "light",
    white: {
      main: "#fbfbfb",
    },
    primary: {
      main: "#9b834d",
    },
    secondary: {
      main: grey[900],
    },
    grey: {
      main: grey[600],
    },
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true, // Disable default shadow
      },
      styleOverrides: {
        root: {
          border: `1px solid ${grey[300]}`, // Default border
          "&:hover": {
            backgroundColor: grey[50], // Lighter background on hover
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)", // Default card shadow
          transition: "box-shadow 0.3s ease-in-out", // Smooth transition for shadow
          "&:hover": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // More pronounced shadow on hover
          },
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ClientOnly>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </ClientOnly>
    </Provider>
  );
}
