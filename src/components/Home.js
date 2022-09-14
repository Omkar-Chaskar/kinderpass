import React from 'react';
import { Button } from "react-bootstrap";
import { AddEmployee } from "./AddEmployee";
import { UpdateEmployee } from './UpdateEmployee';
import { useEmployes } from '../context';

export default function Home() {
  const { employes ,trashEmployeeHandler} = useEmployes();

  return (
    <div className="container d-flex flex-column justify-content-center">
      <AddEmployee />
  <table className="table text-center">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">DOB</th>
      <th scope="col">Mobile</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {employes.map((employee) => {
      return (
        <tr key={employee._id}>
          <th scope="row">{employee._id}</th>
          <td>{employee.firstname}</td>
          <td>{employee.lastname}</td>
          <td>{employee.address}</td>
          <td>{employee.city}</td>
          <td>{employee.dateofbirth}</td>
          <td>{employee.number}</td>
          <td>
            <Button variant="danger" size="sm" className='m-1'
            onClick={() => trashEmployeeHandler(employee, employee._id)}>Remove</Button>
          </td>
          <td>
            <UpdateEmployee employee={employee}/>
          </td>
        </tr>)
    })}
  </tbody>
</table>
</div>
  )
}
