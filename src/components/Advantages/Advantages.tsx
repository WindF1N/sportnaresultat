import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, titleAnimation, cardAnimation, staggerContainer } from '../../utils/framerAnimations';

const Advantages: React.FC = () => {
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

  // Определяем вид сетки в зависимости от ширины экрана
  const getGridClasses = () => {
    if (screenWidth >= 1200) {
      return "grid grid-cols-4 gap-[44px]"; // Десктоп - 4 блока в строку
    } else if (screenWidth >= 768) {
      return "grid grid-cols-2 gap-[24px]"; // Планшет - 2 блока в строку
    } else {
      return "grid grid-cols-1 gap-[20px]"; // Мобильный - 1 блок в строку
    }
  };

  // Строка box-shadow из требований
  const boxShadowStyle = `
    0px 10px 21px 0px #6A7D9E0D,
    0px 39px 39px 0px #6A7D9E0A,
    0px 87px 52px 0px #6A7D9E08,
    0px 155px 62px 0px #6A7D9E03,
    0px 242px 68px 0px #6A7D9E00
  `;

  // Массив данных для блоков преимуществ
  const advantagesData = [
    {
      id: 1,
      number: "01",
      title: "Економія часу і коштів",
      description: "результат від вправ не забариться"
    },
    {
      id: 2,
      number: "02",
      title: "Будь-яке ГЕО",
      description: "онлайн-тренування дозволяють підтримувати комунікацію по всій Україні та за її межами"
    },
    {
      id: 3,
      number: "03",
      title: "Онлайн підтримка",
      description: "підтримка є обов'язковою частиною програми відновлення"
    },
    {
      id: 4,
      number: "04",
      title: "Якісні відео вправ",
      description: "постійне оновлення галереї уроків, аби кожна знайшла собі вправи по силах"
    }
  ];

  return (
    <section style={{ paddingTop: '160px', paddingBottom: '160px' }}>
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Заголовок и подзаголовок */}
        <motion.h2 
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 600,
            fontSize: screenWidth >= 768 ? '48px' : '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#324155',
            textAlign: 'center',
            marginBottom: '24px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleAnimation}
        >
          Переваги, які отримує кожна клієнтка
        </motion.h2>
        
        <motion.p 
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 400,
            fontSize: screenWidth >= 768 ? '20px' : '16px',
            lineHeight: '125%',
            letterSpacing: '0%',
            textAlign: 'center',
            color: '#566B86',
            marginBottom: '60px',
            maxWidth: '800px',
            margin: '0 auto 60px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Турбота про себе — це не розкіш, а щоденна потреба. І зробити її частиною життя простіше, ніж здається.
        </motion.p>
        
        {/* Сетка блоков */}
        <motion.div 
          className={getGridClasses()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {advantagesData.map((advantage, index) => (
            <motion.div 
              key={advantage.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: boxShadowStyle,
                width: screenWidth >= 1200 ? '297px' : '100%',
                height: screenWidth >= 768 ? '296px' : 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'stretch',
                margin: '0 auto'
              }}
              variants={cardAnimation}
              custom={index}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Номер блока */}
              <motion.div 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 600,
                  fontSize: '53.33px',
                  lineHeight: '120%',
                  letterSpacing: '0px',
                  fontVariantNumeric: 'lining-nums proportional-nums',
                  marginBottom: '24px',
                  background: 'linear-gradient(90deg, #D5FF5F 0%, #ABD23C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                {advantage.number}
              </motion.div>
              
              {/* Заголовок блока */}
              <motion.h3
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#324155',
                  marginBottom: '16px',
                  textAlign: 'left'
                }}
              >
                {advantage.title}
              </motion.h3>
              
              {/* Описание */}
              <motion.p
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: '#566B86',
                  flexGrow: 1
                }}
              >
                {advantage.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages; 