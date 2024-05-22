import { links } from '@/constants/navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type NavbarProps = {
	containerStyles: string;
	linkStyles: string;
	underlineStyles: string;
};

const Navbar = ({ containerStyles, linkStyles, underlineStyles }: NavbarProps) => {
	const path = usePathname();
	return (
		<nav className={`${containerStyles}`}>
			{links.map((link, index) => {
				return (
					<Link
						key={index}
						href={link.path}
						className={`capitalize ${linkStyles}`}
					>
						{link.path === path && (
							<motion.span
								initial={{ y: '-100%' }}
								animate={{ y: 0 }}
								transition={{ type: 'tween' }}
								layoutId='underline'
								className={`${underlineStyles}`}
							/>
						)}
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Navbar;
