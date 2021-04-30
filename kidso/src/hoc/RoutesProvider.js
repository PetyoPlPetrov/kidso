import React, { useEffect, useState } from "react";
import { fetchAppDetails, transformRoutes } from "../utils";
import { RoutesContext } from "./routesContext";

const useFetchRoutes = (transform) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetchAppDetails().then((data) => setRoutes(transform(data)));
  }, [transform]);

  return routes;
};

export const RoutesProvider = ({ children }) => {
  const routes = useFetchRoutes(transformRoutes);

  return (
    <RoutesContext.Provider value={routes}>{children}</RoutesContext.Provider>
  );
};
