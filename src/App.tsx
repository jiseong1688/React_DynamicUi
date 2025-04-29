import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookSotreThemeProvider } from "./context/themeContext";

function App() {

  return (
    <BookSotreThemeProvider>
        <ThemeSwitcher/>
        <Layout>
          <Home/>
        </Layout>
    </BookSotreThemeProvider>
  );
}

export default App;
