import React from 'react'
import renderer from 'react-test-renderer'

import Search from '../'

describe('Search component', () => {
  it('renders correctly', () => {
    const fn = jest.fn()

    const tree = renderer.create(<Search onSearch={fn} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
