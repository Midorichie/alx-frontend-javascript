interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Hammed",
  lastName: "Yakub",
  age: 33,
  location: "Nigeria",
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];

const rootElement = document.getElementById("root");

if (rootElement) {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  rootElement.appendChild(table);
}
