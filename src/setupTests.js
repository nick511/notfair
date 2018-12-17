import { configure } from 'enzyme'
import 'jest-enzyme'
import Adapter from 'enzyme-adapter-react-16'

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    }
  }

configure({ adapter: new Adapter() })
