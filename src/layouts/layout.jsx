import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Navigation />
    <Outlet />
  </div>
);

export default DashboardLayout;
