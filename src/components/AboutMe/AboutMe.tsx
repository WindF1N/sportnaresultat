import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import women2Image from '../../assets/women2.png';
import { fadeIn, fadeInLeft, fadeInRight, scale } from '../../utils/framerAnimations';

const AboutMe: React.FC = () => {
  // Состояние для отслеживания ширины экрана
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Эффект для отслеживания изменения размера окна
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 1200);
    };
    
    // Проверяем при монтировании
    checkIsDesktop();
    
    // Добавляем слушатель изменения размера
    window.addEventListener('resize', checkIsDesktop);
    
    // Убираем слушатель при размонтировании
    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  // Тень для блока
  const boxShadowStyle = '0px 10px 21px 0px #6A7D9E0D, 0px 39px 39px 0px #6A7D9E0A, 0px 87px 52px 0px #6A7D9E08, 0px 155px 62px 0px #6A7D9E03, 0px 242px 68px 0px #6A7D9E00';

  // Информационные блоки с данными
  const infoBlocks = [
    { id: 1, title: 'Тривалість', value: '12 тижнів' },
    { id: 2, title: 'Дихальні техніки', value: '6 вправ' },
    { id: 3, title: 'Блоки курсу', value: '5 блоків' }
  ];

  // Стили для контента
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingLeft: '24px',
    paddingRight: '24px'
  };

  const contentStyleDesktop = {
    paddingRight: '24px',
    paddingLeft: '44px'
  };

  // Стили для контейнера изображения
  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '24px',
    paddingBottom: '24px', 
    paddingLeft: '24px',
    paddingRight: '24px',
    width: '100%'
  };

  const imageContainerStyleDesktop = {
    marginLeft: '44px',
    width: 'auto',
    display: 'flex',
    alignItems: 'stretch',
    alignSelf: 'stretch'
  };

  // Стили для изображения
  const imageStyle = {
    height: '400px',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    objectFit: 'cover' as const
  };

  const imageStyleDesktop = {
    width: '100%',
    flexShrink: 0,
    height: '100%'
  };

  return (
    <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Блок с белым фоном и тенью */}
        <motion.div 
          style={{ 
            backgroundColor: 'white', 
            borderRadius: '32px',
            boxShadow: boxShadowStyle 
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={scale}
        >
          <div className={isDesktop ? "flex flex-row" : "flex flex-col"}>
            {/* Изображение: для экранов <= 1200px ставим вверху */}
            {!isDesktop && (
              <motion.div 
                style={{...imageContainerStyle}}
                variants={fadeIn}
              >
                <motion.img 
                  src={women2Image} 
                  alt="Чому обирають мене" 
                  style={{...imageStyle, width: '100%', maxWidth: '100%'}}
                  variants={scale}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
            )}
            
            {/* Контент: всегда показываем десктопную версию, но меняем положение */}
            <motion.div 
              style={isDesktop ? {...contentStyle, ...contentStyleDesktop} : {...contentStyle, paddingLeft: '24px', paddingRight: '24px'}}
              variants={isDesktop ? fadeInLeft : fadeIn}
            >
              <motion.h2 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 600,
                  fontSize: isDesktop ? '48px' : '32px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#324155',
                  marginBottom: isDesktop ? '24px' : '16px'
                }}
                variants={fadeIn}
              >
                Чому обирають мене
              </motion.h2>

              {/* Текстовое описание */}
              <motion.p 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: isDesktop ? '20px' : '16px',
                  lineHeight: '125%',
                  letterSpacing: '4%',
                  color: '#566B86',
                  marginBottom: isDesktop ? '164px' : '44px'
                }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                Я, Ольга Дідух, саме той тренер, який працює в індивідуальному порядку. Тобто, пропишу програму залежно від особливостей організму, фізичного чи емоційного стану я підберу саме ті вправи, які принесуть найкращий результат.
                <br /><br />
                Крім того, не варто забувати про важливість харчування.
                Правильно підібраний раціон для схуднення – це більш ніж половина прогресу. І ми цим займемося разом.
              </motion.p>

              {/* Три блока с информацией в строку */}
              <motion.div 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  gap: isDesktop ? '24px' : '10px', 
                  marginBottom: 0,
                  flexWrap: 'wrap'
                }}
                variants={fadeIn}
                transition={{ delay: 0.4 }}
              >
                {infoBlocks.map((block, index) => (
                  <motion.div 
                    key={block.id} 
                    style={{ display: 'flex', flexDirection: 'column', marginBottom: isDesktop ? 0 : '8px' }}
                    variants={fadeIn}
                    custom={index}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <motion.span 
                      style={{
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 400,
                        fontSize: isDesktop ? '14px' : '12px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#566B86',
                        marginBottom: '2px'
                      }}
                    >
                      {block.title}
                    </motion.span>
                    <motion.span 
                      style={{
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 600,
                        fontSize: isDesktop ? '24px' : '18px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#566B86'
                      }}
                    >
                      {block.value}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Изображение: для экранов > 1200px ставим справа */}
            {isDesktop && (
              <motion.div 
                style={{...imageContainerStyle, ...imageContainerStyleDesktop}}
                variants={fadeInRight}
              >
                <motion.img 
                  src={women2Image} 
                  alt="Чому обирають мене" 
                  style={{...imageStyle, ...imageStyleDesktop}}
                  variants={scale}
                  transition={{ delay: 0.3 }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe; 