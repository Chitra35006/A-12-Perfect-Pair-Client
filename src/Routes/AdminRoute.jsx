import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  // Check if the user is authenticated and is an admin
  if (user && isAdmin) {
    return children;  // Show children if user is an admin
  }

  // Redirect if the user is not an admin or not logged in
  return <Navigate to="/login" replace />;
};

export default AdminRoute;
