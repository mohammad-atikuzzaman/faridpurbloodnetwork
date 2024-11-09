import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextComponent";
import { Navigate } from "react-router-dom";
import Loading from "../componetnts/Loading";

const UserProtected = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default UserProtected;
