import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Montserrat} from 'next/font/google';
import Footer from '@/components/footer/footer';
import NavBar from '@/components/navbar/navbar';
import favicon from '@/public/favicon.ico';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
});

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<link
					rel='icon'
					href='/public/favicon.ico'
				/>
				<title>
					Inversiones y Finanzas AC - Especialistas en Créditos y Financiación en Colombia
				</title>

				<meta
					name='description'
					content='Inversiones y Finanzas AC, especialistas en créditos y financiación en Colombia. Tu mejor opción para invertir. Te ayudamos a gestionar la financiación del tipo de crédito que necesites en cualquier entidad bancaria del país.'
				/>
			</Head>

			<main
				className={`${montserrat.variable} font-mont w-full min-h-screen max-w-screen-2xl ml-auto mr-auto bg-light text-primary px-4 `}
			>
				<NavBar />
				<Component {...pageProps} />
				<Footer />
			</main>
		</>
	);
}
