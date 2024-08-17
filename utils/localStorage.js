const TTL = 60 * 8640000 // 60 days

export function isLocalStorageActive () {
  return process.browser && typeof (localStorage) !== 'undefined' && localStorage.getItem
}

export function getLocalStorageItem (key, defaultValue) {
  if (isLocalStorageActive() && localStorage.getItem(key) !== null) {
    try {
      return localStorage.getItem(key)
    } catch (e) {
      console.log(e)
      return defaultValue || undefined
    }
  }
  return defaultValue || null
}

export function setLocalStorageItem (key, value) {
  if (isLocalStorageActive() && localStorage.setItem) {
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      console.log(e)
      return false
    }
    return true
  }
  return false
}

export function removeLocalStorageItem (key) {
  if (isLocalStorageActive() && localStorage.removeItem) {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.log(e)
      return false
    }
    return true
  }
  return false
}

export function setWithExpiry(key, value) {
  const now = new Date()

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + TTL
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key)
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null
  }
  const item = JSON.parse(itemStr)
  const now = new Date()
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key)
    return null
  }
  return item.value
}
