import { RoutesContext } from "../hoc/routesContext";
import { BrowserRouter as Router } from "react-router-dom";

const mockRoutes = [
  {
    content: "<div>content</div>",
    metaDescription: "Често задавани въпроси за Kidso.bg",
    metaTitle: "Често задавани въпроси",
    title: "Често задавани въпроси",
    url: "/content/chesto-zadavani-vaprosi.html",
  },
];

export const mockWrap = (Component, props) => {
  return (
    <Router>
      <RoutesContext.Provider value={mockRoutes}>
        <Component {...props} />
      </RoutesContext.Provider>
    </Router>
  );
};
