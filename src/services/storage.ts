const storage = {
  set: (key: string, value: any) => {
    if (!value || value.length <= 0) return;

    if (key && value) {
      if (typeof value === "string") {
        return window.localStorage.setItem(key, value);
      } else {
        return window.localStorage.setItem(key, JSON.stringify(value));
      }
    }
  },
  get: (key: string) => {
    if (key) {
      return window.localStorage.getItem(key);
    }
  },
  remove: (key: string) => {
    if (key) {
      return window.localStorage.removeItem(key);
    }
  },
  clear: () => {
    return window.localStorage.clear();
  },
};

export default storage;