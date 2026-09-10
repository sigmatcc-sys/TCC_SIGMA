// Importa as funções necessárias do React
import { createContext, useEffect, useState } from "react";

// Cria o contexto que será compartilhado com toda a aplicação
const ThemeContext = createContext();

// Cria o componente Provider responsável por fornecer o tema
function ThemeProvider({ children }) {

    // Recupera o tema salvo no navegador
    const savedTheme = localStorage.getItem("theme");

    // Cria o estado do tema
    // Caso exista um tema salvo, ele será utilizado
    // Caso contrário, o tema padrão será o escuro
    const [theme, setTheme] = useState(savedTheme || "dark");

    // Executa sempre que o tema mudar
    useEffect(() => {

        // Salva o tema escolhido no navegador
        localStorage.setItem("theme", theme);

        // Remove a classe "light" do body
        document.body.classList.remove("light");

        // Remove a classe "dark" do body
        document.body.classList.remove("dark");

        // Adiciona ao body a classe correspondente ao tema atual
        document.documentElement.setAttribute("data-theme", theme);

    }, [theme]);

    // Função responsável por alternar entre claro e escuro
    function toggleTheme() {

        // Atualiza o tema com base no valor anterior
        setTheme((currentTheme) => {

            // Se estiver escuro, muda para claro
            if (currentTheme === "dark") {

                return "light";

            }

            // Caso contrário, muda para escuro
            return "dark";

        });

    }

    // Retorna o Provider disponibilizando os dados para toda a aplicação
    return (

        // Provider do contexto
        <ThemeContext.Provider

            // Valores que ficarão disponíveis em qualquer componente
            value={{

                // Tema atual
                theme,

                // Função para alterar o tema
                toggleTheme

            }}

        >

            {/* Renderiza todos os componentes filhos */}
            {children}

        </ThemeContext.Provider>

    );

}

// Exporta o contexto
export { ThemeContext };

// Exporta o Provider
export { ThemeProvider };