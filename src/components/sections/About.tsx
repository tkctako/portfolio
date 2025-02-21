import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Image from 'next/image';
const About: React.FC = () => {
  const { skills, bio } = useSelector((state: RootState) => state.about);

  return (
    <section id="about" className="w-full py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="relative mx-auto overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Profile"
              className="transition-transform"
            />
            <div className="text-center text-white mt-8">
            <h2 className="text-3xl md:text-3xl font-light mb-12">TKC</h2>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-light mb-12">About</h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>{bio}</p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm tracking-[0.2em]">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;