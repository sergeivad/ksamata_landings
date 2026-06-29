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

  it('renders the first-screen structure (БЛОК 1)', () => {
    const markup = renderHero();

    expect(markup).toContain(getTomorrowMoscowLabel());
    expect(markup).toContain(
      'Бесплатная онлайн-программа по восстановлению здоровья суставов и позвоночника',
    );
    expect(markup).toContain(
      'Ищу 4-х женщин и мужчин, которые устали от болей в суставах, скованности в спине, прострелов в пояснице и ограничений в движении',
    );
    expect(markup).toContain('Курс именно для тех, кто:');
    expect(markup).toContain('Что нужно сделать?');
    expect(markup).toContain('Регистрируйтесь прямо сейчас и заберите подарки');
    expect(markup).toContain('Зарегистрироваться');
    expect(markup).toContain('href="#"');
    expect(markup).toContain('data-gc-script');
    expect(markup).toContain('data-gc-popup-trigger');
    expect(markup).toContain('https://gc.tirolab.ru/pl/lite/widget/script?id=1465148');
  });

  it('renders the second-screen offer with free price block (БЛОК 2)', () => {
    const markup = renderHero();

    expect(markup).toContain('Движение');
    expect(markup).toContain('без боли и ограничений');
    expect(markup).toContain('Система быстрого восстановления');
    expect(markup).toContain('Без мазей · Без уколов · Без лекарств и операций · Дома · Даже в 70–80 лет');
    expect(markup).toContain('course-offer__layout--balanced');
    expect(markup).toContain('course-offer__figure');
    expect(markup).toContain('course-offer__price-card--wide');
    expect(markup).toContain('ДВА ПОДАРКА');
    expect(markup).toContain('Стать участником бесплатно');
    expect(markup).toContain('3 000 ₽');
    expect(markup).toContain('БЕСПЛАТНО');
    expect(markup).toContain('/assets/speaker-pose.png');
  });

  it('renders the Danila Susak speaker introduction (БЛОК 3.1)', () => {
    const markup = renderHero();

    expect(markup).toContain('Позвольте представиться');
    expect(markup).toContain('speaker-intro__title-line');
    expect(markup).toContain('Данила Сусак,');
    expect(markup).toContain('Чемпион мира по оздоровительному цигун');
    expect(markup).toContain('Сертифицированный инструктор оздоровительной гимнастики цигун (Яншен цигун)');
    expect(markup).toContain('Автор и основатель оздоровительного центра «Ksamata»');
    expect(markup).toContain('Сертифицированный специалист остеопатии');
    expect(markup).toContain('Приглашённый эксперт на телепередачи про здоровье');
    expect(markup).toContain('/assets/speaker-portrait.png');
  });

  it('renders the symptom grid (БЛОК 3.2)', () => {
    const markup = renderHero();

    expect(markup).toContain('За 10 лет я помог более 1 000 000 мужчин и женщин, которые устали от…');
    expect(markup).toContain('Болей в коленях и скованности по утрам');
    expect(markup).toContain('Прострелов и боли в пояснице');
    expect(markup).toContain('Болей в плечах и шее');
    expect(markup).toContain('Болей при ходьбе в тазобедренных суставах');
    expect(markup).toContain('Хронической ломоты и скованности в движении');
    expect(markup).toContain('Бесконечных врачей, уколов и таблеток без результата');
    expect(markup).toContain(
      'Регистрируйтесь на курс прямо сейчас и получите возможность вернуть лёгкость движения и жизнь без боли',
    );
    expect(markup).toContain('symptom-grid__card');
    expect(markup).toContain('Получить доступ бесплатно');
    expect(markup).toContain('/assets/symptom-knee.png');
  });

  it('renders the benefits grid (БЛОК 4)', () => {
    const markup = renderHero();

    expect(markup).toContain(
      'На программе подробно разберём, как восстановить суставы и позвоночник, чтобы вы могли:',
    );
    expect(markup).toContain('Вставать утром без боли и не думать, как встать с кровати');
    expect(markup).toContain('Спать на любом боку и просыпаться отдохнувшим и полным сил');
    expect(markup).toContain('Жить без таблеток и уколов');
    expect(markup).toContain(
      'Регистрируйтесь прямо сейчас, получите пошаговую методику восстановления суставов и позвоночника БЕЗ ЛЕКАРСТВ',
    );
    expect(markup).toContain('benefits-grid__card');
    expect(markup).toContain('benefits-grid__index');
  });

  it('renders the reviews showcase (БЛОК 5)', () => {
    const markup = renderHero();

    expect(markup).toContain(
      'Смотрите, как может измениться ваша жизнь после программы по естественному восстановлению суставов и позвоночника',
    );
    expect(markup).toContain('reviews-showcase__viewport');
    expect(markup).toContain('reviews-showcase__track');
    expect(markup).toContain('data-review-prev');
    expect(markup).toContain('data-review-next');
    expect(markup).toContain('reviews-showcase__dots');
    expect(markup).toContain('reviews-showcase__viewer');
    expect(markup).toContain('/assets/review-1.png');
    expect(markup).toContain('/assets/review-6.png');
    expect(markup).toContain('data-review-open');
  });

  it('renders the gifts showcase with popup CTA (БЛОК 6)', () => {
    const markup = renderHero();

    expect(markup).toContain('gifts-showcase');
    expect(markup).toContain('Регистрируйтесь на бесплатный курс прямо сейчас и заберите подарки');
    expect(markup).toContain('ПОДАРОК 1 — Чек-лист');
    expect(markup).toContain('ПОДАРОК 2 — Гид/Видеокурс');
    expect(markup).toContain('Забрать подарки');
    expect(markup).toContain('/assets/tz-gifts-boxes.png');
  });

  it('renders the program accordion with five days (БЛОК 7)', () => {
    const markup = renderHero();

    expect(markup).toContain('Программа бесплатного оздоровительного онлайн-курса');
    expect(markup).toContain('data-program-accordion');

    const itemMatches = markup.match(/data-program-item/g) ?? [];
    expect(itemMatches.length).toBe(5);

    const toggleMatches = markup.match(/data-program-toggle/g) ?? [];
    expect(toggleMatches.length).toBe(5);

    expect(markup).toContain('aria-expanded="false"');
    expect(markup).toContain('ДЕНЬ 1');
    expect(markup).toContain('ДЕНЬ 5');
    expect(markup).toContain('Фундамент и главный секрет здоровья суставов и позвоночника');
    expect(markup).toContain('Пошаговый план восстановления после травм и операций');
  });

  it('renders the two-reasons section with two cards (БЛОК 8)', () => {
    const markup = renderHero();

    expect(markup).toContain('2 причины, почему этот бесплатный онлайн-курс доступен каждому');

    const cardMatches = markup.match(/data-reason-card/g) ?? [];
    expect(cardMatches.length).toBe(2);

    expect(markup).toContain('Упражнения в видеокурсах не требуют специальных приспособлений');
    expect(markup).toContain('Упражнения доступны даже в 70–80 лет');
    expect(markup).toContain('Стать участником за 0 руб');
    expect(markup).toContain('/assets/reason-home.png');
    expect(markup).toContain('/assets/reason-age.png');
  });

  it('renders the final inline registration form (БЛОК 9)', () => {
    const markup = renderHero();

    expect(markup).toContain('Регистрация на бесплатный курс');
    expect(markup).toContain('final-registration__widget');
    expect(markup).toContain('data-gc-inline-widget');
    expect(markup).toContain('https://gc.tirolab.ru/pl/lite/widget/script?id=1465148');
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
