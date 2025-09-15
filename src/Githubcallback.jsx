import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function GithubcallBack() {
    const navigate = useNavigate()
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            axios
                .get(`http://localhost:8000/api/v1/auth/github?code=${code}`)
                .then((res) => {
                    console.log("GitHub User:", res.data.user);
                    localStorage.setItem("token", res.data.token);
                    navigate("/");
                })
                .catch((err) => {
                    console.error("GitHub login error:", err);
                });
        }
    }, [navigate]);

    return <h2>Signing you in with GitHub...</h2>;
}

export default GithubcallBack;