import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/Landing';
import DashboardPage from '../pages/Dashboard';
import ChatPage from '../pages/Chat';
import AppLayout from '../layouts/layout';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
