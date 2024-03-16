import Link from 'next/link';
import React, {ReactNode} from 'react';

interface ButtonProps {
	children: ReactNode;
	href: string;
}

export default function Buttton({children, href}: ButtonProps) {
	return (
		<Link
			href={href}
			target='_blank'
			className='button_class'
		>
			{children}
		</Link>
	);
}
