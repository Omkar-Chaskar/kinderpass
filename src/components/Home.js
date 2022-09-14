import React from 'react';
import { AddEmployee } from "./AddEmployee";
import { UpdateEmployee } from './UpdateEmployee';
import { useEmployes } from '../context';
import { Toasters } from "./Toasters";
import { ConfirmationModel } from './ConfirmationModel';

export default function Home() {
  const { employes } = useEmployes();

  return (
    <div className="d-flex flex-column justify-content-between">
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
          <td className='fw-semibold'>{employee.firstname}</td>
          <td className='fw-semibold'>{employee.lastname}</td>
          <td className='fw-semibold'>{employee.address}</td>
          <td className='fw-semibold'>{employee.city}</td>
          <td className='fw-semibold'>{employee.dateofbirth}</td>
          <td className='fw-semibold'>{employee.number}</td>
          <td>
            <ConfirmationModel btn="removeEmployee" employee={employee} id={employee._id} msg="Remove employee details." name="Remove"/>
          </td>
          <td>
            <UpdateEmployee employee={employee}/>
          </td>
        </tr>)
    })}
  </tbody>
</table>
<Toasters />
</div>
  )
}
