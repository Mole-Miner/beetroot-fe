function Employee(employee) {
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

function Department({class: cssClass, title, employees}) {
    const container = $('<section/>', {
        class: cssClass
    });

    $('<h3/>', {
        text: title,
        class: 'office__subtitle',
    })
        .appendTo(container);

    employees.forEach((employee) => {
        const employeeComponent = Employee(employee);
        employeeComponent.appendTo(container)
    });

    return container;
}

export function Office(employees) {
    const container = $('<section/>', {
        class: 'office'
    });

    $('<h1/>', {
        text: 'Office',
        class: 'office__header office__title'
    })
        .appendTo(container);

    function createDepartment({title, cssClass, inOffice}) {
        const filteredEmployees = employees.filter((employee) => employee.inOffice === inOffice);
        const departmentComponent = Department({
            title,
            class: cssClass,
            employees: filteredEmployees
        });
        departmentComponent.appendTo(container);
    }

    createDepartment({
        title: 'In office',
        cssClass: 'office__in',
        inOffice: true
    });
    createDepartment({
        title: 'Out of office',
        cssClass: 'office__out',
        inOffice: false
    });

    return container;
}
