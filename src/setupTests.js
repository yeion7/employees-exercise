import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import LocalStorageMock from './__mocks__/localstorage'

Enzyme.configure({ adapter: new Adapter() })

global.localStorage = new LocalStorageMock()
