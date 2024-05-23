import ProjectCard from './ProjectCard';

import Link from 'next/link';
import { Button } from './ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';

export type Project = {
	image: string;
	techStack: string[];
	category: string;
	name: string;
	description: string;
	link: string;
	github: string;
};

export const projectsData = [
	{
		image: '/images/projects/foodgrub.png',
		techStack: [
			'ReactJS',
			'TailwindCSS',
			'Shadcn-UI',
			'NodeJS',
			'ExpressJS',
			'Auth0',
			'React Query',
			'MongoDB',
			'React Hook Form',
			'Zod',
			'Stripe',
		],
		category: 'MERN',
		name: 'Foodgrub',
		description: 'A food delivery web app.',
		link: 'https://foodgrub-frontend.onrender.com/',
		github: 'https://github.com/jobenapao01/foodgrub-frontend',
	},
	{
		image: '/images/projects/hotelbnb.png',
		techStack: [
			'NextJS',
			'Typescript',
			'LeafletJS',
			'Prisma',
			'AuthJS',
			'MongoDB',
			'TailwindCSS',
			'Zustand',
			'React Hook Form',
			'Cloudinary',
		],
		category: 'NextJS',
		name: 'HotelBNB',
		description: 'A airbnb clone for aimed to enhance my development skills.',
		link: 'https://hotelbnb.vercel.app/',
		github: 'https://github.com/jobenapao01/hotelbnb',
	},
];

const Work = () => {
	return (
		<section className='relative mb-12 xl:mb-48'>
			<div className='container mx-auto flex justify-between items-center gap-x-10 flex-col xl:flex-row'>
				{/* text */}
				<div className='flex-1 max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
					<h2 className='section-title mb-4'>Latest Projects</h2>
					<p className='subtitle mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					<Link href='/projects'>
						<Button>All Projects</Button>
					</Link>
				</div>

				{/* slider */}

				<div className='flex-2 justify-end mb-12'>
					<Carousel opts={{ loop: true }}>
						<CarouselContent>
							{projectsData.map((project, index) => (
								<CarouselItem key={index}>
									<ProjectCard
										key={index}
										project={project}
									/>
								</CarouselItem>
							))}
						</CarouselContent>

						<CarouselNext className='absolute top-2/4 right-2 bg-background' />
						<CarouselPrevious className='absolute top-2/4  left-2' />
					</Carousel>
				</div>
			</div>
		</section>
	);
};

export default Work;
