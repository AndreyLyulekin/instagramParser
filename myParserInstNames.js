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
  )[1];

  //функция имитация клика
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // имитация наведения мыши для получения доп информации профиля
  const mouseOverEvent = new MouseEvent('mouseover', {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  //имитация убирания мыши
  const mouseOutEvent = new MouseEvent('mouseout', {
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

  await wait(5_000); // время скролла

  //вырубаем интервал
  clearInterval(interval);

  //тут уже список получен, идем дальше

  //тут все ноды пользователей
  const listAfterScroll = document.getElementsByClassName('_ap3a _aaco _aacw _aacx _aad7 _aade');

  //делаем массив для фор оф

  const arrUsersCards = Array.from(listAfterScroll);

  //подготавливаем массив куда положим итог
  const arrNames = [];

  //цикл для асинхронщины
  for (const userCard of arrUsersCards) {
    userCard.dispatchEvent(mouseOverEvent);

    //время на догрузку данных профиля в попап
    await wait(500);

    //получаем количество подписоты аккаунта на ком маусовер
    const numberOfFollowers = document.getElementsByClassName(
      'html-span xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1hl2dhg x16tdsg8 x1vvkbs'
    )[4]?.textContent;

    //отбираем только тех у кого от 10тыс до 500тыс
    if (numberOfFollowers?.includes('тыс.')) {
      const followersNumber = parseInt(numberOfFollowers);
      const name = document.getElementsByClassName(
        'x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be x1xlr1w8 x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj'
      )[0]?.outerText;

      if (followersNumber >= 10 && followersNumber <= 500) {
        //открываем аккаунт в новом окне
        window.open(`https://www.instagram.com/${name}/`, '_blank');
        // собираем данные в массив
        arrNames.push({
          name: name,
          followersNumber: `${followersNumber} тыс.`,
          link: `https://www.instagram.com/${name}/`,
        });
      }
    }

    userCard.dispatchEvent(mouseOutEvent);
    await wait(100);
  }

  console.log(arrNames);
})();
