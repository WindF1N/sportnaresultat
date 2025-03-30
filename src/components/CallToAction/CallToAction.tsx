import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';
import tool1 from '../../assets/tool1.png';
import tool2 from '../../assets/tool2.png';
import tool3 from '../../assets/tool3.png';
import { fadeIn, fadeInLeft, fadeInRight } from '../../utils/framerAnimations';

const CallToAction: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section 
      style={{ 
        backgroundColor: '#DEE3E9',
        width: '100%',
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '230px',
        paddingBottom: '200px'
      }}
      className="md:pt-[120px] lg:pt-[140px] md:pb-[90px] lg:pb-[100px]"
    >
      {/* Контейнер для центрирования контента */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative">
        {/* Иллюстрация 1 (слева) */}
        <motion.div 
          style={{ 
            width: '149px',
            height: '118.9px',
            background: `url(${tool1}) center/contain no-repeat`,
            zIndex: 1
          }}
          className="absolute w-[149px] h-[118.9px] top-[-170px] left-[40px] max-sm:left-[20px] max-md:left-[30px] z-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        ></motion.div>
        
        {/* Иллюстрация 2 (слева от текста) */}
        <motion.div 
          style={{ 
            width: '381.24px',
            height: '467.45px',
            background: `url(${tool2}) center/contain no-repeat`,
            zIndex: 1
          }}
          className="absolute w-[381.24px] h-[467.45px] top-[-80px] left-[-250px] max-sm:top-[100px] max-sm:left-[-180px] max-md:left-[-220px] z-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
          transition={{ delay: 0.2 }}
        ></motion.div>
        
        {/* Иллюстрация 3 (справа от текста) */}
        <motion.div 
          style={{ 
            width: '380px',
            height: '442.1px',
            background: `url(${tool3}) center/contain no-repeat`,
            zIndex: 1
          }}
          className="absolute w-[380px] h-[442.1px] top-[-140px] right-[-280px] max-sm:top-[100px] max-sm:right-[-200px] max-md:right-[-220px] z-[1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
          transition={{ delay: 0.2 }}
        ></motion.div>
        
        {/* Основной контент */}
        <div className="relative z-10 text-center">
          <motion.h2 
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              lineHeight: '125%',
              letterSpacing: '0%',
              color: '#324155',
            }}
            className="text-[28px] md:text-[36px] lg:text-[48px] mx-auto mb-[40px] md:mb-[50px] lg:mb-[66px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Записуйся до мене прямо зараз.<br/>Досить відкладати себе, свою красу та здоров'я, на теоретичне "потім".
          </motion.h2>
          
          <motion.button
            style={{
              backgroundColor: '#D5FF5F',
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#1D2507',
              transition: 'all 0.3s ease'
            }}
            className="py-[18px] px-[32px] md:py-[20px] md:px-[40px] lg:py-[24px] lg:px-[48px] rounded-[12px] hover:bg-opacity-90 hover:shadow-md"
            onClick={openModal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Перейти к курсу
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 