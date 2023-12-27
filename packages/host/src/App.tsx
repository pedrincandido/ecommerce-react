import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Routers from './routers';


const App = () => {
  return <RouterProvider router={createBrowserRouter(Routers())} />;
};

export default App;
