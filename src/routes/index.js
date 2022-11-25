import { PERMISSION_ALL } from "../constants/permission";

import RouteComponent from "../components/common/RouteComponent";
import MainContainer from "../pages/Main/MainContainer";
import HistoryContainer from "pages/History/HistoryContainer";

const defaultRoutes = [
  {
    path: "/",
    component: (
      <RouteComponent
        permission={PERMISSION_ALL}
        title={"메인페이지"}
        component={MainContainer}
      />
    ),
  },
  {
    path: "/history",
    component: (
      <RouteComponent
        permission={PERMISSION_ALL}
        title={"과거이력"}
        component={HistoryContainer}
      />
    ),
  },
];

export default defaultRoutes;
