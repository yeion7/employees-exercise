import React from 'react'
import renderer from 'react-test-renderer'

import Row from '../'
import employ from '../__mocks__/employ'

describe('Row component', () => {
  it('renders correctly with MXN', () => {
    const fn = jest.fn()

    const tree = renderer
      .create(
        <Row
          id={employ.id}
          name={employ.name}
          company={employ.company}
          salary={employ.salary}
          age={employ.age}
          phone={employ.phone}
          email={employ.email}
          currency='MXN'
          changeType={19.9}
          editable={false}
          deleteEmploy={fn}
          onEditField={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with USD', () => {
    const fn = jest.fn()

    const tree = renderer
      .create(
        <Row
          id={employ.id}
          name={employ.name}
          company={employ.company}
          salary={employ.salary}
          age={employ.age}
          phone={employ.phone}
          email={employ.email}
          currency='USD'
          changeType={19.9}
          editable={false}
          deleteEmploy={fn}
          onEditField={fn}
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
        <Row
          id={employ.id}
          name={employ.name}
          company={employ.company}
          salary={employ.salary}
          age={employ.age}
          phone={employ.phone}
          email={employ.email}
          currency='USD'
          changeType={19.9}
          editable
          deleteEmploy={fn}
          onEditField={factory}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without salary', () => {
    const fn = jest.fn()
    const factory = jest.fn(() => jest.fn())

    const tree = renderer
      .create(
        <Row
          id={employ.id}
          name={employ.name}
          company={employ.company}
          age={employ.age}
          phone={employ.phone}
          email={employ.email}
          currency='USD'
          changeType={19.9}
          editable
          deleteEmploy={fn}
          onEditField={factory}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
