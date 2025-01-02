import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTE_DATA } from "./route.data";
import { ROUTE_CONST } from "./route.constants";
import { ROUTE_ELEMENTS } from "./route.elements";

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTE_DATA[ROUTE_CONST.main].path}
          element={<ROUTE_ELEMENTS.main />}
        />
      </Routes>
    </BrowserRouter>
  );
};
