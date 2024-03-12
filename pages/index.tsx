import Buttton from '@/components/common/Buttton';
import {HeroImg} from '@/public/images/svg/heroImg';

export default function Home() {
	return (
		<main
			className={`flex flex-col justify-center items-center text-center gap-4 lg:flex-row select-none hero_screen_size border border-blue-400 overflow-hidden`}
		>
			<HeroImg className='h-1/2 w-[calc(100vw-10%)] lg:w-1/2 md:hero_screen_size order-2 lg:order-1 border border-red-900 ' />
			<div className='h-1/2 w-full flex flex-col items-center justify-center gap-8 md:hero_screen_size order-1 lg:order-2 border border-red-900'>
				<h1 className='text-3xl font-semibold lg:text-4xl xl:text-6xl border'>
					Inversiones y Finanzas AC
				</h1>
				<h2 className='text-lg text-wrap border  '>
					Especialistas en Créditos y Financiación en Colombia
				</h2>
				<Buttton>Agenda tu asesoría</Buttton>
			</div>
		</main>
	);
}
