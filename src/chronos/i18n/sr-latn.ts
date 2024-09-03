//! moment.js locale configuration
//! locale : Serbian (Latin) [sr-latn]
//! authors : Vladimir Kukić: https://github.com/kukicvladimir,
//! authors : Surányi Gábor: https://github.com/surexxx
//! authors : Radoš Milićev: https://github.com/rammba

import { LocaleData } from '../locale/locale.class';

export const srLatnLocale: LocaleData = {
  abbr: 'sr-latn',
  months: 'Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Avg_Sep_Okt_Nov_Dec'.split('_'),
  weekdays: 'Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota'.split('_'),
  weekdaysShort: 'Ned_Pon_Uto_Sre_Čet_Pet_Sub'.split('_'),
  weekdaysMin: 'Ne_Po_Ut_Sr_Če_Pe_Su'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[Danas u] LT',
    nextDay: '[Sutra u] LT',
    nextWeek: 'dddd [u] LT',
    lastDay: '[Juče u] LT',
    lastWeek: '[Prošle] dddd [u] LT',
    sameElse: 'L'
  },
  invalidDate: 'Nevažeći datum',
  relativeTime: {
    future: 'za %s',
    past: '%s pre',
    s: 'nekoliko sekundi',
    ss: '%d sekundi',
    m: 'minut',
    mm: '%d minuta',
    h: 'sat',
    hh: '%d sati',
    d: 'dan',
    dd: '%d dana',
    M: 'mesec dana',
    MM: '%d meseci',
    y: 'godina',
    yy: '%d godina'
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal : '%d.',
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
};