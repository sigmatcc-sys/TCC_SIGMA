import "./style.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  ArrowLeft,
  CheckCheck,
  Sun,
  Moon,
  Home,
  Heart,
  Star,
  MessageCircle,
  User,
  LogOut,
  Sparkles,
} from "lucide-react";

import LogoutModal from "../../components/LogoutModal";
import useTheme from "../../hooks/useTheme";

const conversationsData = [
  {
    id: 1,
    name: "Mariana Alves",
    avatar: "MA",
    status: "online",
    lastMessage: "Gostaria de saber mais sobre os horários.",
    time: "14:32",
    unread: 0,
    class: "Profissional",

    messages: [
      {
        id: 1,
        text: "Olá! Gostaria de saber mais sobre os serviços oferecidos.",
        time: "14:28",
        sender: "received",
      },
      {
        id: 2,
        text: "Olá, Mariana! Claro. Posso te ajudar com isso.",
        time: "14:29",
        sender: "sent",
      },
      {
        id: 3,
        text: "Gostaria de saber mais sobre os horários.",
        time: "14:32",
        sender: "received",
      },
    ],
  },

  {
    id: 2,
    name: "Lucas Ferreira",
    avatar: "LF",
    status: "online",
    lastMessage: "Perfeito, obrigado!",
    time: "13:15",
    unread: 0,
    class: "Usuário",

    messages: [
      {
        id: 1,
        text: "Vocês possuem aulas particulares?",
        time: "13:10",
        sender: "received",
      },
      {
        id: 2,
        text: "Sim! Temos profissionais cadastrados em diversas áreas.",
        time: "13:12",
        sender: "sent",
      },
      {
        id: 3,
        text: "Perfeito, obrigado!",
        time: "13:15",
        sender: "received",
      },
    ],
  },

  {
    id: 3,
    name: "Ana Beatriz",
    avatar: "AB",
    status: "offline",
    lastMessage: "Vou verificar e retorno.",
    time: "Ontem",
    unread: 0,
    class: "Usuário",

    messages: [
      {
        id: 1,
        text: "Olá! Vocês trabalham com planos mensais?",
        time: "18:20",
        sender: "received",
      },
      {
        id: 2,
        text: "Sim, temos algumas opções de planos.",
        time: "18:24",
        sender: "sent",
      },
      {
        id: 3,
        text: "Vou verificar e retorno.",
        time: "18:27",
        sender: "received",
      },
    ],
  },

  {
    id: 4,
    name: "Pedro Henrique",
    avatar: "PH",
    status: "offline",
    lastMessage: "Obrigado pelas informações.",
    time: "Ontem",
    unread: 0,
    class: "Profissional",

    messages: [
      {
        id: 1,
        text: "Boa tarde! Gostaria de conhecer melhor a empresa.",
        time: "15:42",
        sender: "received",
      },
      {
        id: 2,
        text: "Boa tarde! Será um prazer ajudar.",
        time: "15:44",
        sender: "sent",
      },
      {
        id: 3,
        text: "Obrigado pelas informações.",
        time: "15:47",
        sender: "received",
      },
    ],
  },
];

