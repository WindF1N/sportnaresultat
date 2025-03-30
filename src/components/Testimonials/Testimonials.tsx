import React, { useState, useEffect, useCallback, useRef } from 'react';
import avatarImage from '../../assets/avatar.jpg';

interface TestimonialItem {
  id: number;
  name: string;
  age: string;
  status: string;
  photo: string;
  text: string;
}

const Testimonials: React.FC = () => {
  // Состояние для отслеживания текущего слайда
  const [currentSlide, setCurrentSlide] = useState(0);
  // Состояние для отслеживания прогресса анимации текущего слайда (от 0 до 1)
  const [slideProgress, setSlideProgress] = useState(0);
  // Состояние для отслеживания ширины экрана и адаптивности
  const [isMobile, setIsMobile] = useState(false);
  // Состояние для паузы автопрокрутки при взаимодействии пользователя
  const [isPaused, setIsPaused] = useState(false);
  
  // Ссылка на контейнер слайдера для свайпов
  const sliderRef = useRef<HTMLDivElement>(null);
  // Ссылка на таймеры для очистки при размонтировании
  const slideTimerRef = useRef<number | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  // Для отслеживания свайпов
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Данные отзывов (замените на реальные)
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: 'Полина',
      age: '42 года',
      status: 'Мама 2 детей',
      photo: avatarImage,
      text: 'Очень благодарна Ольге за программу восстановления после родов. Результаты стали заметны уже через месяц регулярных занятий.'
    },
    {
      id: 2,
      name: 'Елена',
      age: '35 лет',
      status: 'Мама 1 ребенка',
      photo: avatarImage,
      text: 'Программа супер! Очень удобно заниматься в любое время. Тренировки эффективные, но щадящие. Рекомендую!'
    },
    {
      id: 3,
      name: 'Марина',
      age: '29 лет',
      status: 'Мама 3 детей',
      photo: avatarImage,
      text: 'Наконец-то нашла курс, который действительно помогает восстановиться после родов. Спасибо Ольге за индивидуальный подход!'
    },
    {
      id: 4,
      name: 'Анна',
      age: '38 лет',
      status: 'Мама 2 детей',
      photo: avatarImage,
      text: 'Уже месяц занимаюсь по программе и очень довольна. Хорошо сочетаются упражнения и советы по питанию.'
    },
    {
      id: 5,
      name: 'Катерина',
      age: '33 года',
      status: 'Мама 1 ребенка',
      photo: avatarImage,
      text: 'Прекрасный курс! Очень нравится что все упражнения можно делать дома в комфортном темпе. Большое спасибо!'
    },
    {
      id: 6,
      name: 'Оксана',
      age: '40 лет',
      status: 'Мама 2 детей',
      photo: avatarImage,
      text: 'Благодаря программе я вернулась в форму за 3 месяца. Очень рада, что нашла такого отличного тренера!'
    },
    {
      id: 7,
      name: 'Наталья',
      age: '36 лет',
      status: 'Мама 3 детей',
      photo: avatarImage,
      text: 'Занимаюсь уже полгода и вижу впечатляющие результаты. Тело стало сильнее, а самочувствие значительно улучшилось.'
    },
    {
      id: 8,
      name: 'Ирина',
      age: '31 год',
      status: 'Мама 1 ребенка',
      photo: avatarImage,
      text: 'Отличная программа! Упражнения подобраны так, что не утомляют, но приводят к хорошим результатам. Рекомендую!'
    },
    {
      id: 9,
      name: 'Светлана',
      age: '39 лет',
      status: 'Мама 2 детей',
      photo: avatarImage,
      text: 'Очень комфортная программа для постепенного восстановления. Ольга - чуткий тренер, всегда на связи и готова помочь.'
    }
  ];

  // Общее количество слайдов
  const totalSlides = Math.ceil(testimonials.length / (isMobile ? 1 : 3));

  // Эффект для отслеживания ширины экрана
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Функция для запуска автоперелистывания
  const startAutoSlide = useCallback(() => {
    // Сначала очищаем предыдущие таймеры, если они есть
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = null;
    }
    
    // Запускаем новый таймер для перелистывания
    slideTimerRef.current = window.setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / (isMobile ? 1 : 3)));
      setSlideProgress(0);
      // Перезапускаем автопрокрутку для следующего слайда
      if (!isPaused) {
        startAutoSlide();
      }
    }, 8000); // 8 секунд
    
    // Запускаем обновление прогресса
    startProgressAnimation();
  }, [isPaused, isMobile, testimonials.length]);
  
  // Функция для обновления прогресса
  const startProgressAnimation = useCallback(() => {
    // Сначала сбрасываем прогресс
    setSlideProgress(0);
    
    // Очищаем предыдущие таймеры анимации
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    
    // Создаем новый интервал для плавного обновления прогресса
    let progress = 0;
    progressTimerRef.current = window.setInterval(() => {
      progress += 0.005;
      setSlideProgress(progress);
      
      if (progress >= 1) {
        clearInterval(progressTimerRef.current as number);
        progressTimerRef.current = null;
      }
    }, 40); // 40ms * 200 = ~8 seconds
  }, []);
  
  // Эффект для автоматического перелистывания слайдов
  useEffect(() => {
    // Запускаем автопрокрутку
    startAutoSlide();
    
    // Очищаем таймеры при размонтировании
    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, [startAutoSlide]); // Запускаем только один раз

  // Обработчики свайпов с паузой автопрокрутки
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
    // Возобновляем автопрокрутку после свайпа
    setIsPaused(false);
    startAutoSlide();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Свайп влево - следующий слайд
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Свайп вправо - предыдущий слайд
      setCurrentSlide((prev) => {
        const totalSlides = Math.ceil(testimonials.length / (isMobile ? 1 : 3));
        return (prev - 1 + totalSlides) % totalSlides;
      });
      setSlideProgress(0);
    }
  };

  // Функция для перехода к определенному слайду при клике на навигацию
  const goToSlide = (index: number) => {
    // Приостанавливаем автопрокрутку при клике
    setIsPaused(true);
    setCurrentSlide(index);
    setSlideProgress(0);
    
    // Перезапускаем автопрокрутку через 100мс
    setTimeout(() => {
      setIsPaused(false);
      startAutoSlide();
    }, 100);
  };

  // Получение отзывов для текущего слайда
  const getCurrentSlideItems = () => {
    const itemsPerSlide = isMobile ? 1 : 3;
    const startIndex = currentSlide * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Заголовок */}
        <h2 
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#324155',
            textAlign: 'center',
            marginBottom: '24px'
          }}
        >
          Відшуки
        </h2>
        
        {/* Подзаголовок */}
        <p 
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '125%',
            letterSpacing: '4%',
            color: '#566B86',
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          Мами та жінки котрі пройшли повний курс
        </p>
        
        {/* Слайдер с отзывами */}
        <div 
          style={{ 
            position: 'relative',
            marginBottom: '44px',
            overflow: 'hidden'
          }}
        >
          {/* Контейнер слайдера с отступами для теней */}
          <div style={{ padding: '15px 0' }}>
            <div
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{
                display: 'flex',
                transition: 'transform 0.5s ease',
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideItems = testimonials.slice(
                  slideIndex * (isMobile ? 1 : 3),
                  slideIndex * (isMobile ? 1 : 3) + (isMobile ? 1 : 3)
                );
                
                return (
                  <div 
                    key={slideIndex}
                    style={{ 
                      display: 'flex', 
                      gap: '33px',
                      minWidth: '100%',
                      padding: '0 5px'
                    }}
                  >
                    {slideItems.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          flex: 1,
                          backgroundColor: '#FEFEFE',
                          borderRadius: '16px',
                          padding: '24px',
                          height: '176px',
                          boxShadow: '0px 8px 25px 0px rgba(0, 58, 170, 0.08)',
                          display: 'flex',
                          flexDirection: 'column',
                          margin: '5px'
                        }}
                      >
                        {/* Верхняя часть с фото и информацией */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* Фотография */}
                            <div
                              style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                backgroundColor: '#f0f0f0',
                                marginRight: '12px'
                              }}
                            >
                              <img 
                                src={item.photo} 
                                alt={item.name}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'https://via.placeholder.com/44x44';
                                }}
                              />
                            </div>
                            
                            {/* Имя и возраст */}
                            <div>
                              <p 
                                style={{
                                  fontFamily: 'Raleway, sans-serif',
                                  fontWeight: 600,
                                  fontSize: '16px',
                                  lineHeight: '100%',
                                  letterSpacing: '0%',
                                  color: '#566B86',
                                  marginBottom: '4px'
                                }}
                              >
                                {item.name}
                              </p>
                              <p 
                                style={{
                                  fontFamily: 'Raleway, sans-serif',
                                  fontWeight: 400,
                                  fontSize: '16px',
                                  lineHeight: '100%',
                                  letterSpacing: '0%',
                                  color: '#566B86'
                                }}
                              >
                                {item.age}
                              </p>
                            </div>
                          </div>
                          
                          {/* Статус */}
                          <div 
                            style={{
                              backgroundColor: '#D5FF5F80',
                              borderRadius: '12px',
                              padding: '4px 8px',
                              fontFamily: 'Raleway, sans-serif',
                              fontWeight: 500,
                              fontSize: '14px',
                              lineHeight: '100%',
                              letterSpacing: '0%',
                              color: '#718F1B',
                              height: 'fit-content'
                            }}
                          >
                            {item.status}
                          </div>
                        </div>
                        
                        {/* Текст отзыва */}
                        <p 
                          style={{
                            fontFamily: 'Raleway, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '125%',
                            color: '#566B86',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical'
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Навигация слайдера */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '8px' 
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                position: 'relative',
                width: '40px',
                height: '4px',
                backgroundColor: '#DEE3E9',
                borderRadius: '2px',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
            >
              {/* Индикатор прогресса */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: index === currentSlide ? `${slideProgress * 100}%` : index < currentSlide ? '100%' : '0%',
                  backgroundColor: '#566B86',
                  transition: 'width 0.1s linear' // Плавная анимация для всех полосок
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 