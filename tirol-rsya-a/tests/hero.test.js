import { describe, expect, it } from 'vitest';
import {
  getFooterLegalLinks,
  getTomorrowMoscowLabel,
  renderHero,
} from '../src/hero.js';

describe('renderHero', () => {
  it('formats the start badge as tomorrow in Moscow time', () => {
    expect(getTomorrowMoscowLabel(new Date('2026-04-06T19:30:00.000Z'))).toBe(
      'Старт 7 апреля',
    );
    expect(getTomorrowMoscowLabel(new Date('2026-04-06T21:30:00.000Z'))).toBe(
      'Старт 8 апреля',
    );
  });

  it('builds footer legal links from the root domain without subdomains', () => {
    expect(getFooterLegalLinks('landing.ksamata.ru')).toEqual({
      privacyUrl: 'https://gc.ksamata.ru/privacy',
      ofertaUrl: 'https://gc.ksamata.ru/oferta',
    });
    expect(getFooterLegalLinks('deep.sub.example.com')).toEqual({
      privacyUrl: 'https://gc.example.com/privacy',
      ofertaUrl: 'https://gc.example.com/oferta',
    });
  });

  it('renders the approved first-screen structure', () => {
    const markup = renderHero();

    expect(markup).toContain(getTomorrowMoscowLabel());
    expect(markup).toContain(
      'Ищу 4-х женщин, которые устали от лишнего веса, хронической усталости, выпадения волос и проблем с ЖКТ',
    );
    expect(markup).toContain('Какие условия?');
    expect(markup).toContain('Что делать?');
    expect(markup).toContain('Регистрируйтесь прямо сейчас и заберите подарки');
    expect(markup).toContain('Зарегистрироваться');
    expect(markup).toContain('href="#"');
    expect(markup).toContain('data-gc-script');
    expect(markup).toContain('data-gc-popup-trigger');
    expect(markup).toContain('https://gc.tirolab.ru/pl/lite/widget/script?id=1465148');
    expect(markup).not.toContain(
      'Кнопка уже подготовлена под popup GetCourse и будет подключена через ваш виджет.',
    );
  });

  it('renders the approved second-screen offer with a right-side free price block', () => {
    const markup = renderHero();

    expect(markup).toContain('Щитовидка');
    expect(markup).toContain('под контролем');
    expect(markup).toContain('course-offer__title-line--nowrap');
    expect(markup).toContain('course-offer__layout--balanced');
    expect(markup).toContain('course-offer__figure');
    expect(markup).toContain('course-offer__price-card--wide');
    expect(markup).toContain('course-offer__price-card--anchored');
    expect(markup).toContain('course-offer__price-card--centered');
    expect(markup).toContain('Получите');
    expect(markup).toContain('ДВА ПОДАРКА');
    expect(markup).toContain('сразу после регистрации!');
    expect(markup).toContain('Стать участником бесплатно');
    expect(markup).toContain('5000 ₽');
    expect(markup).toContain('БЕСПЛАТНО');
    expect(markup).toContain('/assets/tild6430-6564-4266-b336-633062353636__-2.png');
  });

  it('renders the speaker introduction screen from the archive', () => {
    const markup = renderHero();

    expect(markup).toContain('Позвольте представиться');
    expect(markup).toContain('speaker-intro__title-line');
    expect(markup).toContain('speaker-intro__media--cropped');
    expect(markup).toContain('speaker-intro__portrait--cropped');
    expect(markup).toContain('Алена Гусева');
    expect(markup).toContain('врач с опытом более 25 лет');
    expect(markup).toContain('Акушер-гинеколог');
    expect(markup).toContain('Гинеколог-эндокринолог');
    expect(markup).toContain('Врач ультразвуковой диагностики');
    expect(markup).toContain(
      'Специалист по лечению всех видов бесплодия и невынашиванию, по планированию беременности',
    );
    expect(markup).toContain('Специалист по патологии шейки матки');
    expect(markup).toContain('Нутрициолог');
    expect(markup).toContain(
      '/assets/qa3dNW1cT9QLjMbU97nQ-2.jpg',
    );
  });

  it('renders the symptom grid screen with archive images and CTA', () => {
    const markup = renderHero();

    expect(markup).toContain('Более 25 лет я помогаю женщинам, которые устали от');
    expect(markup).toContain('Отечности, лишнего веса');
    expect(markup).toContain('Есть диагнозы: гипо- или гипертериоз, зоб, АИТ и т.д');
    expect(markup).toContain('Хронической усталости, слабости');
    expect(markup).toContain('Выпадения волос и кончиков бровей, сухой кожи');
    expect(markup).toContain('Проблем с ЖКТ (тяжестью после еды, вздутия, запоров, метеоризма)');
    expect(markup).toContain('Нарушения менструального цикла, ПМС');
    expect(markup).toContain('Депрессии, перепадов настроения, проблем с памятью');
    expect(markup).toContain('Высокого уровня холестерина и давления');
    expect(markup).toContain(
      'Регистрируйтесь на курс прямо сейчас и получите возможность вернуть себе бодрость, красоту кожи и волос БЕЗ лекарств',
    );
    expect(markup).toContain('symptom-grid__card');
    expect(markup).toContain('Получить доступ');
    expect(markup).toContain('/assets/tild3036-6538-4365-a563-643564643164__obrezka-zenskoi-ruki.png');
    expect(markup).toContain('/assets/tild3336-3030-4539-b731-633636353266__image_40.png');
  });

  it('renders the benefits grid screen with archive images and registration CTA', () => {
    const markup = renderHero();

    expect(markup).toContain(
      'Этот бесплатный курс даст возможность понять, как наладить работу щитовидной железы, а также',
    );
    expect(markup).toContain('Повысить энергию');
    expect(markup).toContain('Стабилизировать вес');
    expect(markup).toContain('Улучшить настроение');
    expect(markup).toContain('Нормализовать сон');
    expect(markup).toContain('Восстановить менструальный цикл');
    expect(markup).toContain('Улучшить когнитивные функции');
    expect(markup).toContain('Улучшить состояние кожи и волос');
    expect(markup).toContain('Избавиться от стресса');
    expect(markup).toContain(
      'Регистрируйтесь на курс прямо сейчас, получите пошаговую методику восстановления щитовидки БЕЗ ЛЕКАРСТВ',
    );
    expect(markup).toContain('benefits-grid__card');
    expect(markup).toContain('Зарегистрироваться');
    expect(markup).toContain('/assets/tild3262-3364-4666-a235-306639613661__vozbuzdennaa-kavkazs.png');
    expect(markup).toContain('/assets/tild6262-3234-4330-b664-303738666131__golova-bokovoi-vid-m.png');
  });

  it('renders the reviews showcase with custom uploaded review images', () => {
    const markup = renderHero();

    expect(markup).toContain('Смотрите, как меняет жизнь оздоровление щитовидки БЕЗ ЛЕКАРСТВ');
    expect(markup).not.toContain('>ОТЗЫВЫ<');
    expect(markup).toContain('reviews-showcase__viewport');
    expect(markup).toContain('reviews-showcase__track');
    expect(markup).toContain('reviews-showcase__nav');
    expect(markup).toContain('data-review-prev');
    expect(markup).toContain('data-review-next');
    expect(markup).toContain('reviews-showcase__dots');
    expect(markup).toContain('reviews-showcase__viewer');
    expect(markup).toContain('/assets/_.png');
    expect(markup).toContain('/assets/_-1.png');
    expect(markup).toContain('/assets/_-2.png');
    expect(markup).toContain('/assets/_-3.png');
    expect(markup).toContain('/assets/_-4.png');
    expect(markup).toContain('data-review-open');
  });

  it('renders the registration gifts block with live getcourse widget placeholder', () => {
    const markup = renderHero();

    expect(markup).toContain('Регистрируйтесь прямо сейчас и заберите подарки');
    expect(markup).toContain('САМОДИАГНОСТИКА 5 ДЕФИЦИТОВ');
    expect(markup).toContain('САМОДИАГНОСТИКА СТРЕССА И ИСТОЩЕНИЯ НАДПОЧЕЧНИКОВ');
    expect(markup).toContain('…остался 1 шаг');
    expect(markup).toContain('registration-gifts__widget');
    expect(markup).toContain('data-gc-inline-widget');
    expect(markup).toContain('https://gc.tirolab.ru/pl/lite/widget/script?id=1465148');
    expect(markup).toContain('/assets/tild3937-6465-4265-b836-336434313539__group_1833-2.png');
  });

  it('renders a popup host for all getcourse CTA buttons', () => {
    const markup = renderHero();

    expect(markup).toContain('data-gc-popup');
    expect(markup).toContain('data-gc-popup-widget');
    expect(markup).toContain('data-gc-popup-close');
    expect(markup).toContain(
      'https://gc.tirolab.ru/pl/lite/widget/script?id=1465148&form=popup',
    );
  });

  it('renders the footer with legal info, email, address and legal links', () => {
    const markup = renderHero();

    expect(markup).toContain('Общество с ограниченной ответственностью “КСАМАТА”');
    expect(markup).toContain('ИНН 9709073598');
    expect(markup).toContain('КПП 770901001');
    expect(markup).toContain('ОГРН 1217700369358');
    expect(markup).toContain('support@ksamata.ru');
    expect(markup).toContain('109147, Г.МОСКВА, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ ТАГАНСКИЙ');
    expect(markup).toContain('ВОРОНЦОВСКАЯ, Д. 15/10');
    expect(markup).toContain('https://gc.ksamata.ru/privacy');
    expect(markup).toContain('https://gc.ksamata.ru/oferta');
    expect(markup).toContain('site-footer');
  });
});
