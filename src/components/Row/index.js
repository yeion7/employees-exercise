import React from 'react'
import PropTypes from 'prop-types'

const Row = (
  {
    id,
    name,
    company,
    salary = 0,
    age,
    phone,
    email,
    currency,
    changeType,
    deleteEmploy,
  }) => {
  const salaryValue = currency === 'USD' ? salary / changeType : salary

  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{company}</td>
      <td>
        {
          salaryValue.toLocaleString('es-MX',
            {
              style: 'currency',
              currency: currency,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
        }
      </td>
      <td>{age}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>
        <button onClick={() => deleteEmploy(id)}>
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
