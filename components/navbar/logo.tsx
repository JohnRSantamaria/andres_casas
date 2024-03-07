import React from 'react';
import Image from 'next/image';
import Logo_imag from '@/public/images/logo.png';
export default function Logo() {
	return (
		<Image
			src={Logo_imag}
			alt='Inversiones y Finanzas AC - Especialistas en Créditos y Financiación en Colombia'
			className='w-auto h-16'
		/>
	);
}
