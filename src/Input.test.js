import Input from "./Input";
import React from "react";
import {checkProps, findByTestAttr} from "./testUtils";
import {shallow} from "enzyme";

const setup = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord}/>);

}

test('does not throw warning with expected props', () => {
    checkProps(Input, {secretWord: 'party'});
})

describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState = () => ["", mockSetCurrentGuess];
        wrapper = setup({success: false});
    });

    test('state updates with value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = {target: {value: 'train'}};

        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('field is cleared upon submit button click', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = {target: {value: 'train'}};

        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
})