// Создаем обертку вокруг setTimeout() в виде промиса
const wait = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

(async () => {
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

  //функция прокрутки листа вниз, чтобы получить новые данные
  function scrollToBottom(list) {
    list.scrollTop = list.scrollHeight;
  }

  //список
  const followersNamesList = document.getElementsByClassName('_aano');

  //имитируем прокрутку и получаем большой список пользователей
  await wait(3000); // ожидаем 3 секунды загрузки попапа с поьзователями

  //список с прокруткой
  const listForScroll = followersNamesList[0];
  //скроллим вниз для увеличения списка
  const interval = setInterval(() => {
    scrollToBottom(listForScroll);
  }, 1000);

  await wait(100_000); // время скролла

  //вырубаем интервал
  clearInterval(interval);

  //тут все ноды пользователей
  const listAfterScroll = followersNamesList[0].childNodes[0].childNodes[0].childNodes;

  //делаем массив для форич
  const arrUsersCards = new Array(listAfterScroll)[0];

  //подготавливаем массив куда положим итог
  const arrNames = [];

  arrUsersCards.forEach((userCard) => {
    const userName =
      userCard.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0]
        .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].outerText;
    arrNames.push(userName);
  });

  console.log(Array.from(arrNames));
})();
