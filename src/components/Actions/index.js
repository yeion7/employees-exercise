import React from 'react'
import PropTypes from 'prop-types'

const Actions = ({
  onAddEmploy,
  toggleEdit,
  changeCurrency,
  currency,
  printTable,
  editable
}) => {
  return (
    <div>
      <button>Agregar empleado</button>
      <button onClick={toggleEdit}>{editable ? 'Guardar' : 'Editar'}</button>
      <button onClick={changeCurrency}>
        Mostrar en {currency === 'MXN' ? 'Dolares' : 'Pesos'}
      </button>
      <button onClick={printTable}>Imprimir en consola</button>
    </div>
  )
}

Actions.propTypes = {
  onAddEmploy: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  changeCurrency: PropTypes.func.isRequired
}

export default Actions
