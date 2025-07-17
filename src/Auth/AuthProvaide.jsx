// src/auth/AuthProvider.jsx

import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser?.email };
        axios
          .post(`http://localhost:5000/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            setLoading(false);
            console.log(res.data);
          });
      } else {
        axios.post(`http://localhost:5000/logOut`, {}, {
          withCredentials: true,
        })
        .then(res => {
          setLoading(false);
            console.log("LogOut: " ,res.data);
        })
      }

      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    logOut,
    loading,
    logInUser,
    googleLogin,
    registerUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
