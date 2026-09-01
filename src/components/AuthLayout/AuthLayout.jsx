// Importa o arquivo de estilos do componente
import "./AuthLayout.css";

// Importa o componente responsável por alternar o tema
import ThemeButton from "../ThemeButton/ThemeButton";

// Importa o hook responsável por obter o tema atual
import useTheme from "../../hooks/useTheme";

// Importa o ícone utilizado como logo
import { Shield } from "lucide-react";

// Declara o componente
function AuthLayout({

    // Título da página
    title,

    // Subtítulo da página
    subtitle,

    // Conteúdo que será inserido dentro do card
    children,

    // Ícone que aparecerá acima do título
    icon

}){

    // Obtém o tema atual
    const { theme } = useTheme();

    // Define qual ícone será utilizado
    const Icon = icon || Shield;

    // Retorna o componente
    return(

        // Container principal
        <main className={`auth-layout ${theme}`}>

            {/* Botão para trocar o tema */}
            <ThemeButton />

            {/* Card principal */}
            <section className="auth-card">

                {/* Cabeçalho */}
                <header className="auth-header">

                    {/* Container do ícone */}
                    <div className="auth-icon">

                        {/* Ícone recebido por propriedade */}
                        <Icon size={34}/>

                    </div>

                    {/* Título */}
                    <h1>

                        {title}

                    </h1>

                    {/* Subtítulo */}
                    <p>

                        {subtitle}

                    </p>

                </header>

                {/* Conteúdo enviado pela página */}
                <section className="auth-content">

                    {children}

                </section>

            </section>

        </main>

    );

}

// Exporta o componente
export default AuthLayout;