import Image from 'next/image';

type Props = {
	containerStyles: string;
	imgSrc: string;
};
const DevImg = ({ containerStyles, imgSrc }: Props) => {
	return (
		<div className={`${containerStyles}`}>
			<Image
				src={imgSrc}
				alt=''
				fill
				priority
				className='object-cover rounded-md '
			/>
		</div>
	);
};

export default DevImg;
