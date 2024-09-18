'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const PageIdPage = () => {
    const path = usePathname();
    const router = useRouter();
  const id = path.split('/').pop();
//   console.log(id)
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProject();
    } else {
        router.push('/work');
    }
  }, [id]);

  const fetchProject = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/projects/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch project');
      }
      const data = await res.json();
      setProject(data);
    } catch (error) {
      console.error('Error fetching project:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!project) {
    return <div className="flex justify-center items-center h-screen">Project not found</div>;
  }

  return (
    <div className="h-full overflow-auto">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <motion.h1 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          {project.name}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }}
          >
            <Image 
              src={project.image} 
              alt={project.name} 
              width={600} 
              height={400} 
              className="rounded-lg shadow-2xl" 
            />
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ delay: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-4">Description</h2>
              <p className="text-gray-300 mb-6">{project.description}</p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span key={index} className={`px-3 py-1 rounded-full text-sm ${tag.color}`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Link href={project.source_code_link} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors duration-300">
                  <Github size={20} />
                  Source Code
                </a>
              </Link>
              <Link href={project.project_link} passHref legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full transition-colors duration-300">
                  <ExternalLink size={20} />
                  Live Project
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default PageIdPage