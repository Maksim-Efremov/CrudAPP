import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  /**
   * Флаг авторизации пользователя
   */
  isAuth: boolean;
  /**
   * Дочерние элементы, которые будут защищены
   */
  children: ReactNode;
}

export const ProtectedRoute = ({ isAuth, children }: ProtectedRouteProps) => {
  return isAuth ? children : <Navigate to="/" replace />;
};
