export const KonamiCode = (modalActive) => {
  let allowKeys = [];
  const konamiCode = 'edutech';
  let tempClear;
  document.addEventListener('keydown', (e) => {
    clearTimeout(tempClear);
    const keyPress = e.key;

    allowKeys.push(keyPress);

    const allowedKeys = allowKeys.join('');

    if (allowedKeys.includes(konamiCode)) {
      modalActive(true);
    }

    tempClear = setTimeout(() => {
      allowKeys = [];
    }, 1000);
  });
};
