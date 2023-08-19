import { getCopywriter, getCopywriterPosts, getCopywriters } from "@js/copywriters/api";

function CopywriterListItemComponent({id, username}) {
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

function CopywriterListComponent(copywriters) {
    const container = $('<section/>', {
        class: 'copywriters__list',
    });

    copywriters
        .map(CopywriterListItemComponent)
        .forEach((component) => {
            component.appendTo(container);
        });

    return container;
}

function CopywriterPostComponent({id, title}) {
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

async function CopywriterPostsComponent(copywriterId) {
    const copywriterPosts = await getCopywriterPosts(copywriterId);

    const container = $('<section/>', {
        class: 'copywriters__posts',
    });

    $('<h1/>', {
        text: 'Posts',
    })
        .appendTo(container);

    copywriterPosts
        .map(CopywriterPostComponent)
        .forEach((component) => {
           component.appendTo(container);
        });

    return container;
}

async function CopywriterDetailsComponent(copywriterId) {
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

export async function CopywritersComponent() {
    const copywriters = await getCopywriters();

    const container = $('<section/>', {
        class: 'copywriters',
    });

    $('<h1/>', {
        text: 'Dashboard',
        class: 'copywriters__header copywriters__title',
    })
        .appendTo(container);

    const copywriterListComponent = CopywriterListComponent(copywriters);
    copywriterListComponent.appendTo(container);

    let copywriterDetailsComponent;
    let copywriterPostsComponent;

    $(document).on('click-list-item', async (e, copywriterId) => {
        copywriterDetailsComponent?.remove();
        copywriterPostsComponent?.remove();
        copywriterDetailsComponent = await CopywriterDetailsComponent(copywriterId);
        copywriterDetailsComponent.appendTo(container);
    });

    $(document).on('show-copywriter-posts', async (e, copywriterId) => {
        copywriterPostsComponent?.remove();
        copywriterPostsComponent = await CopywriterPostsComponent(copywriterId);
        copywriterPostsComponent.appendTo(container);
    });

    return container;
}
