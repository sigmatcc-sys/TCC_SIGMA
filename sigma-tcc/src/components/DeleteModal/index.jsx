import "./style.css";

import { Trash2, X } from "lucide-react";

export default function DeleteModal({
  isOpen,
  onConfirm,
  onCancel,
  title = "Excluir cadastro",
  message = "Deseja realmente excluir este cadastro?",
}) {

  if (!isOpen) {
    return null;
  }

  return (
    <div className="delete-modal-overlay">

      <div className="delete-modal">

        {/* ÍCONE */}

        <div className="delete-modal-icon">
          <Trash2 size={25} />
        </div>


        {/* CONTEÚDO */}

        <div className="delete-modal-content">

          <h2>
            {title}
          </h2>

          <p>
            {message}
          </p>

        </div>


        {/* AÇÕES */}

        <div className="delete-modal-actions">

          <button
            type="button"
            className="delete-modal-cancel"
            onClick={onCancel}
          >
            <X size={16} />
            Cancelar
          </button>


          <button
            type="button"
            className="delete-modal-confirm"
            onClick={onConfirm}
          >
            <Trash2 size={16} />
            Excluir
          </button>

        </div>

      </div>

    </div>
  );
}