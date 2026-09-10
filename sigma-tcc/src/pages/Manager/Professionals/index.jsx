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
import DeleteModal from "../../../components/DeleteModal";
import EditModal from "../../../components/EditModal";


/* ==========================================
   PROFISSIONAIS
========================================== */

const initialProfessionals = [
    {
        id: 1,
        name: "Carlos Henrique",
        email: "carlos@email.com",
        phone: "(11) 99876-5432",
        specialty: "Personal Trainer",
        company: "Academia PowerFit",
    },

    {
        id: 2,
        name: "Mariana Souza",
        email: "mariana@email.com",
        phone: "(11) 97654-3210",
        specialty: "Professora de Música",
        company: "Escola de Música Harmonia",
    },

    {
        id: 3,
        name: "Ana Carolina",
        email: "ana@email.com",
        phone: "(11) 96543-2109",
        specialty: "Professora de Artes",
        company: "Ateliê de Arte Criativa",
    },

    {
        id: 4,
        name: "Lucas Ferreira",
        email: "lucas@email.com",
        phone: "(11) 94321-0987",
        specialty: "Coach Esportivo",
        company: "CrossFit Urban Box",
    },

    {
        id: 5,
        name: "Beatriz Oliveira",
        email: "beatriz@email.com",
        phone: "(11) 92109-8765",
        specialty: "Professora de Dança",
        company: "Escola de Dança Movimento",
    },
];


