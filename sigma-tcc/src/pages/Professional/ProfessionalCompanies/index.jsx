import "./style.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Megaphone,
  List,
  Building2,
  MessageCircle,
  User,
  Crown,
  LogOut,
  Sun,
  Moon,
  Bell,
  Search,
  MapPin,
  Clock3,
  Phone,
  Menu,
  X,
  BriefcaseBusiness,
  
} from "lucide-react";

import useTheme from "../../../hooks/useTheme";
import LogoutModal from "../../../components/LogoutModal";


/* ==========================================
   EMPRESAS
========================================== */

const companiesData = [
  {
    id: 1,
    name: "Academia PowerFit",
    category: "Academia",
    description:
      "Academia completa com equipamentos de última geração, aulas de spinning, crossfit e musculação.",
    location: "Centro, São Paulo - SP",
    hours: "Seg-Sex 6h-22h, Sáb 8h-18h",
    phone: "(11) 99876-5432",
    price: "R$ 89,90/mês",
    image: "https://acadbrasil.com.br/wp-content/uploads/2022/04/3-dicas-para-aproveitar-melhor-o-espaco-da-academia-1024x681.jpg",
  },

  {
    id: 2,
    name: "Escola de Música Harmonia",
    category: "Escola de Música",
    description:
      "Escola de música com aulas de violão, piano, bateria, canto e teoria musical.",
    location: "Pinheiros, São Paulo - SP",
    hours: "Seg-Sex 9h-21h, Sáb 9h-17h",
    phone: "(11) 97654-3210",
    price: "R$ 200,00/mês",
    image: "https://www.maestrinho.net/uploads/1/2/7/5/127554080/sala-central-2_orig.jpg",
  },

  {
    id: 3,
    name: "Ateliê de Arte Criativa",
    category: "Escola de Arte",
    description:
      "Cursos de pintura, escultura e desenho para todas as idades. Turmas reduzidas para melhor aprendizado.",
    location: "Moema, São Paulo - SP",
    hours: "Seg-Sex 10h-20h",
    phone: "(11) 96543-2109",
    price: "R$ 180,00/mês",
    image: "https://static.wixstatic.com/media/1563f2_1894468edf9448bc9e2d9e8760f90384~mv2.jpg/v1/fill/w_640,h_440,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/1563f2_1894468edf9448bc9e2d9e8760f90384~mv2.jpg",
  },

  {
    id: 4,
    name: "CrossFit Urban Box",
    category: "Academia",
    description:
      "Box de CrossFit com coaches certificados. WODs diários, open gym e programas especiais para iniciantes.",
    location: "Itaim Bibi, São Paulo - SP",
    hours: "Seg-Sex 6h-21h, Sáb 8h-14h",
    phone: "(11) 94321-0987",
    price: "R$ 149,90/mês",
    image: "https://holdfit.com.br/wp-content/uploads/2022/05/musculacao-holdfit.jpg",
  },

  {
    id: 5,
    name: "Escola de Dança Movimento",
    category: "Escola de Dança",
    description:
      "Aulas de ballet, jazz, dança contemporânea e dança urbana para diferentes níveis.",
    location: "Bela Vista, São Paulo - SP",
    hours: "Seg-Sáb 9h-21h",
    phone: "(11) 92109-8765",
    price: "R$ 160,00/mês",
    image: "https://www.napontadope.com/wp-content/uploads/2018/05/Ensaio_StudiodeDan%C3%A7as2-570x398.jpg",
  },

  {
    id: 6,
    name: "Studio Corpo & Movimento",
    category: "Pilates",
    description:
      "Studio especializado em Pilates, alongamento e treinamento funcional personalizado.",
    location: "Vila Mariana, São Paulo - SP",
    hours: "Seg-Sex 7h-21h",
    phone: "(11) 93456-7812",
    price: "R$ 220,00/mês",
    image: "https://tecnofit-site.s3.sa-east-1.amazonaws.com/media/files/2023/02/06182925/aulas_coletivas_academia.png",
  },
];


