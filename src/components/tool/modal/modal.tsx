import styles from './modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { closeModal } from '@/features/modal/modalSlice';
import ReactModal from 'react-modal';
import { useState, useEffect, useRef } from 'react';
ReactModal.setAppElement('main'); // 確保這行代碼指向你的應用根元素

const Modal: React.FC = () => {
  const modalId = useSelector((state: RootState) => state.modal.id);
  const projects = useSelector((state: RootState) => state.portfolio.projects);
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const project = projects.find((project: any) => project.id === modalId);
  const images = project?.preview || [];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    setCurrentSlide(0);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // 每3秒切換一次幻燈片

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images]);

  const handlePrevSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  const handleNextSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
  };

  return (
    <ReactModal
      isOpen={modalId !== 0}
      onRequestClose={() => dispatch(closeModal())}
      className={styles.modalContent}
      overlayClassName={styles.modal}
    >
      <span className={styles.close} onClick={() => dispatch(closeModal())}>&times;</span>
      <h1 className="text-center text-3xl font-bold mb-10 text-white">{project?.description}</h1> 
      <div className="flex">
        <div className="w-1/2 mr-4">
          <div className="relative" style={{ height: '400px' }}>
            {images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`圖片 ${index + 1}`} 
                className="w-full transition-opacity duration-500"
                style={{ 
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-50%)',
                  opacity: currentSlide === index ? 1 : 0,
                  maxHeight: '100%',// 确保图片高度不超过外部 div 的高度
                  objectFit: 'contain' // 保持图片的宽高比
                }}
              />
            ))}
            <button 
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-6xl opacity-70 hover:opacity-100 transition-opacity"
                onClick={handlePrevSlide}
              >
                &#8249;
            </button>
            <button 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-6xl opacity-70 hover:opacity-100 transition-opacity"
              onClick={handleNextSlide}
            >
              &#8250;
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
             
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center p-5"> 
          <p className="mb-2 text-white">{project?.content}</p>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;