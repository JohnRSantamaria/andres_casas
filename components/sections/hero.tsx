import Lottie from 'lottie-react';
import React from 'react';
import animationData from '@/public/images/lottie/hero_animation.json';
import Buttton from '../common/Buttton';

export default function Hero() {
	return (
		<div
			id='home'
			className={`flex flex-col justify-center items-center text-center gap-4 lg:flex-row select-none hero_screen_size overflow-hidden `}
		>
			<Lottie
				animationData={animationData}
				className='h-1/2 w-[calc(100vw-10%)] lg:w-1/2 md:h-1/2 order-2 lg:order-1  lg:h-full  '
			/>
			<div className='h-1/2 w-full lg:w-1/2 md:h-1/2 flex flex-col items-center justify-center gap-8 md:hero_screen_size order-1 lg:order-2 '>
				<h1 className='title font-semibold lg:text-4xl xl:text-6xl'>Inversiones y Finanzas AC</h1>
				<h2 className='text-lg text-wrap   '>
					Especialistas en Créditos y Financiación en Colombia
				</h2>
				<Buttton>Agenda tu asesoría</Buttton>
			</div>
		</div>
	);
}
