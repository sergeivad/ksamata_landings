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

  it('renders the custom conversion block for variant b', () => {
    const markup = renderHero();

    expect(markup).toContain('Меня зовут Алена Гусева. Я врач-эндокринолог с опытом более 25 лет.');
    expect(markup).toContain('Помогаю женщинам навсегда забыть про:');
    expect(markup).toContain('лишний вес и проблемы с ЖКТ');
    expect(markup).toContain('болезненные месячные и ПМС');
    expect(markup).toContain('хроническую усталость и бессонницу');
    expect(markup).toContain('Возьму всего 15 человек!');
    expect(markup).toContain('Хотите попробовать?');
    expect(markup).toContain('Забрать подарки');
    expect(markup).toContain(
      'Этот бесплатный курс даст возможность понять, как наладить работу щитовидной железы и подарить себе:',
    );
    expect(markup).toContain('Свободу от гормонов и таблеток');
    expect(markup).toContain('Красивые волосы и крепкие ногти');
    expect(markup).toContain('Стабильный вес и энергию');
    expect(markup).toContain('Защиту от стресса');
    expect(markup).toContain('Ясный ум и хорошую память');
    expect(markup).toContain('Регулярный менструальный цикл без болей');
    expect(markup).toContain(
      'Регистрируйтесь на онлайн-курс прямо сейчас, получите пошаговую методику восстановления щитовидки БЕЗ ЛЕКАРСТВ',
    );
    expect(markup).toContain('Хочу быть здоровой!');
    expect(markup).toContain('conversion-table__cell');
    expect(markup).toContain('data-gc-popup-trigger');
  });

  it('does not render the removed archive sections in variant b', () => {
    const markup = renderHero();

    expect(markup).not.toContain('Позвольте представиться');
    expect(markup).not.toContain('speaker-intro__title-line');
    expect(markup).not.toContain('symptom-grid__card');
    expect(markup).not.toContain('benefits-grid__card');
    expect(markup).not.toContain('reviews-showcase__viewport');
    expect(markup).not.toContain('registration-gifts__widget');
    expect(markup).not.toContain('data-gc-inline-widget');
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
