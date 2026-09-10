// Importa o CSS específico da Landing
import "./style.css";

// Importa o botão responsável por alternar o tema
import ThemeButton from "../../components/ThemeButton/ThemeButton";

// Importa o hook responsável por controlar o tema
import useTheme from "../../hooks/useTheme";

// Importa o componente Link para navegação entre rotas
import { Link } from "react-router-dom";

// Importa os ícones utilizados nos cards
import {
  Briefcase,
  Building2,
  User,
  Shield
} from "lucide-react";


// Lista de perfis disponíveis na plataforma
const roles = [

  {
    id: "management",
    label: "Gestão",
    description: "Acesso administrativo ao sistema",
    icon: Shield,
    className: "management",
    path: "/management-login",
    loginOnly: true,
  },

  {
    id: "company",
    label: "Empresas",
    description: "Gerencie seus serviços e atraia clientes",
    icon: Building2,
    className: "company",
    path: "/auth/company",
  },

  {
    id: "professional",
    label: "Profissional",
    description: "Publique seus serviços e conecte-se com clientes",
    icon: Briefcase,
    className: "professional",
    path: "/auth/professional",
  },

  {
    id: "user",
    label: "Usuário",
    description: "Encontre os melhores serviços e profissionais",
    icon: User,
    className: "user",
    path: "/auth/user",
  },

];


// Componente principal da Landing Page
function Landing() {


  // Obtém o tema atual da aplicação
  const { theme } = useTheme();


  return (

    <main className={`landing ${theme}`}>


      {/* Botão que alterna entre tema claro e escuro */}
      <ThemeButton />


      <section className="hero">


        <div className="logo">


          <div className="logo-icon">

            <Briefcase size={28} />

          </div>


          <h1>SIGMA</h1>


        </div>


        <p>
          Conectando você aos melhores serviços urbanos,
          profissionais e empresas.
        </p>


      </section>



      <section className="cards">


        {roles.map((role) => {


          // Armazena o ícone do card atual
          const Icon = role.icon;


          return (


            <Link

              // Define uma chave única para o React
              key={role.id}

              // Define a rota de destino
              to={role.path}

              // Classe usada para estilização
              className="card-link"

            >


              <article className="card">


                <div className={`icon ${role.className}`}>

                  <Icon size={28}/>

                </div>


                <h2>{role.label}</h2>


                <p>{role.description}</p>



                {role.loginOnly && (

                  <span className="badge">

                    Somente Login

                  </span>

                )}


              </article>


            </Link>


          );


        })}


      </section>



      <footer>

        © 2026 SIGMA — Todos os direitos reservados

      </footer>


    </main>

  );

}


export default Landing;