import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    Home,
    Search,
    Heart,
    Star,
    MessageCircle,
    User,
    LogOut,
    Sun,
    Moon,
    Bell,
    MapPin,
    ArrowUpRight,
    ChevronRight,
    Dumbbell,
    Music,
    Palette,
    GraduationCap,
    Stethoscope,
    Wrench,
    Menu,
    X,
    Sparkles,
} from "lucide-react";

import LogoutModal from "../../components/LogoutModal";
import useTheme from "../../hooks/useTheme";

import "./style.css";


export default function UserDashboard() {

    const navigate = useNavigate();

    const { theme, toggleTheme } = useTheme();

    const [menuOpen, setMenuOpen] = useState(false);

    const [search, setSearch] = useState("");

    const [showLogoutModal, setShowLogoutModal] =
        useState(false);

    /* ==========================================
       DADOS DO USUÁRIO
    ========================================== */

    const user = {
        name: "Usuário SIGMA",
        type: "Usuário",
        initials: "US",
    };

    /* ==========================================
     FUNÇÕES DE LOGOUT
  ========================================== */

    // Abre o modal de confirmação
    const handleLogout = () => {

        setShowLogoutModal(true);

    };


    // Confirma o logout
    const confirmLogout = () => {

        setShowLogoutModal(false);

        // Futuramente:
        // remover token
        // encerrar sessão
        // limpar dados do usuário

        navigate("/");

    };


    // Cancela o logout
    const cancelLogout = () => {

        setShowLogoutModal(false);

    };

    /* ==========================================
       CATEGORIAS
    ========================================== */

    const categories = [
        {
            name: "Academias",
            icon: Dumbbell,
        },
        {
            name: "Música",
            icon: Music,
        },
        {
            name: "Arte",
            icon: Palette,
        },
        {
            name: "Educação",
            icon: GraduationCap,
        },
        {
            name: "Saúde",
            icon: Stethoscope,
        },
        {
            name: "Serviços",
            icon: Wrench,
        },
    ];


    /* ==========================================
       RECOMENDADOS
    ========================================== */

    const recommendedServices = [
        {
            id: 1,
            category: "Academia",
            title: "Academia PowerFit",
            rating: "4.8",
            reviews: "234",
            location: "Centro, São Paulo - SP",
            price: "89,90",
            unit: "/mês",
            image:
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        },

        {
            id: 2,
            category: "Personal Trainer",
            title: "Personal Trainer - Carlos",
            rating: "4.9",
            reviews: "89",
            location: "Vila Mariana, São Paulo - SP",
            price: "120,00",
            unit: "/hora",
            image:
                "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
        },

        {
            id: 3,
            category: "Escola de Música",
            title: "Escola de Música Harmonia",
            rating: "4.7",
            reviews: "156",
            location: "Pinheiros, São Paulo - SP",
            price: "200,00",
            unit: "/mês",
            image:
                "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
        },

        {
            id: 4,
            category: "Escola de Arte",
            title: "Ateliê de Arte Criativa",
            rating: "4.6",
            reviews: "78",
            location: "Moema, São Paulo - SP",
            price: "180,00",
            unit: "/mês",
            image:
                "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
        },
    ];


    /* ==========================================
       MELHOR AVALIADOS
    ========================================== */

    const topRatedServices = [
        {
            id: 5,
            category: "Professor de Música",
            title: "Prof. Ana - Aulas de Piano",
            rating: "5.0",
            reviews: "45",
            location: "Consolação, São Paulo - SP",
            price: "90,00",
            unit: "/aula",
            image:
                "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
        },

        {
            id: 6,
            category: "Personal Trainer",
            title: "Personal Trainer - Carlos",
            rating: "4.9",
            reviews: "89",
            location: "Vila Mariana, São Paulo - SP",
            price: "120,00",
            unit: "/hora",
            image:
                "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
        },

        {
            id: 7,
            category: "Academia",
            title: "Academia PowerFit",
            rating: "4.8",
            reviews: "234",
            location: "Centro, São Paulo - SP",
            price: "89,90",
            unit: "/mês",
            image:
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        },

        {
            id: 8,
            category: "Nutricionista",
            title: "Nutricionista - Dra. Mariana",
            rating: "4.8",
            reviews: "67",
            location: "Jardins, São Paulo - SP",
            price: "250,00",
            unit: "/sessão",
            image:
                "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
        },
    ];


    /* ==========================================
       SERVIÇOS PRÓXIMOS
    ========================================== */

    const nearbyServices = [
        {
            id: 9,
            category: "Academia",
            title: "Smart Fitness",
            rating: "4.7",
            reviews: "112",
            location: "Bela Vista, São Paulo - SP",
            price: "99,90",
            unit: "/mês",
            image:
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        },

        {
            id: 10,
            category: "Arte",
            title: "Studio Criativo",
            rating: "4.6",
            reviews: "52",
            location: "Aclimação, São Paulo - SP",
            price: "150,00",
            unit: "/mês",
            image:
                "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
        },

        {
            id: 11,
            category: "Música",
            title: "Escola Musical",
            rating: "4.8",
            reviews: "94",
            location: "Liberdade, São Paulo - SP",
            price: "180,00",
            unit: "/mês",
            image:
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
        },

        {
            id: 12,
            category: "Saúde",
            title: "Clínica Bem-Estar",
            rating: "4.9",
            reviews: "128",
            location: "Paraíso, São Paulo - SP",
            price: "180,00",
            unit: "/sessão",
            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        },
    ];


    /* ==========================================
       BUSCA
    ========================================== */

    const handleSearch = (event) => {

        event.preventDefault();

        if (!search.trim()) {
            navigate("/user-search");
            return;
        }

        navigate(`/user-search?q=${encodeURIComponent(search)}`);
    };





    /* ==========================================
       CARD
    ========================================== */

    const ServiceCard = ({ service }) => {

        return (

            <div className="user-service-card">

                <div className="user-service-image">

                    <img
                        src={service.image}
                        alt={service.title}
                    />

                    <span className="user-service-category">
                        {service.category}
                    </span>

                    <button
                        className="service-favorite"
                        aria-label="Adicionar aos favoritos"
                    >
                        <Heart size={18} />
                    </button>

                </div>


                <div className="user-service-content">

                    <h3>
                        {service.title}
                    </h3>


                    <div className="service-rating">

                        <div className="stars">

                            <Star
                                size={14}
                                fill="currentColor"
                            />

                            <Star
                                size={14}
                                fill="currentColor"
                            />

                            <Star
                                size={14}
                                fill="currentColor"
                            />

                            <Star
                                size={14}
                                fill="currentColor"
                            />

                            <Star
                                size={14}
                                fill="currentColor"
                            />

                        </div>

                        <strong>
                            {service.rating}
                        </strong>

                        <span>
                            ({service.reviews})
                        </span>

                    </div>


                    <div className="service-location">

                        <MapPin size={14} />

                        <span>
                            {service.location}
                        </span>

                    </div>


                    <div className="service-card-footer">

                        <div className="service-price">

                            <strong>
                                R$ {service.price}
                            </strong>

                            <span>
                                {service.unit}
                            </span>

                        </div>


                        <Link
                            to={`/servico/${service.id}`}
                            className="service-details-button"
                        >
                            Ver detalhes
                        </Link>

                    </div>

                </div>

            </div>

        );

    };


    return (

        <div
            className={`user-dashboard ${theme}`}
        >


            {/* ==========================================
                OVERLAY MOBILE
            ========================================== */}

            {menuOpen && (

                <div
                    className="dashboard-overlay"
                    onClick={() => setMenuOpen(false)}
                />

            )}


            {/* ==========================================
                SIDEBAR
            ========================================== */}

            <aside
                className={`user-sidebar ${menuOpen ? "open" : ""
                    }`}
            >


                {/* LOGO */}

                <div className="user-logo">

                    <div className="user-logo-icon">

                        <Sparkles size={21} />

                    </div>


                    <div className="user-logo-text">

                        <strong>
                            SIGMA
                        </strong>

                        <span>
                            Serviços urbanos
                        </span>

                    </div>


                    <button
                        className="close-menu"
                        onClick={() => setMenuOpen(false)}
                    >

                        <X size={20} />

                    </button>

                </div>


                {/* MENU */}

                <nav className="user-menu">


                    <Link
                        to="/user-dashboard"
                        className="user-menu-item active"
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
                        className="user-menu-item"
                    >

                        <User size={19} />

                        <span>
                            Perfil
                        </span>

                    </Link>

                </nav>


                {/* FOOTER */}

                <div className="user-sidebar-footer">

                    <button
                        className="user-logout"
                        onClick={handleLogout}
                    >

                        <LogOut size={19} />

                        <span>
                            Sair
                        </span>

                    </button>

                </div>

            </aside>


            {/* ==========================================
                CONTEÚDO
            ========================================== */}

            <div className="user-content">


                {/* ==========================================
                    HEADER
                ========================================== */}

                <header className="user-header">


                    <button
                        className="open-menu"
                        onClick={() => setMenuOpen(true)}
                    >

                        <Menu size={21} />

                    </button>


                    {/* BUSCA PRINCIPAL */}

                    <form
                        className="user-main-search"
                        onSubmit={handleSearch}
                    >

                        <Search size={21} />

                        <input
                            type="text"
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            placeholder="Busque por academias, serviços, profissionais..."
                            aria-label="Buscar serviços"
                        />

                        <button
                            type="submit"
                            className="main-search-button"
                        >
                            Buscar
                        </button>

                    </form>


                    <div className="header-spacer" />


                    {/* AÇÕES */}

                    <div className="user-header-actions">


                        <button
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


                        <button
                            className="notification-button"
                            aria-label="Notificações"
                        >

                            <Bell size={19} />

                            <span className="notification-indicator" />

                        </button>


                        <Link
                            to="/user-profile"
                            className="user-profile-header"
                        >

                            <div className="user-profile-avatar">
                                {user.initials}
                            </div>


                            <div className="user-profile-info">

                                <strong>
                                    {user.name}
                                </strong>

                                <span>
                                    {user.type}
                                </span>

                            </div>

                        </Link>

                    </div>

                </header>


                {/* ==========================================
                    MAIN
                ========================================== */}

                <main className="user-dashboard-main">


                    {/* ==========================================
                        BOAS-VINDAS
                    ========================================== */}

                    <section className="user-welcome">

                        <div>

                            <span className="welcome-label">
                                Olá, {user.name.split(" ")[0]}!
                            </span>

                            <h1>
                                Encontre o serviço ideal para você
                            </h1>

                            <p>
                                Descubra empresas e profissionais
                                avaliados na sua região.
                            </p>

                        </div>

                    </section>


                    {/* ==========================================
                        CATEGORIAS
                    ========================================== */}

                    <section className="user-section categories-section">


                        <div className="section-header">

                            <div>

                                <h2>
                                    Explore por categoria
                                </h2>

                                <p>
                                    Encontre exatamente o que você precisa
                                </p>

                            </div>


                            <Link
                                to="/user-search"
                                className="see-all-link"
                            >

                                Ver todas

                                <ChevronRight size={17} />

                            </Link>

                        </div>


                        <div className="categories-grid">

                            {categories.map((category) => {

                                const Icon = category.icon;

                                return (

                                    <Link
                                        key={category.name}
                                        to={`/user-search?categoria=${category.name}`}
                                        className="category-card"
                                    >

                                        <div className="category-icon">

                                            <Icon size={22} />

                                        </div>

                                        <span>
                                            {category.name}
                                        </span>

                                    </Link>

                                );

                            })}

                        </div>

                    </section>


                    {/* ==========================================
                        RECOMENDADOS
                    ========================================== */}

                    <section className="user-section">


                        <div className="section-header">

                            <div className="section-title">

                                <ArrowUpRight size={21} />

                                <div>

                                    <h2>
                                        Recomendados para você
                                    </h2>

                                    <p>
                                        Selecionados com base nas suas preferências
                                    </p>

                                </div>

                            </div>


                            <Link
                                to="/user-search"
                                className="see-all-link"
                            >

                                Ver mais

                                <ChevronRight size={17} />

                            </Link>

                        </div>


                        <div className="services-grid">

                            {recommendedServices.map((service) => (

                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                />

                            ))}

                        </div>

                    </section>


                    {/* ==========================================
                        MELHOR AVALIADOS
                    ========================================== */}

                    <section className="user-section">


                        <div className="section-header">

                            <div className="section-title">

                                <Star
                                    size={21}
                                    fill="currentColor"
                                />

                                <div>

                                    <h2>
                                        Melhor avaliados
                                    </h2>

                                    <p>
                                        Serviços com as melhores avaliações
                                    </p>

                                </div>

                            </div>


                            <Link
                                to="/user-search?ordenar=avaliacao"
                                className="see-all-link"
                            >

                                Ver mais

                                <ChevronRight size={17} />

                            </Link>

                        </div>


                        <div className="services-grid">

                            {topRatedServices.map((service) => (

                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                />

                            ))}

                        </div>

                    </section>


                    {/* ==========================================
                        PRÓXIMOS
                    ========================================== */}

                    <section className="user-section">


                        <div className="section-header">

                            <div className="section-title">

                                <MapPin size={21} />

                                <div>

                                    <h2>
                                        Serviços próximos
                                    </h2>

                                    <p>
                                        Opções encontradas perto de você
                                    </p>

                                </div>

                            </div>


                            <Link
                                to="/user-search?ordenar=proximidade"
                                className="see-all-link"
                            >

                                Ver mais

                                <ChevronRight size={17} />

                            </Link>

                        </div>


                        <div className="services-grid">

                            {nearbyServices.map((service) => (

                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                />

                            ))}

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

            </div>

        </div>

    );

}