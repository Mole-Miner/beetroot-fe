import { getEmployees } from "@js/employees/api";
import { DepartmentComponent } from "@js/employees/components/Department";

export async function OfficeComponent() {
    const employees = await getEmployees();

    const container = $('<section/>', {
        class: 'office'
    });

    $('<h1/>', {
        text: 'Office',
        class: 'office__header office__title'
    })
        .appendTo(container);

    function createDepartmentComponent({title, cssClass, inOffice}) {
        const filteredEmployees = employees.filter((employee) => employee.inOffice === inOffice);
        const departmentComponent = DepartmentComponent({
            title,
            class: cssClass,
            employees: filteredEmployees
        });
        departmentComponent.appendTo(container);
    }

    createDepartmentComponent({
        title: 'In office',
        cssClass: 'office__in',
        inOffice: true
    });
    createDepartmentComponent({
        title: 'Out of office',
        cssClass: 'office__out',
        inOffice: false
    });

    return container;
}
