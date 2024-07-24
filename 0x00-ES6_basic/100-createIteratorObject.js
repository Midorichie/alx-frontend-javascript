export default function createIteratorObject(report) {
  const employeesArrays = Object.values(report);

  const allEmployees = employeesArrays.flat();

  return (function* () {
    for (const employee of allEmployees) {
      yield employee;
    }
  })();
}

