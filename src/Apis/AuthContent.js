import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase"
export let AuthContextApi = createContext();

let AuthProvider = ({ children }) => {
    let [IsAuth, setIsAuth] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user.emailVerified === true) {
                setIsAuth(user);
            }
            else {
                setIsAuth(null)
            }
        });
    }, []);
    return (
        <AuthContextApi.Provider value={IsAuth}>
            {children}
        </AuthContextApi.Provider>
    )
};
export default AuthProvider;