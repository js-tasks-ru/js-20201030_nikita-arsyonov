/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */

// Вариант решения номер один - через обход ключей и значений по циклу for .. of Object.entries(obj)
export function invertObj(obj) {
  let swappedObj = {};
  if ( (obj !== undefined) && (obj !== null) ) {
    for (const [key, value] of Object.entries(obj)) {
      console.log(`key: ${key}, value: ${value}`);
      swappedObj[value] = key;
    }
  } else {
    swappedObj = undefined;
  }
  return swappedObj;
}

// Вариант решения номер два - через преобразование в массив, затем map и обратно объект через fromEntries
// export function invertObj(obj) {
//   let swappedObj = {};
//
//   if ( (obj !== undefined) && (obj !== null) ) {
//     swappedObj = Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
//   } else {
//     swappedObj = undefined;
//   }
//   return swappedObj;
// }
