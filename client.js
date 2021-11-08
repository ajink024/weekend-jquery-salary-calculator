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

          firstName = $('#firstNameInput').val();
          LastName: $('#lastNameInput').val();
          jobID: $('#idNumberInput').val();
          jobTitleIn: $('#jobTitleInput').val();
          annualSalaryIn: $('#salaryInput').val();
          };

