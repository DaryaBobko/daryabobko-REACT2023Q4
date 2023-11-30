import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
// import RootLayout from './components/RootLayout/RootLayout';
import NotFound from './pages/404/404';
import Main from './pages/Main/Main';
import UncontrolledComponents from './pages/UncontrolledComponents/UncontrolledComponents';
import ReactHookForm from './pages/ReactHookForm/ReactHookForm';

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

      {/* <Route path="/" element={<RootLayout />}>
        <Route
          path="react-hook-form"
          element={<UncontrolledComponents />}
        ></Route>
      </Route> */}
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
