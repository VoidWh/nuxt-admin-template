import Cookies from 'js-cookie'

const TokenKey = 'koa_admin_template_token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

// 获取服务端cookie
export function getcookiesInServer (req) {
  const serviceCookie = {}
  req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (val) {
    const parts = val.split('=')
    serviceCookie[parts[0].trim()] = (parts[1] || '').trim()
  })
  return serviceCookie
}

// 获取客户端cookie
export function getcookiesInClient (key) {
  return Cookies.get(key) ? Cookies.get(key) : ''
}
