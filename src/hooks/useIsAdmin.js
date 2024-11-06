import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContextComponent";
import axios from "axios";

const useIsAdmin = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    axios(`${import.meta.env.VITE_BASE_URL}/admin/${user.email}`)
      .then((res) => {
        setAdmin(res?.data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [user]);

  return { admin, loading, error };
};

export default useIsAdmin;
