// Importa os estilos do componente
import "./PasswordInput.css";

// Importa o hook useState
import { useState } from "react";

// Importa os ícones
import {
    Lock,
    Eye,
    EyeOff
} from "lucide-react";

// Declara o componente
function PasswordInput({

    // Texto exibido acima do campo
    label = "Senha",

    // Valor do campo
    value,

    // Função chamada quando o valor muda
    onChange,

    // Placeholder
    placeholder = "Digite sua senha",

    // Nome do campo
    name = "password",

    // Define se o campo é obrigatório
    required = true

}){

    // Controla se a senha será exibida
    const [showPassword, setShowPassword] = useState(false);

    // Retorna o componente
    return(

        // Container principal
        <div className="password-input">

            {/* Label */}
            <label>

                {label}

            </label>

            {/* Container do campo */}
            <div className="password-container">

                {/* Ícone da esquerda */}
                <Lock

                    // Tamanho do ícone
                    size={18}

                    // Classe CSS
                    className="password-icon"

                />

                {/* Campo */}
                <input

                    // Nome
                    name={name}

                    // Tipo
                    type={showPassword ? "text" : "password"}

                    // Placeholder
                    placeholder={placeholder}

                    // Valor
                    value={value}

                    // Atualiza o estado
                    onChange={onChange}

                    // Obrigatório
                    required={required}

                />

                {/* Botão */}
                <button

                    // Tipo
                    type="button"

                    // Classe
                    className="password-toggle"

                    // Alterna a visualização da senha
                    onClick={()=>setShowPassword(!showPassword)}

                    // Texto ao passar o mouse
                    title={
                        showPassword
                        ? "Ocultar senha"
                        : "Mostrar senha"
                    }

                    // Melhora acessibilidade
                    aria-label={
                        showPassword
                        ? "Ocultar senha"
                        : "Mostrar senha"
                    }

                >

                    {/* Renderização condicional */}
                    {

                        showPassword

                        ?

                        <EyeOff size={18}/>

                        :

                        <Eye size={18}/>

                    }

                </button>

            </div>

        </div>

    );

}

// Exporta o componente
export default PasswordInput;