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

export default function CompanyCreateAd() {

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

  const [sidebarOpen, setSidebarOpen] =
    useState(false);


  // ==========================================
  // FORMULÁRIO
  // ==========================================

  const [formData, setFormData] = useState({

    title: "",

    category: "",

    customCategory: "",

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

  const company = {

    name: "Usuário SIGMA",

    initials: "US",

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
  // TELEFONE
  // ==========================================

  function handlePhoneChange(e) {

    // Remove tudo que não for número
    let value = e.target.value.replace(/\D/g, "");

    // Limita a 11 números
    value = value.slice(0, 11);


    // ==========================================
    // FORMATAÇÃO
    // ==========================================

    // Apenas DDD
    if (value.length <= 2) {

      value = value.replace(
        /^(\d{0,2})/,
        "($1"
      );

    }

    // DDD + número
    else if (value.length <= 7) {

      value = value.replace(
        /^(\d{2})(\d{0,5})$/,
        "($1) $2"
      );

    }

    // Telefone completo
    else {

      value = value.replace(
        /^(\d{2})(\d{5})(\d{0,4})$/,
        "($1) $2-$3"
      );

    }


    setFormData({

      ...formData,

      phone: value,

    });

  }


  // ==========================================
  // MENU
  // ==========================================

  const menuItems = [

    {
      label: "Painel",

      icon: LayoutDashboard,

      path: "/company-dashboard",
    },

    {
      label: "Meus Anúncios",

      icon: Megaphone,

      path: "/company-ads",
    },

    {
      label: "Mensagens",

      icon: MessageCircle,

      path: "/company-messages",
    },

    {
      label: "Perfil",

      icon: User,

      path: "/company-profile",
    },

    {
      label: "Plano Empresarial",

      icon: Crown,

      path: "/company-plan",
    },

  ];


  // ==========================================
  // ATUALIZAR CAMPOS
  // ==========================================

  function handleChange(event) {

    const {
      name,
      value,
    } = event.target;

    let newValue = value;


    // ==========================================
    // CATEGORIA
    // ==========================================

    if (name === "category") {

      newValue =
        value.toUpperCase();


      // Se mudar de "Outros" para
      // outra categoria, limpa a
      // categoria personalizada.

      if (newValue !== "OUTROS") {

        setFormData({

          ...formData,

          category: newValue,

          customCategory: "",

        });

        return;

      }

    }


    // ==========================================
    // CIDADE
    // ==========================================

    if (name === "city") {

      // Permite apenas letras e espaços
      newValue =
        value.replace(
          /[^a-zA-ZÀ-ÿ\s]/g,
          ""
        );

      // Converte para letras maiúsculas
      newValue =
        newValue.toUpperCase();

    }


    // ==========================================
    // CATEGORIA PERSONALIZADA
    // ==========================================

    if (name === "customCategory") {

      // Permite apenas letras e espaços
      newValue =
        value.replace(
          /[^a-zA-ZÀ-ÿ\s]/g,
          ""
        );

      // Converte para letras maiúsculas
      newValue =
        newValue.toUpperCase();

    }


    // ==========================================
    // ATUALIZA FORMULÁRIO
    // ==========================================

    setFormData({

      ...formData,

      [name]: newValue,

    });

  }


  // ==========================================
  // UPLOAD DA IMAGEM
  // ==========================================

  function handleImageChange(event) {

    const file =
      event.target.files[0];

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


    // ==========================================
    // CATEGORIA FINAL
    // ==========================================

    const categoriaFinal =
      formData.category === "OUTROS"
        ? formData.customCategory
        : formData.category;


    // ==========================================
    // DADOS PARA O BANCO
    // ==========================================

    const dadosParaBanco = {

      ...formData,

      // Se for "OUTROS", salva a
      // categoria digitada pelo usuário.
      category: categoriaFinal,

      // Remove máscara do telefone
      phone:
        formData.phone.replace(
          /\D/g,
          ""
        ),

    };


    console.log(
      "Novo anúncio:",
      dadosParaBanco
    );


    // Futuramente:
    // Os dados serão enviados para
    // o backend e banco de dados.


    navigate("/company-ads");

  }


  // ==========================================
  // CANCELAR
  // ==========================================

  function handleCancel() {

    navigate("/company-ads");

  }


  return (

    <main
      className={`company-create-ad ${theme}`}
    >

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

            <Building2 size={23} />

          </div>


          <div className="create-ad-logo-text">

            <strong>
              SIGMA
            </strong>

            <span>
              Empresa
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

            const Icon =
              item.icon;

            const isActive =
              location.pathname ===
              item.path;

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

        <div
          className="create-ad-sidebar-footer"
        >

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


          <div
            className="create-ad-header-spacer"
          />


          <div
            className="create-ad-header-actions"
          >

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

              <span
                className="create-ad-notification-indicator"
              />

            </button>


            {/* PERFIL */}

            <Link
              to="/company-profile"
              className="create-ad-profile-header"
            >

              <div
                className="create-ad-profile-avatar"
              >

                {company.initials}

              </div>


              <div
                className="create-ad-profile-info"
              >

                <strong>
                  {company.name}
                </strong>

                <span>
                  Empresa
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
            to="/company-ads"
            className="create-ad-back"
          >

            <ArrowLeft size={18} />

            Voltar para meus anúncios

          </Link>


          {/* CABEÇALHO */}

          <div className="create-ad-title">

            <div
              className="create-ad-title-icon"
            >

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

            <section
              className="create-ad-section"
            >

              <div
                className="create-ad-section-title"
              >

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
                  placeholder="Ex: Academia com musculação e personal trainer"
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
                    Academia
                  </option>

                  <option value="musica">
                    Escola de Música
                  </option>

                  <option value="cultura">
                    Centro Cultural
                  </option>

                  <option value="esportes">
                    Esportes
                  </option>

                  <option value="educacao">
                    Educação
                  </option>

                  <option value="outros">
                    Outros
                  </option>

                </select>

              </div>


              {/* ==================================
                  CATEGORIA PERSONALIZADA
              ================================== */}

              {formData.category === "OUTROS" && (

                <div
                  className="create-ad-custom-category"
                >

                  <label htmlFor="customCategory">
                    Digite sua categoria
                  </label>

                  <input
                    id="customCategory"
                    name="customCategory"
                    type="text"
                    placeholder="Ex: Dança, Fotografia, Gastronomia..."
                    value={formData.customCategory}
                    onChange={handleChange}
                    required
                  />

                  <small>
                    Informe a categoria que melhor
                    representa seu serviço.
                  </small>

                </div>

              )}


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

            <section
              className="create-ad-section"
            >

              <div
                className="create-ad-section-title"
              >

                <MapPin size={19} />

                <div>

                  <h2>
                    Localização e contato
                  </h2>

                  <p>
                    Informe onde sua empresa está localizada.
                  </p>

                </div>

              </div>


              <div className="create-ad-grid">

                {/* CIDADE */}

                <div className="create-ad-field">

                  <label htmlFor="city">
                    Cidade
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Ex: Mogi Guaçu"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />

                </div>


                {/* ESTADO */}

                <div className="create-ad-field">

                  <label htmlFor="state">
                    Estado
                  </label>

                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Selecione
                    </option>

                    <option value="AC">
                      Acre
                    </option>

                    <option value="AL">
                      Alagoas
                    </option>

                    <option value="AP">
                      Amapá
                    </option>

                    <option value="AM">
                      Amazonas
                    </option>

                    <option value="BA">
                      Bahia
                    </option>

                    <option value="CE">
                      Ceará
                    </option>

                    <option value="ES">
                      Espirito Santo
                    </option>

                    <option value="GO">
                      Goias
                    </option>

                    <option value="MA">
                      Maranhão
                    </option>

                    <option value="MT">
                      Mato Grosso
                    </option>

                    <option value="MS">
                      Mato Grosso do Sul
                    </option>

                    <option value="MG">
                      Minas Gerais
                    </option>

                    <option value="PA">
                      Pará
                    </option>

                    <option value="PB">
                      Paraíba
                    </option>

                    <option value="PR">
                      Paraná
                    </option>

                    <option value="PE">
                      Pernambuco
                    </option>

                    <option value="PI">
                      Piauí
                    </option>

                    <option value="RJ">
                      Rio de Janeiro
                    </option>

                    <option value="RN">
                      Rio Grande do Norte
                    </option>

                    <option value="RS">
                      Rio Grande do Sul
                    </option>

                    <option value="RO">
                      Rondônia
                    </option>

                    <option value="RR">
                      Roraima
                    </option>

                    <option value="SC">
                      Santa Catarina
                    </option>

                    <option value="SP">
                      São Paulo
                    </option>

                    <option value="SE">
                      Sergipe
                    </option>

                    <option value="TO">
                      Tocantins
                    </option>

                  </select>

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
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  maxLength={15}
                  inputMode="numeric"
                  placeholder="(00) 00000-0000"
                  required
                />

              </div>

            </section>


            {/* ==================================
                IMAGEM
            ================================== */}

            <section
              className="create-ad-section"
            >

              <div
                className="create-ad-section-title"
              >

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

                    <div
                      className="image-upload-icon"
                    >

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