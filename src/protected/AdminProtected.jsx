import useIsAdmin from "../hooks/useIsAdmin";

const isAdmin = true;

const AdminProtected = ({ children }) => {
  const {admin} = useIsAdmin()
  console.log(admin)
  
  if (!isAdmin) {
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
  return children;
};

export default AdminProtected;
