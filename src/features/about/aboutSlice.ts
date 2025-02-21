import { createSlice } from '@reduxjs/toolkit';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface AboutState {
  skills: Skill[];
  bio: string;
}

const initialState: AboutState = {
  skills: [
    // { name: "React", level: 90, category: "Frontend" },
    // { name: "TypeScript", level: 85, category: "Frontend" },
    // { name: "Node.js", level: 80, category: "Backend" },
    // { name: "UI Design", level: 85, category: "Design" },
    // { name: "Figma", level: 90, category: "Design" },
    // { name: "Redux", level: 85, category: "Frontend" }
  ],
  bio: "我的作品主要歐式風格的建築作畫，以及時裝類的插畫，在工作擅長把複雜的要素簡單化，以簡而有力的方式製作出作品呈現給大家。"
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {}
});

export default aboutSlice.reducer;