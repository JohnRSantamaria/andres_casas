import React from 'react';
import CustomImage from '../images/customImage';
import loanImg from '@/public/images/loans.png';

import {loanInf} from '@/assets/information/loanInf';
import {InfoCard} from '../infoCard';
import StructureCard from '../structureCard';

export default function Loans() {
	return (
		<section
			id='loans'
			className='min-h-svh overflow-hidden w-full flex flex-col gap-8'
		>
			<h2 className='title font-semibold text-center pt-16'>Créditos</h2>
			<section className='w-full flex flex-col gap-8'>
				<StructureCard
					alt='dibujo de un hombre que compra de cartera'
					content='Te ayudamos a gestionar la financiación del tipo de crédito que necesites, en
							cualquier entidad bancaria de Colombia. Las modalidades de crédito que te podemos
							brindar son:'
					src={loanImg}
					title='Modalidades'
				/>

				<div className='flex flex-col gap-4 text-lg'>
					{loanInf.map((loan) => (
						<InfoCard
							key={loan.id}
							title={loan.title}
							paragraph={loan.paragraph}
						/>
					))}
				</div>
			</section>
		</section>
	);
}
