const gcScriptUrl =
  'https://gc.tirolab.ru/pl/lite/widget/script?id=1465148';
const gcPopupScriptUrl =
  'https://gc.tirolab.ru/pl/lite/widget/script?id=1465148&form=popup';
const gcWidgetScriptId = 'f1d853b8f9058f3ebf34fa036dede573f33ff806';
const assetBase = import.meta.env.BASE_URL ?? '/';
const asset = (path) => `${assetBase}assets/${path}`.replace(/([^:]\/)\/+/g, '$1');
const doctorImageUrl =
  asset('tild6430-6564-4266-b336-633062353636__-2.png');
const speakerPortraitUrl =
  asset('qa3dNW1cT9QLjMbU97nQ-2.jpg');
const giftImageUrl =
  asset('tild3234-3432-4939-b962-646331653564__white-gift-box-with-.png');
const roseImageUrl =
  asset('tild3061-3436-4432-a663-323134306466__realistic-pink-rose-.png');
const registrationBackgroundUrl =
  asset('tild3966-6332-4634-b262-396261386339__10.png');
const registrationGlowUrl =
  asset('tild3264-3331-4234-a334-633538363164__c2e9b1e5-59d6-44af-9.png');
const registrationMockupUrl =
  asset('tild3937-6465-4265-b836-336434313539__group_1833-2.png');
const registrationGiftIconPrimaryUrl =
  asset('tild3438-3730-4237-a331-333834343237__photo.png');
const registrationGiftIconSecondaryUrl =
  asset('tild3466-3134-4166-b266-373735383336__photo.png');

const conditions = [
  'Устали ходить по врачам, пить таблетки и искать причину своих проблем с щитовидкой.',
  'Хотите оздоровить щитовидку и избавиться от симптомов при АИТ и Гипер/Гипотиреозе.',
  'Ищете, как без лекарств вернуть себе энергию, легкость и женское здоровье.',
];

const actions = [
  'Прийти на бесплатный 3-дневный онлайн-курс с врачом эндокринологом-гинекологом.',
  'Пройти онлайн-диагностику на бесплатной программе.',
  'Получить возможность забрать пошаговую методику восстановления щитовидки без лекарств.',
];

const gifts = [
  'Самодиагностика 5 дефицитов: инструменты для ускорения метаболизма и баланса гормонов.',
  'Самодиагностика стресса и истощения надпочечников: методы избавления от стресса и выгорания.',
];

const speakerFacts = [
  'Акушер-гинеколог',
  'Гинеколог-эндокринолог',
  'Врач ультразвуковой диагностики',
  'Специалист по лечению всех видов бесплодия и невынашиванию, по планированию беременности',
  'Специалист по патологии шейки матки',
  'Нутрициолог',
];

const symptomCards = [
  {
    image: asset('tild3036-6538-4365-a563-643564643164__obrezka-zenskoi-ruki.png'),
    text: 'Отечности, лишнего веса',
  },
  {
    image: asset('tild3262-3463-4436-a636-636263623465__bol-naa-zensina-s-bo.png'),
    text: 'Есть диагнозы: гипо- или гипертериоз, зоб, АИТ и т.д',
  },
  {
    image: asset('tild3166-3533-4239-b536-356532636530__molodaa-zensina-vykl.png'),
    text: 'Хронической усталости, слабости',
  },
  {
    image: asset('tild3631-3461-4835-b863-666263303035__zensiny-s-vypadeniem.png'),
    text: 'Выпадения волос и кончиков бровей, сухой кожи',
  },
  {
    image: asset('tild3165-6631-4132-a234-343866306538__nesvarenie-molodaa-z.png'),
    text: 'Проблем с ЖКТ (тяжестью после еды, вздутия, запоров, метеоризма)',
  },
  {
    image: asset('tild3763-3134-4463-b231-616239653133__zensina-vid-speredi-.png'),
    text: 'Нарушения менструального цикла, ПМС',
  },
  {
    image: asset('tild6432-6264-4266-b130-613234363239__srednego-vystrela-ze.png'),
    text: 'Депрессии, перепадов настроения, проблем с памятью',
  },
  {
    image: asset('tild3336-3030-4539-b731-633636353266__image_40.png'),
    text: 'Высокого уровня холестерина и давления',
  },
];

