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
  Menu,
  X,
  CheckCheck,
  Star,
  Eye,
  CircleAlert,
  Clock,
} from "lucide-react";

import LogoutModal from "../../components/LogoutModal";
import useTheme from "../../hooks/useTheme";

export default function CompanyNotifications() {

  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);


  /* ==========================================
     DADOS TEMPORÁRIOS
  ========================================== */

  const company = {
    name: "Usuário SIGMA",
  };


  const [notifications, setNotifications] = useState([

    {
      id: 1,
      title: "Você recebeu uma nova mensagem",
      description:
        "Um usuário entrou em contato com sua empresa.",
      time: "Agora",
      icon: MessageCircle,
      type: "message",
      read: false,
      
    },

    {
      id: 2,
      title: "Novo anúncio publicado",
      description:
        "Seu anúncio foi publicado e já está visível para os usuários.",
      time: "10 min",
      icon: Megaphone,
      type: "ad",
      read: false,
    },

    {
      id: 3,
      title: "Nova avaliação recebida",
      description:
        "Um usuário avaliou sua empresa.",
      time: "2 horas",
      icon: Star,
      type: "rating",
      read: false,
    },

    {
      id: 4,
      title: "Seu anúncio recebeu novas visualizações",
      description:
        "Seu anúncio teve um aumento no número de visualizações.",
      time: "Ontem",
      icon: Eye,
      type: "views",
      read: true,
    },

    {
      id: 5,
      title: "Atualização do sistema",
      description:
        "Uma nova atualização está disponível para sua conta.",
      time: "2 dias",
      icon: CircleAlert,
      type: "system",
      read: true,
    },

  ]);


  /* ==========================================
     LOGOUT
  ========================================== */

  const handleLogout = () => {

    setShowLogoutModal(true);

  };


  const confirmLogout = () => {

    setShowLogoutModal(false);

    navigate("/");

  };


  const cancelLogout = () => {

    setShowLogoutModal(false);

  };


  /* ==========================================
     MARCAR NOTIFICAÇÃO COMO LIDA
  ========================================== */

  const handleNotificationClick = (id) => {

    setNotifications((currentNotifications) =>

      currentNotifications.map((notification) => {

        if (notification.id === id) {

          return {
            ...notification,
            read: true,
          };

        }

        return notification;

      })

    );

  };


  /* ==========================================
     MARCAR TODAS COMO LIDAS
  ========================================== */

  const markAllAsRead = () => {

    setNotifications((currentNotifications) =>

      currentNotifications.map((notification) => ({

        ...notification,
        read: true,

      }))

    );

  };


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


  /* ==========================================
     QUANTIDADE DE NÃO LIDAS
  ========================================== */

  const unreadNotifications =
    notifications.filter(
      (notification) => !notification.read
    ).length;


  return (

    <main
      className={`company-notifications-page ${theme}`}
    >


      {/* ======================================
          OVERLAY MOBILE
      ====================================== */}

      {sidebarOpen && (

        <div
          className="dashboard-overlay"
          onClick={() => setSidebarOpen(false)}
        />

      )}


      {/* ======================================
          SIDEBAR
      ====================================== */}

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


          {/* FECHAR MENU */}

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


            return (

              <Link
                key={item.label}
                to={item.path}
                className="company-menu-item"
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


        {/* LOGOUT */}

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


      {/* ======================================
          CONTEÚDO
      ====================================== */}

      <section className="company-content">


        {/* HEADER */}

        <header className="company-header">


          <button
            type="button"
            className="open-menu"
            onClick={() => setSidebarOpen(true)}
          >

            <Menu size={23} />

          </button>


          <div className="header-spacer" />


          <div className="company-header-actions">


            {/* TEMA */}

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
              className="notification-button active-notification"
              aria-label="Notificações"
            >

              <Bell size={20} />

              {unreadNotifications > 0 && (

                <span className="notification-indicator" />

              )}

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
            NOTIFICAÇÕES
        ====================================== */}

        <div className="company-notifications-main">


          {/* CABEÇALHO */}

          <section className="notifications-header">

            <div>

              <h1>
                Notificações
              </h1>

              <p>
                Acompanhe as novidades da sua empresa
              </p>

            </div>


            <button
              type="button"
              className="mark-all-read-button"
              onClick={markAllAsRead}
              disabled={unreadNotifications === 0}
            >

              <CheckCheck size={18} />

              Marcar todas como lidas

            </button>

          </section>


          {/* RESUMO */}

          <div className="notifications-summary">

            <div className="notifications-summary-icon">

              <Bell size={21} />

            </div>


            <div>

              <strong>
                {unreadNotifications}
              </strong>

              <span>
                {unreadNotifications === 1
                  ? " notificação não lida"
                  : " notificações não lidas"}
              </span>

            </div>

          </div>


          {/* LISTA */}

          <section className="notifications-list">

            {notifications.map((notification) => {

              const Icon = notification.icon;


              return (

                <button
                  type="button"
                  key={notification.id}
                  className={`notification-item ${
                    notification.read ? "read" : "unread"
                  }`}
                  onClick={() =>
                    handleNotificationClick(
                      notification.id
                    )
                  }
                >


                  {/* ÍCONE */}

                  <div
                    className={`notification-icon ${
                      notification.type
                    }`}
                  >

                    <Icon size={20} />

                  </div>


                  {/* TEXTO */}

                  <div className="notification-content">

                    <div className="notification-title-row">

                      <strong>
                        {notification.title}
                      </strong>


                      {!notification.read && (

                        <span className="unread-dot" />

                      )}

                    </div>


                    <p>
                      {notification.description}
                    </p>


                    <span className="notification-time">

                      <Clock size={14} />

                      {notification.time}

                    </span>

                  </div>

                </button>

              );

            })}

          </section>

        </div>

      </section>


      {/* ======================================
          MODAL LOGOUT
      ====================================== */}

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />


    </main>

  );

}