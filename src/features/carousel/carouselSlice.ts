import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarouselState {
  currentSlide: number;
  slides: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

const initialState: CarouselState = {
  currentSlide: 0,
  slides: [
    {
      image: "/images/frieren.png",
      title: "Web Development",
      description: "Creating modern and responsive websites"
    },
    {
      image: "/images/frieren2.png",
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces"
    },
    {
      image: "/images/ayase.png",
      title: "Brand Design",
      description: "Developing comprehensive brand identities"
    }
  ]
};

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setCurrentSlide: (state, action: PayloadAction<number>) => {
      state.currentSlide = action.payload;
    },
    nextSlide: (state) => {
      state.currentSlide = (state.currentSlide + 1) % state.slides.length;
    },
    previousSlide: (state) => {
      state.currentSlide = (state.currentSlide - 1 + state.slides.length) % state.slides.length;
    }
  }
});

export const { setCurrentSlide, nextSlide, previousSlide } = carouselSlice.actions;
export default carouselSlice.reducer;