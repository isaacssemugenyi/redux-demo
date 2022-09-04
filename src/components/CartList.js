import React from 'react';

function CartList() {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col" colSpan="2" className="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>image</td>
          <td>pdt -1 </td>
          <td>inc/dec</td>
          <td>Remove</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CartList;
