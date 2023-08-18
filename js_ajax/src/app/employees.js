import '@scss/styles.scss';
import '@scss/employees.scss';

import { getEmployees } from './employees/api';
import { Office } from './employees/components';

async function bootstrap() {
    const employees = await getEmployees();
    const officeComponent = Office(employees);
    officeComponent.appendTo(document.body);
}

bootstrap();
