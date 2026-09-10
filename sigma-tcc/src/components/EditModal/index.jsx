import "./style.css";

import { useEffect, useState } from "react";
import { Pencil, X, Save } from "lucide-react";

export default function EditModal({
  isOpen,
  company,
  onSave,
  onCancel,
}) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });


  /* ==========================================
     PREENCHER FORMULÁRIO
  ========================================== */

  useEffect(() => {

    if (company) {

      setFormData({
        name: company.name || "",
        email: company.email || "",
        phone: company.phone || "",
        location: company.location || "",
      });

    }

  }, [company]);


  /* ==========================================
     ALTERAR CAMPO
  ========================================== */

  function handleChange(event) {

    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }


  /* ==========================================
     SALVAR
  ========================================== */

  function handleSubmit(event) {

    event.preventDefault();

    onSave({
      ...company,
      ...formData,
    });

  }


  if (!isOpen || !company) {
    return null;
  }


  return (
    <div className="edit-modal-overlay">

      <div className="edit-modal">

        {/* ======================================
            CABEÇALHO
        ====================================== */}

        <div className="edit-modal-header">

          <div className="edit-modal-icon">
            <Pencil size={22} />
          </div>

          <div>

            <h2>
              Editar empresa
            </h2>

            <p>
              Altere os dados do cadastro abaixo.
            </p>

          </div>


          <button
            type="button"
            className="edit-modal-close"
            onClick={onCancel}
            aria-label="Fechar"
          >
            <X size={18} />
          </button>

        </div>


        {/* ======================================
            FORMULÁRIO
        ====================================== */}

        <form
          className="edit-modal-form"
          onSubmit={handleSubmit}
        >

          {/* NOME */}

          <div className="edit-modal-field">

            <label htmlFor="edit-name">
              Nome
            </label>

            <input
              id="edit-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          {/* EMAIL */}

          <div className="edit-modal-field">

            <label htmlFor="edit-email">
              E-mail
            </label>

            <input
              id="edit-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          {/* TELEFONE */}

          <div className="edit-modal-field">

            <label htmlFor="edit-phone">
              Telefone
            </label>

            <input
              id="edit-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>


          {/* LOCALIZAÇÃO */}

          <div className="edit-modal-field">

            <label htmlFor="edit-location">
              Localização
            </label>

            <input
              id="edit-location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
            />

          </div>


          {/* ======================================
              AÇÕES
          ====================================== */}

          <div className="edit-modal-actions">

            <button
              type="button"
              className="edit-modal-cancel"
              onClick={onCancel}
            >
              <X size={16} />
              Cancelar
            </button>


            <button
              type="submit"
              className="edit-modal-save"
            >
              <Save size={16} />
              Salvar alterações
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}