import React from 'react';
import Logo from './logo';
import DropDown from '../dropdown';

export default function NavBar() {
	return (
		<header className='sticky top-0 bg-white  h-16 flex gap-4 items-center justify-between px-2 '>
			<section className='flex gap-2 items-center justify-center'>
				<Logo />
				<h1 className='font-semibold text-lg hidden sm:block'>Inversiones y Finanzas AC</h1>
			</section>
			<nav>
				<ul className='flex gap-4'>
					<li>
						<a href=''>Inicio</a>
					</li>
					<li>
						<a href='#contacto'>contacto</a>
					</li>
					<DropDown />
				</ul>
			</nav>
		</header>
	);
}