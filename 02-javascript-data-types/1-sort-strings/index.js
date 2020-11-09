/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

/*
Владимир, я своё решение не успел сдать, сомневался, и не успел доделать к занятию кроме этого ни одного задания.
Сдаю в состоянии "как написал", тк снимать кальку с Вашего смысла не вижу никакого.
PS Уяснил, что reverse() это плохой стиль и лишняя нагрузка на машину, не логично просто.
 */

export function sortStrings(arr, param = 'asc') {
  const arrCopy = arr.slice();

  if ( param === 'asc' ) {
    return doSorting(arrCopy, 1);
  } else if ( param === 'desc' ) {
    return doSorting(arrCopy, -1);
  } else {
    return `ERROR! Input sort criteria [ ${param} ] is not 'asc' or 'desc'`;
  }

  function doSorting (array, sortOrder) {
    return [...array].sort((str1, str2) =>
      sortOrder * str1.localeCompare(str2, ['ru', 'en'], {caseFirst: 'upper'}));
  }
}


