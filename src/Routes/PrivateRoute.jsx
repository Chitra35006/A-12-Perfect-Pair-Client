

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { LinearProgress } from "@mui/material";


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <LinearProgress className="text-green-400" variant="buffer" value={progress} valueBuffer={buffer} />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;