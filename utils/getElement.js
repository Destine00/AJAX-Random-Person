const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(`Element not found: ${selector}`);
  }
};

export default getElement;
