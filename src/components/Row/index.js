import React from 'react'
import PropTypes from 'prop-types'

const Row = ({id, name, company, salary, age, phone, email}) => {
  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{company}</td>
      <td>{salary}</td>
      <td>{age}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <button>
          Borrar
        </button>
      </td>
    </tr>
  )
}

Row.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default Row
