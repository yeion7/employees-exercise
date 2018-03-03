import React from 'react'
import PropTypes from 'prop-types'

const Actions = ({onAddEmploy, onEdit, onShowPrice}) => {
  return (
    <div>
      <button>
        Agregar empleado
      </button>
      <button>
        Editar
      </button>
      <button>
        Mostrar en USD
      </button>
    </div>
  )
}

Actions.propTypes = {
  onAddEmploy: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onShowPrice: PropTypes.func.isRequired
}

export default Actions
