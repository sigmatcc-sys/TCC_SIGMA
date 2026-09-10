import "./style.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    Search,
    Heart,
    Star,
    MapPin,
    Home,
    User,
    MessageCircle,
    LogOut,
    Sun,
    Moon,
    X,
    SlidersHorizontal,
    ChevronDown,
    Menu,
    BriefcaseBusiness,
    Bell,
    Sparkle,
    Sparkles,
} from "lucide-react";

import useTheme from "../../hooks/useTheme";
import LogoutModal from "../../components/LogoutModal";

export default function UserSearch() {

    const { theme, toggleTheme } = useTheme();

    const [menuOpen, setMenuOpen] = useState(false);
    const [logoutOpen, setLogoutOpen] = useState(false);

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("Todos");
    const [maxPrice, setMaxPrice] = useState(500);
    const [rating, setRating] = useState("Todas");

    const services = [
        {
            id: 1,
            name: "Academia PowerFit",
            category: "Academia",
            rating: 4.8,
            reviews: 234,
            location: "Centro, São Paulo - SP",
            price: "89.90",
            period: "mês",
            image:
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            name: "Personal Trainer - Carlos Silva",
            category: "Personal Trainer",
            rating: 4.9,
            reviews: 89,
            location: "Vila Mariana, São Paulo - SP",
            price: "120.00",
            period: "hora",
            image:
                "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            name: "Escola de Música Harmonia",
            category: "Escola de Música",
            rating: 4.7,
            reviews: 156,
            location: "Pinheiros, São Paulo - SP",
            price: "200.00",
            period: "mês",
            image:
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 4,
            name: "Ateliê de Arte Criativa",
            category: "Escola de Arte",
            rating: 4.6,
            reviews: 78,
            location: "Moema, São Paulo - SP",
            price: "180.00",
            period: "mês",
            image:
                "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 5,
            name: "Prof. Ana - Aulas de Piano",
            category: "Professor de Música",
            rating: 5.0,
            reviews: 45,
            location: "Consolação, São Paulo - SP",
            price: "90.00",
            period: "aula",
            image:
                "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 6,
            name: "Academia Strong Life",
            category: "Academia",
            rating: 4.5,
            reviews: 121,
            location: "Bela Vista, São Paulo - SP",
            price: "99.90",
            period: "mês",
            image:
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        },
    ];

    const filteredServices = services.filter((service) => {

        const matchesSearch =
            service.name.toLowerCase().includes(search.toLowerCase()) ||
            service.category.toLowerCase().includes(search.toLowerCase());

        const matchesLocation =
            !location ||
            service.location.toLowerCase().includes(location.toLowerCase());

        const matchesCategory =
            category === "Todos" ||
            service.category === category;

        const matchesPrice =
            parseFloat(service.price) <= maxPrice;

        const matchesRating =
            rating === "Todas" ||
            service.rating >= parseFloat(rating);

        return (
            matchesSearch &&
            matchesLocation &&
            matchesCategory &&
            matchesPrice &&
            matchesRating
        );
    });

    function clearFilters() {
        setSearch("");
        setLocation("");
        setCategory("Todos");
        setMaxPrice(500);
        setRating("Todas");
    }

    return (
        <div className={`user-dashboard ${theme}`}>

            {/* ==========================================
                SIDEBAR
            ========================================== */}

            <aside className={`user-sidebar ${menuOpen ? "open" : ""}`}>

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
                        <X size={21} />
                    </button>

                </div>


                <nav className="user-menu">

                    <NavLink
                        to="/user-dashboard"
                        className="user-menu-item"
                        onClick={() => setMenuOpen(false)}
                    >
                        <Home size={19} />
                        <span>Início</span>
                    </NavLink>


                    <NavLink
                        to="/user-search"
                        className="user-menu-item active"
                        onClick={() => setMenuOpen(false)}
                    >
                        <Search size={19} />
                        <span>Buscar</span>
                    </NavLink>


                    <NavLink
                        to="/user-favorites"
                        className="user-menu-item"
                        onClick={() => setMenuOpen(false)}
                    >
                        <Heart size={19} />
                        <span>Favoritos</span>
                    </NavLink>


                    <NavLink
                        to="/user-reviews"
                        className="user-menu-item"
                        onClick={() => setMenuOpen(false)}
                    >
                        <Star size={19} />
                        <span>Avaliações</span>
                    </NavLink>


                    <NavLink
                        to="/user-messages"
                        className="user-menu-item"
                        onClick={() => setMenuOpen(false)}
                    >
                        <MessageCircle size={19} />
                        <span>Mensagens</span>
                    </NavLink>


                    <NavLink
                        to="/user-profile"
                        className="user-menu-item"
                        onClick={() => setMenuOpen(false)}
                    >
                        <User size={19} />
                        <span>Perfil</span>
                    </NavLink>

                </nav>


                <div className="user-sidebar-footer">

                    <button
                        className="user-logout"
                        onClick={() => setLogoutOpen(true)}
                    >
                        <LogOut size={19} />
                        <span>Sair</span>
                    </button>

                </div>

            </aside>


            {/* ==========================================
                OVERLAY
            ========================================== */}

            {menuOpen && (
                <div
                    className="dashboard-overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}


            {/* ==========================================
                CONTENT
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


                    {/* <div className="user-header-search">

                        <Search size={18} />

                        <input
                            type="text"
                            placeholder="Buscar academias, serviços ou profissionais..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div> */}


                    <div className="header-spacer" />


                    <div className="user-header-actions">

                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            title="Alterar tema"
                        >
                            {theme === "dark" ? (
                                <Sun size={18} />
                            ) : (
                                <Moon size={18} />
                            )}
                        </button>


                        <button
                            className="notification-button"
                            title="Notificações"
                        >
                            <Bell size={18} />

                            <span className="notification-indicator" />
                        </button>


                        <NavLink
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

                        </NavLink>

                    </div>

                </header>


                {/* ==========================================
                    MAIN
                ========================================== */}

                <main className="user-search-main">


                    {/* ==========================================
                        TITLE
                    ========================================== */}

                    <section className="search-page-header">

                        <div>

                            <div className="search-page-title">

                                <Search size={22} />

                                <h1>Buscar Serviços</h1>

                            </div>

                            <p>
                                Encontre serviços e profissionais de acordo
                                com suas necessidades.
                            </p>

                        </div>

                        <span className="results-count">
                            {filteredServices.length} resultados
                        </span>

                    </section>


                    {/* ==========================================
                        SEARCH PRINCIPAL
                    ========================================== */}

                    <section className="big-search-section">

                        <div className="big-search-box">

                            <Search size={23} />

                            <input
                                type="text"
                                placeholder="O que você está procurando?"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            {search && (
                                <button
                                    className="clear-search"
                                    onClick={() => setSearch("")}
                                >
                                    <X size={18} />
                                </button>
                            )}

                            <button className="big-search-button">
                                <Search size={17} />
                                Buscar
                            </button>

                        </div>

                        <span className="search-hint">
                            Ex.: academia, professor de música, nutricionista...
                        </span>

                    </section>


                    {/* ==========================================
                        RESULTS AREA
                    ========================================== */}

                    <section className="search-results-area">


                        {/* ==========================================
                            FILTERS
                        ========================================== */}

                        <aside className="search-filters">

                            <div className="filters-header">

                                <div>
                                    <SlidersHorizontal size={18} />

                                    <strong>Filtros</strong>
                                </div>

                            </div>


                            {/* LOCALIZAÇÃO */}

                            <div className="filter-group">

                                <label>Localização</label>

                                <div className="filter-input">

                                    <MapPin size={16} />

                                    <input
                                        type="text"
                                        placeholder="Ex.: Vila Mariana, SP"
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                    />

                                </div>

                            </div>


                            {/* CATEGORIA */}

                            <div className="filter-group">

                                <label>Tipo de serviço</label>

                                <div className="filter-select">

                                    <select
                                        value={category}
                                        onChange={(e) =>
                                            setCategory(e.target.value)
                                        }
                                    >

                                        <option>Todos</option>
                                        <option>Academia</option>
                                        <option>Personal Trainer</option>
                                        <option>Escola de Música</option>
                                        <option>Escola de Arte</option>
                                        <option>Professor de Música</option>

                                    </select>

                                    <ChevronDown size={16} />

                                </div>

                            </div>


                            {/* PREÇO */}

                            <div className="filter-group">

                                <div className="filter-label-row">

                                    <label>Faixa de preço</label>

                                    <strong>
                                        Até R$ {maxPrice}
                                    </strong>

                                </div>

                                <input
                                    className="price-range"
                                    type="range"
                                    min="50"
                                    max="500"
                                    step="10"
                                    value={maxPrice}
                                    onChange={(e) =>
                                        setMaxPrice(e.target.value)
                                    }
                                />

                                <div className="range-values">
                                    <span>R$ 50</span>
                                    <span>R$ 500</span>
                                </div>

                            </div>


                            {/* AVALIAÇÃO */}

                            <div className="filter-group">

                                <label>Avaliação mínima</label>

                                <div className="rating-options">

                                    {["Todas", "4", "4.5", "5"].map(
                                        (value) => (

                                            <button
                                                key={value}
                                                className={
                                                    rating === value
                                                        ? "rating-option active"
                                                        : "rating-option"
                                                }
                                                onClick={() =>
                                                    setRating(value)
                                                }
                                            >

                                                {value === "Todas" ? (
                                                    "Todas"
                                                ) : (
                                                    <>
                                                        <Star size={14} />
                                                        {value}+
                                                    </>
                                                )}

                                            </button>

                                        )
                                    )}

                                </div>

                            </div>


                            <button
                                className="clear-filters-button"
                                onClick={clearFilters}
                            >
                                Limpar filtros
                            </button>

                        </aside>


                        {/* ==========================================
                            RESULTS
                        ========================================== */}

                        <div className="search-results">

                            <div className="results-top">

                                <div>

                                    <strong>
                                        Serviços encontrados
                                    </strong>

                                    <span>
                                        {filteredServices.length} opções
                                    </span>

                                </div>

                                <button className="sort-button">
                                    Mais relevantes
                                    <ChevronDown size={15} />
                                </button>

                            </div>


                            <div className="search-services-grid">

                                {filteredServices.map((service) => (

                                    <article
                                        className="user-service-card"
                                        key={service.id}
                                    >

                                        <div className="user-service-image">

                                            <img
                                                src={service.image}
                                                alt={service.name}
                                            />

                                            <span className="user-service-category">
                                                {service.category}
                                            </span>

                                            <button
                                                className="service-favorite"
                                                title="Adicionar aos favoritos"
                                            >
                                                <Heart size={18} />
                                            </button>

                                        </div>


                                        <div className="user-service-content">

                                            <h3>
                                                {service.name}
                                            </h3>


                                            <div className="service-rating">

                                                <div className="stars">

                                                    {[1, 2, 3, 4, 5].map(
                                                        (star) => (
                                                            <Star
                                                                key={star}
                                                                size={13}
                                                                fill="currentColor"
                                                            />
                                                        )
                                                    )}

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
                                                        /{service.period}
                                                    </span>

                                                </div>


                                                <NavLink
                                                    to={`/service/${service.id}`}
                                                    className="service-details-button"
                                                >
                                                    Ver detalhes
                                                </NavLink>

                                            </div>

                                        </div>

                                    </article>

                                ))}

                            </div>


                            {/* SEM RESULTADOS */}

                            {filteredServices.length === 0 && (

                                <div className="no-results">

                                    <Search size={38} />

                                    <h2>
                                        Nenhum serviço encontrado
                                    </h2>

                                    <p>
                                        Tente alterar os filtros ou utilizar
                                        outros termos de busca.
                                    </p>

                                    <button
                                        onClick={clearFilters}
                                    >
                                        Limpar filtros
                                    </button>

                                </div>

                            )}

                        </div>

                    </section>

                </main>

            </div>


            {/* ==========================================
                LOGOUT
            ========================================== */}

            <LogoutModal
                isOpen={logoutOpen}
                onConfirm={() => {
                    setLogoutOpen(false);
                    // coloque aqui sua lógica de logout
                }}
                onCancel={() => setLogoutOpen(false)}
            />

        </div>
    );
}