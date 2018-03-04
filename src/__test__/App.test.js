import React from 'react'
import App from '../App'
import employees from '../components/Table/__mocks__/employees'
import { compareBy } from '../utils'

let wrapper

describe('App component', () => {
  beforeEach(() => {
    localStorage.clear()
    wrapper = mount(<App />)
  })

  afterEach(() => {
    wrapper = undefined
  })

  describe('Edit button', () => {
    it('editable state change when click button', () => {
      // read mode
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.state().editable).toEqual(false)

      // edit mode
      wrapper.find('[data-test="edit"]').simulate('click')
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.state().editable).toEqual(true)
    })

    it('to save on editable mode save data on localStorage', () => {
      // Click button
      wrapper.find('[data-test="edit"]').simulate('click')
      expect(wrapper.state().editable).toEqual(true)

      // Click save
      wrapper.find('[data-test="edit"]').simulate('click')
      expect(localStorage.store.employees).toEqual(JSON.stringify(employees))
    })

    it('save edit fields on state', () => {
      const employ = employees[2]
      const field = 'age'
      const value = '24'

      wrapper.find('[data-test="edit"]').simulate('click')
      wrapper
        .find(`[data-test="input-${field}-${employ.id}"]`)
        .simulate('change', {
          target: { value }
        })

      expect(wrapper.state().data.find((e) => e.id === employ.id).age).toEqual(
        value
      )

      wrapper.setState({ data: employees })
    })
  })

  describe('delete button', () => {
    it('delete data from localstorage', () => {
      localStorage.setItem('employees', JSON.stringify([...employees, 'add']))
      expect(localStorage.store.employees).not.toBe(JSON.stringify(employees))

      wrapper.find('[data-test="delete"]').simulate('click')
      expect(localStorage.store.employees).toEqual(JSON.stringify(employees))
      expect(wrapper.state().data).toEqual(employees)
    })
  })

  describe('currency button', () => {
    it('cahange currency format', () => {
      const currentCurrency = wrapper.state().currency

      wrapper.find('[data-test="currency"]').simulate('click')
      expect(wrapper.state().currency).not.toBe(currentCurrency)
    })

    it('return currencyFormat', () => {
      const currentCurrency = wrapper.state().currency

      wrapper.find('[data-test="currency"]').simulate('click')
      wrapper.find('[data-test="currency"]').simulate('click')
      expect(wrapper.state().currency).toBe(currentCurrency)
    })
  })

  describe('print button', () => {
    it('delete data from localstorage', () => {
      console.table = jest.fn()

      wrapper.find('[data-test="print"]').simulate('click')

      expect(console.table).toHaveBeenCalledTimes(1)
      expect(console.table).toHaveBeenLastCalledWith(employees)
    })
  })

  describe('add button', () => {
    it('method is generate a newEmploy and update state', () => {
      expect(wrapper.state().data).toEqual(employees)

      wrapper.find('[data-test="add"]').simulate('click')

      expect(wrapper.state().data[0].added).toEqual(true)
      expect(wrapper.state().data.length).toEqual(employees.length + 1)
    })

    it('when finish to add, delete flag added', () => {
      expect(wrapper.state().data).toEqual(employees)

      wrapper.find('[data-test="add"]').simulate('click')

      expect(wrapper.state().data[0].added).toEqual(true)
      expect(wrapper.state().data.length).toEqual(employees.length + 1)

      wrapper.find('[data-test="edit"]').simulate('click')
      expect(wrapper.state().data[0].added).toBeUndefined()
    })
  })

  describe('search input', () => {
    it('change input modify state', () => {
      const value = 'hola'

      wrapper.find('[data-test="input"]').simulate('change', {
        target: { value }
      })

      expect(wrapper.state().search).toEqual(value)
    })

    it('filter works', () => {
      const value = 'Eduardo González'

      wrapper.find('[data-test="input"]').simulate('change', {
        target: { value }
      })

      expect(wrapper.find('table tbody tr').length).toEqual(1)
    })
  })

  describe('delete input', () => {
    it('can delete a row', () => {
      const employ = employees[2]

      const newEmploys = employees.filter((e) => e.id !== employ.id)

      wrapper.find(`[data-test="delete-${employ.id}"]`).simulate('click')

      expect(wrapper.state().data).toEqual(newEmploys)
      expect(localStorage.store.employees).toEqual(JSON.stringify(newEmploys))
    })
  })

  describe('sort columns', () => {
    it('can sort column', () => {
      const sortedBy = 'age'

      const newEmploys = [...employees].sort(compareBy(sortedBy))

      wrapper.find(`[data-test="sort-${sortedBy}"]`).simulate('click')

      expect(wrapper.state().sortedBy).toEqual(sortedBy)
      expect(wrapper.state().data).toEqual(newEmploys)
    })

    it('can reset sort column', () => {
      const sortedBy = 'age'

      wrapper.find(`[data-test="sort-${sortedBy}"]`).simulate('click')
      wrapper.find(`[data-test="sort-${sortedBy}"]`).simulate('click')
      expect(wrapper.state().data).toEqual(employees)
    })
  })
})
