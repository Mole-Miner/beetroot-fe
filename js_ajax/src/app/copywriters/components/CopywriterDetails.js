import { getCopywriter } from "@js/copywriters/api";

export async function CopywriterDetailsComponent(copywriterId) {
    const copywriter = await getCopywriter(copywriterId);

    const container = $('<section/>', {
        class: 'copywriters__details',
    });

    $('<h1/>', {
        text: 'Details',
    })
        .appendTo(container);

    ['username', 'name', 'email', 'phone', 'website']
        .map((field) => {
            const detailsField = field.replace(field[0], field[0].toUpperCase());
            if (field === 'username') {
                return $('<b/>', {
                    text: `${detailsField}: ${copywriter[field]}`,
                });
            }
            return $('<p/>', {
                text: `${detailsField}: ${copywriter[field]}`,
            })
        })
        .forEach((fieldElement) => {
            fieldElement.appendTo(container);
        });

    $('<button/>', {
        text: 'Posts',
    })
        .appendTo(container)
        .on('click', () => {
            $(document).trigger('show-copywriter-posts', copywriterId);
        });

    return container;
}
