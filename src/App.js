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
import Sandbox from './component/Sandbox/Sandbox';
import Cleaning from './Pages/Cleaning/Cleaning';
import SanitizationSolutionPage from './Pages/Sanitization/Sanitization';
import ContaminationSolutionPage from './Pages/Contamination/Contamination';
import FoodPlantSolutionPage from './Pages/Food/Food';
import EventSolutionPage from './Pages/Event/Event';
import EnvironmentalSolutionPage from './Pages/Environmental/Enviornmental';
import ComprehensiveSolutionPage from './Pages/Comprehensive/Comprehensive';
import SpecializedServicePage from './Pages/Specialized/Specialized';

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
      {
        path: '/cleaning',
        element: < Cleaning />
      },
      {
        path: '/sanitization',
        element: < SanitizationSolutionPage />
      },
      {
        path: '/contamination',
        element: <ContaminationSolutionPage />,
      },
      {
        path: '/food-plant',
        element: <FoodPlantSolutionPage />
      },
      {
        path:'/event',
        element: <EventSolutionPage />
      },
      {
        path: '/environmental',
        element: <EnvironmentalSolutionPage />
      },
      {
        path: '/comprehensive',
        element: < ComprehensiveSolutionPage />
      },
      {
        path: '/specialized',
        element: < SpecializedServicePage />
      }
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
