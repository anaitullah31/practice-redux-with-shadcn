import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            // path: "tasks",
            element: <Tasks />
        },
         {
            path: "tasks",
            element: <Tasks />
        },
        {
            path: "users",
            element: <User />
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        }
    ]
  },
]);

export default router;
