import React from 'react'
import PropTypes from 'prop-types'

const Row = ({
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
  editable,
  onEditField
}) => {
  const salaryValue = currency === 'USD' ? salary / changeType : salary

  return (
    <tr>
      <td>
        {editable ? (
          <input defaultValue={name} onChange={onEditField(id, 'name')} />
        ) : (
          <span>{name}</span>
        )}
      </td>
      <td>{company}</td>
      <td>
        {editable ? (
          <input
            type='number'
            defaultValue={salary}
            onChange={onEditField(id, 'salary')}
          />
        ) : (
          <span>
            {parseInt(salaryValue, 10).toLocaleString('es-MX', {
              style: 'currency',
              currency: currency,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
          </span>
        )}
      </td>
      <td>
        {editable ? (
          <input
            type='number'
            defaultValue={age}
            onChange={onEditField(id, 'age')}
          />
        ) : (
          <span>{age}</span>
        )}
      </td>
      <td>
        {editable ? (
          <input defaultValue={phone} onChange={onEditField(id, 'phone')} />
        ) : (
          <span>{phone}</span>
        )}
      </td>
      <td>
        {editable ? (
          <input
            type='email'
            defaultValue={email}
            onChange={onEditField(id, 'email')}
          />
        ) : (
          <span>{email}</span>
        )}
      </td>
      <td>
        <button onClick={() => deleteEmploy(id)}>Borrar</button>
      </td>
    </tr>
  )
}

Row.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default Row
