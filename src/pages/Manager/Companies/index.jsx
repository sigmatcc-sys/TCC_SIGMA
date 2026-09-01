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
  Search,
  Pencil,
  Trash2,
  Menu,
  X,
} from "lucide-react";

import useTheme from "../../../hooks/useTheme";
import LogoutModal from "../../../components/LogoutModal";

const initialCompanies = [
  {
    id: 1,
    name: "Academia PowerFit",
    email: "powerfit@email.com",
    phone: "(11) 99876-5432",
    location: "Centro, São Paulo - SP",
  },

  {
    id: 2,
    name: "Escola de Música Harmonia",
    email: "harmonia@email.com",
    phone: "(11) 97654-3210",
    location: "Pinheiros, São Paulo - SP",
  },

  {
    id: 3,
    name: "Ateliê de Arte Criativa",
    email: "atelecriativa@email.com",
    phone: "(11) 96543-2109",
    location: "Moema, São Paulo - SP",
  },

  {
    id: 4,
    name: "CrossFit Urban Box",
    email: "urbanbox@email.com",
    phone: "(11) 94321-0987",
    location: "Itaim Bibi, São Paulo - SP",
  },

  {
    id: 5,
    name: "Escola de Dança Movimento",
    email: "movimento@email.com",
    phone: "(11) 92109-8765",
    location: "Bela Vista, São Paulo - SP",
  },
];

export default function ManagerCompanies() {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [companies, setCompanies] =
    useState(initialCompanies);

  const [logoutModalOpen, setLogoutModalOpen] =
    useState(false);


  /* ==========================================
     MENU
  ========================================== */

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


  /* ==========================================
     FILTRO DE EMPRESAS
  ========================================== */

  const filteredCompanies =
    companies.filter((company) => {

      const searchText =
        search.toLowerCase();

      return (
        company.name
          .toLowerCase()
          .includes(searchText) ||

        company.email
          .toLowerCase()
          .includes(searchText)
      );
    });


  /* ==========================================
     LOGOUT
  ========================================== */

  function handleLogout() {
    console.log("Logout realizado!");

    setLogoutModalOpen(false);

    navigate("/");
  }


  /* ==========================================
     EXCLUIR EMPRESA
  ========================================== */

  function deleteCompany(id) {

    const confirmDelete =
      window.confirm(
        "Deseja realmente excluir esta empresa?"
      );

    if (!confirmDelete) return;

    setCompanies((prev) =>
      prev.filter(
        (company) =>
          company.id !== id
      )
    );
  }


  /* ==========================================
     EDITAR EMPRESA
  ========================================== */

  function editCompany(id) {
    console.log(
      "Editar empresa:",
      id
    );

    /*
     * Futuramente:
     *
     * navigate(
     *   `/manager-companies/edit/${id}`
     * );
     */
  }


  return (
    <main
      className={`manager-companies ${theme}`}
    >

      {/* ======================================
          OVERLAY MOBILE
      ====================================== */}

      {sidebarOpen && (
        <div
          className="manager-companies-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}


      {/* ======================================
          SIDEBAR
      ====================================== */}

      <aside
        className={`manager-companies-sidebar ${
          sidebarOpen
            ? "open"
            : ""
        }`}
      >

        {/* LOGO */}

        <div className="manager-companies-logo">

          <div className="manager-companies-logo-icon">

            <Building2 size={21} />

          </div>


          <div className="manager-companies-logo-text">

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
            className="manager-companies-close-menu"
            onClick={() =>
              setSidebarOpen(false)
            }
          >

            <X size={21} />

          </button>

        </div>


        {/* MENU */}

        <nav className="manager-companies-menu">

          {menuItems.map((item) => {

            const Icon =
              item.icon;

            const isActive =
              item.path ===
              "/manager-companies";

            return (

              <Link
                key={item.label}
                to={item.path}
                className={`manager-companies-menu-item ${
                  isActive
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setSidebarOpen(false)
                }
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

        <div className="manager-companies-sidebar-footer">

          <button
            type="button"
            className="manager-companies-logout"
            onClick={() =>
              setLogoutModalOpen(true)
            }
          >

            <LogOut size={18} />

            <span>
              Sair
            </span>

          </button>

        </div>

      </aside>


      {/* ======================================
          CONTEÚDO
      ====================================== */}

      <section className="manager-companies-content">


        {/* ====================================
            HEADER
        ==================================== */}

        <header className="manager-companies-header">

          <button
            type="button"
            className="manager-companies-open-menu"
            onClick={() =>
              setSidebarOpen(true)
            }
          >

            <Menu size={22} />

          </button>


          <div className="manager-companies-header-spacer" />


          <div className="manager-companies-header-actions">


            {/* TEMA */}

            <button
              type="button"
              className="manager-companies-theme-toggle"
              onClick={toggleTheme}
              aria-label="Alternar tema"
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
              className="manager-companies-notification"
              aria-label="Notificações"
            >

              <Bell size={18} />

            </button>


            {/* ADMINISTRADOR */}

            <div className="manager-companies-profile">

              <div className="manager-companies-avatar">

                A

              </div>


              <div className="manager-companies-profile-info">

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


        {/* ====================================
            MAIN
        ==================================== */}

        <div className="manager-companies-main">


          {/* TÍTULO */}

          <section
            className="manager-companies-title"
          >

            <Building2 size={20} />

            <h1>
              Empresas Cadastradas
            </h1>

            <span>
              ({companies.length})
            </span>

          </section>


          {/* PESQUISA */}

          <div
            className="manager-companies-search"
          >

            <Search size={16} />

            <input
              type="text"
              placeholder="Buscar por nome ou email..."
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
            />

          </div>


          {/* ==================================
              LISTA DE EMPRESAS
          ================================== */}

          <section
            className="manager-companies-list"
          >

            {filteredCompanies.length > 0 ? (

              filteredCompanies.map(
                (company) => {

                  const initial =
                    company.name
                      .charAt(0)
                      .toUpperCase();

                  return (

                    <article
                      key={company.id}
                      className="manager-company-card"
                    >

                      {/* AVATAR */}

                      <div
                        className="manager-company-avatar"
                      >

                        {initial}

                      </div>


                      {/* INFORMAÇÕES */}

                      <div
                        className="manager-company-info"
                      >

                        <strong>
                          {company.name}
                        </strong>

                        <span>
                          {company.email}
                        </span>

                        <small>
                          {company.phone}
                          {" · "}
                          {company.location}
                        </small>

                      </div>


                      {/* AÇÕES */}

                      <div
                        className="manager-company-actions"
                      >

                        <button
                          type="button"
                          className="manager-company-edit"
                          onClick={() =>
                            editCompany(
                              company.id
                            )
                          }
                          aria-label="Editar empresa"
                        >

                          <Pencil size={16} />

                        </button>


                        <button
                          type="button"
                          className="manager-company-delete"
                          onClick={() =>
                            deleteCompany(
                              company.id
                            )
                          }
                          aria-label="Excluir empresa"
                        >

                          <Trash2 size={16} />

                        </button>

                      </div>

                    </article>

                  );

                }
              )

            ) : (

              <div
                className="manager-companies-empty"
              >

                <Building2 size={30} />

                <p>
                  Nenhuma empresa encontrada.
                </p>

              </div>

            )}

          </section>

        </div>

      </section>


      {/* ======================================
          MODAL DE LOGOUT
      ====================================== */}

      <LogoutModal
        isOpen={logoutModalOpen}
        onConfirm={handleLogout}
        onCancel={() =>
          setLogoutModalOpen(false)
        }
      />

    </main>
  );
}