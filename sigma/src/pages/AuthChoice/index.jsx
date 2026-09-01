import "./style.css";

import { Link, useLocation } from "react-router-dom";
import { LogIn, UserPlus, ArrowLeft } from "lucide-react";

import ThemeButton from "../../components/ThemeButton/ThemeButton";
import useTheme from "../../hooks/useTheme";


export default function AuthChoice() {
  const { theme } = useTheme();
  const { pathname } = useLocation();

  let title = "";
  let description = "";
  let loginPath = "";
  let registerPath = "";
  

  if (pathname === "/auth/company") {
    title = "Área da Empresa";
    description =
      "Gerencie sua empresa, serviços, clientes e acompanhe suas avaliações.";
    loginPath = "/company-login";
    registerPath = "/company-register";
  } else if (pathname === "/auth/professional") {
    title = "Área do Profissional";
    description =
      "Acesse sua conta para gerenciar seu perfil, agenda e serviços.";
    loginPath = "/professional-login";
    registerPath = "/professional-register";
  } else {
    title = "Área do Usuário";
    description =
      "Encontre empresas, profissionais e acompanhe seus agendamentos.";
    loginPath = "/user-login";
    registerPath = "/user-register";
  }

  return (
    <main className={`auth-choice-page ${theme}`}>
      <ThemeButton />

      <div className="auth-choice-container">

        <div className="auth-choice-logo">
          <h1>SIGMA</h1>
        </div>

        <div className="auth-choice-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="auth-choice-actions">

          <Link to={loginPath} className="choice-card">
            <LogIn size={32} />
            <div>
              <h3>Entrar</h3>
              <span>Acesse sua conta</span>
            </div>
          </Link>

          <Link to={registerPath} className="choice-card">
            <UserPlus size={32} />
            <div>
              <h3>Criar conta</h3>
              <span>Cadastre-se gratuitamente</span>
            </div>
          </Link>

        </div>

        <Link to="/" className="back-link">
          <ArrowLeft size={18} className="arrow"/>
          Voltar para a página inicial
        </Link>

      </div>
    </main>
  );
}