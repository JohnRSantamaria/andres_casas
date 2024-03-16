import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='flex items-center flex-wrap justify-center gap-2 w-full border-t-2 border-solid border-primary mt-8 py-2'>
			<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
			<div className='flex items-center lg:py-2'>
				Build With <span className='text-red-700 dark:text-primaryDark text-2xl px-1'>&#9825;</span>
				by&nbsp;
				<Link
					href='https://www.linkedin.com/in/john-santamaria-dev/'
					target='_blank'
					className='underline underline-offset-2'
				>
					JohnS
				</Link>
			</div>
		</footer>
	);
}
