import { useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app} from "../../services/firebase" // Path to your Firebase config file



import { set_User , set_Loading , isLoged } from "./Reducer";
import AuthContext from "./AuthContext";


const initialState ={
    user :null,
    isloged: false,
    loading : true
}


const AuthState = (props) =>{

    const [state ,dispatch] = useReducer(Reducer , initialState )
    

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            
            dispatch({ type: set_User, payload: currentUser });
            dispatch({ type: isLoged });
          } else {
            dispatch({ type: set_User, payload: null });
          }
          dispatch({ type: set_Loading, payload: false });
        });
        return unsubscribe; 
      }, []);


      return <AuthContext.Provider
    value={{
        user :state.user,
        isLoged : state.isloged,
        loading : state.loading
            
    }}>
        {props.children}

    </AuthContext.Provider>
}
export default AuthState ;

    