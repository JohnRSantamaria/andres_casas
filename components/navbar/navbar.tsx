import React from 'react';
import Logo from './logo';
import DropDown from '../dropdown';
import {CustomLink} from '../CustomLink';

export default function NavBar() {
	return (
		<header className='sticky top-0 bg-light h-16 flex px-1 items-center justify-between z-30 '>
			<section className='flex gap-2 items-center justify-center '>
				<Logo />
				<p className='font-semibold text-lg hidden sm:block'>Inversiones y Finanzas AC</p>
			</section>
			<nav>
				<ul className='flex gap-4'>
					<CustomLink
						href='#home'
						title='Inicio'
					/>
					<CustomLink
						href=''
						title='contacto'
					/>

					<DropDown />
				</ul>
			</nav>
		</header>
	);
}
