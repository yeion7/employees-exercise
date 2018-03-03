import React from 'react'
import renderer from 'react-test-renderer'

import Table from '../'
import employees from '../__mocks__/employees'

describe('Table component', () => {
  it('renders correctly', () => {
    const fn = jest.fn()
    const factory = jest.fn(() => jest.fn())

    const tree = renderer
      .create(
        <Table
          employees={employees}
          sortBy={factory}
          sortedBy=""
          currency="MXN"
          changeType="21.9"
          deleteEmploy={fn}
          search=""
          onEditField={factory}
          editable={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with search', () => {
    const fn = jest.fn()
    const factory = jest.fn(() => jest.fn())

    const tree = renderer
      .create(
        <Table
          employees={employees}
          sortBy={factory}
          sortedBy=""
          currency="MXN"
          changeType="21.9"
          deleteEmploy={fn}
          search="Miguel Ángel Rodríguez"
          onEditField={factory}
          editable={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with sorter and USD', () => {
    const fn = jest.fn()
    const factory = jest.fn(() => jest.fn())

    const tree = renderer
      .create(
        <Table
          employees={employees}
          sortBy={factory}
          sortedBy="age"
          currency="USD"
          changeType="21.9"
          deleteEmploy={fn}
          search=""
          onEditField={factory}
          editable={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with editable mode', () => {
    const fn = jest.fn()
    const factory = jest.fn(() => jest.fn())

    const tree = renderer
      .create(
        <Table
          employees={employees}
          sortBy={factory}
          sortedBy="age"
          currency="USD"
          changeType="21.9"
          deleteEmploy={fn}
          search=""
          onEditField={factory}
          editable={true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
