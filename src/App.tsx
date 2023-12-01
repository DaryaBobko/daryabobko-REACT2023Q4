import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import NotFound from './pages/404/404';
import Main from './pages/Main/Main';
import UncontrolledComponents from './pages/UncontrolledComponents/UncontrolledComponents';
import ReactHookForm from './pages/ReactHookForm/ReactHookForm';
import { Provider } from 'react-redux';
import { store } from './rootState';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="*" element={<NotFound />} />
      <Route path="daryabobko-REACT2023Q4/" element={<Main />} />
      <Route
        path="daryabobko-REACT2023Q4/uncontrolled-components"
        element={<UncontrolledComponents />}
      />
      <Route
        path="daryabobko-REACT2023Q4/react-hook-form"
        element={<ReactHookForm />}
      />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
