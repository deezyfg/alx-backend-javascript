interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const stud_one: Student = {
    firstName: "Sophia",
    lastName: "Chen",
    age: 21,
    location: "Singapore"
}

const stud_two: Student = {
    firstName: "Liam",
    lastName: "O'Connor",
    age: 24,
    location: "Ireland"
}

let studentsList: Student[] = [stud_one, stud_two]

const stud_table = document.createElement("table")
const stud_body = document.createElement("tbody")

studentsList.forEach((list) =>{
    const studFirstName = document.createElement("td");
    const studLocation = document.createElement("td")
    const tableRow = document.createElement("tr")

    studFirstName.textContent = list.firstName
    studLocation.textContent = list.location
    tableRow.appendChild(studFirstName)
    tableRow.appendChild(studLocation)
    stud_body.appendChild(tableRow)
})

stud_table.appendChild(stud_body)
document.body.appendChild(stud_table)