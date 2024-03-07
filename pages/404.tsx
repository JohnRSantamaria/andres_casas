import Head from 'next/head';
import {useRouter} from 'next/router';

export default function Custom404() {
	const router = useRouter();

	const goBack = () => {
		router.push('/');
	};

	return (
		<>
			<Head>
				<title>404 - Error | Camilo Menza | Asesor Financiero </title>
				<meta
					name='description'
					content='Página no encontrada'
				/>
			</Head>
			<main className='flex flex-col items-center justify-center gap-4 p-4 w-full h-screen'>
				<div className='text-center'>
					<p className='text-base font-semibold text-indigo-600'>404</p>
					<h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
						Page not found
					</h1>
					<p className='mt-6 text-base leading-7 text-gray-600'>
						Disculpe, no pudimos encontrar la página que estaba buscando.
					</p>
					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<button
							onClick={goBack}
							className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Regresar a la pagina principal
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
