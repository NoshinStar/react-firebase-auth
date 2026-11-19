import {Navigate} from "reacct-router-dom";
import {useAuth} from ".AuthContext";

export default function Protectroute({children}){
    const{user}=useAuth();
    return user?children:<Navigate to="/login" replace/>;
}

