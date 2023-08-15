import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import Localization from "./pages/Localization";
import UseRef from "./pages/UseRef";
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
  },
  {
    path: '/localization',
    element: <Localization />
  },
  {
    path: '/useref',
    element: <UseRef />
  }
];

export default AppRoutes;
