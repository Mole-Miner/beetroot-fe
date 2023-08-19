import { getCopywriterPosts } from "@js/copywriters/api";
import { CopywriterPostComponent } from "@js/copywriters/components/CopywriterPost";

export async function CopywriterPostsComponent(copywriterId) {
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
