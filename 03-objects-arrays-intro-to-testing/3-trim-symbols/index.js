/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const symbolsArray = string.split('');

  let resultString = '';
  // Если не указан параметр "число разрешенных одинаковых символов" - вернуть пустую строку
  if ( size === 0 ) {
    return resultString;
  }

  let sameSymbolsCount = 1;
  for ( let i = 0; i < symbolsArray.length; i++ ) {
    let currentValue = symbolsArray[i];
    let nextValue    = symbolsArray[i + 1];

    if ( nextValue && ( currentValue === nextValue ) ) {
      // Попались! 2 одинаковых символа подряд
      sameSymbolsCount += 1;
      if ( sameSymbolsCount > size ) {
        // Переходим к следующему символу, т.к. превышено максимально допустимое число повторяющихся символов
        continue;
      }
    } else {
      // Скинуть счётчик совпадений
      sameSymbolsCount = 1;
    }

    resultString += currentValue;
  }

  return resultString;
}
