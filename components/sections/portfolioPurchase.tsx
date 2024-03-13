import React from 'react';
import Image from 'next/image';

import portfolioPurchaseImg from '@/public/images/portfolio_purchase.png';
import CustomImage from '../images/customImage';

export default function PortfolioPurchase() {
	return (
		<section
			id='portfolio_purchase'
			className='min-h-svh overflow-hidden w-full flex flex-col gap-8'
		>
			<h2 className='title font-semibold text-center pt-16'>Compra de cartera</h2>
			<section className='w-full flex flex-col gap-8'>
				<div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 grid-cols-1 '>
					<CustomImage
						src={portfolioPurchaseImg}
						alt='dibujo de un hombre que compra de cartera'
					/>
					<div className='flex flex-col items-center justify-center gap-4 px-8'>
						<h3 className='capitalize subtitle'>Beneficios</h3>
						<ul className='flex flex-col gap-2 list-disc lg:text-lg'>
							<li> Unificas tus deudas en una sola y a una mejor tasa.</li>
							<li>
								Mejoras tu flujo de dinero mes a mes, ya que pagas mucho menos por las mismas deudas
								y con una cuota más cómoda.
							</li>
							<li>
								Tu eliges el plazo y la cuota que puedes pagar, ya que tenemos plazos hasta de 180
								meses.
							</li>
							<li>
								Solicitud en línea, sin papeles físicos y con firma 100% electrónica desde tu
								celular en tan solo minutos.
							</li>
						</ul>
					</div>
				</div>
				<div className='min-h-40 p-2 flex items-center justify-center  text-[#e4efff] border bg-gradient-to-r from-[#3e61ff]  to-[#1328ff] border-[#0010ff] shadow-lg rounded'>
					<p className='md:text-3xl text-lg text-center'>
						Unifica tus deudas y paga una sola cuota, con una tasa más baja para que tu dinero rinda
						más.
					</p>
				</div>
			</section>
		</section>
	);
}
