# Employee Management System

The Employee Management System can be used for managing the employees at any organization.
This is the frontend uses React whereas the backend uses Microservices based approach.

The backend comprises of the following microservices:
<ul>
  <li> Authentication Microservice</li>
  <li> Employee Microservice</li>
  <li> Manager Microservice</li>
  <li> Leave Microservice</li>
  <li> Payroll Microservice</li>
</ul>

These microservices performs various functionalities and together comprises the backend of the application.


The System provides the following functionalities:
<ul>
    <li>Create/Read/Update/Delete new Employee in the database.</li>
    <li>Register/Login/Change_password for the users.</li>
    <li>Create/Approve/Reject/List the leaves applied by the employees.</li>
    <li>Issue Paycheck/Send mail to the employees by the manager.</li>
    <li>Search/Filter the employees in the organization based on the filters.</li>
    <li>Logout the user.
</ul>

The System uses the following Tech Stacks:
<ul>
    <li>React JS</li>
    <li>Node JS</li>
    <li>Mongo DB</li>
</ul>

The Database consists of the following tables:
<ul>
    <li>All_Info_Regarding_Employee</li>
    <li>Corporate_Info_Regarding_Employee</li>
    <li>Salary_Info</li>
    <li>Login_Info</li>
    <li>Payroll_Info</li>
    <li>Leave_Info</li>
</ul>
   
The System uses the following mechanism for storing the passwords:
<ul>
    <li>Generates default password for the user at registration.</li>
    <li>The user can change the password.</li>
    <li>The passwords are stored after 10 rounds of Salting.</li>
    <li>The hash of the password is generated using Bcrypt.</li>
</ul>
Functionalities available to the users:

# Employee
<ul>
    <li>The Employee can view his/her info and update the info.</li>
    <li>The Employee can change their password</li>
    <li>The Employee can list his/her leaves.</li>
    <li>The Employee can apply leave.</li>
    <li>The Employee can perform logout.</li>
</ul>

# Manager
<ul>
    <li>The Manager can view his personal info.</li>
    <li>The Manager view the employees under him.</li>
    <li>The Manager can create new employees.</li>
    <li>The Manager can view leave the leave request of the employees under him.</li>
    <li>The Manager can delete an employee under him.</li>
    <li>The Manager can approve/reject the leave request of his employees.</li>
    <li>The Manager can issue paycheck to his employee.</li>
</ul>
    
        

