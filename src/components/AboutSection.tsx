import React from 'react';
import { Code2, GraduationCap, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const skills = ["React", "JavaScript", "TypeScript", "Android", "React Native", "Git", "HTML/CSS"];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Code2 className="text-blue-600" />
          About Me
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-blue-600" />
                Education
              </h3>
              <p className="text-gray-600 mb-4">
                Currently pursuing Engineering at Atharva College of Engineering, focusing on building a strong foundation in computer science and software development.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Smartphone className="text-blue-600" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;