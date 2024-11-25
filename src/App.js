import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route, Outlet
} from "react-router-dom";
import { Children } from 'react';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import ContactUs from './Pages/ContactUs/Contact';
import AboutPage from './Pages/About/About';
import Home from './Pages/Home/Home';
import JoinUs from './Pages/JoinUs/JoinUs';

const Layout = () => {
  return (
    <div className="app" href="./">
      <Navbar/>
      <main className="flex-grow px-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/about",
        element: <AboutPage />
      },
      {
        path: "/join-us",
        element: < JoinUs />
      },
    ]
  }
])



function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    

  );
}

export default App;
