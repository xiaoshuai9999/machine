/**
 * 判空方法
 * @param str
 * @returns {boolean}
 */
export function strIsEmpty(str){
  str +='';
  let trim_str = str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');//去除字符串左右空格
  if(trim_str === 'null' || trim_str === null || trim_str === "undefined" || trim_str.length === 0 || trim_str === undefined){
    return true;
  }else{
    return false;
  }
}

/**
 * 判空方法
 * @param arr
 * @returns {boolean}
 */
export function arrIsEmpty(arr){
  if(arr === null || arr.length === 0 || arr === undefined){
    return true;
  }else{
    return false;
  }
}

/**
 * 格式化时间方法
 * @param fmt 字符串格式
 * @param date 时间类
 * @returns {string}
 */
export function dateFormat(fmt,date){
  let ret;
  const opt = {
    "y+": date.getFullYear().toString(),
    "M+": (date.getMonth()+1).toString(),
    "d+": date.getDate().toString(),
    "H+": date.getHours().toString(),
    "m+": date.getMinutes().toString(),
    "s+": date.getSeconds().toString()
  };
  for (let k in opt){
    ret = new RegExp("("+k+")").exec(fmt);
    if (ret){
      fmt = fmt.replace(ret[1],(ret[1].length === 1)?(opt[k]): (opt[k].padStart(ret[1].length,"0")))
    }
  }
  return fmt;
}

/**
 * 校验手机号
 * @param mobile
 * @returns {boolean}
 */
export function checkMobile(mobile) {
  let reMobile = /^1[3456789]\d{9}$/;
  return reMobile.test(mobile);
}

/**
 * 校验邮箱
 * @param email
 * @returns {boolean}
 */
export function checkEmail(email) {
  let reEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reEmail.test(email);
}

/**
 * 校验身份证
 * @param idNumber
 * @returns {boolean}
 */
export function checkIdNumber(idNumber) {
  //身份证
  let reIdNumber = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|[xX])$/;
  return reIdNumber.test(idNumber);
}
/**
 * 校验是否为正整数(4位数) 或 最多包含两位小数
 */
export function checkNum(str) {
  let isNum = /^(([1-9][0-9]{0,3})|(([0]\.\d{1,2}|[1-9][0-9]{0,3}\.\d{1,2})))$/;
  return isNum.test(str);
}

/**
 * 校验是否为正数
 */
export function checkPositiveNum(num) {
  let reg = /^\d+(?=\.{0,1}\d+$|$)/;
  return reg.test(num);
}

/**
 * 校验是否为电话号码
 */
export function checkTelPhoneNum(num) {
  let reg = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  return reg.test(num);
}

/**
 * 校验是否为中文
 */
export function checkChinese(str) {
  let reg = /^[\u4E00-\u9FA5\uF900-\uFA2D]*$/;
  return reg.test(str);
}

/**
 * 获取cookie
 * @param name
 * @returns {string}
 */
export function getCookie(name) {
  let strcookie = document.cookie;
  let arrcookie = strcookie.split(";")
  for (let i = 0; i < arrcookie.length; i++) {
    let arr = arrcookie[i].split("=");
    if (name === arr[0].trim()) {
      return arr[1];
    }
  }
  return "";
}

