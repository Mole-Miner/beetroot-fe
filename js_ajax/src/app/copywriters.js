import '@scss/styles.scss';
import '@scss/copywriters.scss';

import { CopywritersComponent } from '@js/copywriters/components/Copywriters';

async function bootstrap() {
    const copywritersComponent = await CopywritersComponent();
    copywritersComponent.appendTo(document.body);
}

bootstrap()
    .catch((err) => {
       console.error('Failed to bootstrap Copywriters', err);
    });
