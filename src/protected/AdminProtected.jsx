import { useContext } from "react";
import Loading from "../componetnts/Loading";
import useIsAdmin from "../hooks/useIsAdmin";
import { AuthContext } from "../contexts/AuthContextComponent";
import { Navigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const { admin, error, loading: adminLoading } = useIsAdmin();
  const { user, loading } = useContext(AuthContext);

  // if (!user) {
  //   return (
  //     <Navigate to="/login"/>
  //   );
  // }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        {error}
      </div>
    );
  }

  if (loading || adminLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (admin !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div className="space-y-6 text-yellow-600">
          <p className="text-2xl font-semibold">দুঃক্ষিত..!</p>
          <h2 className="text-lg ">শুধু এডমিন গন এই পেজ দেখতে পারবে</h2>
          <a href="/" className="btn bg-yellow-600 font-bold text-white">
            Back To Home
          </a>
        </div>
      </div>
    );
  }
  
  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default AdminProtected;
