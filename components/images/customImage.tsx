import Image, {StaticImageData} from 'next/image';

interface CustomImageProps {
	src: StaticImageData;
	alt: string;

	className?: string;
}

export default function CustomImage({src, alt, className}: CustomImageProps) {
	return (
		<div className='flex items-center justify-center w-full h-full px-2'>
			<Image
				src={src}
				alt={alt}
				className={`${className} object-contain max-w-[500px] w-full h-full`}
			/>
		</div>
	);
}
