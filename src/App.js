import React, { Component } from 'react'
import Table from './components/Table'
import Search from './components/Search'
import Actions from './components/Actions'

import employees from './employees'

import { compareBy } from './utils'

class App extends Component {
  state = {
    sortedBy: null,
    data: employees
  }

  /**
   * Factory fuction, recive a string a return a function
   * the returned function can be used like event listener
   * for sorter set value sorter and create a array copy for sorter
   * if is sorted reset state using initial values
   * @param  {string} key value to sorter
   * @return {void}     not return, set a state
   */
  sortBy = (key) => () => {
    const isSorted = key === this.state.sortedBy

    this.setState(state =>
      ({
        sortedBy: isSorted ? null : key,
        data: isSorted ? employees : [...this.state.data].sort(compareBy(key))
      })
    )
  }

  render () {
    const { data, sortedBy } = this.state
    return (
      <main>
        <Search onSearch={() => {}} />
        <Actions
          onAddEmploy={() => {}}
          onEdit={() => {}}
          onShowPrice={() => {}}
        />
        <Table
          employees={data}
          sortBy={this.sortBy}
          sortedBy={sortedBy}
        />
      </main>
    )
  }
}

export default App
