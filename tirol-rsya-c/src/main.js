import './styles.css';
import { renderHero } from './hero.js';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('App root "#app" was not found.');
}

app.innerHTML = renderHero();

const reviewViewer = app.querySelector('[data-review-viewer]');
const reviewViewerImage = app.querySelector('[data-review-image]');
const reviewButtons = app.querySelectorAll('[data-review-open]');
const reviewCloseButtons = app.querySelectorAll('[data-review-close]');
const reviewCarousel = app.querySelector('[data-review-carousel]');
const reviewTrack = app.querySelector('[data-review-track]');
const reviewSlides = app.querySelectorAll('[data-review-slide]');
const reviewPrev = app.querySelector('[data-review-prev]');
const reviewNext = app.querySelector('[data-review-next]');
const reviewDots = app.querySelectorAll('[data-review-dot]');
const inlineGetCourseWidget = app.querySelector('[data-gc-inline-widget]');
const popupGetCourseButtons = app.querySelectorAll('[data-gc-popup-trigger]');
const popupGetCourse = app.querySelector('[data-gc-popup]');
const popupGetCourseWidget = app.querySelector('[data-gc-popup-widget]');
const popupGetCourseCloseButtons = app.querySelectorAll('[data-gc-popup-close]');

const loadGetCourseWidget = (container) => {
  if (!container || container.dataset.gcLoaded === 'true') {
    return;
  }

  const src = container.getAttribute('data-gc-script');
  const scriptId =
    container.getAttribute('data-gc-script-id') ??
    'f1d853b8f9058f3ebf34fa036dede573f33ff806';

  if (!src) {
    return;
  }

  container.replaceChildren();
  container.style.removeProperty('height');

  const rand = Math.floor(Math.random() * 1000000) + 1;
  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = `${src}&rand=${rand}`;
  script.addEventListener('load', () => {
    if (document.readyState !== 'loading') {
      document.dispatchEvent(new Event(`StartWidget${scriptId}`));
    }
  });
  container.appendChild(script);
  container.dataset.gcLoaded = 'true';
};

if (
  reviewCarousel &&
  reviewTrack &&
  reviewSlides.length > 0 &&
  reviewPrev &&
  reviewNext &&
  reviewDots.length > 0
) {
  let activeReviewIndex = 0;
  let touchStartX = 0;
  let touchDeltaX = 0;

  const syncReviewCarousel = () => {
    reviewTrack.style.transform = `translateX(-${activeReviewIndex * 100}%)`;

    reviewSlides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === activeReviewIndex);
    });

    reviewDots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === activeReviewIndex);
    });
  };

  const showReview = (index) => {
    const lastIndex = reviewSlides.length - 1;

    if (index < 0) {
      activeReviewIndex = lastIndex;
    } else if (index > lastIndex) {
      activeReviewIndex = 0;
    } else {
      activeReviewIndex = index;
    }

    syncReviewCarousel();
  };

  reviewPrev.addEventListener('click', () => {
    showReview(activeReviewIndex - 1);
  });

  reviewNext.addEventListener('click', () => {
    showReview(activeReviewIndex + 1);
  });

  reviewDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const nextIndex = Number(dot.getAttribute('data-review-dot'));
      showReview(nextIndex);
    });
  });

  reviewCarousel.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.touches[0]?.clientX ?? 0;
      touchDeltaX = 0;
    },
    { passive: true },
  );

  reviewCarousel.addEventListener(
    'touchmove',
    (event) => {
      const currentX = event.touches[0]?.clientX ?? touchStartX;
      touchDeltaX = currentX - touchStartX;
    },
    { passive: true },
  );

  reviewCarousel.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40) {
      showReview(activeReviewIndex + (touchDeltaX < 0 ? 1 : -1));
    }

    touchStartX = 0;
    touchDeltaX = 0;
  });

  syncReviewCarousel();
}

if (reviewViewer && reviewViewerImage && reviewButtons.length > 0) {
  const closeReviewViewer = () => {
    reviewViewer.classList.add('is-hidden');
    reviewViewerImage.setAttribute('src', '');
    reviewViewerImage.setAttribute('alt', '');
    document.body.classList.remove('is-review-viewer-open');
  };

  reviewButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const src = button.getAttribute('data-review-open');
      const preview = button.querySelector('img');

      if (!src || !preview) {
        return;
      }

      reviewViewerImage.setAttribute('src', src);
      reviewViewerImage.setAttribute('alt', preview.getAttribute('alt') ?? 'Отзыв');
      reviewViewer.classList.remove('is-hidden');
      document.body.classList.add('is-review-viewer-open');
    });
  });

  reviewCloseButtons.forEach((button) => {
    button.addEventListener('click', closeReviewViewer);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !reviewViewer.classList.contains('is-hidden')) {
      closeReviewViewer();
    }
  });
}

if (popupGetCourse && popupGetCourseWidget && popupGetCourseButtons.length > 0) {
  const openGetCoursePopup = () => {
    loadGetCourseWidget(popupGetCourseWidget);
    popupGetCourse.classList.remove('is-hidden');
    document.body.classList.add('is-gc-popup-open');
  };

  const closeGetCoursePopup = () => {
    popupGetCourse.classList.add('is-hidden');
    document.body.classList.remove('is-gc-popup-open');
  };

  popupGetCourseButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openGetCoursePopup();
    });
  });

  popupGetCourseCloseButtons.forEach((button) => {
    button.addEventListener('click', closeGetCoursePopup);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !popupGetCourse.classList.contains('is-hidden')) {
      closeGetCoursePopup();
    }
  });
}

loadGetCourseWidget(inlineGetCourseWidget);
