import React from 'react'
import PropTypes from 'prop-types'

const Search = ({onSearch}) => {
  return (
    <div>
        <input
          type='text'
           placeholder='Buscar empleado o empresa'
           onChange={onSearch}/>
    </div>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Search
