import { CopywriterListItemComponent } from "@js/copywriters/components/CopywriterListItem";

export function CopywriterListComponent(copywriters) {
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
