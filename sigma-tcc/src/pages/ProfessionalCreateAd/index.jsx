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
    BriefcaseBusiness,
    Sun,
    Moon,
    Bell,
    Menu,
    X,
    ArrowLeft,
    ImagePlus,
    MapPin,
    Phone,
    Tag,
    FileText,
    CheckCircle,
} from "lucide-react";

import LogoutModal from "../../components/LogoutModal";
import useTheme from "../../hooks/useTheme";

export default function ProfessionalCreateAd() {

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
    // FORMULÁRIO
    // ==========================================

    const [formData, setFormData] = useState({

        title: "",

        category: "",

        description: "",

        city: "",

        state: "",

        phone: "",

    });


    // ==========================================
    // IMAGEM
    // ==========================================

    const [imagePreview, setImagePreview] =
        useState(null);


    // ==========================================
    // DADOS DA EMPRESA
    // ==========================================

    const professional = {

        name: "Profissional SIGMA",

        initials: "PS",

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


    // ==========================================
    // MENU
    // ==========================================

    const menuItems = [

        {
            label: "Painel",

            icon: LayoutDashboard,

            path: "/professional-dashboard",
        },

        {
            label: "Meus Anúncios",

            icon: Megaphone,

            path: "/professional-ads",
        },

        {
            label: "Empresas",
            icon: Building2,
            path: "/professional-companies",
        },

        {
            label: "Mensagens",

            icon: MessageCircle,

            path: "/professional-messages",
        },

        {
            label: "Perfil",

            icon: User,

            path: "/professional-profile",
        },

        {
            label: "Plano Profissional",

            icon: Crown,

            path: "/professional-plan",
        },

    ];


    // ==========================================
    // ATUALIZAR CAMPOS
    // ==========================================

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({

            ...formData,

            [name]: value,

        });

    }


    // ==========================================
    // UPLOAD DA IMAGEM
    // ==========================================

    function handleImageChange(event) {

        const file = event.target.files[0];

        if (!file) {

            return;

        }

        const imageUrl =
            URL.createObjectURL(file);

        setImagePreview(imageUrl);

    }


    // ==========================================
    // PUBLICAR ANÚNCIO
    // ==========================================

    function handleSubmit(event) {

        event.preventDefault();

        console.log(
            "Novo anúncio:",
            formData
        );

        // Futuramente os dados serão enviados
        // para o backend e banco de dados.

        navigate("/professional-ads");

    }


    // ==========================================
    // CANCELAR
    // ==========================================

    function handleCancel() {

        navigate("/professional-ads");

    }


    return (

        <main className={`professional-create-ad ${theme}`}>

            {/* ========================================
          OVERLAY MOBILE
      ======================================== */}

            {sidebarOpen && (

                <div
                    className="create-ad-overlay"
                    onClick={() =>
                        setSidebarOpen(false)
                    }
                />

            )}


            {/* ========================================
          SIDEBAR
      ======================================== */}

            <aside
                className={`create-ad-sidebar ${sidebarOpen ? "open" : ""
                    }`}
            >

                {/* LOGO */}

                <div className="create-ad-logo">

                    <div className="create-ad-logo-icon">

                        <BriefcaseBusiness size={23} />

                    </div>


                    <div className="create-ad-logo-text">

                        <strong>
                            SIGMA
                        </strong>

                        <span>
                            Profissional
                        </span>

                    </div>


                    {/* FECHAR MENU MOBILE */}

                    <button
                        type="button"
                        className="create-ad-close-menu"
                        onClick={() =>
                            setSidebarOpen(false)
                        }
                    >

                        <X size={22} />

                    </button>

                </div>


                {/* MENU */}

                <nav className="create-ad-menu">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        const isActive =
                            location.pathname === item.path;

                        return (

                            <Link
                                key={item.label}
                                to={item.path}
                                className={`create-ad-menu-item ${isActive ? "active" : ""
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


                {/* FOOTER SIDEBAR */}

                <div className="create-ad-sidebar-footer">

                    <button
                        type="button"
                        className="create-ad-logout"
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

            <section className="create-ad-content">

                {/* HEADER */}

                <header className="create-ad-header">

                    {/* MENU MOBILE */}

                    <button
                        type="button"
                        className="create-ad-open-menu"
                        onClick={() =>
                            setSidebarOpen(true)
                        }
                    >

                        <Menu size={23} />

                    </button>


                    <div className="create-ad-header-spacer" />


                    <div className="create-ad-header-actions">

                        {/* TEMA */}

                        <button
                            type="button"
                            className="create-ad-theme-toggle"
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

                        <button
                            type="button"
                            className="create-ad-notification-button"
                            aria-label="Notificações"
                        >

                            <Bell size={20} />

                            <span className="create-ad-notification-indicator" />

                        </button>


                        {/* PERFIL */}

                        <Link
                            to="/professional-profile"
                            className="create-ad-profile-header"
                        >

                            <div className="create-ad-profile-avatar">

                                {professional.initials}

                            </div>


                            <div className="create-ad-profile-info">

                                <strong>
                                    {professional.name}
                                </strong>

                                <span>
                                    Profissional
                                </span>

                            </div>

                        </Link>

                    </div>

                </header>


                {/* ======================================
            CONTEÚDO PRINCIPAL
        ====================================== */}

                <div className="create-ad-main">

                    {/* VOLTAR */}

                    <Link
                        to="/professional-ads"
                        className="create-ad-back"
                    >

                        <ArrowLeft size={18} />

                        Voltar para meus anúncios

                    </Link>


                    {/* CABEÇALHO */}

                    <div className="create-ad-title">

                        <div className="create-ad-title-icon">

                            <Megaphone size={22} />

                        </div>


                        <div>

                            <h1>
                                Criar novo anúncio
                            </h1>

                            <p>
                                Preencha as informações para divulgar
                                seu serviço ou empresa.
                            </p>

                        </div>

                    </div>


                    {/* FORMULÁRIO */}

                    <form
                        className="create-ad-form"
                        onSubmit={handleSubmit}
                    >

                        {/* ==================================
                INFORMAÇÕES PRINCIPAIS
            ================================== */}

                        <section className="create-ad-section">

                            <div className="create-ad-section-title">

                                <FileText size={19} />

                                <div>

                                    <h2>
                                        Informações do anúncio
                                    </h2>

                                    <p>
                                        Informe os principais dados.
                                    </p>

                                </div>

                            </div>


                            {/* TÍTULO */}

                            <div className="create-ad-field">

                                <label htmlFor="title">
                                    Título do anúncio
                                </label>

                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Ex: Personal trainer"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* CATEGORIA */}

                            <div className="create-ad-field">

                                <label htmlFor="category">

                                    <Tag size={15} />

                                    Categoria

                                </label>

                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Selecione uma categoria
                                    </option>

                                    <option value="academia">
                                        Professor de Música
                                    </option>

                                    <option value="musica">
                                        Personal Trainer
                                    </option>

                                    <option value="cultura">
                                        Nutricionista
                                    </option>

                                    <option value="esportes">
                                        Fisioterapeuta
                                    </option>

                                    <option value="educacao">
                                        Professor Particular
                                    </option>

                                    <option value="outros">
                                        Outros
                                    </option>

                                </select>

                            </div>


                            {/* DESCRIÇÃO */}

                            <div className="create-ad-field">

                                <label htmlFor="description">
                                    Descrição
                                </label>

                                <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Descreva seu serviço, seus diferenciais e o que os clientes podem encontrar."
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="6"
                                    required
                                />

                            </div>

                        </section>


                        {/* ==================================
                LOCALIZAÇÃO E CONTATO
            ================================== */}

                        <section className="create-ad-section">

                            <div className="create-ad-section-title">

                                <MapPin size={19} />

                                <div>

                                    <h2>
                                        Contato
                                    </h2>

                                    <p>
                                        Informe onde seu contato.
                                    </p>

                                </div>

                            </div>


                       

                               


                            {/* TELEFONE */}

                            <div className="create-ad-field">

                                <label htmlFor="phone">

                                    <Phone size={15} />

                                    Telefone ou WhatsApp

                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="(00) 00000-0000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </section>


                        {/* ==================================
                IMAGEM
            ================================== */}

                        <section className="create-ad-section">

                            <div className="create-ad-section-title">

                                <ImagePlus size={19} />

                                <div>

                                    <h2>
                                        Imagem do anúncio
                                    </h2>

                                    <p>
                                        Adicione uma imagem para deixar
                                        seu anúncio mais atrativo.
                                    </p>

                                </div>

                            </div>


                            <label
                                htmlFor="ad-image"
                                className="image-upload"
                            >

                                {imagePreview ? (

                                    <img
                                        src={imagePreview}
                                        alt="Pré-visualização do anúncio"
                                        className="image-preview"
                                    />

                                ) : (

                                    <>

                                        <div className="image-upload-icon">

                                            <ImagePlus size={28} />

                                        </div>


                                        <strong>
                                            Clique para adicionar uma imagem
                                        </strong>


                                        <span>
                                            PNG, JPG ou WEBP
                                        </span>

                                    </>

                                )}


                                <input
                                    id="ad-image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />

                            </label>

                        </section>


                        {/* ==================================
                AÇÕES
            ================================== */}

                        <div className="create-ad-actions">

                            <button
                                type="button"
                                className="create-ad-cancel"
                                onClick={handleCancel}
                            >

                                Cancelar

                            </button>


                            <button
                                type="submit"
                                className="create-ad-submit"
                            >

                                <CheckCircle size={18} />

                                Publicar anúncio

                            </button>

                        </div>

                    </form>

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