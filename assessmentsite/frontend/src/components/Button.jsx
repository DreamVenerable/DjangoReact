import React from 'react';

function Button({ onClick, label }) {
    return (
        <button onClick={onClick} className="button">
            {label}
        </button>
    );
}

export default Button;
