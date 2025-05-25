import { useAuthStore } from '@/store/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const RootLayout = () => {

  const { token } = useAuthStore();
  const pathname = useLocation().pathname;
  
  if (!token && pathname !== "/login") {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}

export default RootLayout;
