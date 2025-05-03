import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookSotreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home/></Layout>,
    errorElement: <Error/>
  },{
    path: "/books",
    element: <Layout><div>도서 목록</div></Layout>
  },{
    path: "/signup",
    element: <Layout><Signup/></Layout>
  }
])

function App() {

  return (
    <BookSotreThemeProvider>
        <ThemeSwitcher/>
          <RouterProvider router={router}/>
    </BookSotreThemeProvider>
  );
}

export default App;
