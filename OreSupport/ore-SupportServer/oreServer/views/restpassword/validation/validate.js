
/**
 * @param path String
 * @returns Boolean
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param password String
 * @returns Boolean
 */
function validPasswd(this) {
  let check_password = this.value;
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/.test(check_password)
}

/**
 * @param password String
 * @returns Boolean
 */
export function validEq() {
  return $("#newPassword").val() === $("#newPassword1").val()
}

/**
 * @param str String
 * @returns Boolean
 * @describe 少なくとも1つの大文字英字
 */
export function validUpper(password) {
  return /^(?=.*[A-Z])$/.test(password)
}

/**
 * @param str String
 * @returns Boolean
 * @describe 少なくとも1つの小文字の英字
 */
export function validLower(password) {
  return /^(?=.*[a-z])$/.test(password)
}

/**
 * @param str String
 * @returns Boolean
 * @describe 少なくとも1桁
 */
export function validNumber(password) {
  return /^(?=.*\d)$/.test(password)
}

/**
 * @param str String
 * @returns Boolean
 * @describe 少なくとも1つの特殊文字
 */
export function validSymbol(password) {
  return /^(?=.*[@$!%*?&])$/.test(password)
}

/**
 * @param str String
 * @returns Boolean
 */
export function validUsername(str) {
  return str.trim() != ""
}

/**
 * @param url String
 * @returns Boolean
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param str String
 * @returns Boolean
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param str Strinr
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param str String
 * @returns Boolean
 */
export function validEmail(email) {
  // eslint-disable-next-line
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param phone Number
 * @returns Boolean
 */
export function validPhone(phone) {
  const reg = /^0\d{9,10}$/
  return reg.test(phone)
}

/**
 * @param postalcode Number
 * @returns Boolean
 */
export function validPostalcode(postalcode) {
  const reg = /^\d{7}$/
  return reg.test(postalcode)
}

/**
 * @param num Number
 * @returns Boolean
 */
export function isNumber(num) {
  const reg = /^[0-9]+$/
  return reg.test(num)
}

/**
 * @param str String
 * @returns Boolean
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param arg Collenction
 * @returns Boolean
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
