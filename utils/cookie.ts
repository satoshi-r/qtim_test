export function setCookie(cookieName: string, value: string, exdays?: number) {
  document.cookie = cookieName + '=' + value + ';' + ';path=/'
}

export function getCookie(cookieName: string): string {
  const name = cookieName + '='
  const decodedCookie = decodeURIComponent(document?.cookie)
  const cookiesArray = decodedCookie.split(';')
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i]
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1)
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length)
    }
  }
  return ''
}

export function deleteCookie(cookieName: string) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}
