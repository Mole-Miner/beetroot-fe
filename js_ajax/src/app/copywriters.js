import '@scss/styles.scss';
import '@scss/copywriters.scss';

import { CopywritersComponent } from './copywriters/components';

async function bootstrap() {
    const copywritersComponent = await CopywritersComponent();
    copywritersComponent.appendTo(document.body);
}

bootstrap()
    .catch((err) => {
       console.error('Failed to bootstrap Copywriters', err);
    });
