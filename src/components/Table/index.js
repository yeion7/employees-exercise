import React from 'react'
import PropTypes from 'prop-types'
import Row from '../Row'

const Heading = ({text, name, sortBy, sortedBy}) => {
  return (<th
    onClick={sortBy(name)}
    style={{background: `${sortedBy === name ? 'palegreen' : ''}`}}>
    {text}
  </th>)
}

const Table = ({employees, sortBy, sortedBy}) => {
  return (
    <table>
      <thead>
        <tr>
          <Heading sortBy={sortBy} name='name' text='nombre' sortedBy={sortedBy} />
          <Heading sortBy={sortBy} name='company' text='Compañía' sortedBy={sortedBy} />
          <Heading sortBy={sortBy} name='salary' text='Salario' sortedBy={sortedBy} />
          <Heading sortBy={sortBy} name='age' text='Edad' sortedBy={sortedBy} />
          <Heading sortBy={sortBy} name='phone' text='Télefono' sortedBy={sortedBy} />
          <Heading sortBy={sortBy} name='email' text='Correo' sortedBy={sortedBy} />
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map(employ => <Row key={employ.id} {...employ} />)
        }
      </tbody>
    </table>
  )
}

Table.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      salary: PropTypes.number.isRequired,
      age: PropTypes.number.isRequired,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Table
