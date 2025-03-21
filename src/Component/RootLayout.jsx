import React from "react";

import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../store/store";

function RootLayout() {
  return (
    <>
      <Provider store={store}>
        <NavBarPanel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
}

export default RootLayout;
