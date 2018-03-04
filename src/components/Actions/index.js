import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Actions = ({
  toggleEdit,
  changeCurrency,
  currency,
  printTable,
  editable,
  addEmploy,
  returnOriginal
}) => {
  return (
    <div className="action__container">
      <button
        className="action__button--primary"
        data-test="add"
        onClick={addEmploy}
      >
        ➕ Agregar empleado
      </button>
      <button
        className="action__button--primary"
        data-test="edit"
        onClick={toggleEdit}
      >
        {editable ? '💾 Guardar' : '📝 Editar'}
      </button>
      <button
        className="action__button--primary"
        data-test="currency"
        onClick={changeCurrency}
      >
        💰 Mostrar en {currency === 'MXN' ? 'Dolares' : 'Pesos'}
      </button>
      <button
        className="action__button--primary"
        data-test="print"
        onClick={printTable}
      >
        🖨 Imprimir en consola
      </button>
      <button
        className="action__button--primary"
        ata-test="delete"
        onClick={returnOriginal}
      >
        🗑 Eliminar cambios
      </button>
    </div>
  )
}

Actions.propTypes = {
  addEmploy: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  changeCurrency: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  printTable: PropTypes.func.isRequired,
  editable: PropTypes.bool.isRequired,
  returnOriginal: PropTypes.func.isRequired
}

export default Actions
