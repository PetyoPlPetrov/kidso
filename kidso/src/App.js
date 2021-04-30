import { RoutesProvider } from "./hoc/RoutesProvider";
import Main from "./components/Main";

function App() {
  return (
    <RoutesProvider>
      <Main />
    </RoutesProvider>
  );
}

export default App;
