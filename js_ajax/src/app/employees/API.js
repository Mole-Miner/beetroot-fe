export async function getEmployees() {
   try {
       const response = await fetch('/assets/json/employees.json');
       return response.json();
   } catch (err) {
       console.log(err);
       return [];
   }
}
