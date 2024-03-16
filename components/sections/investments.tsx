import React from 'react';
import StructureCard from '../structureCard';
import investmentImg from '@/public/images/investments.png';
import {investmentsInf} from '@/assets/information/investmentsInf';
import {InfoCard} from '../infoCard';

export default function Investments() {
	return (
		<section
			id='investments'
			className='min-h-svh'
		>
			<h2 className='title font-semibold text-center pt-16'>Inversiones</h2>
			<section className='w-full flex flex-col gap-8'>
				<StructureCard
					alt='dibujo de un hombre con una moneda en la mano y un gráfico de barras detrás de él'
					content='Te ofrecemos diferentes proyectos dirigidos a inversionistas, con una excelente rentabilidad y retorno de inversión.'
					src={investmentImg}
					title='Tipos de inversiones'
				/>

				<div className='flex flex-col gap-4 text-lg'>
					{investmentsInf.map((investments) => (
						<InfoCard
							key={investments.id}
							title={investments.title}
							paragraph={investments.paragraph}
						/>
					))}
				</div>
			</section>
		</section>
	);
}
