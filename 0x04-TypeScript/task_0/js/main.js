var student1 = {
    firstName: "Hammed",
    lastName: "Yakub",
    age: 33,
    location: "Nigeria",
};
var student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    location: "New York",
};
var studentsList = [student1, student2];
var rootElement = document.getElementById("root");
if (rootElement) {
    var table = document.createElement("table");
    var tableBody_1 = document.createElement("tbody");
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tableBody_1.appendChild(row);
    });
    table.appendChild(tableBody_1);
    rootElement.appendChild(table);
}
