export function CopywriterListItemComponent({id, username}) {
    const container = $('<section/>', {
        class: 'copywriters__list-item',
    });

    container.on('click', () => {
        $(document).trigger('click-list-item', id);
    });

    $('<b/>', {
        text: id,
    })
        .appendTo(container);

    $('<span/>', {
        text: username,
    })
        .appendTo(container);

    return container;
}
