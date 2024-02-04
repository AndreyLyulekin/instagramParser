// получаем кнопку подписчиков канала
const followersBtn = document.getElementsByClassName(
  'x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _alvs _a6hd'
)[0];

//функция имитация клика
const clickEvent = new MouseEvent('click', {
  bubbles: true,
  cancelable: true,
  view: window,
});

followersBtn.dispatchEvent(clickEvent);

//функция прокрутки листа вниз, что-бы получить новые данные
function scrollToBottom(list) {
  list.scrollTop = list.scrollHeight;
  console.log(list.scrollHeight);
}

setTimeout(() => {
  const followersNamesList = document.getElementsByClassName('_aano');
  const list = followersNamesList[0].childNodes[0].childNodes[0];

  scrollToBottom(followersNamesList);
}, 3000);
