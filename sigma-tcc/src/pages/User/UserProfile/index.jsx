import "./style.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    Building2,
    LayoutDashboard,
    Megaphone,
    MessageCircle,
    BriefcaseBusiness,
    User,
    Crown,
    LogOut,
    Sun,
    Bell,
    Menu,
    X,
    Mail,
    Phone,
    MapPin,
    LockKeyhole,
    Save,
    Check,
    Search,
    Heart,
    Star,
    Home,
    Sparkles,
} from "lucide-react";

import LogoutModal from "../../../components/LogoutModal";
import useTheme from "../../../hooks/useTheme";

export default function UserProfile() {

    const { theme, toggleTheme } = useTheme();

    // ==========================================
    // MODAL DE LOGOUT
    // ==========================================

    const [showLogoutModal, setShowLogoutModal] =
        useState(false);

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const [formData, setFormData] = useState({
        userName: "SIGMA",
        phone: "(19) 99999-9999",
        location: "Mogi Guaçu, SP",
        email: "contato@sigma.com",
    });

    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log("Dados atualizados:", formData);

        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        }, 3000);

    };


    const handleResetPassword = () => {

        console.log(
            `Link de redefinição enviado para ${formData.email}`
        );

        alert(
            `Um link para redefinir sua senha será enviado para:\n${formData.email}`
        );

    };


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

        <main className={`user-profile-page ${theme}`}>


            {/* ==========================================
          SIDEBAR
      ========================================== */}

            <aside className={`user-sidebar ${menuOpen ? "open" : ""}`}>


                {/* LOGO */}

                <div className="user-logo">

                    <div className="user-logo-icon">

                        <Sparkles size={21} />

                    </div>


                    <div className="user-logo-text">

                        <strong>SIGMA</strong>

                        <span>Serviços urbanos</span>

                    </div>


                    <button
                        className="close-menu"
                        onClick={() => setMenuOpen(false)}
                    >

                        <X size={22} />

                    </button>

                </div>


                {/* MENU */}

                <nav className="user-menu">


                    <Link
                        to="/user-dashboard"
                        className="user-menu-item"
                    >

                        <Home size={19} />

                        <span>
                            Início
                        </span>

                    </Link>


                    <Link
                        to="/user-search"
                        className="user-menu-item"
                    >

                        <Search size={19} />

                        <span>
                            Buscar
                        </span>

                    </Link>


                    <Link
                        to="/user-favorites"
                        className="user-menu-item"
                    >

                        <Heart size={19} />

                        <span>
                            Favoritos
                        </span>

                    </Link>


                    <Link
                        to="/user-reviews"
                        className="user-menu-item"
                    >

                        <Star size={19} />

                        <span>
                            Avaliações
                        </span>

                    </Link>


                    <Link
                        to="/user-messages"
                        className="user-menu-item"
                    >

                        <MessageCircle size={19} />

                        <span>
                            Mensagens
                        </span>

                    </Link>


                    <Link
                        to="/user-profile"
                        className="user-menu-item active"
                    >

                        <User size={19} />

                        <span>
                            Perfil
                        </span>

                    </Link>


                    


                </nav>


                {/* FOOTER SIDEBAR */}

                <div className="user-sidebar-footer">

                    <button
                        className="user-logout"
                        onClick={handleLogout}
                    >

                        <LogOut size={19} />

                        Sair

                    </button>

                </div>


            </aside>


            {/* OVERLAY MOBILE */}

            {menuOpen && (

                <div
                    className="dashboard-overlay"
                    onClick={() => setMenuOpen(false)}
                />

            )}


            {/* ==========================================
          CONTEÚDO
      ========================================== */}

            <section className="user-content">


                {/* HEADER */}

                <header className="user-header">


                    <button
                        className="open-menu"
                        onClick={() => setMenuOpen(true)}
                    >

                        <Menu size={22} />

                    </button>


                    <div className="header-spacer" />


                    <div className="user-header-actions">


                        {/* TEMA */}

                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                        >

                            <Sun size={19} />

                        </button>


                        {/* NOTIFICAÇÕES */}

                        <button className="notification-button">

                            <Bell size={19} />

                            <span className="notification-indicator" />

                        </button>


                        {/* PERFIL */}

                        <Link
                            to="/user-profile"
                            className="user-profile-header"
                        >

                            <div className="user-profile-avatar">

                                US

                            </div>


                            <div className="user-profile-info">

                                <strong>Usuário SIGMA</strong>

                                <span>Usuário</span>

                            </div>

                        </Link>


                    </div>


                </header>


                {/* ==========================================
            CONTEÚDO PRINCIPAL
        ========================================== */}

                <section className="user-profile-main">


                    {/* TÍTULO */}

                    <div className="user-profile-title">

                        <div>

                            <h1>Perfil do Usuário</h1>

                            <p>
                                Gerencie as informações do seu perfil profissional.
                            </p>

                        </div>

                    </div>


                    {/* CARD */}

                    <div className="user-profile-card">


                        {/* CABEÇALHO DO CARD */}

                        <div className="profile-card-header">


                            <div className="profile-user-icon">

                                <Sparkles size={29} />

                            </div>


                            <div>

                                <h2>Informações do Usuário</h2>

                                <p>
                                    Mantenha os dados do seu perfil usuário atualizados.
                                </p>

                            </div>

                        </div>


                        {/* FORMULÁRIO */}

                        <form
                            className="user-profile-form"
                            onSubmit={handleSubmit}
                        >


                            {/* NOME */}

                            <div className="profile-input-group">

                                <label htmlFor="userName">

                                    <Building2 size={17} />

                                    Nome do usuário

                                </label>


                                <input
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    placeholder="Digite o nome do usuário"
                                />

                            </div>


                            {/* TELEFONE */}

                            <div className="profile-input-group">

                                <label htmlFor="phone">

                                    <Phone size={17} />

                                    Telefone

                                </label>


                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Digite o telefone"
                                />

                            </div>


                            {/* LOCALIZAÇÃO */}

                            <div className="profile-input-group">

                                <label htmlFor="location">

                                    <MapPin size={17} />

                                    Localização

                                </label>


                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Cidade, Estado"
                                />

                            </div>


                            {/* E-MAIL */}

                            <div className="profile-input-group">

                                <label htmlFor="email">

                                    <Mail size={17} />

                                    E-mail

                                </label>


                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Digite o e-mail"
                                />

                            </div>


                            {/* BOTÕES */}

                            <div className="profile-actions">


                                {/* REDEFINIR SENHA */}

                                <button
                                    type="button"
                                    className="reset-password-button"
                                    onClick={handleResetPassword}
                                >

                                    <LockKeyhole size={18} />

                                    Redefinir senha

                                </button>


                                {/* SALVAR */}

                                <button
                                    type="submit"
                                    className="save-profile-button"
                                >

                                    {saved ? (

                                        <Check size={18} />

                                    ) : (

                                        <Save size={18} />

                                    )}

                                    {saved
                                        ? "Alterações salvas"
                                        : "Salvar alterações"
                                    }

                                </button>


                            </div>


                        </form>


                    </div>


                    {/* MENSAGEM */}

                    <div className="password-info">

                        <LockKeyhole size={18} />

                        <p>
                            Ao solicitar a redefinição de senha, um link será enviado
                            para o e-mail cadastrado em sua conta.
                        </p>

                    </div>


                </section>


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