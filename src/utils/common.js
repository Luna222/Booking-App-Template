export const KEY_USER = 'USER_ARRAY';

/**
 *
 * @returns {Boolean}
 */
const isSupported = function () {
  return typeof Storage !== 'undefined';
};

/**
 *
 * @param {String} key
 * @param {*} value
 */
export const setLocalStorage = function (key, value) {
  //check browser support for localStorage/sessionStorage
  if (isSupported()) localStorage.setItem(key, JSON.stringify(value));
  else throw new Error('Sorry! No Web Storage support..');
};

/**
 *
 * @param {String} key
 * @param {*} defaultVal
 *
 * @returns
 */
export const getLocalStorage = function (key, defaultVal = '') {
  //parse the stored value back into its original form
  if (isSupported()) return JSON.parse(localStorage.getItem(key)) ?? defaultVal;
  else console.log('Sorry! No Web Storage support..');
};
