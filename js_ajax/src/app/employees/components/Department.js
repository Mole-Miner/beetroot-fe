import { EmployeeComponent } from '@js/employees/components/Employee';

export function DepartmentComponent({class: cssClass, title, employees}) {
    const container = $('<section/>', {
        class: cssClass
    });

    $('<h3/>', {
        text: title,
        class: 'office__subtitle',
    })
        .appendTo(container);

    employees
        .map(EmployeeComponent)
        .forEach((component) => {
            component.appendTo(container)
        });

    return container;
}
