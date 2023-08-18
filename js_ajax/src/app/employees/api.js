export async function getEmployees() {
    try {
        const response = await fetch('/assets/json/employees.json');
        const employees = await response.json();
        return employees.data;
    } catch (err) {
        console.log(err);
    }
}
