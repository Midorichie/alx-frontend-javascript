export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeesArray = [];

  // Collect all employees into a single array
  for (const department in allEmployees) {
    if (Object.hasOwnProperty.call(allEmployees, department)) {
      employeesArray.push(...allEmployees[department]);
    }
  }

  // Return an iterator for the array of employees
  return employeesArray[Symbol.iterator]();
}
