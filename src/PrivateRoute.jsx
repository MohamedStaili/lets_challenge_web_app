import { Navigate } from 'react-router-dom';
import AuthContext from './contextApi/authContext/AuthContext';
import { useContext } from 'react';

const PrivateRoute = ({element : Component}) => {
    const {user,loading} = useContext(AuthContext)
    if (loading) {
        return <div>Chargement...</div>; // Indicateur pendant la vérification
      }

    return user? <Component /> : <Navigate to='/login'/>


  
}
export default PrivateRoute