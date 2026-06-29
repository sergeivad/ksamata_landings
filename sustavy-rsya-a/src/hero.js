// TODO: заменить id=1465148 на ID курса «суставы и позвоночник» (GetCourse)
const gcScriptUrl =
  'https://gc.tirolab.ru/pl/lite/widget/script?id=1465148';
const gcPopupScriptUrl =
  'https://gc.tirolab.ru/pl/lite/widget/script?id=1465148&form=popup';
const gcWidgetScriptId = 'f1d853b8f9058f3ebf34fa036dede573f33ff806';
const assetBase = import.meta.env.BASE_URL ?? '/';
const asset = (path) => `${assetBase}assets/${path}`.replace(/([^:]\/)\/+/g, '$1');

const doctorImageUrl = asset('speaker-pose.png');
const speakerPortraitUrl = asset('speaker-portrait.png');
const giftBoxesUrl = asset('tz-gifts-boxes.png');

const conditions = [
  'Хочет вернуть подвижность и избавиться от хронической боли в суставах и позвоночнике.',
  'Устал ходить по врачам и пить таблетки, а результата всё нет.',
  'Ищет способ восстановиться без уколов, мазей и операций.',
];

const actions = [
  'Зарегистрироваться на бесплатный 5-дневный онлайн-курс с Данилой Сусаком.',
  'Ознакомиться с методами восстановления суставов и позвоночника.',
  'Получить пошаговый план восстановления без лекарств.',
];

const gifts = [
  'Чек-лист «Как выбрать правильную обувь для здоровья суставов».',
  'Гид/Видеокурс «Секреты сохранения здоровья суставов и спины при уборке и готовке дома».',
];

const speakerFacts = [
  'Сертифицированный инструктор оздоровительной гимнастики цигун (Яншен цигун)',
  'Автор и основатель оздоровительного центра «Ksamata»',
  'Методист-разработчик эффективных программ восстановления и реабилитации для лиц пожилого возраста',
  'Сертифицированный специалист остеопатии',
  'Приглашённый эксперт на телепередачи про здоровье',
];

const symptomCards = [
  {
    image: asset('symptom-knee.png'),
    text: 'Болей в коленях и скованности по утрам',
  },
  {
    image: asset('symptom-back.png'),
    text: 'Прострелов и боли в пояснице',
  },
  {
    image: asset('symptom-shoulder.png'),
    text: 'Болей в плечах и шее',
  },
  {
    image: asset('symptom-hip.jpg'),
    text: 'Болей при ходьбе в тазобедренных суставах',
  },
  {
    image: asset('symptom-stiffness.png'),
    text: 'Хронической ломоты и скованности в движении',
  },
  {
    image: asset('symptom-neck.png'),
    text: 'Бесконечных врачей, уколов и таблеток без результата',
  },
];

const benefitCards = [
  'Вставать утром без боли и не думать, как встать с кровати',
  'Легко надевать носки, завязывать шнурки и без страха поднимать с пола игрушки внуков',
  'С удовольствием пойти на прогулку или в магазин без мыслей о расстоянии и выдержат ли колени',
  'Спать на любом боку и просыпаться отдохнувшим и полным сил',
  'Спокойно доставать самые высокие полки в шкафу без страха, что больно поднять руку',
  'Жить без таблеток и уколов — помогать своему телу быть здоровым и гибким даже через 10 или 20 лет',
];

const reviewImages = [
  asset('review-1.png'),
  asset('review-2.png'),
  asset('review-3.png'),
  asset('review-4.png'),
  asset('review-5.png'),
  asset('review-6.png'),
];

