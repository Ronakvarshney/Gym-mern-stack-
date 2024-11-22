


 // Import your store
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Workouts from './pages/Workouts.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import Tutorials from './pages/Tutorials.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';
import MembershipPlans from './components/MembershipPlans.jsx';
import { store } from './store/reduxStore.js';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import ProfilePage from './pages/ProfilePage.jsx';

import PaymentPage from './components/PaymentPage.jsx';
import TrainingPrograms from './components/TraningPrograms.jsx';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'workouts', element: <Workouts /> },
  { path: 'ourplanes', element: <MembershipPlans /> },
  { path: 'contact', element: <Contact /> },
  { path: 'tutorial', element: <Tutorials /> },
  { path: '/home', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  {path : '/profile' , element:<ProfilePage/>},
  {path : '/payment' , element: <PaymentPage/>},
  {path : '/traning', element:<TrainingPrograms/>}
]);

createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  
);
