console.log('jscript.js ready')
$(document).ready(readyFunction);

const employees = [
    {
      firstName: 'Dustin',
      lastName: 'Black',
      idNumber: 6545,
      jobTitle: 'Network Engineers',
      salary: 82000,
    },
    {
      firstName: 'Connor',
      lastName: 'Java',
      idNumber: 6767,
      jobTitle: 'Junior Developer',
      salary: 38000,
    }
  ];

function onReady() {
    console.log('JQ for US!')
renderEmployees(employees);

$('#add-employee-button').on('click' , handleEmployeeClick);
}

Function renderemployees(employees) {

$('#employees-tbody').empty();

$('#employeefirstname').val('');
$('#employeelastname').val('');
$('#employeeid').val('');
$('#employeetitle').val('');
$('#employeesalary').val('');







  

