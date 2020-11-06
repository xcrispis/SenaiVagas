import React from 'react';
<<<<<<< HEAD
import '../../Assets/styles/global.css';
=======
import '../../assets/style/global.css';
>>>>>>> origin/Develop

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