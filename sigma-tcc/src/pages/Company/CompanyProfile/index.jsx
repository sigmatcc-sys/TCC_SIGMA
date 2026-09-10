import "./style.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Building2,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
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

export default function CompanyProfile() {

  const { theme, toggleTheme } = useTheme();

  // ==========================================
  // MODAL DE LOGOUT
  // ==========================================

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "SIGMA",
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

    <main className={`company-profile-page ${theme}`}>


      {/* ==========================================
          SIDEBAR
      ========================================== */}

      <aside className={`company-sidebar ${menuOpen ? "open" : ""}`}>


        {/* LOGO */}

        <div className="company-logo">

          <div className="company-logo-icon">

            <Building2 size={21} />

          </div>


          <div className="company-logo-text">

            <strong>SIGMA</strong>

            <span>Empresa</span>

          </div>


          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
          >

            <X size={22} />

          </button>

        </div>


        {/* MENU */}

        <nav className="company-menu">


          <Link
            to="/company-dashboard"
            className="company-menu-item"
          >

            <LayoutDashboard size={19} />

            Painel

          </Link>


          <Link
            to="/company-ads"
            className="company-menu-item"
          >

            <Megaphone size={19} />

            Meus Anúncios

          </Link>


          <Link
            to="/company-messages"
            className="company-menu-item"
          >

            <MessageCircle size={19} />

            Mensagens

          </Link>


          <Link
            to="/company-profile"
            className="company-menu-item active"
          >

            <User size={19} />

            Perfil

          </Link>


          <Link
            to="/company-plan"
            className="company-menu-item"
          >

            <Crown size={19} />

            Plano Empresarial

          </Link>


        </nav>


        {/* FOOTER SIDEBAR */}

        <div className="company-sidebar-footer">

          <button
            className="company-logout"
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

      <section className="company-content">


        {/* HEADER */}

        <header className="company-header">


          <button
            className="open-menu"
            onClick={() => setMenuOpen(true)}
          >

            <Menu size={22} />

          </button>


          <div className="header-spacer" />


          <div className="company-header-actions">


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
              to="/company-profile"
              className="company-profile-header"
            >

              <div className="company-profile-avatar">

                US

              </div>


              <div className="company-profile-info">

                <strong>Usuário SIGMA</strong>

                <span>Empresa</span>

              </div>

            </Link>


          </div>


        </header>


        {/* ==========================================
            CONTEÚDO PRINCIPAL
        ========================================== */}

        <section className="company-profile-main">


          {/* TÍTULO */}

          <div className="company-profile-title">

            <div>

              <h1>Perfil da Empresa</h1>

              <p>
                Gerencie as informações da sua empresa.
              </p>

            </div>

          </div>


          {/* CARD */}

          <div className="company-profile-card">


            {/* CABEÇALHO DO CARD */}

            <div className="profile-card-header">


              <div className="profile-company-icon">

                <Building2 size={28} />

              </div>


              <div>

                <h2>Informações da Empresa</h2>

                <p>
                  Mantenha os dados da sua empresa atualizados.
                </p>

              </div>

            </div>


            {/* FORMULÁRIO */}

            <form
              className="company-profile-form"
              onSubmit={handleSubmit}
            >


              {/* NOME */}

              <div className="profile-input-group">

                <label htmlFor="companyName">

                  <Building2 size={17} />

                  Nome da empresa

                </label>


                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Digite o nome da empresa"
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