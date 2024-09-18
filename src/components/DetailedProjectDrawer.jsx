import React from "react";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { DrawerDescription, DrawerFooter, DrawerTitle } from "./ui/Drawer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const DetailedProjectDrawer = ({ project }) => {
  if (!project) return null;

  return (
    <div className='md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto'>
      <DrawerTitle className='text-3xl font-bold leading-tight tracking-tight mb-4'>{project.name}</DrawerTitle>

      <div className="p-4 pb-0">
        <div className="relative h-96 mb-6">
          <Image
            src={project.image}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <DrawerDescription className="mb-4 text-black text-pretty text-base font-medium">{project.description}</DrawerDescription>
       
        <div className="flex flex-col sm:flex-row mb-4 gap-4">
          <Button asChild className="flex items-center gap-2 bg-black ">
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white"
            >
              <Github className="w-5 h-5 text-white" />
              View Source Code
            </a>
          </Button>
          <Button asChild className="flex items-center gap-2 bg-white border-[1px] border-black hover:bg-gray-100">
            <a
              href={project.project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Project
            </a>
          </Button>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tech) => (
            <Badge key={tech.name} className={tech.color}>
              {tech.name}
            </Badge>
          ))}
        </div>
{/* TODO:Make dynamic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>AI-powered outfit coordination</li>
              <li>Personalized style suggestions</li>
              <li>Wardrobe management system</li>
              <li>Subscription-based model</li>
              <li>User-friendly interface</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Technical Highlights
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Next.js for server-side rendering and routing</li>
              <li>MongoDB for efficient data storage</li>
              <li>Tailwind CSS and Shadcn for responsive design</li>
              <li>Integration with OpenAI for intelligent suggestions</li>
              <li>Stripe integration for secure payments</li>
              <li>AWS S3 for scalable image storage</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <DrawerFooter>
        
      </DrawerFooter> */}
    </div>
  );
};

export default DetailedProjectDrawer;
