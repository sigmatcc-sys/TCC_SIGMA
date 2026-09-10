import "./style.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  User,
  Crown,
  LogOut,
  BriefcaseBusiness,
  Building2,
  Sun,
  Moon,
  Bell,
  Eye,
  Star,
  Send,
  Menu,
  X,
} from "lucide-react";

import LogoutModal from "../../components/LogoutModal";
import useTheme from "../../hooks/useTheme";

export default function ProfessionalDashboard() {

  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);


  /* ==========================================
     DADOS TEMPORÁRIOS DA EMPRESA
  ========================================== */

  const professional = {
    name: "Profissional SIGMA",
  };


  /* ==========================================
     FUNÇÕES DE LOGOUT
  ========================================== */

  // Abre o modal de confirmação
  const handleLogout = () => {

    setShowLogoutModal(true);

  };


  // Confirma o logout
  const confirmLogout = () => {

    setShowLogoutModal(false);

    // Futuramente:
    // remover token
    // encerrar sessão
    // limpar dados do usuário

    navigate("/");

  };


  // Cancela o logout
  const cancelLogout = () => {

    setShowLogoutModal(false);

  };


  /* ==========================================
     ESTATÍSTICAS
  ========================================== */

  const stats = [

    {
      id: 1,
      icon: Eye,
      value: "3.421",
      label: "Visualizações",
      className: "views",
    },

    {
      id: 2,
      icon: Star,
      value: "4.6",
      label: "Avaliação média",
      className: "rating",
    },

    {
      id: 3,
      icon: MessageCircle,
      value: "27",
      label: "Mensagens",
      className: "messages",
    },

    {
      id: 4,
      icon: Megaphone,
      value: "3",
      label: "Anúncios ativos",
      className: "ads",
    },

  ];


  /* ==========================================
     MENU
  ========================================== */

  const menuItems = [

    {
      label: "Painel",
      icon: LayoutDashboard,
      path: "/professional-dashboard",
    },

    {
      label: "Meus Anúncios",
      icon: Megaphone,
      path: "/professional-ads",
    },

    {
      label: "Empresas",
      icon: Building2,
      path: "/professional-companies",
    },

    {
      label: "Mensagens",
      icon: MessageCircle,
      path: "/professional-messages",
    },

    {
      label: "Perfil",
      icon: User,
      path: "/professional-profile",
    },

    {
      label: "Plano Profissional",
      icon: Crown,
      path: "/professional-plan",
    },

  ];


  return (

    <main className={`professional-dashboard ${theme}`}>


      {/* ========================================
          OVERLAY MOBILE
      ======================================== */}

      {sidebarOpen && (

        <div
          className="dashboard-overlay"
          onClick={() => setSidebarOpen(false)}
        />

      )}


      {/* ========================================
          SIDEBAR
      ======================================== */}

      <aside
        className={`professional-sidebar ${sidebarOpen ? "open" : ""
          }`}
      >


        {/* LOGO */}

        <div className="professional-logo">


          <div className="professional-logo-icon">

            <BriefcaseBusiness size={23} />

          </div>


          <div className="professional-logo-text">

            <strong>
              SIGMA
            </strong>

            <span>
              Profissional
            </span>

          </div>


          {/* FECHAR MENU MOBILE */}

          <button
            type="button"
            className="close-menu"
            onClick={() => setSidebarOpen(false)}
          >

            <X size={22} />

          </button>

        </div>


        {/* MENU */}

        <nav className="professional-menu">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const isActive =
              item.path === "/professional-dashboard";


            return (

              <Link
                key={item.label}
                to={item.path}
                className={`professional-menu-item ${isActive ? "active" : ""
                  }`}
                onClick={() => setSidebarOpen(false)}
              >

                <Icon size={19} />

                <span>
                  {item.label}
                </span>

              </Link>

            );

          })}

        </nav>


        {/* ======================================
            BOTÃO DE LOGOUT
        ====================================== */}

        <div className="professional-sidebar-footer">

          <button
            type="button"
            className="professional-logout"
            onClick={handleLogout}
          >

            <LogOut size={19} />

            <span>
              Sair
            </span>

          </button>

        </div>

      </aside>


      {/* ========================================
          ÁREA PRINCIPAL
      ======================================== */}

      <section className="professional-content">


        {/* ======================================
            HEADER
        ====================================== */}

        <header className="professional-header">


          {/* BOTÃO MENU MOBILE */}

          <button
            type="button"
            className="open-menu"
            onClick={() => setSidebarOpen(true)}
          >

            <Menu size={23} />

          </button>


          <div className="header-spacer" />


          <div className="professional-header-actions">


            {/* ALTERNAR TEMA */}

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Alternar tema"
            >

              {theme === "dark" ? (

                <Sun size={19} />

              ) : (

                <Moon size={19} />

              )}

            </button>


            {/* NOTIFICAÇÕES */}

            <Link
              to="/professional-notifications"
              className="notification-button"
              aria-label="Notificações"
            >
              <Bell size={20} />

              <span className="notification-indicator" />
            </Link>


            {/* PERFIL */}

            <Link
              to="/professional-profile"
              className="professional-profile-header"
            >

              <div className="professional-profile-avatar">

                US

              </div>


              <div className="professional-profile-info">

                <strong>
                  {professional.name}
                </strong>

                <span>
                  Profissional
                </span>

              </div>

            </Link>

          </div>

        </header>


        {/* ======================================
            CONTEÚDO DO DASHBOARD
        ====================================== */}

        <div className="professional-dashboard-main">


          {/* ====================================
              TÍTULO
          ==================================== */}

          <section className="professional-welcome">

            <h1>
              Olá, {professional.name}!
            </h1>

            <p>
              Gerencie seus anúncios e acompanhe seu desempenho
            </p>

          </section>


          {/* ====================================
              ESTATÍSTICAS
          ==================================== */}

          <section className="professional-stats">

            {stats.map((stat) => {

              const Icon = stat.icon;


              return (

                <div
                  className="professional-stat-card"
                  key={stat.id}
                >


                  <div
                    className={`stat-icon ${stat.className}`}
                  >

                    <Icon size={21} />

                  </div>


                  <div className="stat-content">

                    <strong>
                      {stat.value}
                    </strong>

                    <span>
                      {stat.label}
                    </span>

                  </div>

                </div>

              );

            })}

          </section>


          {/* ====================================
              AÇÕES PRINCIPAIS
          ==================================== */}

          <section className="professional-actions">


            {/* PUBLICAR ANÚNCIO */}

            <div className="professional-action-card">


              <div className="action-icon ads">

                <Megaphone size={30} />

              </div>


              <h2>
                Publicar Anúncio
              </h2>


              <p>
                Divulgue seu serviço e atraia novos clientes
              </p>


              <Link
                to="/professional-ads/create"
                className="primary-action-button"
              >

                <Send size={17} />

                Criar anúncio

              </Link>

            </div>


            {/* MENSAGENS */}

            <div className="professional-action-card">


              <div className="action-icon messages">

                <MessageCircle size={30} />

              </div>


              <h2>
                Mensagens
              </h2>


              <p>
                Responda seus clientes e tire dúvidas
              </p>


              <Link
                to="/professional-messages"
                className="secondary-action-button"
              >

                <MessageCircle size={17} />

                Ver mensagens

              </Link>

            </div>

          </section>

        </div>

      </section>


      {/* ========================================
          MODAL DE LOGOUT
      ======================================== */}

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />


    </main>

  );

}