import React, { Component } from 'react'
import Table from './components/Table'
import Search from './components/Search'
import Actions from './components/Actions'

import employees from './employees'

import { compareBy } from './utils'

class App extends Component {
  state = {
    sortedBy: null,
    data: employees,
    currency: 'MXN',
    changeType: 21.50,
    search: ""
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

  /**
   * Toggle MXN to USD ot USD to MXN, and setState with current
   * @return {void} Calculate depends current state
   */
  changeCurrency = () => {
    const isMXN = this.state.currency === 'MXN'
    this.setState({currency: isMXN ? 'USD' : 'MXN'})
  }

  /**
   * Print table on state
   * @return {void} use the data on state
   */

  printTable = () => {
    console.table(this.state.data)
  }

  /**
   * Filter employees data using the id
   * @param  {Number} id id employ
   * @return {void}    setState with filter result
   */

  deleteEmploy = (id) => {
    this.setState(state =>
      ({data: state.data.filter(employ => employ.id !== id)})
    )
  }

  /**
   * Recive a input event and use the value for setState
   * @param  {HTMLEvent} e Event
   * @return {void}   setState with value
   */

  onSearch = (e) => {
    this.setState({search: e.target.value})
  }

  render () {
    const { data, sortedBy, currency,changeType, search } = this.state
    return (
      <main>
        <Search onSearch={this.onSearch} />

        <Actions
          onAddEmploy={() => {}}
          onEdit={() => {}}
          changeCurrency={this.changeCurrency}
          currency={currency}
          printTable={this.printTable}
        />
        <Table
          employees={data}
          sortBy={this.sortBy}
          deleteEmploy={this.deleteEmploy}
          sortedBy={sortedBy}
          changeType={changeType}
          currency={currency}
          search={search}
        />
      </main>
    )
  }
}

export default App
