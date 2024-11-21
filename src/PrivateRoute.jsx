import { Navigate } from 'react-router-dom';
import AuthContext from './contextApi/authContext/AuthContext';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Chargement...</div>; // Indicateur pendant la vérification
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
