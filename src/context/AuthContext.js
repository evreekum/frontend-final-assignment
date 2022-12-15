import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import LoadingSpinner from "../components/loading/LoadingSpinner";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory();
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchUserData(token);
        } else {
            setAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }, []);

    async function fetchUserData(token) {

        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                    roles: response.data.roles
                },
                status: "done"
            })
        } catch (e) {
            console.error(e);
            localStorage.clear();
        }
    }

    function login(data) {
        localStorage.setItem("token", data.accessToken);
        setAuth({
            ...auth,
            isAuth: true,
            user: {
                username: data.username,
                email: data.email,
                id: data.id,
                role: data.role
            },
            status: "done"
        });
        history.push("/calculator");
    }

    function logout() {
        localStorage.clear();
        setAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        history.push("/");
    }

    const authContextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout
    }
    return (
        <AuthContext.Provider value={authContextData}>
            {auth.status === "done" ? children : <LoadingSpinner/>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;