export default function ManagerProfessionals() {

    const navigate = useNavigate();

    const { theme, toggleTheme } = useTheme();

    const [sidebarOpen, setSidebarOpen] =
        useState(false);

    const [search, setSearch] =
        useState("");

    const [professionals, setProfessionals] =
        useState(initialProfessionals);

    const [logoutModalOpen, setLogoutModalOpen] =
        useState(false);

    const [deleteModalOpen, setDeleteModalOpen] =
        useState(false);

    const [professionalToDelete, setProfessionalToDelete] =
        useState(null);

    const [editModalOpen, setEditModalOpen] =
        useState(false);

    const [professionalToEdit, setProfessionalToEdit] =
        useState(null);


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
       FILTRO
    ========================================== */

    const filteredProfessionals =
        professionals.filter((professional) => {

            const searchText =
                search.toLowerCase();

            return (
                professional.name
                    .toLowerCase()
                    .includes(searchText) ||

                professional.email
                    .toLowerCase()
                    .includes(searchText) ||

                professional.specialty
                    .toLowerCase()
                    .includes(searchText) ||

                professional.company
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
       EXCLUIR PROFISSIONAL
    ========================================== */

    function deleteProfessional(id) {
        setProfessionalToDelete(id);
        setDeleteModalOpen(true);
    }

    function confirmDeleteProfessional() {

        if (!professionalToDelete) return;

        setProfessionals((prev) =>
            prev.filter(
                (professional) =>
                    professional.id !== professionalToDelete
            )
        );

        setProfessionalToDelete(null);
        setDeleteModalOpen(false);
    }


    /* ==========================================
     EDITAR EMPRESA
  ========================================== */

    function editProfessional(id) {

        const professional =
            professionals.find(
                (professional) =>
                    professional.id === id
            );

        if (!professional) return;

        setProfessionalToEdit(professional);

        setEditModalOpen(true);
    }

    function saveProfessional(updatedProfessional) {

        setProfessionals((prev) =>
            prev.map((professional) =>
                professional.id === updatedProfessional.id
                    ? updatedProfessional
                    : professional
            )
        );

        setProfessionalToEdit(null);

        setEditModalOpen(false);
    }


    return (

        <main
            className={`manager-professionals ${theme}`}
        >

            {/* ======================================
          OVERLAY MOBILE
      ====================================== */}

            {sidebarOpen && (
                <div
                    className="manager-professionals-overlay"
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                />
            )}


            {/* ======================================
          SIDEBAR
      ====================================== */}

            <aside
                className={`manager-professionals-sidebar ${sidebarOpen ? "open" : ""
                    }`}
            >

                {/* LOGO */}

                <div className="manager-professionals-logo">

                    <div className="manager-professionals-logo-icon">

                        <BriefcaseBusiness size={21} />

                    </div>


                    <div className="manager-professionals-logo-text">

                        <strong>
                            SIGMA
                        </strong>

                        <span>
                            Gestão
                        </span>

                    </div>


                    {/* FECHAR MENU */}

                    <button
                        type="button"
                        className="manager-professionals-close-menu"
                        onClick={() =>
                            setSidebarOpen(false)
                        }
                    >

                        <X size={21} />

                    </button>

                </div>


                {/* MENU */}

                <nav className="manager-professionals-menu">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        const isActive =
                            item.path ===
                            "/manager-professionals";

                        return (

                            <Link
                                key={item.label}
                                to={item.path}
                                className={`manager-professionals-menu-item ${isActive ? "active" : ""
                                    }`}
                                onClick={() =>
                                    setSidebarOpen(false)
                                }
                            >

                                <Icon size={19} />

                                <span>
                                    {item.label}
                                </span>

                            </Link>

                        );

                    })}

                </nav>


                {/* SAIR */}

                <div className="manager-professionals-sidebar-footer">

                    <button
                        type="button"
                        className="manager-professionals-logout"
                        onClick={() =>
                            setLogoutModalOpen(true)
                        }
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

            <section className="manager-professionals-content">


                {/* ====================================
            HEADER
        ==================================== */}

                <header className="manager-professionals-header">

                    <button
                        type="button"
                        className="manager-professionals-open-menu"
                        onClick={() =>
                            setSidebarOpen(true)
                        }
                    >

                        <Menu size={22} />

                    </button>


                    <div className="manager-professionals-header-spacer" />


                    <div className="manager-professionals-header-actions">


                        {/* TEMA */}

                        <button
                            type="button"
                            className="manager-professionals-theme-toggle"
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
                            className="manager-professionals-notification"
                            aria-label="Notificações"
                        >

                            <Bell size={18} />

                        </button>


                        {/* ADMINISTRADOR */}

                        <div className="manager-professionals-profile">

                            <div className="manager-professionals-avatar">

                                A

                            </div>


                            <div className="manager-professionals-profile-info">

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

                <div className="manager-professionals-main">


                    {/* TÍTULO */}

                    <section
                        className="manager-professionals-title"
                    >

                        <BriefcaseBusiness size={20} />

                        <h1>
                            Profissionais Cadastrados
                        </h1>

                        <span>
                            ({professionals.length})
                        </span>

                    </section>


                    {/* PESQUISA */}

                    <div
                        className="manager-professionals-search"
                    >

                        <Search size={16} />

                        <input
                            type="text"
                            placeholder="Buscar por nome, email ou especialidade..."
                            value={search}
                            onChange={(event) =>
                                setSearch(
                                    event.target.value
                                )
                            }
                        />

                    </div>


                    {/* ==================================
              LISTA
          ================================== */}

                    <section
                        className="manager-professionals-list"
                    >

                        {filteredProfessionals.length > 0 ? (

                            filteredProfessionals.map(
                                (professional) => {

                                    const initial =
                                        professional.name
                                            .charAt(0)
                                            .toUpperCase();

                                    return (

                                        <article
                                            key={professional.id}
                                            className="manager-professional-card"
                                        >

                                            {/* AVATAR */}

                                            <div
                                                className="manager-professional-avatar"
                                            >

                                                {initial}

                                            </div>


                                            {/* INFORMAÇÕES */}

                                            <div
                                                className="manager-professional-info"
                                            >

                                                <strong>
                                                    {professional.name}
                                                </strong>

                                                <span>
                                                    {professional.specialty}
                                                </span>

                                                <small>
                                                    {professional.email}
                                                    {" · "}
                                                    {professional.phone}
                                                    {" · "}
                                                    {professional.company}
                                                </small>

                                            </div>


                                            {/* AÇÕES */}

                                            <div
                                                className="manager-professional-actions"
                                            >

                                                <button
                                                    type="button"
                                                    className="manager-professional-edit"
                                                    onClick={() =>
                                                        editProfessional(
                                                            professional.id
                                                        )
                                                    }
                                                    aria-label="Editar profissional"
                                                >

                                                    <Pencil size={16} />

                                                </button>


                                                <button
                                                    type="button"
                                                    className="manager-professional-delete"
                                                    onClick={() =>
                                                        deleteProfessional(
                                                            professional.id
                                                        )
                                                    }
                                                    aria-label="Excluir profissional"
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
                                className="manager-professionals-empty"
                            >

                                <BriefcaseBusiness size={30} />

                                <p>
                                    Nenhum profissional encontrado.
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

            <DeleteModal
                isOpen={deleteModalOpen}
                title="Excluir profissional"
                message="Deseja realmente excluir este profissional? Essa ação não poderá ser desfeita."
                onConfirm={confirmDeleteProfessional}
                onCancel={() => {
                    setDeleteModalOpen(false);
                    setProfessionalToDelete(null);
                }}
            />

            <EditModal
                isOpen={editModalOpen}
                professional={professionalToEdit}
                onSave={saveProfessional}
                onCancel={() => {
                    setEditModalOpen(false);
                    setProfessionalToEdit(null);
                }}
            />

        </main>
    );
}