const programDays = [
  {
    day: 'ДЕНЬ 1',
    theme: 'Фундамент и главный секрет здоровья суставов и позвоночника',
    points: [
      'Причины артрозов в пожилом возрасте',
      'Методы восстановления при болях в спине после 50 лет',
      'Четыре шага к устранению боли',
      '10 ошибок, ведущих к проблемам с суставами и позвоночником',
      'Как избежать операции',
    ],
  },
  {
    day: 'ДЕНЬ 2',
    theme: 'Суставы без болей — пошаговый план от проблем в суставах (колени, таз, плечи, стопы)',
    points: [
      'Как запустить естественное восстановление суставов',
      'Возвращение гибкости после 60',
      'Что делать при подагре',
      'Как остановить разрушение суставов',
      '5 мифов, мешающих восстановлению',
    ],
  },
  {
    day: 'ДЕНЬ 3',
    theme: 'Позвоночник без болей — пошаговый план от болей и проблем в позвоночнике',
    points: [
      'Как защитить позвоночник',
      'Лечение грыжи без операции',
      'Методы устранения протрузий',
      'Что делать при сколиозе',
      'Ошибки, ведущие к заболеваниям',
    ],
  },
  {
    day: 'ДЕНЬ 4',
    theme: 'Экстренная помощь — методы быстрого снятия боли в суставах и спине',
    points: [
      'Шесть факторов воспалительной боли',
      'Снятие боли без лекарств',
      'Протоколы для шеи и плеч',
      'Универсальные решения при боли в спине',
      'Опасность бесконтрольного приёма лекарств',
    ],
  },
  {
    day: 'ДЕНЬ 5',
    theme: 'Пошаговый план восстановления после травм и операций',
    points: [
      'Методика восстановления при хронических травмах',
      'Возвращение подвижности после операций',
      'Коррекция осанки',
      'Ускорение движения после операции',
      'Восстановление чувствительности конечностей',
    ],
  },
];

const reasons = [
  {
    image: asset('reason-home.png'),
    text: 'Упражнения в видеокурсах не требуют специальных приспособлений и делаются в домашних условиях',
  },
  {
    image: asset('reason-age.png'),
    text: 'Упражнения доступны даже в 70–80 лет. Получите возможность много двигаться и не мучиться от болей в коленях и позвоночнике',
  },
];

const footerFallbackDomain = 'ksamata.ru';
const knownCompoundSuffixes = new Set([
  'co.uk',
  'org.uk',
  'gov.uk',
  'ac.uk',
  'co.jp',
  'com.au',
  'com.br',
  'com.tr',
  'com.mx',
  'com.ar',
  'co.nz',
  'com.sg',
  'com.ua',
  'com.kz',
]);

const moscowIsoFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Moscow',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const moscowHumanFormatter = new Intl.DateTimeFormat('ru-RU', {
  timeZone: 'Europe/Moscow',
  day: 'numeric',
  month: 'long',
});

const getDateParts = (value) =>
  Object.fromEntries(
    moscowIsoFormatter
      .formatToParts(value)
      .filter(({ type }) => type !== 'literal')
      .map(({ type, value: partValue }) => [type, partValue]),
  );

export function getTomorrowMoscowLabel(baseDate = new Date()) {
  const parts = getDateParts(baseDate);
  const tomorrowMoscowDate = new Date(
    Date.UTC(
      Number(parts.year),
      Number(parts.month) - 1,
      Number(parts.day) + 1,
    ),
  );

  return `Старт ${moscowHumanFormatter.format(tomorrowMoscowDate)}`;
}

export function getRootDomain(hostname = globalThis.location?.hostname ?? footerFallbackDomain) {
  const normalizedHostname = String(hostname).toLowerCase().trim().replace(/\.$/, '');

  if (
    !normalizedHostname ||
    normalizedHostname === 'localhost' ||
    normalizedHostname.endsWith('.localhost') ||
    normalizedHostname.includes(':') ||
    /^\d{1,3}(?:\.\d{1,3}){3}$/.test(normalizedHostname)
  ) {
    return footerFallbackDomain;
  }

  const parts = normalizedHostname.split('.').filter(Boolean);

  if (parts.length <= 2) {
    return normalizedHostname;
  }

  const lastTwo = parts.slice(-2).join('.');
  const compoundSuffix = parts.slice(-2).join('.');

  if (knownCompoundSuffixes.has(compoundSuffix) && parts.length >= 3) {
    return parts.slice(-3).join('.');
  }

  return lastTwo;
}

export function getFooterLegalLinks(hostname) {
  const rootDomain = getRootDomain(hostname);

  return {
    privacyUrl: `https://gc.${rootDomain}/privacy`,
    ofertaUrl: `https://gc.${rootDomain}/oferta`,
  };
}

const renderList = (items) =>
  items
    .map(
      (item, index) => `
        <li class="hero-list__item">
          <span class="hero-list__index">${index + 1}.</span>
          <span>${item}</span>
        </li>
      `,
    )
    .join('');

