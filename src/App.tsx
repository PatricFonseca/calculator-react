import React from 'react';
import { useState } from 'react';

import Button from './components/Button/Index';
import ResultPanel from './components/ResultPanel';


import './styles/global.scss';

function App() {
  const [result, setResult] = useState('');
  
  function handleResult(value: string){
    console.log(value);
    // setResult(value);
    var numberPattern = /\d+/g;

    if (value.match(numberPattern)){
      setResult(prevState => {
        return prevState + value
      });
    }
  }

  return (
    <div className="App">
      <ResultPanel 
        value={result}
      />
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
        <Button 
          name="7"
          onClick={() => handleResult('7')}
        />      
        <Button 
          name="8"
          onClick={() => handleResult('8')}
        />
        <Button 
          name="9"
          onClick={() => handleResult('9')}          
        />
        <Button 
          name="x"
          isOperation
          onClick={() => handleResult('x')}
        />
      </div>
      <div className="row">
        <Button 
          name="4"
          onClick={() => handleResult('4')}
        />      
        <Button 
          name="5"
          onClick={() => handleResult('5')}
        />
        <Button 
          name="6"
          onClick={() => handleResult('6')}
        />
        <Button 
          name="-" 
          isOperation
          onClick={() => handleResult('-')}
        />
      </div>
      <div className="row">
        <Button 
          name="1"
          onClick={() => handleResult('1')}
        />      
        <Button 
          name="2"
          onClick={() => handleResult('2')}
        />
        <Button 
          name="3"
          onClick={() => handleResult('3')}
        />
        <Button 
          name="+"
          isOperation
          onClick={() => handleResult('+')}
        />
      </div>
      <div className="row">
        <Button name="::"/>      
        <Button 
          name="0"
          onClick={() => handleResult('0')}
        />
        <Button 
          name="."
          onClick={() => handleResult('.')}
        />
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
