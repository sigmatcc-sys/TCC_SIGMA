import "./style.css";

import { Link } from "react-router-dom";
import { Shield, Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";

import AuthLayout from "../../components/AuthLayout/AuthLayout";
import AuthInput from "../../components/AuthInput/AuthInput";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

function ManagementLogin() {

    // Estados do formulário
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    // Será substituído pela chamada da API futuramente
    function handleLogin(event){

        event.preventDefault();

        console.log({

            email,

            password,

            remember

        });

    }

    return(

        <AuthLayout

            title="Painel Administrativo"

            subtitle="Entre com suas credenciais para acessar o sistema."

            icon={Shield}

        >

            <form onSubmit={handleLogin}>

                <AuthInput

                    label="Email"

                    type="email"

                    name="email"

                    icon={Mail}

                    placeholder="Digite seu e-mail"

                    value={email}

                    onChange={(event)=>setEmail(event.target.value)}

                    autoComplete="email"

                />

                <PasswordInput

                    value={password}

                    onChange={(event)=>setPassword(event.target.value)}

                />

                <div className="login-options">

                    <label className="remember">

                        <input

                            type="checkbox"

                            checked={remember}

                            onChange={()=>setRemember(!remember)}

                        />

                        Lembrar de mim

                    </label>

                    <Link

                        to="/forgot-password"

                        className="forgot-password"

                    >

                        Esqueci minha senha

                    </Link>

                </div>

                <Link
                    to="/manager-dashboard"
                    className="login-button"
                >
                    Entrar
                </Link>

            </form>

            <footer className="login-footer">

                <Link

                    to="/"

                    className="back-link"

                >

                    <ArrowLeft size={18} className="arrow" />

                    Voltar para a Landing

                </Link>

            </footer>

        </AuthLayout>

    );

}

export default ManagementLogin;