import React from 'react'
import PropTypes from 'prop-types'

const Actions = ({onAddEmploy, onEdit, changeCurrency, currency, printTable}) => {
  return (
    <div>
      <button>
        Agregar empleado
      </button>
      <button>
        Editar
      </button>
      <button onClick={changeCurrency}>
        Mostrar en {currency === 'MXN' ? 'Dolares' : 'Pesos'}
      </button>
      <button onClick={printTable}>
        Imprimir en consola
      </button>
    </div>
  )
}

Actions.propTypes = {
  onAddEmploy: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  changeCurrency: PropTypes.func.isRequired
}

export default Actions
