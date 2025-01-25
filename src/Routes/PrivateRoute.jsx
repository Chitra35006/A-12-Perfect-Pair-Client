import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  const [progress, setProgress] = useState(10);  // Start progress at 10%
  const [buffer, setBuffer] = useState(30);      // Set buffer at 30% initially

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress === 100) {
            return 100;
          }
          return Math.min(prevProgress + 10, 90); // Update progress to max 90%
        });
        setBuffer((prevBuffer) => {
          if (prevBuffer === 100) {
            return 100;
          }
          return Math.min(prevBuffer + 10, 95); // Buffer up to 95%
        });
      }, 800); // Simulate a loading bar increase every 800ms
    } else {
      clearInterval(interval); // Clear interval when loading is finished
    }
    return () => clearInterval(interval); // Clean up interval when component unmounts
  }, [loading]);

  if (loading) {
    // Show loading bar if still loading
    return (
      <div className="loading-container">
        <LinearProgress
          className="text-green-400"
          variant="buffer"
          value={progress}
          valueBuffer={buffer}
        />
      </div>
    );
  }

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Return children if authenticated
  return children;
};

export default PrivateRoute;
