//! moment.js locale configuration
//! locale : Serbian (Cyrillic) [sr-cyrl-rs]
//! authors : Vladimir Kukić: https://github.com/kukicvladimir,
//! authors : Surányi Gábor: https://github.com/surexxx
//! authors : Radoš Milićev: https://github.com/rammba
//! reference: https://github.com/moment/moment/blob/develop/locale/sr-cyrl.js

import { LocaleData } from '../locale/locale.class';

export const srCyrlLocale: LocaleData = {
  abbr: 'sr-cyrl-rs',
  months: 'Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар'.split('_'),
  monthsShort: 'Јан_Феб_Мар_Апр_Мај_Јун_Јул_Авг_Сеп_Окт_Нов_Дец'.split('_'),
  weekdays: 'Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота'.split('_'),
  weekdaysShort: 'Нед_Пон_Уто_Сре_Чет_Пет_Суб'.split('_'),
  weekdaysMin: 'Не_По_Ут_Ср_Че_Пе_Су'.split('_'),
  longDateFormat: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'D.MM.YYYY.',
    LL: 'D. MMMM YYYY.',
    LLL: 'D. MMMM YYYY. H:mm',
    LLLL: 'dddd, D. MMMM YYYY. H:mm'
  },
  calendar: {
    sameDay: '[Данас y] LT',
    nextDay: '[Сутра y] LT',
    nextWeek: 'dddd [y] LT',
    lastDay: '[Јуче y] LT',
    lastWeek: '[Прошле] dddd [y] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'за %s',
    past: 'пре %s',
    s: 'неколико секунди',
    ss: '%d секунди',
    m: 'минут',
    mm: '%d минутa',
    h: 'сат',
    hh: '%d сати',
    d: 'дан',
    dd: '%d дана',
    M: 'месец дана',
    MM: '%d месеци',
    y: 'годинa',
    yy: '%d годинa'
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: '%d.',
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 7  // The week that contains Jan 7th is the first week of the year.
  }
};