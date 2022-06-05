import {configure, shallow} from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";

configure({adapter: new Adapter()});

describe('Congrats component tests', () => {
    it('should render Congrats component', () => {
        const component = shallow(<Congrats/>);

        expect(component).toBeTruthy();
    });

    it('should not display text when success state is false', () => {
        const component = shallow(<Congrats success={false}/>);

        expect(component.find('#message').not).toBeTruthy();
    })

    it("should display text 'Congratulations! You guessed the word right.' when success state is true", () => {
        const component = shallow(<Congrats success={true}/>);

        expect(component.find('#message').text()).toBe('Congratulations! You guessed the word right.');
    })
})