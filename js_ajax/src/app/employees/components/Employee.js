export function EmployeeComponent({name, inOffice}) {
    const container = $('<section/>', {
        class: 'employee'
    });

    $('<span/>', {
        text: name,
        class: 'employee__name'
    })
        .appendTo(container);

    $('<input type="checkbox"/>', {
        class: 'employee__status'
    })
        .prop('checked', inOffice)
        .appendTo(container);

    return container;
}
