import "./style.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Eye,
  EyeOff,
  ArrowLeft,
  Building2,
  Briefcase,
  User,
} from "lucide-react";

import ThemeButton from "../ThemeButton/ThemeButton";
import useTheme from "../../hooks/useTheme";

export default function AuthLogin({ type }) {

  // Controla o tema da aplicação
  const { theme } = useTheme();

  // Permite realizar redirecionamentos
  const navigate = useNavigate();

  // Controla a visualização da senha
  const [showPassword, setShowPassword] = useState(false);


  // Informações específicas de cada perfil
  let subtitle = "";
  let Icon = User;
  let registerPath = "";
  let forgotPasswordPath = "";


  switch (type) {

    // ==========================================
    // EMPRESA
    // ==========================================

    case "company":

      subtitle = "Empresa";

      Icon = Building2;

      registerPath = "/company-register";

      forgotPasswordPath = "/company-forgot-password";

      break;


    // ==========================================
    // PROFISSIONAL
    // ==========================================

    case "professional":

      subtitle = "Profissional";

      Icon = Briefcase;

      registerPath = "/professional-register";

      forgotPasswordPath = "/professional-forgot-password";

      break;


    // ==========================================
    // USUÁRIO
    // ==========================================

    default:

      subtitle = "Usuário";

      Icon = User;

      registerPath = "/user-register";

      forgotPasswordPath = "/user-forgot-password";

      break;
  }


  // ==========================================
  // LOGIN
  // ==========================================

  function handleSubmit(e) {

    e.preventDefault();

    console.log(`Login de ${subtitle}`);


    /*
     * Por enquanto o login é apenas visual.
     *
     * Posteriormente aqui será feita a requisição
     * para a API e a validação do usuário no banco.
     */


    // Empresa
    if (type === "company") {

      navigate("/company-dashboard");

      return;
    }


    // Profissional
    if (type === "professional") {

      navigate("/professional-dashboard");

      return;
    }


    // Usuário
    if (type === "user") {

      navigate("/user-dashboard");

      return;
    }

  }


  return (

    <main className={`auth-login-page ${theme}`}>


      {/* ==========================================
          CARD DE LOGIN
      ========================================== */}

      <div className="auth-login-card">


        {/* ========================================
            VOLTAR
        ======================================== */}

        <Link
          to="/"
          className="back-button"
        >

          <ArrowLeft
            size={18}
            className="arrow"
          />

          <span>
            Voltar
          </span>

        </Link>


        {/* ========================================
            CABEÇALHO
        ======================================== */}

        <div className="auth-login-header">


          <div className="icon-box">

            <Icon size={34} />

          </div>


          <h1>
            Entrar
          </h1>


          <p>
            {subtitle}
          </p>


        </div>


        {/* ========================================
            FORMULÁRIO
        ======================================== */}

        <form
          className="auth-login-form"
          onSubmit={handleSubmit}
        >


          {/* ======================================
              E-MAIL
          ====================================== */}

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


          {/* ======================================
              SENHA
          ====================================== */}

          <div className="input-group">

            <label htmlFor="password">
              Senha
            </label>


            <div className="password-container">


              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Digite sua senha"
                required
              />


              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Ocultar senha"
                    : "Mostrar senha"
                }
              >

                {showPassword ? (

                  <EyeOff size={20} />

                ) : (

                  <Eye size={20} />

                )}

              </button>

            </div>

          </div>


          {/* ======================================
              BOTÃO ENTRAR
          ====================================== */}

          <button
            type="submit"
            className="login-button"
          >
            Entrar
          </button>


        </form>


        {/* ========================================
            RODAPÉ
        ======================================== */}

        <div className="auth-login-footer">


          <p>
            Não possui uma conta?
          </p>


          <Link to={registerPath}>
            Cadastre-se
          </Link>

          <p></p>

          <Link
            to={forgotPasswordPath}
            className="forgot-password"
          >
            
            Esqueceu sua senha?
          </Link>


        </div>


      </div>


      {/* ==========================================
          TEMA
      ========================================== */}

      <ThemeButton />

    </main>

  );
}