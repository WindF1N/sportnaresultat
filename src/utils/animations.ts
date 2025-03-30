/**
 * Самописный модуль анимаций для элементов страницы
 */

// Класс для плавного появления элементов при скролле
export class ScrollAnimator {
  private static observers: IntersectionObserver[] = [];
  
  /**
   * Инициализирует анимацию появления элементов при скролле
   * @param selector - CSS селектор элементов для анимации
   * @param animationClass - CSS класс с анимацией для применения
   * @param threshold - порог видимости элемента для запуска анимации (0-1)
   */
  static initFadeIn(selector: string, animationClass: string = 'animate-fade-in', threshold: number = 0.2): void {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });
    
    elements.forEach(element => {
      element.classList.add('pre-animation');
      observer.observe(element);
    });
    
    this.observers.push(observer);
  }
  
  /**
   * Инициализирует последовательную анимацию для группы элементов
   * @param parentSelector - CSS селектор родительского элемента
   * @param childSelector - CSS селектор дочерних элементов для анимации
   * @param animationClass - CSS класс с анимацией
   * @param delayBetween - задержка между анимациями элементов в мс
   * @param threshold - порог видимости для запуска анимации
   */
  static initSequence(
    parentSelector: string, 
    childSelector: string, 
    animationClass: string = 'animate-fade-in',
    delayBetween: number = 100,
    threshold: number = 0.2
  ): void {
    const parents = document.querySelectorAll(parentSelector);
    
    if (parents.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const parent = entry.target;
          const children = parent.querySelectorAll(childSelector);
          
          children.forEach((child, index) => {
            child.classList.add('pre-animation');
            setTimeout(() => {
              child.classList.add(animationClass);
            }, index * delayBetween);
          });
          
          observer.unobserve(parent);
        }
      });
    }, { threshold });
    
    parents.forEach(parent => {
      observer.observe(parent);
    });
    
    this.observers.push(observer);
  }
  
  /**
   * Отключает все обсерверы
   */
  static destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Класс для плавного скролла к якорям
export class SmoothScroller {
  /**
   * Инициализирует плавный скролл к якорям по клику на ссылки
   * @param linkSelector - селектор ссылок, по клику на которые происходит скролл
   * @param offset - отступ от верха страницы в пикселях
   * @param duration - длительность анимации в мс
   */
  static init(linkSelector: string = 'a[href^="#"]', offset: number = 0, duration: number = 800): void {
    const links = document.querySelectorAll(linkSelector);
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (!href || href === '#') return;
        
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          SmoothScroller.scrollTo(targetElement, offset, duration);
        }
      });
    });
  }
  
  /**
   * Программно скроллит к указанному элементу
   * @param targetElement - элемент, к которому нужно проскроллить
   * @param offset - отступ от верха страницы
   * @param duration - длительность анимации
   */
  static scrollTo(targetElement: HTMLElement, offset: number = 0, duration: number = 800): void {
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
    
    const animation = function(currentTime: number) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeProgress = SmoothScroller.easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easeProgress);
      
      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      }
    };
    
    requestAnimationFrame(animation);
  }
  
  // Функция плавности для анимации
  private static easeInOutCubic(t: number): number {
    return t < 0.5 
      ? 4 * t * t * t 
      : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
}

// Класс для анимации элементов при инициализации страницы
export class InitialAnimator {
  /**
   * Анимирует список элементов последовательно
   * @param elements - массив элементов или селектор
   * @param className - класс анимации
   * @param delay - задержка между элементами в мс
   * @param initialDelay - начальная задержка перед первой анимацией
   */
  static animateSequence(
    elements: HTMLElement[] | string,
    className: string = 'animate-fade-in',
    delay: number = 200,
    initialDelay: number = 0
  ): void {
    let elementsArray: HTMLElement[];
    
    if (typeof elements === 'string') {
      elementsArray = Array.from(document.querySelectorAll(elements)) as HTMLElement[];
    } else {
      elementsArray = elements;
    }
    
    elementsArray.forEach((element, index) => {
      element.classList.add('pre-animation');
      setTimeout(() => {
        element.classList.add(className);
      }, initialDelay + index * delay);
    });
  }
} 