import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
	theme?: string;
};
const Logo = ({ theme }: LogoProps) => {
	return (
		<Link href='/'>
			<Image
				src={theme === 'light' ? '/images/logo.png' : '/images/logo-dark.png'}
				alt=''
				width={54}
				height={54}
				priority
			/>
		</Link>
	);
};

export default Logo;
