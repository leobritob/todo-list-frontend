const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key: string) => {
  const item = localStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  }
}

const removeItem = (key: string) => {
  localStorage.removeItem(key)
}

const clear = () => {
  localStorage.clear()
}

export const StorageHelper = {
  setItem,
  getItem,
  removeItem,
  clear,
}
