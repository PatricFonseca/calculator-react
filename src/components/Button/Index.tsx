import React, { ButtonHTMLAttributes } from 'react';
import './style.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string;
    isOperation?: Boolean;
} & typeof defaultProps;

const defaultProps = {
    isOperation: false,
};
// extends ButtonHTMLAttributes<HTMLButtonElement> =

function Button({ name, isOperation, ...props }: ButtonProps) {
    return (
        <button
            type="button"
            className={isOperation ? 'function' : 'button'}
            onClick={props.onClick}
            // eslint-disable-next-line react/jsx-props-no-spreading
            // {...props}
        >
            {name}
        </button>
    );
}

Button.defaultProps = defaultProps;

export default Button;
