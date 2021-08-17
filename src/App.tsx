import { useState } from 'react';

import Button from './components/Button/Index';
import ResultPanel from './components/ResultPanel';

import './styles/global.scss';

function App() {
    const [result, setResult] = useState('');
    const [operation, setOperation] = useState('');
    const [oldValue, setOldValue] = useState('');
    const [digitValue, setDigitValue] = useState('');

    function handleResult(value: string) {
        const numberPattern = /\d+/g;

        if (value.match(numberPattern)) {
            setDigitValue(value);

            if (operation !== '' && digitValue === '') {
                console.log(result);
                console.log(oldValue);
                console.log(operation);
                setResult(value);
                setDigitValue(value);
            } else {
                console.log(result);
                console.log(oldValue);
                console.log(operation);

                setResult((prevState) => prevState + value);
            }
        } else {
            if (value === 'AC') {
                setResult('');
                setOldValue('');
                setDigitValue('');
                setOperation('');
                return;
            }

            setDigitValue('');

            console.log(
                `>>> >> ${result}
                    || ${oldValue} || ${operation} || + ${digitValue}`
            );

            if (operation !== '') {
                if (operation === value || value === '=') {
                    console.log(
                        `result +
                            '' +
                            oldValue +
                            '' +
                            operation +
                            '' +
                            digitValue `
                    );

                    /* Return total value */
                    let total = 0;
                    switch (operation) {
                        case '+':
                            total = Number(oldValue) + Number(result);
                            break;
                        case '-':
                            total = Number(oldValue) - Number(result);
                            break;
                        case 'x':
                            total = Number(oldValue) * Number(result);
                            break;
                        case '/':
                            total = Number(oldValue) / Number(result);
                            break;
                        default:
                            total = 0;
                    }
                    // const total = eval(
                    //     Number(oldValue) + operation + Number(result)
                    // );
                    console.log(`*** ${total}`);
                    setResult(String(total));
                    setOperation('');
                }
            } else {
                setOperation(value);
                setOldValue(result);
            }
        }
    }

    return (
        <div className="App">
            <ResultPanel value={result} />
            <div className="row">
                <Button
                    name="AC"
                    isOperation
                    onClick={() => handleResult('AC')}
                />
                <Button
                    name="+/-"
                    isOperation
                    onClick={() => handleResult('+/-')}
                />
                <Button
                    name="%"
                    isOperation
                    onClick={() => handleResult('%')}
                />
                <Button
                    name="/"
                    isOperation
                    onClick={() => handleResult('/')}
                />
            </div>
            <div className="row">
                <Button name="7" onClick={() => handleResult('7')} />
                <Button name="8" onClick={() => handleResult('8')} />
                <Button name="9" onClick={() => handleResult('9')} />
                <Button
                    name="x"
                    isOperation
                    onClick={() => handleResult('x')}
                />
            </div>
            <div className="row">
                <Button name="4" onClick={() => handleResult('4')} />
                <Button name="5" onClick={() => handleResult('5')} />
                <Button name="6" onClick={() => handleResult('6')} />
                <Button
                    name="-"
                    isOperation
                    onClick={() => handleResult('-')}
                />
            </div>
            <div className="row">
                <Button name="1" onClick={() => handleResult('1')} />
                <Button name="2" onClick={() => handleResult('2')} />
                <Button name="3" onClick={() => handleResult('3')} />
                <Button
                    name="+"
                    isOperation
                    onClick={() => handleResult('+')}
                />
            </div>
            <div className="row">
                <Button name="::" />
                <Button name="0" onClick={() => handleResult('0')} />
                <Button name="." onClick={() => handleResult('.')} />
                <Button
                    name="="
                    isOperation
                    onClick={() => handleResult('=')}
                />
            </div>
        </div>
    );
}

export default App;