export default function ProfessionalCompanies() {

  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [logoutModalOpen, setLogoutModalOpen] =
    useState(false);


  /* ==========================================
     MENU
  ========================================== */

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


  /* ==========================================
     FILTRO
  ========================================== */

  const filteredCompanies =
    companiesData.filter((company) => {

      const searchText =
        search.toLowerCase().trim();

      return (
        company.name
          .toLowerCase()
          .includes(searchText) ||

        company.category
          .toLowerCase()
          .includes(searchText) ||

        company.location
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


  return (

    <main
      className={`professional-companies ${theme}`}
    >

      {/* ======================================
          OVERLAY MOBILE
      ====================================== */}

      {sidebarOpen && (

        <div
          className="professional-companies-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        />

      )}


      {/* ======================================
          SIDEBAR
      ====================================== */}

      <aside
        className={`professional-companies-sidebar ${
          sidebarOpen ? "open" : ""
        }`}
      >

        {/* LOGO */}

        <div className="professional-companies-logo">

          <div className="professional-companies-logo-icon">

            <BriefcaseBusiness size={23} />

          </div>


          <div className="professional-companies-logo-text">

            <strong>
              SIGMA
            </strong>

            <span>
              Profissional
            </span>

          </div>


          <button
            type="button"
            className="professional-companies-close-menu"
            onClick={() =>
              setSidebarOpen(false)
            }
          >

            <X size={21} />

          </button>

        </div>


        {/* MENU */}

        <nav className="professional-companies-menu">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const isActive =
              item.path ===
              "/professional-companies";

            return (

              <Link
                key={item.label}
                to={item.path}
                className={`professional-companies-menu-item ${
                  isActive ? "active" : ""
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


        {/* LOGOUT */}

        <div className="professional-companies-sidebar-footer">

          <button
            type="button"
            className="professional-companies-logout"
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

      <section className="professional-companies-content">


        {/* ====================================
            HEADER
        ==================================== */}

        <header className="professional-companies-header">

          <button
            type="button"
            className="professional-companies-open-menu"
            onClick={() =>
              setSidebarOpen(true)
            }
          >

            <Menu size={22} />

          </button>


          <div className="professional-companies-header-spacer" />


          <div className="professional-companies-header-actions">

            {/* TEMA */}

            <button
              type="button"
              className="professional-companies-theme-toggle"
              onClick={toggleTheme}
              aria-label="Alternar tema"
            >

              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}

            </button>


            {/* NOTIFICAÇÃO */}

            <button
              type="button"
              className="professional-companies-notification"
              aria-label="Notificações"
            >

              <Bell size={18} />

              <span className="professional-companies-notification-indicator" />

            </button>


            {/* PERFIL */}

            <div className="professional-companies-profile">

              <div className="professional-companies-avatar">

                US

              </div>


              <div className="professional-companies-profile-info">

                <strong>
                  Usuário SIGMA
                </strong>

                <span>
                  Profissional
                </span>

              </div>

            </div>

          </div>

        </header>


        {/* ====================================
            MAIN
        ==================================== */}

        <div className="professional-companies-main">


          {/* TÍTULO */}

          <section className="professional-companies-title">

            <Building2 size={21} />

            <h1>
              Empresas Cadastradas
            </h1>

          </section>


          {/* PESQUISA */}

          <div className="professional-companies-search">

            <Search size={17} />

            <input
              type="text"
              placeholder="Buscar por nome, categoria ou localização..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

          </div>


          {/* ==================================
              LISTA
          ================================== */}

          <section className="professional-companies-grid">

            {filteredCompanies.length > 0 ? (

              filteredCompanies.map((company) => (

                <article
                  key={company.id}
                  className="professional-company-card"
                >

                  {/* IMAGEM */}

                  <div className="professional-company-image">

                    <img
                      src={company.image}
                      alt={company.name}
                    />

                  </div>


                  {/* CONTEÚDO */}

                  <div className="professional-company-info">

                    <span className="professional-company-category">

                      {company.category}

                    </span>


                    <h2>
                      {company.name}
                    </h2>


                    <p className="professional-company-description">

                      {company.description}

                    </p>


                    {/* LOCALIZAÇÃO */}

                    <div className="professional-company-detail">

                      <MapPin size={13} />

                      <span>
                        {company.location}
                      </span>

                    </div>


                    {/* HORÁRIO */}

                    <div className="professional-company-detail">

                      <Clock3 size={13} />

                      <span>
                        {company.hours}
                      </span>

                    </div>


                    {/* TELEFONE */}

                    <div className="professional-company-detail">

                      <Phone size={13} />

                      <span>
                        {company.phone}
                      </span>

                    </div>


                    {/* PREÇO */}

                    <div className="professional-company-price">

                      {company.price}

                    </div>


                    {/* CONTATO */}

                    <button
                      type="button"
                      className="professional-company-contact"
                      onClick={() =>
                        console.log(
                          "Entrar em contato:",
                          company.id
                        )
                      }
                    >

                      <MessageCircle size={15} />

                      Entrar em contato

                    </button>

                  </div>

                </article>

              ))

            ) : (

              <div className="professional-companies-empty">

                <Building2 size={32} />

                <strong>
                  Nenhuma empresa encontrada
                </strong>

                <p>
                  Tente pesquisar por outro nome,
                  categoria ou localização.
                </p>

              </div>

            )}

          </section>

        </div>

      </section>


      {/* ======================================
          LOGOUT MODAL
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