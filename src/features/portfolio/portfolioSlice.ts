import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: number;
  type: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  preview: string[];
  content: string;
  video: string;
}

interface PortfolioState {
  projects: Project[];
  filter: string;
  selectedProject: Project | null;
}

const initialState: PortfolioState = {
  projects: [],
  filter: 'all',
  selectedProject: null
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setProjects: (state, action: PayloadAction<Project[]>) => {
      console.log("setProjects", action.payload);
      state.projects = action.payload;
    },
    setSelectedProject: (state, action: PayloadAction<number>) => {
      state.selectedProject = state.projects.find(p => p.id === action.payload) || null;
    },
    clearSelectedProject: (state) => {
      state.selectedProject = null;
    }
  }
});

export const { setFilter, setProjects, setSelectedProject, clearSelectedProject } = portfolioSlice.actions;
export default portfolioSlice.reducer;