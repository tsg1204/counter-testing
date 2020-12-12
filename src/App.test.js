import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render without error", () => {
  const wrapper = shallow( <App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test("renders button", () => {

});

test("render counter display", () => {

});

test("counter starts at 0", ()=> {

});

test("clicking on button increments counter display", () => {

});
