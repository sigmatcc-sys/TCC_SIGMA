import "./style.css";

import { LogOut } from "lucide-react";

export default function LogoutModal({
  isOpen,
  onConfirm,
  onCancel,
}) {

  // Não renderiza o modal quando estiver fechado
  if (!isOpen) {
    return null;
  }

  return (

    <div className="logout-modal-overlay">

      <div className="logout-modal">


        {/* Ícone */}

        <div className="logout-modal-icon">

          <LogOut size={28} />

        </div>


        {/* Título */}

        <h2>Deseja sair?</h2>


        {/* Descrição */}

        <p>
          Tem certeza que deseja encerrar sua sessão?
        </p>


        {/* Botões */}

        <div className="logout-modal-actions">


          {/* Cancelar */}

          <button
            type="button"
            className="cancel-logout-button"
            onClick={onCancel}
          >

            Cancelar

          </button>


          {/* Confirmar */}

          <button
            type="button"
            className="confirm-logout-button"
            onClick={onConfirm}
          >

            Sim, sair

          </button>


        </div>


      </div>

    </div>

  );

}