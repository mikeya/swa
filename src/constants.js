export const colors = {
  dark: "#262626",
  primary: "#dc3c44",
  primaryHighlight: "#ffd4c1",
  font: "#fff",
};

export const fonts = {
  desktop: {
    sizeTitle: "5rem",
    sizeSubtitle: "1.75rem",
    sizeText: "1.5rem",
  },
  tablet: {
    sizeTitle: "3.5rem",
    sizeSubtitle: "1.5rem",
    sizeText: "1.25rem",
  },
  familyTitle: "Collegiate, serif",
  familyText: "Lato, Roboto, sans-serif",
};

export const other = {
  navbarHeight: {
    desktop: "136px",
    mobile: "87px",
  },
};
export const breakpoints = {
  desktop: "1400px",
  tablet: "1000px",
  mobile: "600px",
};
export function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
