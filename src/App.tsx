import React, { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Specializations from './components/Specializations/Specializations'
import SportHistory from './components/SportHistory/SportHistory'
import CoursePreview from './components/CoursePreview/CoursePreview'
import Advantages from './components/Advantages/Advantages'
import ProgramResults from './components/ProgramResults/ProgramResults'
import AboutMe from './components/AboutMe/AboutMe'
import Testimonials from './components/Testimonials/Testimonials'
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import ModalContent from './components/Modal/ModalContent'
import { ModalProvider, useModal } from './context/ModalContext'
import { ScrollAnimator, SmoothScroller } from './utils/animations'
import './styles/animation.css'

// Оборачиваем приложение в компонент, который использует контекст
const AppContent: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Инициализируем анимации при загрузке страницы
  useEffect(() => {
    // Инициализируем плавный скролл для ссылок
    SmoothScroller.init('a[href^="#"]', 0, 800);
    
    // Очищаем анимации при размонтировании
    return () => {
      ScrollAnimator.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      {/* Индикатор прогресса скролла */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#B2E328] z-50 origin-left"
        style={{ scaleX }}
      />
      <main className='overflow-x-hidden'>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="specializations">
          <Specializations />
        </section>
        
        <section id="why-me">
          <SportHistory />
        </section>

        <section>
          <CoursePreview />
        </section>
        
        <section>
          <Advantages />
        </section>
        
        <section>
          <ProgramResults />
        </section>
        
        <section>
          <AboutMe />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section>
          <CallToAction />
        </section>
      </main>
      
      <footer id="contacts">
        <Footer />
      </footer>
      
      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalContent onClose={closeModal} />
      </Modal>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
};

export default App;