export default function UserMessages() {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

  const [conversations, setConversations] =
    useState(conversationsData);

  const [selectedId, setSelectedId] = useState(1);

  const [search, setSearch] = useState("");

  const [message, setMessage] = useState("");

  const [mobileChat, setMobileChat] = useState(false);

  const selectedConversation = conversations.find(
    (conversation) => conversation.id === selectedId
  );

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

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


  function selectConversation(id) {
    setSelectedId(id);
    setMobileChat(true);

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === id
          ? {
            ...conversation,
            unread: 0,
          }
          : conversation
      )
    );
  }

  function sendMessage() {
    if (!message.trim()) return;

    const text = message.trim();

    const newMessage = {
      id: Date.now(),

      text,

      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),

      sender: "sent",
    };

    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === selectedId
          ? {
            ...conversation,

            messages: [
              ...conversation.messages,
              newMessage,
            ],

            lastMessage: text,

            time: "Agora",
          }
          : conversation
      )
    );

    setMessage("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <main className={`user-messages ${theme}`}>

      {/* ==========================================
          SIDEBAR PRINCIPAL DO USUÁRIO
      ========================================== */}

      <aside className="user-sidebar">

        <div className="user-logo">

          <div className="user-logo-icon">
            <Sparkles size={21} />
          </div>

          <div className="user-logo-text">
            <strong>SIGMA</strong>
            <span>Serviços urbanos</span>
          </div>

        </div>


        <nav className="user-menu">

          <Link
            to="/user-dashboard"
            className="user-menu-item"
          >
            <Home size={19} />
            <span>Início</span>
          </Link>

          <Link
            to="/user-search"
            className="user-menu-item"
          >
            <Search size={19} />
            <span>Buscar</span>
          </Link>

          <Link
            to="/user-favorites"
            className="user-menu-item"
          >
            <Heart size={19} />
            <span>Favoritos</span>
          </Link>

          <Link
            to="/user-reviews"
            className="user-menu-item"
          >
            <Star size={19} />
            <span>Avaliações</span>
          </Link>

          <Link
            to="/user-messages"
            className="user-menu-item active"
          >
            <MessageCircle size={19} />
            <span>Mensagens</span>
          </Link>

          <Link
            to="/user-profile"
            className="user-menu-item"
          >
            <User size={19} />
            <span>Perfil</span>
          </Link>

        </nav>


        <div className="user-sidebar-footer">

          <button
            className="user-logout"
            onClick={handleLogout}
          >
            <LogOut size={19} />
            <span>Sair</span>

          </button>

        </div>

      </aside>


      {/* ==========================================
          LISTA DE CONVERSAS
      ========================================== */}

      <aside
        className={`conversation-sidebar ${mobileChat ? "mobile-hidden" : ""
          }`}
      >

        {/* CABEÇALHO */}

        <header className="conversation-header">

          <div>
            <h1>Mensagens</h1>

            <p>
              Suas conversas
            </p>
          </div>


          <div className="conversation-header-actions">

            <button
              type="button"
              onClick={toggleTheme}
              className="messages-theme-button"
              title="Alternar tema"
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              type="button"
              className="messages-more-button"
              title="Mais opções"
            >
              <MoreVertical size={18} />
            </button>

          </div>

        </header>



        {/* PESQUISA */}

        <div className="messages-search">

          <Search size={17} />

          <input
            type="text"
            placeholder="Pesquisar conversa..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

        </div>


        {/* LISTA */}

        <div className="conversation-list">

          {filteredConversations.length > 0 ? (

            filteredConversations.map(
              (conversation) => (

                <button
                  type="button"
                  key={conversation.id}
                  className={`conversation-item ${selectedId === conversation.id
                    ? "active"
                    : ""
                    }`}
                  onClick={() =>
                    selectConversation(conversation.id)
                  }
                >

                  {/* AVATAR */}

                  <div className="conversation-avatar-wrapper">

                    <div className="conversation-avatar">
                      {conversation.avatar}
                    </div>

                    <span
                      className={`status-dot ${conversation.status}`}
                    />

                  </div>


                  {/* INFORMAÇÕES */}

                  <div className="conversation-info">

                    <div className="conversation-top">

                      <strong>
                        {conversation.name}
                      </strong>

                      <span className="conversation-time">
                        {conversation.time}
                      </span>

                    </div>


                    <div className="conversation-middle">

                      <span className="badge-class">
                        {conversation.class}
                      </span>

                    </div>


                    <div className="conversation-bottom">

                      <p>
                        {conversation.lastMessage}
                      </p>

                      {conversation.unread > 0 && (
                        <span className="unread-badge">
                          {conversation.unread}
                        </span>
                      )}

                    </div>

                  </div>

                </button>

              )
            )

          ) : (

            <div className="empty-conversations">

              <Search size={28} />

              <p>
                Nenhuma conversa encontrada.
              </p>

            </div>

          )}

        </div>

      </aside>


      {/* ==========================================
          CHAT PRINCIPAL
      ========================================== */}

      <section
        className={`chat-container ${mobileChat ? "mobile-visible" : ""
          }`}
      >

        {selectedConversation && (
          <>

            {/* HEADER DO CHAT */}

            <header className="chat-header">

              <button
                type="button"
                className="mobile-back"
                onClick={() =>
                  setMobileChat(false)
                }
                aria-label="Voltar"
              >
                <ArrowLeft size={20} />
              </button>


              <div className="chat-contact-avatar">

                {selectedConversation.avatar}

                <span
                  className={`status-dot ${selectedConversation.status
                    }`}
                />

              </div>


              <div className="chat-contact-info">

                <h2>
                  {selectedConversation.name}
                </h2>

                <span>
                  {selectedConversation.status === "online"
                    ? "Online"
                    : "Offline"}
                </span>

              </div>


              <button
                type="button"
                className="chat-more"
                aria-label="Mais opções"
              >
                <MoreVertical size={20} />
              </button>

            </header>


            {/* MENSAGENS */}

            <section className="messages-content">

              <div className="chat-date">
                <span>Hoje</span>
              </div>


              {selectedConversation.messages.map(
                (msg) => (

                  <div
                    key={msg.id}
                    className={`message-row ${msg.sender}`}
                  >

                    <div className="message-bubble">

                      <p>
                        {msg.text}
                      </p>

                      <div className="message-meta">

                        <span>
                          {msg.time}
                        </span>

                        {msg.sender === "sent" && (
                          <CheckCheck size={15} />
                        )}

                      </div>

                    </div>

                  </div>

                )
              )}

            </section>


            {/* ENVIO */}

            <footer className="message-input-area">

              <button
                type="button"
                className="attachment-button"
                aria-label="Anexar arquivo"
              >
                <Paperclip size={19} />
              </button>


              <div className="message-input-wrapper">

                <textarea
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Digite uma mensagem..."
                  rows="1"
                />

              </div>


              <button
                type="button"
                className="send-message-button"
                onClick={sendMessage}
                disabled={!message.trim()}
                aria-label="Enviar mensagem"
              >
                <Send size={19} />
              </button>

            </footer>

          </>
        )}

      </section>

      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />

    </main>
  );
}