const benefitCards = [
  {
    image: asset('tild3262-3364-4666-a235-306639613661__vozbuzdennaa-kavkazs.png'),
    text: 'Повысить энергию',
  },
  {
    image: asset('tild6637-3032-4566-a437-346266303638__zensina-razdevaet-dz.png'),
    text: 'Стабилизировать вес',
  },
  {
    image: asset('tild3462-3533-4337-a231-646138623130__ulybausaasa-molodaa-.png'),
    text: 'Улучшить настроение',
  },
  {
    image: asset('tild3831-6264-4334-b837-323362336561__portret-krasivoi-uly.png'),
    text: 'Нормализовать сон',
  },
  {
    image: asset('tild6463-3639-4065-b433-616231633263__krasivoe-obnazennoe-.png'),
    text: 'Восстановить менструальный цикл',
  },
  {
    image: asset('tild6533-3361-4139-b762-303234653535__ctenie-knig-i-pozila.png'),
    text: 'Улучшить когнитивные функции',
  },
  {
    image: asset('tild3863-3461-4231-b265-363532643237__krasivye-keratinovye.png'),
    text: 'Улучшить состояние кожи и волос',
  },
  {
    image: asset('tild6262-3234-4330-b664-303738666131__golova-bokovoi-vid-m.png'),
    text: 'Избавиться от стресса',
  },
];

