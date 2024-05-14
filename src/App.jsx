import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CreateYourPlan from './pages/CreateYourPlan';
import Header from './components/Header.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<Home />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='create-your-plan' element={<CreateYourPlan />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
