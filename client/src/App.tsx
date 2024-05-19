import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import PageLayout from "./pages/layout-page/LayoutPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import MainDashBoardPage from "./pages/dashboard-page/MainDashBoardPage";
import CourseDetailsPage from "./pages/courseDetails page/CourseDetailsPage";
// import Logo from "./pages/landing-page/Logo";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <LandingPage />
      </PageLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PageLayout>
        <MainDashBoardPage />
      </PageLayout>
    ),
  },
  {
    path: "/coursedetails",
    element: (
      <PageLayout>
        <CourseDetailsPage />
      </PageLayout>
    ),
  },
  // {
  //   path: "/logo",
  //   element: <Logo />,
  // },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
