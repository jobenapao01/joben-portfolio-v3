"use client";

import { Briefcase, ChevronDown, Download, Send } from "lucide-react";

import Link from "next/link";
import { Button } from "./ui/button";
import DevImg from "./DevImg";
import Socials from "./Socials";
import Badge from "./Badge";
import { badgeIcons } from "@/constants/badgeIcons";

const Hero = () => {
  return (
    <section className='py-12 md:py-24 min-h-[84vh] md:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover '>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8 '>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto md:mx-0 text-center md:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Web Developer
            </div>
            <h1 className='h1 mb-4'>Hello, I am </h1>
            <h1 className='h1 mb-4'>Joben Ong Apao </h1>
            <p className='subtitle max-w-[490px] mx-auto md:mx-0 text-start'>
              I&apos;m a passionate Frontend Developer specializing in React,
              Next.js, and TypeScript, with a strong foundation in modern web
              development. I enjoy building responsive, accessible, and
              high-performance web applications that deliver intuitive and
              engaging user experiences.
            </p>
            <p className='subtitle max-w-[490px] mx-auto md:mx-0 text-start'>
              I take pride in writing clean, maintainable, and scalable code.
              I&apos;m driven by solving complex problems, continuously learning
              new technologies, and turning ideas into polished, user-friendly
              interfaces. Whether collaborating with a team or working
              independently, I&apos;m committed to creating products that are
              both functional and enjoyable to use.
            </p>

            {/* buttons */}
            <div className='flex flex-col gap-3 md:flex-row mx-auto md:mx-0 mb-12 '>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>

              <Link
                href='/Apao, Joben - CV.pdf'
                download='Apao, Joben CV.pdf'
                target='_blank'
              >
                <Button
                  className='gap-x-2'
                  variant='secondary'
                >
                  Download CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto md:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative '>
            {/* badge 1 */}
            {badgeIcons.map((badge, index) => (
              <Badge
                icon={badge.icon}
                badgeText={badge.badgeText}
                containerStyles={badge.style}
                key={index}
              />
            ))}

            <div className=' bg-hero_shape_light dark:bg-hero_shape_dark size-[500px] bg-no-repeat absolute -top-1 -right-2' />
            <DevImg
              imgSrc='/images/me/myphoto-4.png'
              containerStyles='w-[510px] h-[462px] relative'
            />
          </div>
        </div>

        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 md:bottom-12 animate-bounce'>
          <ChevronDown className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
