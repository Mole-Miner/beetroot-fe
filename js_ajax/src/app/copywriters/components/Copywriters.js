import { getCopywriters } from "@js/copywriters/api";
import { CopywriterListComponent } from "@js/copywriters/components/CopywriterList";
import { CopywriterDetailsComponent } from "@js/copywriters/components/CopywriterDetails";
import { CopywriterPostsComponent } from "@js/copywriters/components/CopywriterPosts";

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

/*
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
*/
