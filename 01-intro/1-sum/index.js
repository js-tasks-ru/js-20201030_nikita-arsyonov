/**
 * sum
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
export default function sum(m, n) {
    let param_1 = m;
    let param_2 = n;

    // Если входящие параметры - не числа, считаю их нулевыми, и они не увеличат сумму.
    // Например, при передаче в ф-ю (2,'три') - ожидаю на выходе число 2.
    if( isNaN(param_1) ) { param_1 = 0; }
    if( isNaN(param_2) ) { param_2 = 0; }

    return param_1 + param_2;
}