import React from 'react'
import PropTypes from 'prop-types'
import Row from '../Row'
import { normalizeString } from '../../utils'
import './index.css'

const Heading = ({ text, name, sortBy, sortedBy, currency }) => {
  return (
    <th
      className='heading__cell'
      data-test={`sort-${name}`}
      onClick={sortBy(name)}
      style={{ background: `${sortedBy === name ? 'mediumseagreen' : ''}` }}
    >
      {text} {sortedBy === name ? '▴' : '▾'}
    </th>
  )
}

const Table = ({
  employees,
  sortBy,
  sortedBy,
  currency,
  changeType,
  deleteEmploy,
  search,
  onEditField,
  editable
}) => {
  const searchNormalized = normalizeString(search)
  return (
    <table cellSpacing='0' className='table'>
      <thead className='table__head'>
        <tr>
          <Heading
            sortBy={sortBy}
            name='name'
            text='Nombre'
            sortedBy={sortedBy}
          />
          <Heading
            sortBy={sortBy}
            name='company'
            text='Compañía'
            sortedBy={sortedBy}
          />
          <Heading
            sortBy={sortBy}
            name='salary'
            text='Salario'
            sortedBy={sortedBy}
          />
          <Heading sortBy={sortBy} name='age' text='Edad' sortedBy={sortedBy} />
          <Heading
            sortBy={sortBy}
            name='phone'
            text='Télefono'
            sortedBy={sortedBy}
          />
          <Heading
            sortBy={sortBy}
            name='email'
            text='Correo'
            sortedBy={sortedBy}
          />
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {employees
          .filter(
            (employ) =>
              normalizeString(employ.name).includes(searchNormalized) ||
              normalizeString(employ.company).includes(searchNormalized)
          )
          .map((employ) => (
            <Row
              {...employ}
              key={employ.id}
              currency={currency}
              changeType={changeType}
              deleteEmploy={deleteEmploy}
              onEditField={onEditField}
              editable={editable}
            />
          ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Table
