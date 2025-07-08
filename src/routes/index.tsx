import Tasks from "@/pages/Tasks";
import App from "./../App";
import { createBrowserRouter } from "react-router";
// import Users from "@/pages/Users";

const Router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component: App,
    children: [
      {
        // path: "",
        index: true,
        Component: Tasks,
      },
      {
        path: "tasks",
        Component: Tasks,
      },
      // {
      //   path: "users",
      //   Component: Users,
      // },
    ],
  },
]);

export default Router;
