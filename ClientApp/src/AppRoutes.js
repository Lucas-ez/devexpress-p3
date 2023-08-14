import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import User from "./pages/User";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/users',
    element: <User />
  }
];

export default AppRoutes;
