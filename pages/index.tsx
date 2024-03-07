import bg from '../public/images/background.jpg';

export default function Home() {
	return (
		<>
			<main className={`flex  hero_screen_size flex-row items-center justify-between`}>
				<div
					className='border hero_screen_size w-full flex -z-50 relative overflow-hidden '
					style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
				>
					<div
						style={{
							position: 'absolute', // Añadir posición absoluta para que la imagen de fondo se ajuste correctamente
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							backgroundImage: `url("${bg.src}")`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							opacity: 0.9,
							filter: 'brightness(0.6) blur(3px) grayscale(0.5) contrast(1.2) saturate(1.2)',
						}}
					/>
					<div className='lg:w-1/2 w-full hero_screen_size z-10 flex flex-col text-white items-center justify-evenly px-2 text-center'>
						<div className='flex flex-col gap-2'>
							<h1 className='text-6xl font-semibold '>Inversiones y Finanzas AC</h1>
							<h2 className='text-2xl'>Especialistas en Créditos y Financiación en Colombia</h2>
						</div>
					</div>

					<div className='w-1/2 hero_screen_size hidden'></div>
					<div className='absolute flex items-center justify-center text-white bg-black w-full bottom-0  h-20'>
						<h3 className='lg:text-xl text-center'>
							Somos un outsourcing financiero, brindamos asesoría legal en planeación, organización
							y ejecución financiera.
						</h3>
					</div>
				</div>
			</main>
		</>
	);
}
