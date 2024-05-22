'use client';

import { Badge } from './ui/badge';
import { Project } from './Work';
import { Card, CardContent, CardHeader } from './ui/card';
import Image from 'next/image';
import { AspectRatio } from './ui/aspect-ratio';
import Link from 'next/link';
import { Link2Icon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Tooltip, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { Button } from './ui/button';

type Props = {
	project: Project;
};

const ProjectCard = ({ project }: Props) => {
	return (
		<Card className='group overflow-hidden shadow-xl'>
			<CardHeader className='p-0 '>
				{/* image */}
				<div className='w-full h-[200px] relative'>
					<Image
						src={project.image}
						alt='image'
						className='shadow-xl object-cover absolute bottom-0'
						fill
						priority
					/>

					{/* btns */}
					<div className='flex justify-center gap-x-2 py-4'>
						<Link
							href={project.link}
							className='text-xs bg-secondary rounded-full size-[40px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
							target='_blank'
						>
							<Link2Icon
								className='text-white'
								size={24}
							/>
						</Link>
						<Link
							href={project.github}
							className='text-xs bg-secondary rounded-full size-[40px] flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
							target='_blank'
						>
							<FaGithub
								className='text-white'
								size={24}
							/>
						</Link>
					</div>
				</div>
			</CardHeader>
			<CardContent className='dark:bg-secondary/40'>
				<div className='h-full px-8 py-6'>
					<div className='space-x-2 mb-4'>
						{project.techStack.map((item, index) => (
							<Badge
								key={index}
								className='uppercase text-sm font-medium mb-2'
							>
								{item}
							</Badge>
						))}
					</div>
					<h4 className='h4'>{project.name}</h4>
					<p className='text-muted-foreground text-lg'>{project.description}</p>
				</div>
			</CardContent>
		</Card>
	);
};

export default ProjectCard;
