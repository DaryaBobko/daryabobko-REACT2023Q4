import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import ItemDetails from './pages/Item/ItemDetails';
import RootLayout from './components/RootLayout/RootLayout';
import NotFound from './pages/404/404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route path=":uid" element={<ItemDetails />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
