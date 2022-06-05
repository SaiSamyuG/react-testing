import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "./actions";

function App() {
    // const success = useSelector((state) => state.success);
    // const guessedWords = useSelector((state) => state.guessedWords);
    // const secretWord = useSelector((state) => state.secretWord);
    //
    // // so that we can dispatch an action
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     // get the secret word
    //     dispatch(getSecretWord());
    // }, []);

    return (
        <div data-test="component-app" className="container">
            <h1>Jotto</h1>
            <Congrats success={false} />
            <Input success={false} secretWord='hello' />
            <GuessedWords guessedWords={[{guessedWord:'hello',letterMatchCount:5}]} />
        </div>
    );
}

export default App;

