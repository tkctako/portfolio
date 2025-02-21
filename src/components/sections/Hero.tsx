import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronRight } from 'lucide-react';
import { RootState } from '../../store/store';
import { setCurrentSlide, nextSlide } from '../../features/carousel/carouselSlice';
import Image from 'next/image';

const Hero: React.FC = () => {
  const dispatch = useDispatch();
  const { currentSlide, slides } = useSelector((state: RootState) => state.carousel);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(nextSlide());
    }, 5000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <section className="w-full h-screen relative flex items-center">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <Image src={slide.image} alt="" className="w-full h-full object-cover" fill />
          </div>
        ))}
      </div>
      
      <div className="max-w-[1600px] w-full mx-auto px-8 relative z-10">
        <div className="w-full md:w-2/3">
          <p className="text-sm tracking-[0.2em] text-gray-300 mb-4">JAPENSTYLE ILLUSTRATOR</p>
          <h1 className="text-6xl md:text-8xl font-light mb-6">
            TKC
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            擅長時裝穿搭以及歐風背景的日系插畫家。
          </p>
          <a href="#works" className="text-sm tracking-[0.2em] text-gray-300 hover:text-white flex items-center gap-2">
            VIEW PORTFOLIO
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-12 right-8 md:right-32 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCurrentSlide(index))}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll */}
      <div className="absolute bottom-12 left-8 md:left-32">
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-[1px] bg-white/20"></div>
          <span className="text-xs tracking-wider text-gray-400">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;