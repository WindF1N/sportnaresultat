import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui-tmp/Button';
import heroImage from '../../assets/hero.png';
import patternImage from '../../assets/pattern.svg';
import { useModal } from '../../context/ModalContext';
import { fadeIn, fadeInLeft, fadeInRight, titleAnimation, scale, buttonAnimation } from '../../utils/framerAnimations';

const HeroSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="py-16 lg:pt-[136.5px] lg:pb-[186.5px] bg-[#F6F6F6] relative">
      {/* Паттерн на фоне */}
      <div className="absolute top-0 left-0 right-0 w-full z-0 flex justify-center items-center max-[1280px]:hidden">
        <img 
          src={patternImage} 
          alt="" 
          className="w-[2277px] max-w-none"
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '-380px'
          }}
        />
      </div>
      
      {/* Контент секции поверх паттерна */}
      <div className="max-w-[1320px] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="w-full lg:max-w-[48%] xl:max-w-[628px] mb-12 lg:mb-0 lg:mr-[20px] xl:mr-[43px]"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
          >
            <motion.h1 
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 600,
                lineHeight: '125%',
                letterSpacing: '0%',
                color: '#324155'
              }}
              className="text-[44px] lg:text-[54px] xl:text-[64px] mb-6"
              variants={titleAnimation}
            >
              Твоя тренерка міжнародного стандарту
            </motion.h1>
            <motion.p 
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '125%',
                letterSpacing: '0%',
                color: '#566B86'
              }}
              className="text-lg lg:text-[20px] mb-8 lg:mb-12"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              Бути мамою – найнадзвичайніше диво, яке може статися з жінкою. Але ж як непросто привести себе в форму після пологів.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  text="Перейти к курсу" 
                  className="mb-4 sm:mb-0"
                  onClick={openModal}
                  customStyles={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#1D2507',
                    backgroundColor: '#D5FF5F',
                    padding: '24px 48px',
                  }}
                />
              </motion.div>
              <motion.p 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '125%',
                  letterSpacing: '0%',
                  color: '#566B86'
                }}
                className="sm:ml-[24px]"
                variants={fadeIn}
                transition={{ delay: 0.5 }}
              >
                ISO та нутриціолог PRO<br /> – Ольга Дідух
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-auto flex justify-center lg:justify-start"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <motion.div 
              className="w-full max-h-[350px] lg:w-[649px] lg:h-[501px] lg:max-h-none rounded-[32px] overflow-hidden"
              style={{
                borderRadius: '32px',
                aspectRatio: '649/501',
              }}
              variants={scale}
              transition={{ delay: 0.3 }}
            >
              <img 
                src={heroImage} 
                alt="Тренер Ольга Дідух" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 