const renderGiftList = (items) =>
  items
    .map(
      (item) => `
        <li class="hero-gifts__item">${item}</li>
      `,
    )
    .join('');

const renderSpeakerFacts = (items) =>
  items
    .map(
      (item) => `
        <li class="speaker-intro__fact">
          <span class="speaker-intro__fact-icon" aria-hidden="true">✓</span>
          <span>${item}</span>
        </li>
      `,
    )
    .join('');

const renderSymptomCards = (items) =>
  items
    .map(
      ({ image, text }) => `
        <article class="symptom-grid__card">
          <div class="symptom-grid__image-wrap">
            <img class="symptom-grid__image" src="${image}" alt="" />
          </div>
          <p class="symptom-grid__caption">${text}</p>
        </article>
      `,
    )
    .join('');

const renderBenefitCards = (items) =>
  items
    .map(
      (text, index) => `
        <article class="benefits-grid__card">
          <span class="benefits-grid__index" aria-hidden="true">${index + 1}</span>
          <p class="benefits-grid__caption">${text}</p>
        </article>
      `,
    )
    .join('');

const renderReviewCards = (items) =>
  items
    .map(
      (image, index) => `
        <div class="reviews-showcase__slide" data-review-slide>
          <button
          class="reviews-showcase__card"
          type="button"
          data-review-open="${image}"
          data-review-index="${index}"
          aria-label="Открыть отзыв ${index + 1}"
        >
          <img class="reviews-showcase__image" src="${image}" alt="Отзыв ${index + 1}" />
          </button>
        </div>
      `,
    )
    .join('');

const renderProgramDays = (items) =>
  items
    .map(
      (item, index) => `
        <div class="program__item" data-program-item>
          <button
            class="program__head"
            type="button"
            data-program-toggle
            aria-expanded="false"
            aria-controls="program-panel-${index}"
          >
            <span class="program__day">${item.day}.</span>
            <span class="program__theme">ТЕМА ДНЯ: «${item.theme}»</span>
            <span class="program__icon" aria-hidden="true">+</span>
          </button>
          <div class="program__panel" id="program-panel-${index}" data-program-panel hidden>
            <ul class="program__points">
              ${item.points.map((point) => `<li>${point}</li>`).join('')}
            </ul>
          </div>
        </div>
      `,
    )
    .join('');

