$( document ).ready(function() {
    console.log( "ready!" );
});


//Global Variable.
let allEmployees = []

$(document).ready(onReady);
function onReady(){
    console.log('jQuery');
    $('#submitBtn').on('click', onSubmit)


    const employeeArray = {

        // Main Functions

          firstName = $('#firstNameInput').val()
          LastName: $('#lastNameInput').val()
          jobID: $('#idNumberInput').val()
          jobTitleIn: $('#jobTitleInput').val()
          annualSalaryIn: $('#salaryInput').val()
          };

           //push values into new employee object
  addNewEmployeeToArray(firstNameIn, lastNameIn, Number(idNumIn), titleIn, Number(salaryIn));
  //empty #tableBody and redraw rows and deleteButton, and load clickListener
  renderTableOnDom(employeeArray);
  //Loop through employeeArray, add up .salary, divide by 12, render to DOM.
  calculateMonthly(employeeArray);

  $('#firstNameInput').val('');
  $('#lastNameInput').val('');
  $('#idNumberInput').val('');
  $('#jobTitleInput').val('');
  $('#salaryInput').val('');
}; // end submitButton()

function addNewEmployeeToArray(first, last, id, title, salary){
    let newEmployeeObject = {
      firstName: first,
      lastName: last,
      idNumber: id,
      jobTitle: title,
      salary: salary,
    };

    employeeArray.push(newEmployeeObject);
}; //end addNewEmployeeToArray()

// Required Feature - render [] to '#tableDiv' on DOM ()
function renderTableToDOM(array){
  //target relevant table Elements
  let tableBody = $('#tableBody');
  //clear the <tbody> to redraw
  tableBody.empty();

  for (let employee of array) {
    let newTableRow = `
      <tr id="row${employee.idNumber}">
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
        <td><button id="${employee.idNumber}"">Delete Employee</button></td>
      </tr>
      `;
      //render newTableRow
      tableBody.append(newTableRow);
      //Load Click Listener for delete button
      let selectButtonID = '#' + employee.idNumber;
      let selectRowID = '#row' + employee.idNumber;
      deleteClickListener(selectRowID, selectButtonID, employee.idNumber);
  }
}; //end renderTableToDOM()
