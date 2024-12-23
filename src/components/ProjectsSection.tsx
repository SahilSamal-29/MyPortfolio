import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A mobile application built with React Native that helps students track their assignments and deadlines.",
      tech: ["React Native", "JavaScript", "Firebase"],
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=870"
    },
    {
      title: "Project 2",
      description: "A web-based student portal for accessing course materials and submitting assignments.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=872"
    },
    {
      title: "Project 3",
      description: "An Android app that helps users find and book study rooms in the college library.",
      tech: ["Android", "Kotlin", "SQLite"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=870"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;