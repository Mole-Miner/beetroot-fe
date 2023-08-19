import '@scss/styles.scss';
import '@scss/employees.scss';

import { OfficeComponent } from './employees/components';

async function bootstrap() {
    const officeComponent = await OfficeComponent();
    officeComponent.appendTo(document.body);
}

bootstrap()
    .catch((err) => {
        console.error('Failed to bootstrap Office', err);
    });
