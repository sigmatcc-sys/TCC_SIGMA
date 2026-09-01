import "./style.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Building2,
  BriefcaseBusiness,
  Users,
  LogOut,
  Sun,
  Moon,
  Bell,
  TrendingUp,
  Menu,
  X,
  Shield,
} from "lucide-react";

import LogoutModal from "../../components/LogoutModal";
import useTheme from "../../hooks/useTheme";

export default function ManagerDashboard() {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  // ==========================================
  // MODAL DE LOGOUT
  // ==========================================

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  /*
   * Dados temporários.
   *
   * Posteriormente serão substituídos
   * pelos dados vindos do banco de dados.
   */

  const stats = [
    {
      id: 1,
      title: "Empresas cadastradas",
      value: "12",
      icon: Building2,
      className: "companies",
    },

    {
      id: 2,
      title: "Profissionais cadastrados",
      value: "38",
      icon: BriefcaseBusiness,
      className: "professionals",
    },

    {
      id: 3,
      title: "Usuários comuns",
      value: "215",
      icon: Users,
      className: "users",
    },

    {
      id: 4,
      title: "Total de acessos (mês)",
      value: "1.847",
      icon: TrendingUp,
      className: "accesses",
    },
  ];

  const chartData = [
    {
      label: "Empresas",
      value: 12,
      className: "companies",
    },

    {
      label: "Profissionais",
      value: 38,
      className: "professionals",
    },

    {
      label: "Usuários",
      value: 215,
      className: "users",
    },
  ];

  const maxChartValue = 220;

  const menuItems = [
    {
      label: "Visão Geral",
      icon: LayoutDashboard,
      path: "/manager-dashboard",
    },

    {
      label: "Empresas",
      icon: Building2,
      path: "/manager-companies",
    },

    {
      label: "Profissionais",
      icon: BriefcaseBusiness,
      path: "/manager-professionals",
    },

    {
      label: "Usuários",
      icon: Users,
      path: "/manager-users",
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


  return (
    <main className={`manager-dashboard ${theme}`}>

      {/* ========================================
          OVERLAY MOBILE
      ======================================== */}

      {sidebarOpen && (
        <div
          className="manager-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      {/* ========================================
          SIDEBAR
      ======================================== */}

      <aside
        className={`manager-sidebar ${
          sidebarOpen ? "open" : ""
        }`}
      >

        {/* LOGO */}

        <div className="manager-logo">

          <div className="manager-logo-icon">
            <Shield size={20} />
          </div>

          <div className="manager-logo-text">

            <strong>
              SIGMA
            </strong>

            <span>
              Gestão
            </span>

          </div>


          {/* FECHAR MOBILE */}

          <button
            type="button"
            className="manager-close-menu"
            onClick={() => setSidebarOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={21} />
          </button>

        </div>


        {/* MENU */}

        <nav className="manager-menu">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const isActive =
              item.path === "/manager-dashboard";

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`manager-menu-item ${
                  isActive ? "active" : ""
                }`}
                onClick={() => setSidebarOpen(false)}
              >

                <Icon size={18} />

                <span>
                  {item.label}
                </span>

              </Link>
            );

          })}

        </nav>


        {/* SAIR */}

        <div className="manager-sidebar-footer">

          <button
            type="button"
            className="manager-logout"
            onClick={handleLogout}
          >

            <LogOut size={18} />

            <span>
              Sair
            </span>

          </button>

        </div>

      </aside>


      {/* ========================================
          CONTEÚDO
      ======================================== */}

      <section className="manager-content">


        {/* ======================================
            HEADER
        ====================================== */}

        <header className="manager-header">

          {/* MENU MOBILE */}

          <button
            type="button"
            className="manager-open-menu"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>


          <div className="manager-header-spacer" />


          <div className="manager-header-actions">

            {/* TEMA */}

            <button
              type="button"
              className="manager-theme-toggle"
              onClick={toggleTheme}
              aria-label="Alternar tema"
              title="Alternar tema"
            >

              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}

            </button>


            {/* NOTIFICAÇÕES */}

            <button
              type="button"
              className="manager-notification-button"
              aria-label="Notificações"
            >

              <Bell size={19} />

              <span className="manager-notification-indicator" />

            </button>


            {/* ADMINISTRADOR */}

            <div className="manager-profile">

              <div className="manager-profile-avatar">
                A
              </div>

              <div className="manager-profile-info">

                <strong>
                  Administrador
                </strong>

                <span>
                  Gestão
                </span>

              </div>

            </div>

          </div>

        </header>


        {/* ======================================
            CONTEÚDO PRINCIPAL
        ====================================== */}

        <div className="manager-main">


          {/* TÍTULO */}

          <section className="manager-welcome">

            <h1>
              Painel de Gestão
            </h1>

            <p>
              Visão geral da plataforma SIGMA
            </p>

          </section>


          {/* ====================================
              ESTATÍSTICAS
          ==================================== */}

          <section className="manager-stats">

            {stats.map((stat) => {

              const Icon = stat.icon;

              return (
                <div
                  className="manager-stat-card"
                  key={stat.id}
                >

                  <div
                    className={`manager-stat-icon ${stat.className}`}
                  >

                    <Icon size={20} />

                  </div>


                  <div className="manager-stat-content">

                    <strong>
                      {stat.value}
                    </strong>

                    <span>
                      {stat.title}
                    </span>

                  </div>

                </div>
              );

            })}

          </section>


          {/* ====================================
              GRÁFICO
          ==================================== */}

          <section className="manager-chart-card">

            <div className="manager-chart-header">

              <div>

                <h2>
                  Cadastros na plataforma
                </h2>

                <p>
                  Total de empresas, profissionais e usuários registrados
                </p>

              </div>

            </div>


            <div className="manager-chart">

              {/* LINHAS DO GRÁFICO */}

              <div className="chart-grid">

                <span>220</span>
                <span>165</span>
                <span>110</span>
                <span>55</span>
                <span>0</span>

              </div>


              {/* BARRAS */}

              <div className="chart-bars">

                {chartData.map((item) => {

                  const height =
                    (item.value / maxChartValue) * 100;

                  return (
                    <div
                      className="chart-column"
                      key={item.label}
                    >

                      <div className="chart-bar-wrapper">

                        <div
                          className={`chart-bar ${item.className}`}
                          style={{
                            height: `${height}%`,
                          }}
                          title={`${item.value} ${item.label.toLowerCase()}`}
                        />

                      </div>


                      <span className="chart-label">
                        {item.label}
                      </span>

                    </div>
                  );

                })}

              </div>

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