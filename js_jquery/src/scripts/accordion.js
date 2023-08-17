import '@styles/styles.css';
import '@styles/accordion.css';

const products = Array
    .from({length: 8}, (_, i) => ({
        name: `Product ${i + 1}`,
        description: `Product ${i + 1} description`
    }));

const accordion = $('<section/>', {
    class: 'accordion'
})
    .appendTo(document.body);

function AccordionItem(data) {
    const item = $('<div/>', {
        class: 'accordion-item'
    });
    const itemTitle = $('<div/>', {
        class: 'accordion-item__title',
        text: data.name
    });
    const itemArrow = $('<span/>', {
        class: 'accordion-item__arrow',
        text: '>'
    })
        .appendTo(itemTitle);
    const itemContent = $('<div/>', {
        class: 'accordion-item__content',
        text: data.description
    });
    item.append(itemTitle, itemContent);
    itemTitle.on('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        itemContent.slideToggle();
        itemTitle.toggleClass('accordion--active');
        itemArrow.toggleClass('accordion--active');
    });
    return item;
}

products.forEach((product) => {
    AccordionItem(product).appendTo(accordion);
});
