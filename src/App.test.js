// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({adapter: new Adapter()})

describe('App component tests', () => {
    it("should display 'Its a Guess Word Game' when App component is rendered", () => {
        const element = shallow(<App/>);
        expect(element.find('#div-id').text()).toEqual("Its a Guess Word Game")
    })
})