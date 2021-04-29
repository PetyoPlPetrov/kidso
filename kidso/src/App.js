
import {RoutesProvider} from './hoc/withRoutes';
import Main from './components/Main';

function App() {
  return (
    <RoutesProvider>
          <Main/>
    </RoutesProvider>
  );
}

export default (App);
