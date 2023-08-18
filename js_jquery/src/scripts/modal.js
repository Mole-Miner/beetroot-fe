import '@styles/styles.css';
import '@styles/modal.css';

const modalOverlay = $('<section/>', {
    class: 'modal-overlay'
})
    .appendTo(document.body);

const modal = $('<section/>', {
    text: 'Modal',
    class: 'modal'
})
    .appendTo(modalOverlay);

$('<button/>', {
    text: 'Close',
    class: 'modal__close'
})
    .appendTo(modal)
    .on('click', () => {
        modalOverlay.removeClass('active');
    });

$('<button/>', {
    text: 'Open'
})
    .appendTo(document.body)
    .on('click', () => {
        modalOverlay.addClass('active');
    });











/*const modalOverlay = $('<section/>', {
    class: 'modal-overlay'
})
    .appendTo(document.body);

const modal = $('<section/>', {
    text: 'Modal',
    class: 'modal'
})
    .appendTo(modalOverlay);

$('<button/>', {
    text: 'Close'
})
    .appendTo(modal)
    .on('click', function () {
        modalOverlay.removeClass('active');
        modal.removeClass('active');
    });

$('<button/>', {
    text: 'Open'
})
    .appendTo(document.body)
    .on('click', function () {
        modalOverlay.addClass('active');
        modal.addClass('active');
    });*/

