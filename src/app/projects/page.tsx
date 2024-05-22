'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { projectsData } from '@/components/Work';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
	// const uniqueCategories = projectsData.map((item) => item.category).map((category) => category);
	// const uniqueCategories = [
	// 	'all projects',
	// 	...new Set(projectsData.map((item) => item.category[0])),
	// ];
	const uniqueCategories = ['all projects', ...new Set(projectsData.map((item) => item.category))];

	const [categories, setCategories] = useState(uniqueCategories);
	const [category, setCategory] = useState('all projects');

	const filteredProjects = projectsData.filter((project) => {
		// if category is 'all project' return all projects, else filter by category

		return category === 'all projects' ? project : project.category === category;
	});

	return (
		<section className='min-h-screen pt-12'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>

				{/* tabs */}
				<Tabs
					defaultValue={category}
					className='mb-24 xl:mb-48'
				>
					<TabsList className='w-full grid h-full md:grid-cols-3 lg:max-w-fit mb-12 mx-auto md:border dark:border-none '>
						{categories.map((cat, index) => {
							return (
								<TabsTrigger
									key={index}
									value={cat}
									className='capitalize w-[162px] m:w-auto'
									onClick={() => setCategory(cat)}
								>
									{cat}
								</TabsTrigger>
							);
						})}
					</TabsList>
					{/* tabs content */}
					<div className='text-lg xl:mt-8 grid lg:grid-cols-2 gap-4'>
						{filteredProjects.map((project, index) => {
							return (
								<TabsContent
									value={category}
									key={index}
								>
									<ProjectCard project={project} />
								</TabsContent>
							);
						})}
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default Projects;
