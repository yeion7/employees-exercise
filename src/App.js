import React, { Component } from 'react'
import Table from './components/Table'
import Search from './components/Search'
import Actions from './components/Actions'

import employees from './employees'

import { compareBy, createEmploy } from './utils'

// First try load data form localStorage for persistent changes
const employeesData = JSON.parse(localStorage.getItem('employees')) || employees

class App extends Component {
  state = {
    sortedBy: null,
    data: employeesData,
    currency: 'MXN',
    changeType: 21.5,
    search: '',
    editable: false
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

    this.setState((state) => ({
      sortedBy: isSorted ? null : key,
      data: isSorted ? employeesData : [...this.state.data].sort(compareBy(key))
    }))
  }

  /**
   * Toggle MXN to USD ot USD to MXN, and setState with current
   * @return {void} Calculate depends current state
   */
  changeCurrency = () => {
    const isMXN = this.state.currency === 'MXN'
    this.setState({ currency: isMXN ? 'USD' : 'MXN' })
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
    const newData = this.state.data.filter((employ) => employ.id !== id)

    localStorage.setItem('employees', JSON.stringify(newData))

    this.setState((state) => ({
      data: newData
    }))
  }

  /**
   * Recive a input event and use the value for setState
   * @param  {HTMLEvent} e Event
   * @return {void}   setState with value
   */
  onSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  /**
   * save input data of every field
   * @param  {number|string} id  ID field
   * @param  {string} key name field key
   * @return {HTMLEvent}     input event
   */
  onEditField = (id, key) => (e) => {
    const newData = this.state.data.map((employ) => {
      if (employ.id === id) {
        return Object.assign({}, employ, {
          [key]: e.target.value
        })
      }
      return employ
    })

    this.setState({ data: newData })
  }

  /**
   * Clean all field of added value (avoid enable company editable)
   * toggle editableState
   * @return {void}
   */

  toggleEdit = () => {
    const newData = this.state.data.map((employ) => {
      if (employ.added) {
        delete employ.added
      }

      return employ
    })

    localStorage.setItem('employees', JSON.stringify(newData))
    this.setState({ editable: !this.state.editable, data: newData })
  }

  /**
   * Generate a new employ and append to data
   */
  addEmploy = () => {
    const newEmploy = createEmploy()

    this.setState({ data: [newEmploy, ...this.state.data], editable: true })
  }

  /**
   * reset data using the original
   */
  returnOriginal = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    this.setState({ data: employees })
  }

  render() {
    const {
      data,
      sortedBy,
      currency,
      changeType,
      search,
      editable
    } = this.state
    return (
      <main>
        <Search onSearch={this.onSearch} />

        <Actions
          addEmploy={this.addEmploy}
          toggleEdit={this.toggleEdit}
          changeCurrency={this.changeCurrency}
          printTable={this.printTable}
          returnOriginal={this.returnOriginal}
          currency={currency}
          editable={editable}
        />
        <Table
          employees={data}
          sortBy={this.sortBy}
          onEditField={this.onEditField}
          deleteEmploy={this.deleteEmploy}
          sortedBy={sortedBy}
          changeType={changeType}
          currency={currency}
          search={search}
          editable={editable}
        />
      </main>
    )
  }
}

export default App