function renderSecondScreen() {
  return `
    <section class="course-offer" aria-labelledby="course-offer-title">
      <div class="course-offer__shell">
        <div class="course-offer__layout course-offer__layout--balanced">
          <div class="course-offer__content course-offer__content--balanced">
            <div class="course-offer__chip">
              Бесплатный 5-дневный онлайн-курс
              <span>· Живые эфиры</span>
            </div>

            <h2 class="course-offer__title" id="course-offer-title">
              <span class="course-offer__title-line course-offer__title-accent">Движение</span>
              <span class="course-offer__title-line">без боли и ограничений</span>
            </h2>

            <p class="course-offer__text">
              <strong>Система быстрого восстановления</strong>
              <span>суставов и позвоночника</span>
              <span>Без мазей · Без уколов · Без лекарств и операций · Дома · Даже в 70–80 лет</span>
            </p>

            <div class="course-offer__gift">
              <img
                class="course-offer__gift-icon"
                src="${giftBoxesUrl}"
                alt=""
              />
              <p class="course-offer__gift-text">
                Получите <strong>ДВА ПОДАРКА</strong> сразу после регистрации!
              </p>
            </div>

            <a
              class="course-offer__button"
              href="#"
              data-gc-script="${gcScriptUrl}"
              data-gc-widget="pending"
              data-gc-popup-trigger
            >
              Стать участником бесплатно
            </a>
          </div>

          <div class="course-offer__visual course-offer__visual--balanced">
            <div class="course-offer__rings" aria-hidden="true"></div>
            <div class="course-offer__figure">
              <img
                class="course-offer__doctor"
                src="${doctorImageUrl}"
                alt="Данила Сусак"
              />

              <div class="course-offer__price-card course-offer__price-card--wide course-offer__price-card--anchored course-offer__price-card--centered">
                <p class="course-offer__price-label">Участие в 5-дневном курсе</p>
                <p class="course-offer__price-old">3 000 ₽</p>
                <p class="course-offer__price-new">БЕСПЛАТНО</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSpeakerScreen() {
  return `
    <section class="speaker-intro" aria-labelledby="speaker-intro-title">
      <div class="speaker-intro__shell">
        <div class="speaker-intro__media speaker-intro__media--cropped">
          <img
            class="speaker-intro__portrait speaker-intro__portrait--cropped"
            src="${speakerPortraitUrl}"
            alt="Данила Сусак"
          />
        </div>

        <div class="speaker-intro__content">
          <h2 class="speaker-intro__title" id="speaker-intro-title">
            <span class="speaker-intro__title-line">Позвольте представиться</span>
          </h2>

          <div class="speaker-intro__badge">
            <span class="speaker-intro__badge-name">Данила Сусак,</span>
            <span class="speaker-intro__badge-note">Чемпион мира по оздоровительному цигун</span>
          </div>

          <ul class="speaker-intro__facts">
            ${renderSpeakerFacts(speakerFacts)}
          </ul>
        </div>
      </div>
    </section>
  `;
}

function renderSymptomGridScreen() {
  return `
    <section class="symptom-grid" aria-labelledby="symptom-grid-title">
      <div class="symptom-grid__shell">
        <h2 class="symptom-grid__title" id="symptom-grid-title">
          За 10 лет я помог более 1 000 000 мужчин и женщин, которые устали от…
        </h2>

        <div class="symptom-grid__cards">
          ${renderSymptomCards(symptomCards)}
        </div>

        <div class="symptom-grid__cta">
          <p class="symptom-grid__cta-text">
            Регистрируйтесь на курс прямо сейчас и получите возможность вернуть лёгкость движения и жизнь без боли
          </p>

          <a
            class="symptom-grid__button"
            href="#"
            data-gc-script="${gcScriptUrl}"
            data-gc-widget="pending"
            data-gc-popup-trigger
          >
            Получить доступ бесплатно
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderBenefitsGridScreen() {
  return `
    <section class="benefits-grid" aria-labelledby="benefits-grid-title">
      <div class="benefits-grid__shell">
        <h2 class="benefits-grid__title" id="benefits-grid-title">
          На программе подробно разберём, как восстановить суставы и позвоночник, чтобы вы могли:
        </h2>

        <div class="benefits-grid__cards">
          ${renderBenefitCards(benefitCards)}
        </div>

        <div class="benefits-grid__cta">
          <p class="benefits-grid__cta-text">
            Регистрируйтесь прямо сейчас, получите пошаговую методику восстановления суставов и позвоночника БЕЗ ЛЕКАРСТВ
          </p>

          <a
            class="benefits-grid__button"
            href="#"
            data-gc-script="${gcScriptUrl}"
            data-gc-widget="pending"
            data-gc-popup-trigger
          >
            Получить доступ бесплатно
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderReviewsShowcase() {
  return `
    <section class="reviews-showcase" aria-labelledby="reviews-showcase-title">
      <div class="reviews-showcase__shell">
        <h2 class="reviews-showcase__title" id="reviews-showcase-title">
          Смотрите, как может измениться ваша жизнь после программы по естественному восстановлению суставов и позвоночника
        </h2>

        <p class="reviews-showcase__note">
          *чтобы увеличить отзыв, нажмите на него
        </p>

        <div class="reviews-showcase__carousel" data-review-carousel>
          <button
            class="reviews-showcase__nav reviews-showcase__nav--prev"
            type="button"
            aria-label="Предыдущий отзыв"
            data-review-prev
          >
            ‹
          </button>

          <div class="reviews-showcase__viewport">
            <div class="reviews-showcase__track" data-review-track>
              ${renderReviewCards(reviewImages)}
            </div>
          </div>

          <button
            class="reviews-showcase__nav reviews-showcase__nav--next"
            type="button"
            aria-label="Следующий отзыв"
            data-review-next
          >
            ›
          </button>
        </div>

        <div class="reviews-showcase__dots" data-review-dots>
          ${reviewImages
            .map(
              (_, index) => `
                <button
                  class="reviews-showcase__dot${index === 0 ? ' is-active' : ''}"
                  type="button"
                  aria-label="Перейти к отзыву ${index + 1}"
                  data-review-dot="${index}"
                ></button>
              `,
            )
            .join('')}
        </div>
      </div>

      <div class="reviews-showcase__viewer is-hidden" data-review-viewer>
        <div class="reviews-showcase__viewer-backdrop" data-review-close></div>
        <div class="reviews-showcase__viewer-dialog" role="dialog" aria-modal="true" aria-label="Просмотр отзыва">
          <button class="reviews-showcase__viewer-close" type="button" data-review-close aria-label="Закрыть отзыв">
            ×
          </button>
          <img class="reviews-showcase__viewer-image" src="" alt="" data-review-image />
        </div>
      </div>
    </section>
  `;
}

function renderGiftsShowcaseSection() {
  return `
    <section class="gifts-showcase" aria-labelledby="gifts-showcase-title">
      <div class="gifts-showcase__shell">
        <h2 class="gifts-showcase__title" id="gifts-showcase-title">
          Регистрируйтесь на бесплатный курс прямо сейчас и заберите подарки
        </h2>

        <div class="gifts-showcase__boxes">
          <img class="gifts-showcase__boxes-image" src="${giftBoxesUrl}" alt="Подарки за регистрацию" />
        </div>

        <ul class="gifts-showcase__list">
          <li class="gifts-showcase__item">
            <strong>ПОДАРОК 1 — Чек-лист</strong>
            <span>«Как выбрать правильную обувь для здоровья суставов»</span>
          </li>
          <li class="gifts-showcase__item">
            <strong>ПОДАРОК 2 — Гид/Видеокурс</strong>
            <span>«Секреты сохранения здоровья суставов и спины при уборке и готовке дома»</span>
          </li>
        </ul>

        <div class="gifts-showcase__cta">
          <a
            class="gifts-showcase__button"
            href="#"
            data-gc-script="${gcScriptUrl}"
            data-gc-widget="pending"
            data-gc-popup-trigger
          >
            Забрать подарки
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderProgramSection() {
  return `
    <section class="program" aria-labelledby="program-title">
      <div class="program__shell">
        <h2 class="program__title" id="program-title">
          Программа бесплатного оздоровительного онлайн-курса
        </h2>

        <div class="program__list" data-program-accordion>
          ${renderProgramDays(programDays)}
        </div>

        <div class="program__cta">
          <a
            class="program__button"
            href="#"
            data-gc-script="${gcScriptUrl}"
            data-gc-widget="pending"
            data-gc-popup-trigger
          >
            Получить доступ бесплатно
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderTwoReasonsSection() {
  return `
    <section class="two-reasons" aria-labelledby="two-reasons-title">
      <div class="two-reasons__shell">
        <h2 class="two-reasons__title" id="two-reasons-title">
          2 причины, почему этот бесплатный онлайн-курс доступен каждому
        </h2>

        <div class="two-reasons__grid">
          ${reasons
            .map(
              (reason) => `
                <article class="two-reasons__card" data-reason-card>
                  <div class="two-reasons__media">
                    <img src="${reason.image}" alt="" />
                  </div>
                  <p class="two-reasons__text">${reason.text}</p>
                </article>
              `,
            )
            .join('')}
        </div>

        <div class="two-reasons__cta">
          <a
            class="two-reasons__button"
            href="#"
            data-gc-script="${gcScriptUrl}"
            data-gc-widget="pending"
            data-gc-popup-trigger
          >
            Стать участником за 0 руб
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderFinalRegistrationSection() {
  return `
    <section class="final-registration" aria-labelledby="final-registration-title">
      <div class="final-registration__shell">
        <div class="final-registration__content">
          <h2 class="final-registration__title" id="final-registration-title">
            Регистрация на бесплатный курс
          </h2>

          <p class="final-registration__lead">
            Внимательно вводите свои данные, чтобы точно получить подарки и ссылку на онлайн-занятие!
          </p>

          <div
            class="final-registration__widget"
            id="gc-widget-inline"
            data-gc-inline-widget
            data-gc-script="${gcScriptUrl}"
            data-gc-script-id="${gcWidgetScriptId}"
          ></div>
        </div>
      </div>
    </section>
  `;
}

function renderSiteFooter() {
  const { privacyUrl, ofertaUrl } = getFooterLegalLinks();

  return `
    <footer class="site-footer" aria-labelledby="site-footer-title">
      <div class="site-footer__shell">
        <h2 class="site-footer__title sr-only" id="site-footer-title">Юридическая информация</h2>

        <div class="site-footer__grid">
          <div class="site-footer__column">
            <p class="site-footer__headline">Общество с ограниченной ответственностью “КСАМАТА”</p>
          </div>

          <div class="site-footer__column site-footer__column--meta">
            <p class="site-footer__text">ИНН 9709073598</p>
            <p class="site-footer__text">КПП 770901001</p>
            <p class="site-footer__text">ОГРН 1217700369358</p>
          </div>

          <div class="site-footer__column">
            <a class="site-footer__link site-footer__link--plain" href="mailto:support@ksamata.ru">
              Почта: support@ksamata.ru
            </a>
            <a class="site-footer__link" href="${privacyUrl}" target="_blank" rel="noreferrer">
              Политика конфиденциальности
            </a>
            <a class="site-footer__link" href="${ofertaUrl}" target="_blank" rel="noreferrer">
              Договор-оферта
            </a>
          </div>

          <div class="site-footer__column">
            <p class="site-footer__address">
              109147, Г.МОСКВА, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ ТАГАНСКИЙ,
              УЛ ВОРОНЦОВСКАЯ, Д. 15/10 СТР. 5
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function renderHero() {
  return `
    <main class="page-shell">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__atmosphere hero__atmosphere--left" aria-hidden="true"></div>
        <div class="hero__atmosphere hero__atmosphere--right" aria-hidden="true"></div>
        <div class="hero__frame">
          <div class="hero__badge">${getTomorrowMoscowLabel()}</div>
          <div class="hero__card">
            <div class="hero__header">
              <p class="hero__eyebrow">Бесплатная онлайн-программа по восстановлению здоровья суставов и позвоночника</p>
              <h1 class="hero__title" id="hero-title">
                Ищу 4-х женщин и мужчин, которые устали от болей в суставах, скованности в спине, прострелов в пояснице и ограничений в движении
              </h1>
              <p class="hero__lead">
                За 5 дней разберём причины болей и пути восстановления без таблеток и операций.
              </p>
            </div>

            <div class="hero__grid">
              <article class="hero-panel">
                <h2 class="hero-panel__title">Курс именно для тех, кто:</h2>
                <ol class="hero-list">
                  ${renderList(conditions)}
                </ol>
              </article>

              <article class="hero-panel hero-panel--accent">
                <h2 class="hero-panel__title">Что нужно сделать?</h2>
                <ol class="hero-list">
                  ${renderList(actions)}
                </ol>
              </article>
            </div>

            <div class="hero__footer">
              <div class="hero-gifts">
                <h2 class="hero-gifts__title">Регистрируйтесь прямо сейчас и заберите подарки</h2>
                <ul class="hero-gifts__list">
                  ${renderGiftList(gifts)}
                </ul>
              </div>

              <div class="hero__cta-wrap">
                <a
                  class="hero__cta"
                  href="#"
                  data-gc-script="${gcScriptUrl}"
                  data-gc-widget="pending"
                  data-gc-popup-trigger
                >
                  Зарегистрироваться
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ${renderSecondScreen()}
      ${renderSpeakerScreen()}
      ${renderSymptomGridScreen()}
      ${renderBenefitsGridScreen()}
      ${renderReviewsShowcase()}
      ${renderGiftsShowcaseSection()}
      ${renderProgramSection()}
      ${renderTwoReasonsSection()}
      ${renderFinalRegistrationSection()}
      ${renderSiteFooter()}
      <div class="gc-popup is-hidden" data-gc-popup>
        <div class="gc-popup__backdrop" data-gc-popup-close></div>
        <div class="gc-popup__dialog" role="dialog" aria-modal="true" aria-label="Регистрация на курс">
          <button
            class="gc-popup__close"
            type="button"
            aria-label="Закрыть форму"
            data-gc-popup-close
          >
            ×
          </button>

          <div class="gc-popup__header">
            <p class="gc-popup__eyebrow">Бесплатный 5-дневный онлайн-курс</p>
            <h2 class="gc-popup__title">Регистрация на курс</h2>
          </div>

          <div
            class="gc-popup__widget"
            data-gc-popup-widget
            data-gc-script="${gcPopupScriptUrl}"
            data-gc-script-id="${gcWidgetScriptId}"
          ></div>
        </div>
      </div>
    </main>
  `;
}
