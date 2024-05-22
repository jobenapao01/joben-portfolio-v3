'use client';
import { FaLinkedin, FaGithub, FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

type Props = {
	containerStyles: string;
	iconsStyles: string;
};

const icons = [
	{
		path: 'https://www.linkedin.com/in/jobenapao/',
		name: <FaLinkedin />,
	},
	{
		path: 'https://www.github.com/jobenapao01',
		name: <FaGithub />,
	},
	{
		path: 'https://www.facebook.com/apaobenjo/',
		name: <FaFacebook />,
	},

	{
		path: 'https://mail.google.com/mail/?view=cm&to=work.jobenapao@gmail.com&su=LetsTalk&body=&bcc=work.jobenapao@gmail.com',
		name: <SiGmail />,
	},
];
const Socials = ({ containerStyles, iconsStyles }: Props) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link
						href={icon.path}
						key={index}
						target='_blank'
					>
						<div className={`${iconsStyles}`}>{icon.name}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
