import React from 'react';
import '../../assets/style/global.css';

interface ButtonProps {
    value: string;
}

const Button:React.FC<ButtonProps> = ({ value}) => {
    return (
        <div>
            <input className="button" type="submit" value={value}/>
        </div>
    );
}

export default Button;