const reviewImages = [
  asset('_.png'),
  asset('_-1.png'),
  asset('_-2.png'),
  asset('_-3.png'),
  asset('_-4.png'),
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
      ({ image, text }) => `
        <article class="benefits-grid__card">
          <div class="benefits-grid__image-wrap">
            <img class="benefits-grid__image" src="${image}" alt="" />
          </div>
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

function renderSecondScreen() {
  return `
    <section class="course-offer" aria-labelledby="course-offer-title">
      <div class="course-offer__shell">
        <div class="course-offer__rose course-offer__rose--left" aria-hidden="true">
          <img src="${roseImageUrl}" alt="" />
        </div>
        <div class="course-offer__rose course-offer__rose--right" aria-hidden="true">
          <img src="${roseImageUrl}" alt="" />
        </div>

        <div class="course-offer__layout course-offer__layout--balanced">
          <div class="course-offer__content course-offer__content--balanced">
            <div class="course-offer__chip">
              Бесплатный 3-дневный онлайн-курс
              <span>с врачом эндокринологом-гинекологом</span>
            </div>

            <h2 class="course-offer__title" id="course-offer-title">
              <span class="course-offer__title-line course-offer__title-accent">Щитовидка</span>
              <span class="course-offer__title-line course-offer__title-line--nowrap">под контролем:</span>
            </h2>

            <p class="course-offer__text">
              <strong>пошаговый план оздоровления</strong>
              <span>и избавления от симптомов при АИТ</span>
              <span>и Гипер/Гипотиреозе - БЕЗ ЛЕКАРСТВ</span>
            </p>

            <div class="course-offer__gift">
              <img
                class="course-offer__gift-icon"
                src="${giftImageUrl}"
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
                alt="Фото врача"
              />

              <div class="course-offer__price-card course-offer__price-card--wide course-offer__price-card--anchored course-offer__price-card--centered">
                <p class="course-offer__price-label">Участие в 3-дневном курсе</p>
                <p class="course-offer__price-old">5000 ₽</p>
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
            alt="Алена Гусева"
          />
        </div>

        <div class="speaker-intro__content">
          <h2 class="speaker-intro__title" id="speaker-intro-title">
            <span class="speaker-intro__title-line">Позвольте представиться</span>
          </h2>

          <div class="speaker-intro__badge">
            <span class="speaker-intro__badge-name">Алена Гусева,</span>
            <span class="speaker-intro__badge-note">врач с опытом более 25 лет</span>
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
          Более 25 лет я помогаю женщинам, которые устали от
        </h2>

        <div class="symptom-grid__cards">
          ${renderSymptomCards(symptomCards)}
        </div>

        <div class="symptom-grid__cta">
          <p class="symptom-grid__cta-text">
            Регистрируйтесь на курс прямо сейчас и получите возможность вернуть себе бодрость, красоту кожи и волос БЕЗ лекарств
          </p>

          <a
            class="symptom-grid__button"
            href="#"
            data-gc-script="${gcScriptUrl}"
            data-gc-widget="pending"
            data-gc-popup-trigger
          >
            Получить доступ
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
          Этот бесплатный курс даст возможность понять, как наладить работу щитовидной железы, а также
        </h2>

        <div class="benefits-grid__cards">
          ${renderBenefitCards(benefitCards)}
        </div>

        <div class="benefits-grid__cta">
          <p class="benefits-grid__cta-text">
            Регистрируйтесь на курс прямо сейчас, получите пошаговую методику восстановления щитовидки БЕЗ ЛЕКАРСТВ
          </p>

          <a
            class="benefits-grid__button"
            href="#"
            data-gc-script="${gcScriptUrl}"
            data-gc-widget="pending"
            data-gc-popup-trigger
          >
            Зарегистрироваться
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
          Смотрите, как меняет жизнь оздоровление щитовидки БЕЗ ЛЕКАРСТВ
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

function renderRegistrationGiftsSection() {
  return `
    <section class="registration-gifts" aria-labelledby="registration-gifts-title">
      <div class="registration-gifts__shell">
        <div class="registration-gifts__bg" aria-hidden="true">
          <img class="registration-gifts__bg-image" src="${registrationBackgroundUrl}" alt="" />
          <img class="registration-gifts__bg-glow" src="${registrationGlowUrl}" alt="" />
        </div>

        <div class="registration-gifts__layout">
          <div class="registration-gifts__content">
            <h2 class="registration-gifts__title" id="registration-gifts-title">
              <span>Регистрируйтесь прямо сейчас</span>
              <span>и <em>заберите подарки</em></span>
            </h2>

            <ul class="registration-gifts__list">
              <li class="registration-gifts__item">
                <img
                  class="registration-gifts__item-icon"
                  src="${registrationGiftIconPrimaryUrl}"
                  alt=""
                />
                <div class="registration-gifts__item-copy">
                  <strong>САМОДИАГНОСТИКА 5 ДЕФИЦИТОВ</strong>
                  <p>инструменты для ускорения метаболизма и баланса гормонов</p>
                </div>
              </li>

              <li class="registration-gifts__item">
                <img
                  class="registration-gifts__item-icon"
                  src="${registrationGiftIconSecondaryUrl}"
                  alt=""
                />
                <div class="registration-gifts__item-copy">
                  <strong>САМОДИАГНОСТИКА СТРЕССА И ИСТОЩЕНИЯ НАДПОЧЕЧНИКОВ</strong>
                  <p>методы избавления от стресса и выгорания</p>
                </div>
              </li>
            </ul>

            <p class="registration-gifts__step">…остался 1 шаг</p>

            <div
              class="registration-gifts__widget"
              id="gc-widget-inline"
              data-gc-inline-widget
              data-gc-script="${gcScriptUrl}"
              data-gc-script-id="${gcWidgetScriptId}"
            ></div>
          </div>

          <div class="registration-gifts__visual" aria-hidden="true">
            <div class="registration-gifts__rings"></div>
            <img
              class="registration-gifts__mockup"
              src="${registrationMockupUrl}"
              alt=""
            />
          </div>
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
              <p class="hero__eyebrow">Бесплатная онлайн-программа по восстановлению женского здоровья</p>
              <h1 class="hero__title" id="hero-title">
                Ищу 4-х женщин, которые устали от лишнего веса, хронической усталости, выпадения волос и проблем с ЖКТ
              </h1>
              <p class="hero__lead">
                Мягкий старт в систему, где вы понимаете причины симптомов, проходите базовую самодиагностику и получаете четкий маршрут действий без перегруза.
              </p>
            </div>

            <div class="hero__grid">
              <article class="hero-panel">
                <h2 class="hero-panel__title">Какие условия?</h2>
                <ol class="hero-list">
                  ${renderList(conditions)}
                </ol>
              </article>

              <article class="hero-panel hero-panel--accent">
                <h2 class="hero-panel__title">Что делать?</h2>
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
      ${renderRegistrationGiftsSection()}
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
            <p class="gc-popup__eyebrow">Бесплатный 3-дневный онлайн-курс</p>
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
