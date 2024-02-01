import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteSeller = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo.isSeller ? <Outlet /> : <Navigate to="/sllerLogin" replace />;
};

export default PrivateRouteSeller;
