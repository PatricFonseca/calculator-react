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
                setResult(value);
                setDigitValue(value);
            } else {
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
            if (value === '%') {
                setResult(String((Number(result) / 100) * Number(oldValue)));
            } else if (value === '+/-') {
                setResult(String(Number(result) * -1));
            } else if (value === '.') {
                setResult(String(`${Number(result)}.`));
            }

            if (value !== '.') {
                setDigitValue('');
            }

            console.log(`
                operation: ${operation}
            `);
            if (operation !== '') {
                if (operation === value || value === '=') {
                    /* Return total value */
                    let total = 0;
                    switch (operation) {
                        case '+':
                            total = Number(oldValue) + Number(result);
                            console.log(`${total} >> total`);
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
                    console.log(`*** ${total}`);
                    // não lembro o porque dessa verificação
                    // if (total > 0) {
                    setResult(String(total));
                    // }
                    setOperation('');
                }
            } else {
                if (value !== '.') {
                    setOperation(value);
                }
                setOldValue(result);
            }
        }
    }

    return (
        <div className="App">
            {/* Painel de teste de variavéis */}
            {/* <div>
                {oldValue} {operation} {result}
            </div> */}
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
