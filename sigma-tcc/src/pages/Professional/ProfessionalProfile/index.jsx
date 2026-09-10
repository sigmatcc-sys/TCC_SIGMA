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
} from "lucide-react";

import LogoutModal from "../../../components/LogoutModal";
import useTheme from "../../../hooks/useTheme";

export default function ProfessionalProfile() {

    const { theme, toggleTheme } = useTheme();

    // ==========================================
    // MODAL DE LOGOUT
    // ==========================================

    const [showLogoutModal, setShowLogoutModal] =
        useState(false);

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const [formData, setFormData] = useState({
        professionalName: "SIGMA",
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

        <main className={`professional-profile-page ${theme}`}>


            {/* ==========================================
          SIDEBAR
      ========================================== */}

            <aside className={`professional-sidebar ${menuOpen ? "open" : ""}`}>


                {/* LOGO */}

                <div className="professional-logo">

                    <div className="professional-logo-icon">

                        <BriefcaseBusiness size={23} />

                    </div>


                    <div className="professional-logo-text">

                        <strong>SIGMA</strong>

                        <span>Profissional</span>

                    </div>


                    <button
                        className="close-menu"
                        onClick={() => setMenuOpen(false)}
                    >

                        <X size={22} />

                    </button>

                </div>


                {/* MENU */}

                <nav className="professional-menu">


                    <Link
                        to="/professional-dashboard"
                        className="professional-menu-item"
                    >

                        <LayoutDashboard size={19} />

                        Painel

                    </Link>

                   

                    <Link
                        to="/professional-ads"
                        className="professional-menu-item"
                    >

                        <Megaphone size={19} />

                        Meus Anúncios

                    </Link>

                     <Link
                        to="/professional-companies"
                        className="professional-menu-item"
                    >
                        <Building2 size={19} />

                        Empresas

                    </Link>


                    <Link
                        to="/professional-messages"
                        className="professional-menu-item"
                    >

                        <MessageCircle size={19} />

                        Mensagens

                    </Link>


                    <Link
                        to="/professional-profile"
                        className="professional-menu-item active"
                    >

                        <User size={19} />

                        Perfil

                    </Link>


                    <Link
                        to="/professional-plan"
                        className="professional-menu-item"
                    >

                        <Crown size={19} />

                        Plano Profissional

                    </Link>


                </nav>


                {/* FOOTER SIDEBAR */}

                <div className="professional-sidebar-footer">

                    <button
                        className="professional-logout"
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

            <section className="professional-content">


                {/* HEADER */}

                <header className="professional-header">


                    <button
                        className="open-menu"
                        onClick={() => setMenuOpen(true)}
                    >

                        <Menu size={22} />

                    </button>


                    <div className="header-spacer" />


                    <div className="professional-header-actions">


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
                            to="/professional-profile"
                            className="professional-profile-header"
                        >

                            <div className="professional-profile-avatar">

                                US

                            </div>


                            <div className="professional-profile-info">

                                <strong>Usuário SIGMA</strong>

                                <span>Profissional</span>

                            </div>

                        </Link>


                    </div>


                </header>


                {/* ==========================================
            CONTEÚDO PRINCIPAL
        ========================================== */}

                <section className="professional-profile-main">


                    {/* TÍTULO */}

                    <div className="professional-profile-title">

                        <div>

                            <h1>Perfil do Profissional</h1>

                            <p>
                                Gerencie as informações do seu perfil profissional.
                            </p>

                        </div>

                    </div>


                    {/* CARD */}

                    <div className="professional-profile-card">


                        {/* CABEÇALHO DO CARD */}

                        <div className="profile-card-header">


                            <div className="profile-professional-icon">

                                <BriefcaseBusiness size={29} />

                            </div>


                            <div>

                                <h2>Informações do Profissional</h2>

                                <p>
                                    Mantenha os dados do seu perfil profissional atualizados.
                                </p>

                            </div>

                        </div>


                        {/* FORMULÁRIO */}

                        <form
                            className="professional-profile-form"
                            onSubmit={handleSubmit}
                        >


                            {/* NOME */}

                            <div className="profile-input-group">

                                <label htmlFor="professionalName">

                                    <Building2 size={17} />

                                    Nome do profissional

                                </label>


                                <input
                                    id="professionalName"
                                    name="professionalName"
                                    type="text"
                                    value={formData.professionalName}
                                    onChange={handleChange}
                                    placeholder="Digite o nome do profissional"
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