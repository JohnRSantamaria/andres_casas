interface InfoCardProps {
	title: string;
	paragraph: string;
}

export function InfoCard({title, paragraph}: InfoCardProps) {
	return (
		<div className='w-full'>
			<h2 className='font-semibold'>{title}</h2>
			<p>{paragraph}</p>
		</div>
	);
}
