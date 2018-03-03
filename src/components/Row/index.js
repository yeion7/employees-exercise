import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * This element use PureComponent for optimize edit mode
 * If edit a field not re-render every field
 */

class Row extends PureComponent {
  render() {
    const {
      id,
      name,
      company,
      salary = 0,
      age,
      phone,
      email,
      added,
      currency,
      changeType,
      deleteEmploy,
      editable,
      onEditField
    } = this.props

    const salaryValue = currency === 'USD' ? salary / changeType : salary

    return (
      <tr>
        <td>
          {editable ? (
            <input
              data-test={`input-name-${id}`}
              defaultValue={name}
              onChange={onEditField(id, 'name')}
            />
          ) : (
            <span>{name}</span>
          )}
        </td>
        <td>
          {editable && added ? (
            <input
              data-test={`input-company-${id}`}
              defaultValue={company}
              onChange={onEditField(id, 'company')}
            />
          ) : (
            <span>{company}</span>
          )}
        </td>
        <td>
          {editable ? (
            <input
              data-test={`input-salary-${id}`}
              type="number"
              defaultValue={salary}
              onChange={onEditField(id, 'salary')}
            />
          ) : (
            <span
              style={{ color: `${salary < 10000 ? 'indianred' : 'seagreen'}` }}
            >
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
              data-test={`input-age-${id}`}
              type="number"
              defaultValue={age}
              onChange={onEditField(id, 'age')}
            />
          ) : (
            <span>{age}</span>
          )}
        </td>
        <td>
          {editable ? (
            <input
              data-test={`input-phone-${id}`}
              defaultValue={phone}
              onChange={onEditField(id, 'phone')}
            />
          ) : (
            <span>{phone}</span>
          )}
        </td>
        <td>
          {editable ? (
            <input
              data-test={`input-email-${id}`}
              type="email"
              defaultValue={email}
              onChange={onEditField(id, 'email')}
            />
          ) : (
            <span>{email}</span>
          )}
        </td>
        <td>
          <button data-test={`delete-${id}`} onClick={() => deleteEmploy(id)}>
            Borrar
          </button>
        </td>
      </tr>
    )
  }
}

Row.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default Row
