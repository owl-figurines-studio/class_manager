import Taro from "@tarojs/taro";
/**
 * @description 获取当前页url
 */
export const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages()
  let currentPage = pages[pages.length - 1]
  let url = currentPage.route
  return url
}

export const pageToLogin = () => {
  let path = getCurrentPageUrl()
  if (!path.includes('login')) {
    Taro.navigateTo({
      url: "/pages/login/login"
    });
  }
}

export const getArguments = (arg, isInput = false) => {
  let argString = ""
  if (isInput) {
    argString = objToString(arg)
  } else {
    Object.keys(arg).forEach(key => {
      if (typeof (arg[key]) === 'boolean') {
        argString = `${argString} ${key}:${arg[key]}`
      } else {
        argString = `${argString} ${key}:"${arg[key]}"`
      }
    })
    argString = argString.length > 0 ? `(${argString})` : ""
  }
  return argString
}

export const objToString = (obj) => {
  let str = ''
  if (typeof (obj) === 'string') {
    str = `"${obj}"`
  } else if (Array.isArray(obj)) {
    str = `["${obj.join('","')}"]`
  } else if (Object.keys(obj).length > 0) {
    Object.keys(obj).forEach(key => {
      const children = objToString(obj[key])
      str = `${str}${key}:${children},`
    })
    str = `{${str}}`
  } else {
    str = `${obj}`
  }
  return str
}


