const rentalItems = [
    {
        id: 1,
        title: 'Концертная акустика Behringer EUROLIVE B115D',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 1',
        price: 160,
    },
    {
        id: 2,
        title: 'Концертная акустика Behringer EUROLIVE 2',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 2',
        price: 160,
    },
    {
        id: 3,
        title: 'Концертная акустика Behringer EUROLIVE 3',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 3',
        price: 160,
    },
    {
        id: 4,
        title: 'Концертная акустика Behringer EUROLIVE 4',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 4',
        price: 160,
    },
    {
        id: 5,
        title: 'Концертная акустика Behringer EUROLIVE 5',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 5',
        price: 160,
    },
    {
        id: 6,
        title: 'Концертная акустика Behringer EUROLIVE 6',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 6',
        price: 160,
    },
    {
        id: 7,
        title: 'Концертная акустика Behringer EUROLIVE 7',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 7',
        price: 160,
    },
    {
        id: 8,
        title: 'Концертная акустика Behringer EUROLIVE 8',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 8',
        price: 160,
    },
    {
        id: 9,
        title: 'Концертная акустика Behringer EUROLIVE 9',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 9',
        price: 160,
    },
    {
        id: 10,
        title: 'Концертная акустика Behringer EUROLIVE 10',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 10',
        price: 160,
    },
    {
        id: 11,
        title: 'Концертная акустика Behringer EUROLIVE 11',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 11',
        price: 160,
    },
    {
        id: 12,
        title: 'Концертная акустика Behringer EUROLIVE 12',
        info: 'Портативная концертная аудиосистема с выходной мощностью 680 Вт. Включает 10-канальный микшерный пульт с Bluetooth, цифровым ревербератором, 3-полосным эквалайзером и подавителем обратной связи, а также две пассивные колонки. 12',
        price: 160,
    },
];

const body = document.body;
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');
const items = document.querySelectorAll('.rental');
const popupTitle= document.querySelector('.rental__header_popup');
//const popupImageSrc= document.querySelector('.rental__image');
const popupInfo= document.querySelector('.rental__info_popup');
const popupPrice= document.querySelector('.price');

function showPopup() {
    popup.style.display = 'flex';
    body.style.overflow = 'hidden';
}

function closePopup() {
    popup.style.display = 'none';
    body.style.overflow = 'auto';
}

items.forEach(function(item) {
    item.addEventListener('click', function() {
        showPopup();

        const rentId = +item.getAttribute('data-id');

        for (const rental of rentalItems) {
            if (rental.id === rentId) {
                popupTitle.innerText = rental.title;
                popupInfo.innerText = rental.info;
                popupPrice.innerText = rental.price;
                //popupImageSrc.src = `images/equipment/image-${rental.id}.png`
            }
        }

    });
})

closeButton.addEventListener('click', closePopup);