import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory();
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            fetchUserData(token);
        } else {
            setIsAuth({
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
            console.log(response.data);

            setIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: "done"
            })

        } catch(e) {
            console.error(e);
            localStorage.clear();
        }
    }

    function login(data) {
        console.log(data);
        localStorage.setItem("token", data.accessToken);
        setIsAuth({
            ...isAuth,
            isAuth: true,
            user: {
                username: data.username,
                email: data.email,
                id: data.id,
            },
            status: "done"
        });
        console.log("Ingelogd!")
        history.push("/calculator");
    }

    function logout() {
        localStorage.clear();
        setIsAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        console.log("Uitgelogd!");
        history.push("/");
    }

    const authContextData = {
        isAuth: isAuth,
        user: isAuth.user,
        login: login,
        logout: logout
    }
    return (
        <AuthContext.Provider value={authContextData}>
            {isAuth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;