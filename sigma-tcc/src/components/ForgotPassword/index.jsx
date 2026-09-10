import "./style.css";

import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Briefcase,
  User,
  Mail,
} from "lucide-react";

import ThemeButton from "../ThemeButton/ThemeButton";
import useTheme from "../../hooks/useTheme";

export default function ForgotPassword({ type }) {
  const { theme } = useTheme();

  let subtitle = "";
  let Icon = User;
  let loginPath = "";

  switch (type) {
    case "company":
      subtitle = "Empresa";
      Icon = Building2;
      loginPath = "/company-login";
      break;

    case "professional":
      subtitle = "Profissional";
      Icon = Briefcase;
      loginPath = "/professional-login";
      break;

    default:
      subtitle = "Usuário";
      Icon = User;
      loginPath = "/user-login";
      break;
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Futuramente será feita a requisição ao backend
    console.log(`Solicitação de recuperação de senha - ${subtitle}`);
  }

  return (
    <main className={`forgot-password-page ${theme}`}>
      <ThemeButton />

      <div className="forgot-password-card">

        <Link to={loginPath} className="back-button">
          <ArrowLeft size={18} />
          <span>Voltar</span>
        </Link>

        <div className="forgot-password-header">

          <div className="icon-box">
            <Icon size={34} />
          </div>

          <h1>Recuperar Senha</h1>

          <p>{subtitle}</p>

          <span className="forgot-description">
            Informe o e-mail cadastrado para receber as instruções de recuperação de senha.
          </span>

        </div>

        <form
          className="forgot-password-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label htmlFor="email">
              E-mail
            </label>

            <div className="input-icon">

              <Mail size={18} />

              <input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
              />

            </div>

          </div>

          <button
            type="submit"
            className="forgot-button"
          >
            Enviar Código
          </button>

        </form>

        <div className="forgot-password-footer">

          <p>
            Lembrou sua senha?
          </p>

          <Link to={loginPath}>
            Voltar para o login
          </Link>

        </div>

      </div>
    </main>
  );
}