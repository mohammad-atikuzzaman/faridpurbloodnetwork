import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContextComponent";
import axios from "axios";

const useIsAdmin = () => {
  const [admin, setAdmin] = useState(null);
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    if (!user?.email) return;
    axios(`${import.meta.env.VITE_BASE_URL}/admin/${user.email}`)
      .then((res) => {
        setAdmin(res?.data);
      })
      .catch((err) => console.error(err))
  }, [user]);

  return { admin };
};

export default useIsAdmin;
