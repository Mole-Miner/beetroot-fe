export function CopywriterPostComponent({id, title}) {
    const container = $('<section/>', {
        class: 'copywriters__list-item',
    });

    $('<b/>', {
        text: id,
    })
        .appendTo(container);

    $('<span/>', {
        text: title,
    })
        .appendTo(container);

    return container;
}
