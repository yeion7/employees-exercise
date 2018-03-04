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
  const showCurrencyIn = currency === 'MXN' ? 'Dolares' : 'Pesos'
  return (
    <div className="action__container">
      <button
        className="action__button--primary"
        data-test="add"
        onClick={addEmploy}
        aria-label="Agregar nuevo empleado"
      >
        <span role="img" aria-label="agregar empleado con emoji sumar">
          ➕ Agregar empleado
        </span>
      </button>
      <button
        className="action__button--primary"
        data-test="edit"
        onClick={toggleEdit}
        aria-label={`${editable ? 'Guardar cambios' : 'Editar'}`}
      >
        {editable ? (
          <span role="img" aria-label="guardar cambios con emoji guardar">
            💾 Guardar
          </span>
        ) : (
          <span role="img" aria-label="editar con emoji escribir">
            📝 Editar
          </span>
        )}
      </button>
      <button
        className="action__button--primary"
        data-test="currency"
        onClick={changeCurrency}
        aria-label={`Mostrar salario en ${showCurrencyIn}`}
      >
        <span
          role="img"
          aria-label={`mostrar en ${showCurrencyIn} con emoji moneda`}
        >
          💰 Mostrar en {showCurrencyIn}
        </span>
      </button>
      <button
        className="action__button--primary"
        data-test="print"
        onClick={printTable}
        aria-label="Imprimir en consola"
      >
        <span role="img" aria-label="imprimir en consola con emoji imprimir">
          🖨 Imprimir en consola
        </span>
      </button>
      <button
        className="action__button--primary"
        ata-test="delete"
        onClick={returnOriginal}
        aria-label="Eliminar cambios"
      >
        <span role="img" aria-label="Eliminar cambios con emoji basura">
          🗑 Eliminar cambios
        </span>
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
