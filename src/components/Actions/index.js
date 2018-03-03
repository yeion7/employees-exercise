import React from 'react'
import PropTypes from 'prop-types'

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
    <div>
      <button onClick={addEmploy}>Agregar empleado</button>
      <button onClick={toggleEdit}>{editable ? 'Guardar' : 'Editar'}</button>
      <button onClick={changeCurrency}>
        Mostrar en {currency === 'MXN' ? 'Dolares' : 'Pesos'}
      </button>
      <button onClick={printTable}>Imprimir en consola</button>
      <button onClick={returnOriginal}>Eliminar cambios</button>
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
