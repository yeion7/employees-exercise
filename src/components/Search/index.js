import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Search = ({ onSearch }) => {
  return (
    <input
      className='search__input'
      data-test='input'
      type='search'
      placeholder='Buscar empleado o empresa'
      aria-label='Buscar empleado o empresa'
      onChange={onSearch}
    />
  )
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Search
