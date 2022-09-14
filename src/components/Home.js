import React from 'react';
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container">

        <div className='d-flex justify-content-end'>
        <Button variant="primary" size="md" className='m-2'>
            Add
          </Button>
        </div>

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
    <tr>
      <th scope="row">1</th>
      <td>Omkar</td>
      <td>Chaskar</td>
      <td>Alandi road, Bhosary</td>
      <td>Pune</td>
      <td>14/02/1999</td>
      <td>9075745224</td>
      <td>
        <Button variant="danger" size="sm" className='m-1'>Remove</Button>
      </td>
      <td>
        <Button variant="primary" size="sm" className='m-1'>Edit</Button>
      </td>
    </tr>
  </tbody>
</table>
</div>
  )
}
