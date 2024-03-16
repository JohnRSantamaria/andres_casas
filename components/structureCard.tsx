import React from 'react';
import CustomImage from './images/customImage';
import {StaticImageData} from 'next/image';

interface StructureCardProps {
	src: StaticImageData;
	alt: string;
	title: string;
	content: string;
}

export default function StructureCard({src, alt, content, title}: StructureCardProps) {
	return (
		<div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 grid-cols-1 '>
			<CustomImage
				src={src}
				alt={alt}
			/>
			<div className='flex flex-col items-center justify-center gap-4 md:px-8'>
				<h3 className='capitalize subtitle'>{title}</h3>
				<span className='text-lg'>{content}</span>
			</div>
		</div>
	);
}
