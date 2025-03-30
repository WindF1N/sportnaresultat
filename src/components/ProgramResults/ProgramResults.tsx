import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import section1 from '../../assets/section1.jpg';
import section2 from '../../assets/section2.jpg';
import section3 from '../../assets/section3.jpg';
import section4 from '../../assets/section4.jpg';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/framerAnimations';

const ProgramResults: React.FC = () => {
  // Состояние для отслеживания ширины экрана
  const [screenWidth, setScreenWidth] = useState<number>(0);

  // Эффект для отслеживания изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    // Инициализация при монтировании
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Данные для блоков результатов
  const resultsData = [
    [
      {
        id: 1,
        title: "Поступове відновлення",
        imageUrl: section1,
        width: '32%'
      },
      {
        id: 2,
        title: "Збільшення фізичної активності",
        imageUrl: section2,
        width: '66%'
      }
    ],
    [
      {
        id: 3,
        title: "Помірне навантаження",
        imageUrl: section3,
        width: '66%'
      },
      {
        id: 4,
        title: "Укріплення м'язів",
        imageUrl: section4,
        width: '32%'
      }
    ]
  ];

  return (
    <section style={{ paddingBottom: '160px' }}>
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Заголовок */}
        <motion.h2 
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 600,
            fontSize: screenWidth >= 768 ? '48px' : '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#324155',
            textAlign: 'left',
            marginBottom: '24px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          Результат програм
        </motion.h2>
        
        {/* Описание */}
        <motion.p 
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 400,
            fontSize: screenWidth >= 768 ? '20px' : '16px',
            lineHeight: '125%',
            letterSpacing: '4%',
            color: '#566B86',
            textAlign: 'left',
            marginBottom: '44px',
            maxWidth: '800px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Кожна трансформація починається з маленького кроку. М'яко, без стресу — ти поступово повертаєш силу, витривалість і любов до свого тіла.
        </motion.p>
        
        {/* Сетка изображений - две строки с flex */}
        <motion.div 
          className="space-y-[32px] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Первая строка */}
          <motion.div 
            className={screenWidth >= 768 ? "flex gap-[2%]" : "space-y-[16px]"}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            {resultsData[0].map((item, index) => (
              <motion.div 
                key={item.id}
                style={{
                  position: 'relative',
                  height: '271px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  width: screenWidth >= 768 ? item.width : '100%',
                  flexShrink: 0
                }}
                variants={index === 0 ? fadeInLeft : fadeInRight}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Изображение блока */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Затемняющий оверлей */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(50, 65, 85, 0) 0%, rgba(50, 65, 85, 0.75) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px'
                  }}
                >
                  {/* Заголовок блока */}
                  <h3
                    style={{
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 600,
                      fontSize: '24px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#FFFFFF',
                      textAlign: 'center',
                      marginBottom: '16px',
                      width: '100%'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Вторая строка */}
          <motion.div 
            className={screenWidth >= 768 ? "flex gap-[2%]" : "space-y-[16px]"}
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          >
            {resultsData[1].map((item, index) => (
              <motion.div 
                key={item.id}
                style={{
                  position: 'relative',
                  height: '271px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  width: screenWidth >= 768 ? item.width : '100%',
                  flexShrink: 0
                }}
                variants={index === 0 ? fadeInLeft : fadeInRight}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                {/* Изображение блока */}
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Затемняющий оверлей */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(50, 65, 85, 0) 0%, rgba(50, 65, 85, 0.75) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px'
                  }}
                >
                  {/* Заголовок блока */}
                  <h3
                    style={{
                      fontFamily: 'Raleway, sans-serif',
                      fontWeight: 600,
                      fontSize: '24px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#FFFFFF',
                      textAlign: 'center',
                      marginBottom: '16px',
                      width: '100%'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramResults; 