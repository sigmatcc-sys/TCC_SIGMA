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



/* ==========================================
   USUÁRIOS
========================================== */

const initialUsers = [
    {
        id: 1,
        name: "João Pedro",
        email: "joao@email.com",
        phone: "(11) 99876-5432",
        location: "Centro, São Paulo - SP",
    },

    {
        id: 2,
        name: "Mariana Alves",
        email: "mariana@email.com",
        phone: "(11) 97654-3210",
        location: "Pinheiros, São Paulo - SP",
    },

    {
        id: 3,
        name: "Gabriel Souza",
        email: "gabriel@email.com",
        phone: "(11) 96543-2109",
        location: "Moema, São Paulo - SP",
    },

    {
        id: 4,
        name: "Lucas Oliveira",
        email: "lucas@email.com",
        phone: "(11) 94321-0987",
        location: "Itaim Bibi, São Paulo - SP",
    },

    {
        id: 5,
        name: "Ana Beatriz",
        email: "ana@email.com",
        phone: "(11) 92109-8765",
        location: "Bela Vista, São Paulo - SP",
    },
];


export default function ManagerUsers() {

    const navigate = useNavigate();

    const { theme, toggleTheme } = useTheme();

    const [sidebarOpen, setSidebarOpen] =
        useState(false);

    const [search, setSearch] =
        useState("");

    const [users, setUsers] =
        useState(initialUsers);

    const [logoutModalOpen, setLogoutModalOpen] =
        useState(false);

    const [deleteModalOpen, setDeleteModalOpen] =
        useState(false);

    const [userToDelete, setUserToDelete] =
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
       FILTRO DE USUÁRIOS
    ========================================== */

    const filteredUsers =
        users.filter((user) => {

            const searchText =
                search.toLowerCase();

            return (
                user.name
                    .toLowerCase()
                    .includes(searchText) ||

                user.email
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
       EXCLUIR USUÁRIO
    ========================================== */

    function deleteUser(id) {
        setUserToDelete(id);
        setDeleteModalOpen(true);
    }

    function confirmDeleteUser() {

        if (!userToDelete) return;

        setUsers((prev) =>
            prev.filter(
                (user) =>
                    user.id !== userToDelete
            )
        );

        setUserToDelete(null);
        setDeleteModalOpen(false);
    }


    /* ==========================================
       EDITAR USUÁRIO
    ========================================== */

    function editUser(id) {

        console.log(
            "Editar usuário:",
            id
        );

        /*
         * Futuramente:
         *
         * navigate(
         *   `/manager-users/edit/${id}`
         * );
         */
    }


    return (

        <main
            className={`manager-users ${theme}`}
        >

            {/* ======================================
          OVERLAY MOBILE
      ====================================== */}

            {sidebarOpen && (
                <div
                    className="manager-users-overlay"
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                />
            )}


            {/* ======================================
          SIDEBAR
      ====================================== */}

            <aside
                className={`manager-users-sidebar ${sidebarOpen ? "open" : ""
                    }`}
            >

                {/* LOGO */}

                <div className="manager-users-logo">

                    <div className="manager-users-logo-icon">

                        <Users size={21} />

                    </div>


                    <div className="manager-users-logo-text">

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
                        className="manager-users-close-menu"
                        onClick={() =>
                            setSidebarOpen(false)
                        }
                    >

                        <X size={21} />

                    </button>

                </div>


                {/* MENU */}

                <nav className="manager-users-menu">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        const isActive =
                            item.path ===
                            "/manager-users";

                        return (

                            <Link
                                key={item.label}
                                to={item.path}
                                className={`manager-users-menu-item ${isActive ? "active" : ""
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

                <div className="manager-users-sidebar-footer">

                    <button
                        type="button"
                        className="manager-users-logout"
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

            <section className="manager-users-content">


                {/* ====================================
            HEADER
        ==================================== */}

                <header className="manager-users-header">

                    <button
                        type="button"
                        className="manager-users-open-menu"
                        onClick={() =>
                            setSidebarOpen(true)
                        }
                    >

                        <Menu size={22} />

                    </button>


                    <div className="manager-users-header-spacer" />


                    <div className="manager-users-header-actions">


                        {/* TEMA */}

                        <button
                            type="button"
                            className="manager-users-theme-toggle"
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
                            className="manager-users-notification"
                            aria-label="Notificações"
                        >

                            <Bell size={18} />

                        </button>


                        {/* ADMINISTRADOR */}

                        <div className="manager-users-profile">

                            <div className="manager-users-avatar">

                                A

                            </div>


                            <div className="manager-users-profile-info">

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

                <div className="manager-users-main">


                    {/* TÍTULO */}

                    <section
                        className="manager-users-title"
                    >

                        <Users size={20} />

                        <h1>
                            Usuários Cadastrados
                        </h1>

                        <span>
                            ({users.length})
                        </span>

                    </section>


                    {/* PESQUISA */}

                    <div
                        className="manager-users-search"
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
              LISTA DE USUÁRIOS
          ================================== */}

                    <section
                        className="manager-users-list"
                    >

                        {filteredUsers.length > 0 ? (

                            filteredUsers.map(
                                (user) => {

                                    const initial =
                                        user.name
                                            .charAt(0)
                                            .toUpperCase();

                                    return (

                                        <article
                                            key={user.id}
                                            className="manager-user-card"
                                        >

                                            {/* AVATAR */}

                                            <div
                                                className="manager-user-avatar"
                                            >

                                                {initial}

                                            </div>


                                            {/* INFORMAÇÕES */}

                                            <div
                                                className="manager-user-info"
                                            >

                                                <strong>
                                                    {user.name}
                                                </strong>

                                                <span>
                                                    {user.email}
                                                </span>

                                                <small>
                                                    {user.phone}
                                                    {" · "}
                                                    {user.location}
                                                </small>

                                            </div>


                                            {/* AÇÕES */}

                                            <div
                                                className="manager-user-actions"
                                            >

                                                <button
                                                    type="button"
                                                    className="manager-user-edit"
                                                    onClick={() =>
                                                        editUser(
                                                            user.id
                                                        )
                                                    }
                                                    aria-label="Editar usuário"
                                                >

                                                    <Pencil size={16} />

                                                </button>


                                                <button
                                                    type="button"
                                                    className="manager-user-delete"
                                                    onClick={() =>
                                                        deleteUser(
                                                            user.id
                                                        )
                                                    }
                                                    aria-label="Excluir usuário"
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
                                className="manager-users-empty"
                            >

                                <Users size={30} />

                                <p>
                                    Nenhum usuário encontrado.
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
                title="Excluir usuário"
                message="Deseja realmente excluir este usuário? Essa ação não poderá ser desfeita."
                onConfirm={confirmDeleteUser}
                onCancel={() => {
                    setDeleteModalOpen(false);
                    setUserToDelete(null);
                }}
            />

        </main>
    );
}