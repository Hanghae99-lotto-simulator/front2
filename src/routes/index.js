import { PERMISSION_ALL } from "../constants/permission";

import RouteComponent from "../components/common/RouteComponent";
import MainContainer from "../pages/Main/MainContainer";
import HistoryContainer from "pages/History/HistoryContainer";
import GameContainer from 'pages/Game/GameContainer';

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
  {
    path: "/game",
    component: (
      <RouteComponent
        permission={PERMISSION_ALL}
        title={"유저 게임 결과"}
        component={GameContainer}
      />
    ),
  },
];

export default defaultRoutes;
