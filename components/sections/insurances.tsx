import React from 'react';
import StructureCard from '../structureCard';
import insuranceImg from '@/public/images/insurances.png';
import {insurancesInf} from '@/assets/information/insurancesInf';
import {InfoCard} from '../infoCard';

export default function Insurances() {
	return (
		<section
			id='insurances'
			className='min-h-svh overflow-hidden w-full flex flex-col gap-8'
		>
			<h2 className='title font-semibold text-center pt-16'>Seguros</h2>
			<section className='w-full flex flex-col gap-8'>
				<StructureCard
					alt='dibujo de una sombrilla que asegura los bines de una persona'
					content='Cotizamos, comparamos y realizamos estudio con las mejores aseguradoras del país, endosamos y mejoramos condiciones de los seguros que tenga actualmente con entidades financieras.'
					src={insuranceImg}
					title='Servicio Integral de Seguros'
				/>

				<div className='flex flex-col gap-4 text-lg'>
					{insurancesInf.map((insurance) => (
						<InfoCard
							key={insurance.id}
							title={insurance.title}
							paragraph={insurance.paragraph}
						/>
					))}
				</div>
			</section>
		</section>
	);
}
