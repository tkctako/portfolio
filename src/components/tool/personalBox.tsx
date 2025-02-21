import React from 'react';
import { openModal } from '../../features/modal/modalSlice';
import { useDispatch } from 'react-redux';
interface PersonalBoxProps {
  project: any;
  index: number;
  onClick: () => void;
}

const PersonalBox: React.FC<PersonalBoxProps> = ({ project, index, onClick }) => (
  <div 
    key={project.id} 
    className={`group cursor-pointer`}
    onClick={onClick}
  >
    
    {project.video === "" ? (
      <div className={`relative overflow-hidden`}>
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
      <div className={`relative overflow-hidden aspect-video`}>
        <iframe
          src={project.video}
          title={project.title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500">
          <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-sm tracking-[0.2em]">{project.category}</p>
          </div>
        </div>
      </div>
    )}
    <div className="mt-6 transform group-hover:-translate-y-1 transition-transform duration-500">
      <p className="text-sm tracking-[0.2em] text-gray-400 mb-2">{project.year}</p>
      <h3 className="text-2xl font-light">{project.title}</h3>
      <p className="text-gray-400 transition-opacity duration-500 opacity-0 group-hover:opacity-100">{project.description}</p>
    </div>
  </div>
);

export default PersonalBox;