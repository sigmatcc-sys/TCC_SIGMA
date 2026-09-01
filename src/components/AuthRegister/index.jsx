import "./style.css";

import { Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  Building2,
  Briefcase,
  User,
} from "lucide-react";

import ThemeButton from "../ThemeButton/ThemeButton";
import useTheme from "../../hooks/useTheme";

export default function AuthRegister({ type }) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  let subtitle = "";
  let nameLabel = "";
  let Icon = User;
  let loginPath = "";
  let dashboardPath = "";

  switch (type) {
    case "company":
      subtitle = "Empresa";
      nameLabel = "Nome da empresa";
      Icon = Building2;
      loginPath = "/company-login";
      dashboardPath = "/company-dashboard";
      break;

    case "professional":
      subtitle = "Profissional";
      nameLabel = "Nome completo";
      Icon = Briefcase;
      loginPath = "/professional-login";
      dashboardPath = "/professional-dashboard";
      break;

    default:
      subtitle = "Usuário";
      nameLabel = "Nome completo";
      Icon = User;
      loginPath = "/user-login";
      dashboardPath = "/user-dashboard";
      break;
  }

  function handleSubmit(e) {
    e.preventDefault();

    /*
     * Neste momento o cadastro é apenas simulado.
     *
     * Futuramente:
     * 1. Os dados serão enviados para o backend.
     * 2. O backend salvará os dados no banco.
     * 3. Após o cadastro ser confirmado,
     *    o usuário será redirecionado.
     */

    console.log(`Cadastro de ${subtitle}`);

    navigate(dashboardPath);
  }

  return (
    <main className={`auth-register-page ${theme}`}>

      <ThemeButton />

      <div className="auth-register-card">

        {/* VOLTAR */}

        <Link to="/" className="back-button">

          <ArrowLeft size={18} />

          <span>
            Voltar
          </span>

        </Link>


        {/* CABEÇALHO */}

        <div className="auth-register-header">

          <div className="icon-box">

            <Icon size={34} />

          </div>

          <h1>
            Criar Conta
          </h1>

          <p>
            {subtitle}
          </p>

        </div>


        {/* FORMULÁRIO */}

        <form
          className="auth-register-form"
          onSubmit={handleSubmit}
        >

          {/* NOME */}

          <div className="input-group">

            <label htmlFor="name">
              {nameLabel}
            </label>

            <input
              id="name"
              type="text"
              placeholder={nameLabel}
              required
            />

          </div>


          {/* E-MAIL */}

          <div className="input-group">

            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />

          </div>


          {/* TELEFONE */}

          <div className="input-group">

            <label htmlFor="phone">
              Telefone
            </label>

            <input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              required
            />

          </div>


          {/* SENHA */}

          <div className="input-group">

            <label htmlFor="password">
              Senha
            </label>

            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              required
            />

          </div>


          {/* CONFIRMAR SENHA */}

          <div className="input-group">

            <label htmlFor="confirmPassword">
              Confirmar senha
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              required
            />

          </div>


          {/* BOTÃO */}

          <button
            type="submit"
            className="register-button"
          >
            Criar Conta
          </button>

        </form>


        {/* RODAPÉ */}

        <div className="auth-register-footer">

          <p>
            Já possui uma conta?
          </p>

          <Link to={loginPath}>
            Entrar
          </Link>

        </div>

      </div>

    </main>
  );
}