import React from 'react'
import PropTypes from 'prop-types'

const Search = ({onSearch}) => {
  return (
    <div>
      <form>
        <input type='text' placeholder='Buscar empleado o empresa' />
        <button>Buscar</button>
      </form>
    </div>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Search
