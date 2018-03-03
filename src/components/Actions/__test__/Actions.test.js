import React from 'react'
import renderer from 'react-test-renderer'

import Actions from '../'

describe('Actions component', () => {
  it('renders correctly with MXN and not editable', () => {
    const fn = jest.fn()

    const tree = renderer
      .create(
        <Actions
          toggleEdit={fn}
          changeCurrency={fn}
          currency="MXN"
          printTable={fn}
          editable={false}
          addEmploy={fn}
          returnOriginal={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with USD and  editable', () => {
    const fn = jest.fn()

    const tree = renderer
      .create(
        <Actions
          toggleEdit={fn}
          changeCurrency={fn}
          currency="USD"
          printTable={fn}
          editable={true}
          addEmploy={fn}
          returnOriginal={fn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
