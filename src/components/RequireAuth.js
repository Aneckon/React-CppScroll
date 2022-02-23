import { Navigate } from 'react-router-dom';

export function RequireAuth({ children, auth }) {
  if (auth === true) {
    return children;
  }
  return <Navigate to="/" replace />;
}
