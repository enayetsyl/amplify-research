import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Register from "../pages/Register";
import TermsOfCondition from "../pages/TermsOfCondition";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ModeratorDashboard from "../pages/moderator/ModeratorDashboard";
import ObserverDashboard from "../pages/observer/ObserverDashboard";
import Error from "../pages/Error";
import MainLayout from "../components/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/terms',
        element: <TermsOfCondition/>
      },
      {
        path: '/admin-dashboard',
        element: <AdminDashboard/>
      },
      {
        path: '/moderator-dashboard',
        element: <ModeratorDashboard/>
      },
      {
        path: '/observer-dashboard',
        element: <ObserverDashboard/>
      },
    ]
  },

])

export default router