import { useState } from "react";
import './LoginView.css';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { linkOptions, useNavigate } from "@tanstack/react-router";
import LoginSettingsFAB from "./LoginSettingsFAB";

const LoginView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginAttemped, setLoginAttemped] = useState(false);
    const [loginInCourse, setLoginInCourse] = useState(false);
    const [showLoginErrorMessage, setShowLoginErrorMessage] = useState(false);

    const loginLinkOptions = linkOptions({ to: '/car-insurance-dashboard' });
    const navigate = useNavigate();

    // Add login check function
    const handleLogin = () => {
        setLoginAttemped(true);
        if (!username || username === "" || !password || password === "") {
            return;
        }
        setLoginInCourse(true);
        setTimeout(() => {
            if (username === "admin" && password === "admin123") {
                //TODO: Usar App Store con el estado de autenticated
                // setAuthenticated(true);
                setLoginInCourse(false);
                navigate(loginLinkOptions);
                return;
            }
            //TODO: Usar App Store con el estado de autenticated
            // setAuthenticated(false);
            setLoginInCourse(false);
            setShowLoginErrorMessage(true);
        }, 1000);
    }

    return (
        <div className="login-view">
            <div className="login-form" >
                <div className="login-form-logo">
                    <img src="/coldview-negativo-RGB2.png" alt="coldview-logo" height={100} className="login-form-logo-img" />
                </div>
                <form>
                    {showLoginErrorMessage && (
                        <Message severity="error" text="Usuario o contraseña incorrectos" style={{ width: '100%', marginBottom: '1rem' }} />
                    )}
                    <label htmlFor="username" className="login-form-label" >Username</label>
                    <InputText id="username" type="text" placeholder="Ingrese su nombre de usuario"
                        className="login-form-input"
                        value={username} onChange={(e) => setUsername(e.target.value)}
                        invalid={loginAttemped && (!username || username === "")} aria-describedby="username-help" />
                    <label htmlFor="password" className="login-form-label" >Password</label>
                    <InputText id="password" type="password" placeholder="Ingrese su contraseña"
                        className="login-form-input"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        invalid={loginAttemped && (!password || password === "")}
                        aria-describedby="password-help" />

                    <Button label={loginInCourse ? "Iniciando sesion.." : "Iniciar sesion"} icon={loginInCourse ? "pi pi-spin pi-spinner" : "pi pi-user"}
                        className="login-form-button" onClick={handleLogin} disabled={loginInCourse} />
                </form>
            </div>
            <LoginSettingsFAB />
        </div>
    );
}

export default LoginView;