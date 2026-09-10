// Importa o arquivo de estilos do botão
import "./ThemeButton.css";

// Importa o hook que criaremos depois
import useTheme from "../../hooks/useTheme";

// Declara o componente
function ThemeButton() {

    // Obtém o tema atual e a função para alterá-lo
    const { theme, toggleTheme } = useTheme();

    // Retorna o botão
    return (

        // Botão responsável por alternar o tema
        <button

            // Classe CSS
            className={`theme-button ${theme}`}

            // Executa a troca de tema ao clicar
            onClick={toggleTheme}

            // Texto exibido ao passar o mouse
            title={
                theme === "dark"
                    ? "Ativar modo claro"
                    : "Ativar modo escuro"
            }

        >

            {/* Exibe o ícone conforme o tema */}
            {theme === "dark" ? "☀️" : "🌙"}

        </button>

    );

}

// Exporta o componente
export default ThemeButton;