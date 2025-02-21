import React from 'react';
import YouTube from 'react-youtube';

interface WorkBoxProps {
  project: any;
  index: number;
  onClick: () => void;
}

const WorkBox: React.FC<WorkBoxProps> = ({ project, index, onClick }) => (
  <div 
    key={project.id} 
    className={`group cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}
    onClick={onClick}
  >
    {project.video === "" ? (
      <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[2/1]' : 'aspect-[3/2]'}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500">
          <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-sm tracking-[0.2em]">{project.category}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[2/1]' : 'aspect-[3/2]'}`}>
         <YouTube
          videoId={project.video}
          opts={{
            height: '100%',
            width: '100%',
            playerVars: {
              autoplay: 0,
            },
          }}
          className="w-full h-full"
        />
      </div>
    )}
    <div className="mt-6 transform group-hover:-translate-y-1 transition-transform duration-500">
      <p className="text-sm tracking-[0.2em] text-gray-400 mb-2">{project.year}</p>
      <h3 className="text-2xl font-light">{project.title}</h3>
      <p className="text-gray-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">{project.description}</p>
    </div>
  </div>
);

export default WorkBox;