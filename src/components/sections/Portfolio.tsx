import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../store/store';
import WorkBox from '../tool/workBox';
import PersonalBox from '../tool/personalBox';
import { setProjects, setSelectedProject } from '../../features/portfolio/portfolioSlice';
import { openModal } from '../../features/modal/modalSlice';
import { useGetProjectsQuery } from '../../features/portfolio/portfolio';

const Portfolio: React.FC = () => {
  const dispatch = useDispatch();
  const { projects, selectedProject } = useSelector((state: RootState) => state.portfolio);
  const { data: projectsData , isLoading, error } = useGetProjectsQuery(undefined);
  useEffect(() => {
    if (projectsData) {
      dispatch(setProjects(projectsData));
    }
  }, [projectsData]);
  const handleProjectClick = (projectId: number) => {
    console.log("handleProjectClick");
    dispatch(setSelectedProject(projectId));
    dispatch(openModal(projectId));
  };

  if (isLoading) return <div className="text-5xl mt-20 text-center text-white">Loading...</div>;

  if (!projects || projects.length === 0) {
    return <div className="text-5xl text-center mt-20 text-white">No projects found.</div>;
  }
  return (
    <section id="works" className="w-full py-32 bg-zinc-900">
      <div className="max-w-[1600px] mx-auto px-8">
        <h2 className="text-5xl md:text-7xl font-light mb-20">Portfolio</h2>
        <h2 className="text-4xl md:text-4xl mb-5">工作紀錄</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">        
          {
          projects?.filter(project => project.type === 'work').map((project: any, index: number) => (
            <WorkBox 
            key={project.id} 
            project={project} 
            index={index} 
            onClick={() => handleProjectClick(project.id)}
          />
          ))}
        </div>
        <h2 className="text-4xl md:text-4xl mb-5">個人作品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects?.filter(project => project.type === 'personal').map((project: any, index: number) => (
            <PersonalBox 
            key={project.id} 
            project={project} 
            index={index} 
            onClick={() => handleProjectClick(project.id)}
          />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;