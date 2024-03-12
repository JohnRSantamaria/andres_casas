import React, {ReactNode} from 'react';

interface ButtonProps {
	children: ReactNode;
}

export default function Buttton({children}: ButtonProps) {
	return <button className='button_class'>{children}</button>;
}
