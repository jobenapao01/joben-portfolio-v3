'use client';

import CountUp from 'react-countup';
import { IconType } from 'react-icons/lib';

type Props = {
	containerStyles: string;
	icon: IconType;
	// endCountNum?: number;
	// endCountText?: string;
	badgeText: string;
};

const Badge = ({ containerStyles, badgeText, icon: Icon }: Props) => {
	return (
		<div className={`badge ${containerStyles} animate-bounce`}>
			<div className='text-3xl text-primary'>
				<Icon />
			</div>

			<div className='flex items-center gap-x-2 '>
				{/* {/* <div className='text-4xl leading-none font-bold text-primary'>
					<CountUp
						end={endCountNum}
						delay={1}
						duration={4}
					/>
					{endCountText}
				</div> */}
				<div className='max-w-[100px] leading-none text-[15px] font-medium text-black'>
					{badgeText}
				</div>
			</div>
		</div>
	);
};

export default Badge;
