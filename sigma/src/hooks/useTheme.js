// Importa a função useContext do React
import { useContext } from "react";

// Importa o contexto do tema
import { ThemeContext } from "../context/ThemeContext";

// Cria um hook personalizado para facilitar o uso do tema
function useTheme() {

    // Retorna os dados armazenados no ThemeContext
    return useContext(ThemeContext);

}

// Exporta o hook para ser utilizado em qualquer componente
export default useTheme;