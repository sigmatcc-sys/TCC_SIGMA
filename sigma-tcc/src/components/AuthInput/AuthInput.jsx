// Importa os estilos do componente
import "./AuthInput.css";

// Declara o componente
function AuthInput({

    // Texto exibido acima do campo
    label,

    // Tipo do input
    type = "text",

    // Ícone exibido no lado esquerdo
    icon: Icon,

    // Placeholder
    placeholder,

    // Valor do input
    value,

    // Função executada ao alterar o valor
    onChange,

    // Nome do campo
    name,

    // Campo obrigatório
    required = true,

    // Campo desabilitado
    disabled = false,

    // Valor mínimo
    min,

    // Valor máximo
    max,

    // Comprimento mínimo
    minLength,

    // Comprimento máximo
    maxLength,

    // Aceita autocomplete
    autoComplete = "off"

}){

    // Retorna o componente
    return(

        // Grupo do campo
        <div className="auth-input">

            {/* Verifica se existe um label */}
            {

                label && (

                    // Exibe o label
                    <label>

                        {label}

                    </label>

                )

            }

            {/* Container do input */}
            <div className="auth-input-container">

                {/* Verifica se existe um ícone */}
                {

                    Icon && (

                        // Renderiza o ícone
                        <Icon

                            // Define o tamanho
                            size={18}
                            // Classe CSS
                            className="auth-input-icon"

                        />

                    )

                }

                {/* Campo */}
                <input

                    // Tipo
                    type={type}

                    // Nome
                    name={name}

                    // Placeholder
                    placeholder={placeholder}

                    // Valor
                    value={value}

                    // Atualiza o estado
                    onChange={onChange}

                    // Campo obrigatório
                    required={required}

                    // Campo desabilitado
                    disabled={disabled}

                    // Valor mínimo
                    min={min}

                    // Valor máximo
                    max={max}

                    // Quantidade mínima de caracteres
                    minLength={minLength}

                    // Quantidade máxima de caracteres
                    maxLength={maxLength}

                    // AutoComplete
                    autoComplete={autoComplete}

                />

            </div>

        </div>

    );

}

// Exporta o componente
export default AuthInput;