import "./style.css";

import { useState } from "react";

import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

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
  Plus,
  Menu,
  X,
} from "lucide-react";

import LogoutModal from "../../components/LogoutModal";
import useTheme from "../../hooks/useTheme";


export default function CompanyAds() {

  // ==========================================
  // NAVEGAÇÃO
  // ==========================================

  const navigate = useNavigate();

  const location = useLocation();


  // ==========================================
  // TEMA
  // ==========================================

  const { theme, toggleTheme } = useTheme();

// ==========================================
  // MODAL DE LOGOUT
  // ==========================================

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  // ==========================================
  // SIDEBAR MOBILE
  // ==========================================

  const [sidebarOpen, setSidebarOpen] = useState(false);


  // ==========================================
  // DADOS DA EMPRESA
  // ==========================================

  const company = {

    name: "Usuário SIGMA",

    initials: "US",

  };


  // ==========================================
  // LISTA DE ANÚNCIOS
  //
  // Posteriormente esses dados virão
  // do banco de dados.
  // ==========================================

  const ads = [];


  // ==========================================
  // MENU
  // ==========================================

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


  
  // ==========================================
  // FUNÇÕES DE LOGOUT
  // ==========================================

  function handleLogout() {

    setShowLogoutModal(true);

  }


  function confirmLogout() {

    setShowLogoutModal(false);

    // Futuramente:
    // remover token
    // encerrar sessão
    // limpar dados do usuário

    navigate("/");

  }


  function cancelLogout() {

    setShowLogoutModal(false);

  }


  // ==========================================
  // NOVO ANÚNCIO
  // ==========================================

  function handleNewAd() {

    navigate("/company-ads/create");

  }


  return (

    <main className={`company-ads-page ${theme}`}>


      {/* ========================================
          OVERLAY MOBILE
      ======================================== */}

      {sidebarOpen && (

        <div
          className="ads-overlay"
          onClick={() => setSidebarOpen(false)}
        />

      )}


      {/* ========================================
          SIDEBAR
      ======================================== */}

      <aside
        className={`company-ads-sidebar ${
          sidebarOpen ? "open" : ""
        }`}
      >


        {/* ======================================
            LOGO
        ====================================== */}

        <div className="company-ads-logo">


          <div className="company-ads-logo-icon">

            <Building2 size={23} />

          </div>


          <div className="company-ads-logo-text">

            <strong>
              SIGMA
            </strong>

            <span>
              Empresa
            </span>

          </div>


          {/* BOTÃO FECHAR MOBILE */}

          <button
            type="button"
            className="ads-close-menu"
            onClick={() => setSidebarOpen(false)}
          >

            <X size={22} />

          </button>


        </div>


        {/* ======================================
            MENU
        ====================================== */}

        <nav className="company-ads-menu">


          {menuItems.map((item) => {

            const Icon = item.icon;


            // Verifica qual página está ativa
            const isActive =
              location.pathname === item.path;


            return (

              <Link
                key={item.label}
                to={item.path}
                className={`company-ads-menu-item ${
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
            LOGOUT
        ====================================== */}

        <div className="company-ads-sidebar-footer">


          <button
            type="button"
            className="company-ads-logout"
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
          CONTEÚDO
      ======================================== */}

      <section className="company-ads-content">


        {/* ======================================
            HEADER
        ====================================== */}

        <header className="company-ads-header">


          {/* MENU MOBILE */}

          <button
            type="button"
            className="ads-open-menu"
            onClick={() => setSidebarOpen(true)}
          >

            <Menu size={23} />

          </button>


          <div className="ads-header-spacer" />


          <div className="company-ads-header-actions">


            {/* ==================================
                TEMA
            ================================== */}

            <button
              type="button"
              className="ads-theme-toggle"
              onClick={toggleTheme}
              aria-label="Alternar tema"
            >

              {theme === "dark" ? (

                <Sun size={19} />

              ) : (

                <Moon size={19} />

              )}

            </button>


            {/* ==================================
                NOTIFICAÇÕES
            ================================== */}

            <button
              type="button"
              className="ads-notification-button"
              aria-label="Notificações"
            >

              <Bell size={20} />

              <span className="ads-notification-indicator" />

            </button>


            {/* ==================================
                PERFIL
            ================================== */}

            <Link
              to="/company-profile"
              className="company-ads-profile-header"
            >


              <div className="company-ads-profile-avatar">

                {company.initials}

              </div>


              <div className="company-ads-profile-info">

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
            ÁREA PRINCIPAL
        ====================================== */}

        <div className="company-ads-main">


          {/* ====================================
              TOPO DA PÁGINA
          ==================================== */}

          <div className="company-ads-page-header">


            {/* TÍTULO */}

            <div className="company-ads-title">


              <div className="company-ads-title-icon">

                <Megaphone size={21} />

              </div>


              <h1>
                Meus Anúncios
              </h1>


              <span>
                ({ads.length})
              </span>


            </div>


            {/* BOTÃO NOVO ANÚNCIO */}

            <button
              type="button"
              className="new-ad-button"
              onClick={handleNewAd}
            >

              <Plus size={18} />

              Novo anúncio

            </button>


          </div>


          {/* ====================================
              ESTADO VAZIO
          ==================================== */}

          {ads.length === 0 && (

            <section className="ads-empty-state">


              <div className="ads-empty-icon">

                <Megaphone size={43} />

              </div>


              <h2>
                Nenhum anúncio publicado ainda.
              </h2>


              <p>
                Crie seu primeiro anúncio e comece
                a divulgar sua empresa.
              </p>


              <button
                type="button"
                className="empty-state-button"
                onClick={handleNewAd}
              >

                <Plus size={18} />

                Criar primeiro anúncio

              </button>


            </section>

          )}


          {/* ====================================
              LISTA DE ANÚNCIOS
              
              Esta parte será usada futuramente
              quando os anúncios vierem do banco.
          ==================================== */}

          {ads.length > 0 && (

            <section className="ads-list">


              {ads.map((ad) => (

                <article
                  key={ad.id}
                  className="ad-card"
                >

                  <h2>
                    {ad.title}
                  </h2>

                </article>

              ))}


            </section>

          )}


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