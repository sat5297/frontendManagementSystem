# Employee Management System

The Employee Management System can be used for managing the employees at any Organization.
The frontend uses React whereas the backend uses Microservices based approach.

The backend comprises of the following microservices:
<ul>
  <li> <a href="https://github.com/sat5297/authMicroservice" target="_blank"> Authentication Microservice </a></li>
  <li> <a href="https://github.com/sat5297/employeeMicroservice" target="_blank"> Employee Microservice </a></li>
  <li> <a href="https://github.com/sat5297/managerMicroservice" target="_blank"> Manager Microservice </a></li>
  <li> <a href="https://github.com/sat5297/leaveMicroservice" target="_blank"> Leave Microservice </a></li>
  <li> <a href="https://github.com/sat5297/payrollMicroservice" target="_blank"> Payroll Microservice </a></li>
</ul>

The System provides the following functionalities:
<ul>
    <li>Create/Read/Update/Delete Employee in the database.</li>
    <li>Register/Login/ChangePassword for the users.</li>
    <li>Create/Approve/Reject/List the leaves applied by the Employees.</li>
    <li>Issue Paycheck/Send mail to the employees by the Manager.</li>
    <li>Search/Filter the employees in the Organization.</li>
    <li>Logout the user.
</ul>

The System uses the following Tech Stacks:
<ul>
    <li>React JS</li>
    <li>Node JS</li>
    <li>Mongo DB</li>
</ul>

The following Databases are used with same table name:
<ul>
    <li>allinfoemp</li>
    <li>corpinfoemp</li>
    <li>authentication <p> Table : Login </p> </li>
    <li>payroll</li>
    <li>leaves</li>
</ul>
   
The System uses the following mechanism for storing the passwords:
<ul>
    <li>Generates default password for the user at registration.</li>
    <li>The user can change the password.</li>
    <li>The passwords are stored after 10 rounds of Salting.</li>
    <li>The hash of the password is generated using Bcrypt.</li>
</ul>

# Functionalities available to the users:

  # Employee
<ul>
    <li>The Employee can view his/her info and update the info.</li>
    <li>The Employee can change their password.</li>
    <li>The Employee can list his/her leaves.</li>
    <li>The Employee can apply leave.</li>
    <li>The Employee can perform logout.</li>
</ul>

 # Employee Use Case Diagram
 ![Alt text](./employeeUseCase.svg)
<img src="./employeeUseCase.svg">
  # Manager
<ul>
    <li>The Manager can view his/her personal info.</li>
    <li>The Manager can view the employees under him/her.</li>
    <li>The Manager can create new employees.</li>
    <li>The Manager can view leave the leave request of the employees under him/her.</li>
    <li>The Manager can delete employee under him/her.</li>
    <li>The Manager can approve/reject the leave request of employees under him/her .</li>
    <li>The Manager can issue paycheck to his/her employee.</li>
    <li>The Manager can perform logout.</li>
</ul>

  # All the Users
  <ul>
    <li>Search for employee in the system.</li>
    <li>Filter the employee in the system.</li>
    <li>The following filters are available:
      <ol>
        <li>Employee ID</li>
        <li>Employee Name</li>
        <li>Manager Name</li>
        <li>Department</li>
        <li>Location</li>
      </ol>
    </li>
  </ul>  
  
  # Project Setup
  <ul>
    <li>mkdir empMgmt </li>
    <li>cd empMgmt </li>
    <li>mkdir backend frontend</li>
    <li>cd backend --> make dir for all microservices and clone here.</li>
    <li>cd frontend ---> make dir for frontend and clone here.</li>
    <li> start all the microservices in different terminals. <b> npm run devStart</b></li>
    <li> start the frontend <b> nodemon run start </b> </li>
    <li> We have the admin user with managerID 1 as the root user. (We just need it to create first user)</li>
    <li> Create the user in authentication database using postman. </li>
    <li> Now you have the project Up and Running and available to use.</li>
  </ul>
    
    
The Microservices based approach will be helpful for scaling the system as and when needed. <br/>
Dockerized version of the System coming soon.😉️

