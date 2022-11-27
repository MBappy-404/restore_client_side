import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Auth";


const PrivateRoute = ({children}) => {

     const {user, loading} = useContext(AuthContext);
     const location = useLocation();

     if(loading){
         return <div className="flex justify-center content-center  "><progress className="progress w-72 mt-80"></progress></div>
     }
      
          if(user){
               return children;
          }

          return <Navigate to="/login" state={{from: location}} replace></Navigate>;
      
};

export default PrivateRoute;