export default function Home() {
	return (
		<>
			<main
				className={`flex  min-h-[calc(100vh-4.1rem)] flex-row items-center justify-between border`}
			>
				<div className='w-1/2 h-full border'>img</div>
				<div className='w-1/2 h-full border'>
					<h1>Inversiones y Finanzas AC</h1>
					<h2>Especialistas en Créditos y Financiación en Colombia</h2>
					<h3>
						Somos un outsourcing financiero, brindamos asesoría legal en planeación, organización y
						ejecución financiera.
					</h3>
				</div>

				{/* <img src='/imagen.jpg' alt='Inversiones y Finanzas AC - Especialistas en Créditos y Financiación en Colombia' /> */}
			</main>
		</>
	);
}
