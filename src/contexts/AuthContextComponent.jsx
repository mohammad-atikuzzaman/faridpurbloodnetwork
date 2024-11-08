import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthContextComponent = ({ children }) => {
  const [userinfo, setUserInfo] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const [refetch, setRefetch]= useState(false)

  const registerWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, [user]);
  const context = {
    registerWithEmailPass,
    logInWithEmailPass,
    updateUserProfile,
    logOut,
    user,
    setUser,
    loading,
    setLoading,
    setUserInfo,
    userinfo,
    setRefetch,
    refetch,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextComponent;
