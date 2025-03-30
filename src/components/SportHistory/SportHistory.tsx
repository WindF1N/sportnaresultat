import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInLeft, fadeInRight, titleAnimation, staggerContainer } from '../../utils/framerAnimations';

const SportHistory: React.FC = () => {
  const historyItems = [
    {
      id: 1,
      title: 'Допомога людям у стресі та депресії',
      description: 'Працюю з внутрішньо переміщеними особами, що зазнали стресу, внаслідок війни'
    },
    {
      id: 2,
      title: 'Спорт після вагітності',
      description: 'Допомагаю жінкам повернути власне тіло у гарні форми, аби бачити в дзеркалі красуню, а не пампушку'
    },
    {
      id: 3,
      title: 'Максимально персоналізований підхід до клієнтів',
      description: 'Рощумію важливість вразування індивілуальних запитів, параметрів і показників людей у тренуваннях'
    },
    {
      id: 4,
      title: 'Онлайн тренування',
      description: 'Неважливо в якому куточку України ти знаходишся- ти можешпокращувати свою форму, тренуючись зі мною із смартфону'
    },
    {
      id: 5,
      title: 'Допомагаю людям з розладом харчової поведінки',
      description: 'розрахую під тебе твій раціон харчування під твої цілі: набір мʼязевої маси, схуднення, підтримка організму. Щоденний звʼязок, корегування меню, підбір страв, вразовуючи розмір твого гаманця і смакових вподобань'
    }
  ];

  // SVG для зеленого круга с белым центром
  const CircleSvg = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#B2E328"/>
      <circle cx="20" cy="20" r="8" fill="#F6F6F6"/>
    </svg>
  );

  // SVG для стрелок с поворотами
  const ArrowRightSvg = () => (
    <svg width="100%" height="80" viewBox="0 0 960 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.64">
        <path d="M20 5 L 20 40 Q 20 50 30 50 L 930 50 Q 940 50 940 60 L 940 60" stroke="#566B86" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
      </g>
    </svg>
  );

  const ArrowLeftSvg = () => (
    <svg width="100%" height="80" viewBox="0 0 960 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.64">
        <path d="M940 5 L 940 40 Q 940 50 930 50 L 30 50 Q 20 50 20 60 L 20 60" stroke="#566B86" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
      </g>
    </svg>
  );

  // Стрелка с наконечником вниз (только для последней)
  const ArrowLeftWithEndSvg = () => (
    <svg width="100%" height="100" viewBox="0 0 960 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.64">
        <path d="M940 5 L 940 40 Q 940 50 930 50 L 30 50 Q 20 50 20 60 L 20 95" stroke="#566B86" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
        <path d="M20 95L15 85M20 95L25 85" stroke="#566B86" strokeWidth="2"/>
      </g>
    </svg>
  );

  // SVG для вертикальной стрелки для мобильной версии (без наконечника)
  const VerticalArrowSvg = () => (
    <svg width="40" height="160" viewBox="0 0 40 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.64">
        <path d="M20 5 Q 20 5 20 155" stroke="#566B86" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
      </g>
    </svg>
  );

  // SVG для последней вертикальной стрелки с наконечником
  const VerticalArrowWithEndSvg = () => (
    <svg width="40" height="160" viewBox="0 0 40 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.64">
        <path d="M20 5 Q 20 5 20 155" stroke="#566B86" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
        <path d="M20 155 L15 145 M20 155 L25 145" stroke="#566B86" strokeWidth="2"/>
      </g>
    </svg>
  );

  // Добавляем небольшой отступ между элементами
  const spacingClass = "md:my-[-10px]";

  return (
    <section className="py-40 md:py-[160px]">
      <div className="max-w-[960px] mx-auto px-4">
        <motion.h2 
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#324155',
            textAlign: 'center'
          }}
          className="mb-4 text-4xl md:text-[48px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleAnimation}
        >
          Моя спортивна історія
        </motion.h2>
        <motion.p 
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '125%',
            letterSpacing: '4%',
            color: '#566B86',
            textAlign: 'center'
          }}
          className="mb-[84px] max-w-[800px] mx-auto text-base md:text-[20px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Відновлення — це не слабкість, а сміливість зробити перший крок до себе справжньої. Тіла, яке тобі комфортне. Життя, яке тобі близьке.
        </motion.p>

        <motion.div 
          className="flex flex-col relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Первый элемент - всегда слева */}
          <motion.div 
            className={`flex flex-row items-start mb-2 md:mb-2 ${spacingClass}`}
            variants={fadeInLeft}
          >
            <div className="relative mr-6 flex flex-col items-center">
              <motion.div 
                className="z-10 md:mt-4"
                variants={fadeIn}
              >
                <CircleSvg />
              </motion.div>
              <div className="hidden max-md:block h-[160px] mt-2">
                <VerticalArrowSvg />
              </div>
            </div>
            <div className="flex-grow max-w-[800px]">
              <motion.h3 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '120%',
                  letterSpacing: '0px',
                  fontVariantNumeric: 'lining-nums proportional-nums',
                  color: '#324155'
                }}
                className="mb-2"
                variants={fadeIn}
              >
                {historyItems[0].title}
              </motion.h3>
              <motion.p 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '125%',
                  letterSpacing: '4%',
                  color: '#566B86',
                  maxWidth: "631px"
                }}
                variants={fadeIn}
              >
                {historyItems[0].description}
              </motion.p>
            </div>
          </motion.div>

          {/* Пунктирная стрелка 1 - от левого кружочка к правому */}
          <div className="hidden md:block h-[80px]">
            <ArrowRightSvg />
          </div>

          {/* Второй элемент - справа на десктопе, слева на мобильном */}
          <motion.div 
            className={`flex flex-row md:flex-row-reverse md:items-center mb-2 md:mb-2 ${spacingClass}`}
            variants={fadeInRight}
          >
            <div className="md:ml-6 mr-6 md:mr-0 relative flex flex-col items-center">
              <motion.div 
                className="z-10 md:mt-4"
                variants={fadeIn}
              >
                <CircleSvg />
              </motion.div>
              <div className="hidden max-md:block h-[160px] mt-2">
                <VerticalArrowSvg />
              </div>
            </div>
            <div className="flex-grow max-w-[800px] md:text-right">
              <motion.h3 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '120%',
                  letterSpacing: '0px',
                  fontVariantNumeric: 'lining-nums proportional-nums',
                  color: '#324155'
                }}
                className="mb-2"
                variants={fadeIn}
              >
                {historyItems[1].title}
              </motion.h3>
              <motion.p 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '125%',
                  letterSpacing: '4%',
                  color: '#566B86',
                  maxWidth: "512px"
                }}
                className="md:float-right"
                variants={fadeIn}
              >
                {historyItems[1].description}
              </motion.p>
            </div>
          </motion.div>

          {/* Пунктирная стрелка 2 - от правого кружочка к левому */}
          <div className="hidden md:block h-[80px]">
            <ArrowLeftSvg />
          </div>

          {/* Третий элемент - всегда слева */}
          <motion.div 
            className={`flex flex-row items-start mb-2 md:mb-2 ${spacingClass}`}
            variants={fadeInLeft}
          >
            <div className="relative mr-6 flex flex-col items-center">
              <motion.div 
                className="z-10 md:mt-4"
                variants={fadeIn}
              >
                <CircleSvg />
              </motion.div>
              <div className="hidden max-md:block h-[160px] mt-2">
                <VerticalArrowSvg />
              </div>
            </div>
            <div className="flex-grow max-w-[800px]">
              <motion.h3 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '120%',
                  letterSpacing: '0px',
                  fontVariantNumeric: 'lining-nums proportional-nums',
                  color: '#324155'
                }}
                className="mb-2"
                variants={fadeIn}
              >
                {historyItems[2].title}
              </motion.h3>
              <motion.p 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '125%',
                  letterSpacing: '4%',
                  color: '#566B86',
                  maxWidth: "625px"
                }}
                variants={fadeIn}
              >
                {historyItems[2].description}
              </motion.p>
            </div>
          </motion.div>

          {/* Пунктирная стрелка 3 - от левого кружочка к правому */}
          <div className="hidden md:block h-[80px]">
            <ArrowRightSvg />
          </div>

          {/* Четвертый элемент - справа на десктопе, слева на мобильном */}
          <motion.div 
            className={`flex flex-row md:flex-row-reverse md:items-center mb-2 md:mb-2 ${spacingClass}`}
            variants={fadeInRight}
          >
            <div className="md:ml-6 mr-6 md:mr-0 relative flex flex-col items-center">
              <motion.div 
                className="z-10 md:mt-4"
                variants={fadeIn}
              >
                <CircleSvg />
              </motion.div>
              <div className="hidden max-md:block h-[160px] mt-2">
                <VerticalArrowWithEndSvg />
              </div>
            </div>
            <div className="flex-grow max-w-[800px] md:text-right">
              <motion.h3 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '120%',
                  letterSpacing: '0px',
                  fontVariantNumeric: 'lining-nums proportional-nums',
                  color: '#324155'
                }}
                className="mb-2"
                variants={fadeIn}
              >
                {historyItems[3].title}
              </motion.h3>
              <motion.p 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '125%',
                  letterSpacing: '4%',
                  color: '#566B86',
                  maxWidth: "631px"
                }}
                className="md:float-right"
                variants={fadeIn}
              >
                {historyItems[3].description}
              </motion.p>
            </div>
          </motion.div>

          {/* Пунктирная стрелка 4 - от правого кружочка к левому и вниз (для десктопа)*/}
          <div className="hidden md:block h-[100px]">
            <ArrowLeftWithEndSvg />
          </div>

          {/* Пятый элемент - всегда слева */}
          <motion.div 
            className="flex flex-row items-start"
            variants={fadeInLeft}
          >
            <div className="relative mr-6 flex flex-col items-center">
              <motion.div 
                className="z-10 md:mt-4"
                variants={fadeIn}
              >
                <CircleSvg />
              </motion.div>
              <div className="hidden max-md:block h-[160px] mt-2">
                {/* <VerticalArrowWithEndSvg /> */}
              </div>
            </div>
            <div className="flex-grow max-w-[800px]">
              <motion.h3 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '120%',
                  letterSpacing: '0px',
                  fontVariantNumeric: 'lining-nums proportional-nums',
                  color: '#324155'
                }}
                className="mb-2"
                variants={fadeIn}
              >
                {historyItems[4].title}
              </motion.h3>
              <motion.p 
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '125%',
                  letterSpacing: '4%',
                  color: '#566B86',
                  maxWidth: "631px"
                }}
                variants={fadeIn}
              >
                {historyItems[4].description}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SportHistory; 