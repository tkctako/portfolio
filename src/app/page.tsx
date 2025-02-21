'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Modal from '@/components/tool/modal/modal';
import BackToTop from '@/components/tool/backToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <Provider store={store}>
      <main className="w-full min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <Modal />
        <BackToTop />
        <ToastContainer />
      </main>
    </Provider>
  );
}