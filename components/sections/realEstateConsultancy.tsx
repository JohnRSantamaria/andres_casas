import React from 'react';
import StructureCard from '../structureCard';
import realEstateImg from '@/public/images/real_estate_consultancy.png';

import {InfoCard} from '../infoCard';
import {realEstateInf} from '@/assets/information/realEstateInf';

export default function RealEstateConsultancy() {
	return (
		<section
			id='real_estate_consultancy'
			className='min-h-svh overflow-hidden w-full flex flex-col gap-8'
		>
			<h2 className='title font-semibold text-center pt-16'>Asesoría inmobiliaria</h2>
			<section className='w-full flex flex-col gap-8'>
				<StructureCard
					alt='dibujo de un hombre que compra de cartera'
					content='Asesoría legal en todo lo relacionado a bienes inmuebles, venta, arriendo, avalúos y seguros.'
					src={realEstateImg}
					title='Categorias'
				/>

				<div className='flex flex-col gap-4 text-lg'>
					{realEstateInf.map((realEstate) => (
						<InfoCard
							key={realEstate.id}
							title={realEstate.title}
							paragraph={realEstate.paragraph}
						/>
					))}
				</div>
			</section>
		</section>
	);
}
