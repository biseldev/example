import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.console.error = jest.fn();

Enzyme.configure({ adapter: new Adapter() });
