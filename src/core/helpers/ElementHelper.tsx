export const getHeightElementById = (elementId: string) => {
  let elementHeight = 0;
  const element = document.getElementById(elementId);
  if (element) {
    elementHeight = element.clientHeight || 0;
  }
  return elementHeight;
};

export const getHeaderElementHeight = () => {
    return getHeightElementById('headerElement');
};
