import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

import LocalStorageMock from './__mocks__/localstorage'

Enzyme.configure({ adapter: new Adapter() })

global.localStorage = new LocalStorageMock()
global.shallow = shallow
global.render = render
global.mount = mount
