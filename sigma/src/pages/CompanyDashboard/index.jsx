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

export default function CompanyDashboard() {

  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);


  /* ==========================================
     DADOS TEMPORÁRIOS DA EMPRESA
  ========================================== */

  const company = {
    name: "Usuário SIGMA",
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
      path: "/company-dashboard",
    },

    {
      label: "Meus Anúncios",
      icon: Megaphone,
      path: "/company-ads",
    },

    {
      label: "Mensagens",
      icon: MessageCircle,
      path: "/company-messages",
    },

    {
      label: "Perfil",
      icon: User,
      path: "/company-profile",
    },

    {
      label: "Plano Empresarial",
      icon: Crown,
      path: "/company-plan",
    },

  ];


  return (

    <main className={`company-dashboard ${theme}`}>


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
        className={`company-sidebar ${
          sidebarOpen ? "open" : ""
        }`}
      >


        {/* LOGO */}

        <div className="company-logo">


          <div className="company-logo-icon">

            <Building2 size={23} />

          </div>


          <div className="company-logo-text">

            <strong>
              SIGMA
            </strong>

            <span>
              Empresa
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

        <nav className="company-menu">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const isActive =
              item.path === "/company-dashboard";


            return (

              <Link
                key={item.label}
                to={item.path}
                className={`company-menu-item ${
                  isActive ? "active" : ""
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

        <div className="company-sidebar-footer">

          <button
            type="button"
            className="company-logout"
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

      <section className="company-content">


        {/* ======================================
            HEADER
        ====================================== */}

        <header className="company-header">


          {/* BOTÃO MENU MOBILE */}

          <button
            type="button"
            className="open-menu"
            onClick={() => setSidebarOpen(true)}
          >

            <Menu size={23} />

          </button>


          <div className="header-spacer" />


          <div className="company-header-actions">


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
              to="/company-notifications"
              className="notification-button"
              aria-label="Notificações"
            >
              <Bell size={20} />

                <span className="notification-indicator" />
            </Link>


            {/* PERFIL */}

            <Link
              to="/company-profile"
              className="company-profile-header"
            >

              <div className="company-profile-avatar">

                US

              </div>


              <div className="company-profile-info">

                <strong>
                  {company.name}
                </strong>

                <span>
                  Empresa
                </span>

              </div>

            </Link>

          </div>

        </header>


        {/* ======================================
            CONTEÚDO DO DASHBOARD
        ====================================== */}

        <div className="company-dashboard-main">


          {/* ====================================
              TÍTULO
          ==================================== */}

          <section className="company-welcome">

            <h1>
              Olá, {company.name}!
            </h1>

            <p>
              Gerencie seus anúncios e acompanhe seu desempenho
            </p>

          </section>


          {/* ====================================
              ESTATÍSTICAS
          ==================================== */}

          <section className="company-stats">

            {stats.map((stat) => {

              const Icon = stat.icon;


              return (

                <div
                  className="company-stat-card"
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

          <section className="company-actions">


            {/* PUBLICAR ANÚNCIO */}

            <div className="company-action-card">


              <div className="action-icon ads">

                <Megaphone size={30} />

              </div>


              <h2>
                Publicar Anúncio
              </h2>


              <p>
                Divulgue sua empresa e atraia novos clientes
              </p>


              <Link
                to="/company-ads/create"
                className="primary-action-button"
              >

                <Send size={17} />

                Criar anúncio

              </Link>

            </div>


            {/* MENSAGENS */}

            <div className="company-action-card">


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
                to="/company-messages"
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