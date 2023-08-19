import { getEmployees } from "@js/employees/api";

function EmployeeComponent(employee) {
    const container = $('<section/>', {
        class: 'employee'
    });
    $('<span/>', {
        text: employee.name,
        class: 'employee__name'
    })
        .appendTo(container);
    $('<input type="checkbox"/>', {
        class: 'employee__status'
    })
        .prop('checked', employee.inOffice)
        .appendTo(container);

    return container;
}

function DepartmentComponent({class: cssClass, title, employees}) {
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
