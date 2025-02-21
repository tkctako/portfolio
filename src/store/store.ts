import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from '../features/carousel/carouselSlice';
import portfolioReducer from '../features/portfolio/portfolioSlice';
import { portfolioApi } from '../features/portfolio/portfolio';
import aboutReducer from '../features/about/aboutSlice';
import contactReducer from '../features/contact/contactSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    portfolio: portfolioReducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    about: aboutReducer,
    contact: contactReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(portfolioApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;