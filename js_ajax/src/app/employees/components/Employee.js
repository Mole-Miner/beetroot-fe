export function EmployeeComponent(employee) {
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
