import React, {ButtonHTMLAttributes} from 'react';
import './style.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string,
  isOperation?: Boolean,
}

// extends ButtonHTMLAttributes<HTMLButtonElement> =

// 
function Button({name, isOperation = false, ...props}: ButtonProps) {
  return (
    <button
      type="button"
      className= { isOperation ? "function" : "button" }
      {...props}
    >
      {name}
    </button>
  )
}

export default Button;