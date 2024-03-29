import React, { useState } from "react";

function Bill() {

  const [invoiceData] = useState({
    id: '#123-123',
    creationDate: 'Jun 23, 2024',
    status: 'Cash on deleivery',
    items: [
      { id: 1, description: 'Pro Package', qty: 4, unitPrice: 200, amount: 800 },
      { id: 2, description: 'Web hosting', qty: 1, unitPrice: 10, amount: 10 },
      { id: 3, description: 'Consulting', qty: '1 year', unitPrice: 300, amount: 300 }
    ],
    subtotal: 1110,
    tax: 111,
    totalAmount: 1221
  });
    return (
      <div >

<div className="card">
      <div className="card-body">
        <div className="container mb-5 mt-3">
          <div className="row d-flex align-items-baseline">
            <div className="col-xl-9">
              <p style={{ color: '#7e8d9f', fontSize: '20px' }}>Invoice <strong>ID: {invoiceData.id}</strong></p>
            </div>
            <div className="col-xl-3 float-end">
              <button className="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark"><i
                  className="fas fa-print text-primary"></i> Print</button>
              <button className="btn btn-light text-capitalize" data-mdb-ripple-color="dark"><i
                  className="far fa-file-pdf text-danger"></i> Export</button>
            </div>
            <hr />
          </div>

          <div className="container">
            <div className="col-md-12">
              <div className="text-center">
                <p className="pt-0" style={{fontSize:'28px'}}>Sirilaka Craving</p>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-8">
                <ul className="list-unstyled">
                  <li className="text-muted">To: <span style={{ color: '#5d9fc5' }}>John Lorem</span></li>
                  <li className="text-muted">Street, City</li>
                  <li className="text-muted">State, Country</li>
                  <li className="text-muted"><i className="fas fa-phone"></i> 123-456-789</li>
                </ul>
              </div>
              <div className="col-xl-4">
                <p className="text-muted">Invoice</p>
                <ul className="list-unstyled">
                  <li className="text-muted"><i className="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                      className="fw-bold">ID:</span>{invoiceData.id}</li>
                  <li className="text-muted"><i className="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                      className="fw-bold">Creation Date: </span>{invoiceData.creationDate}</li>
                  <li className="text-muted"><i className="fas fa-circle" style={{ color: '#84B0CA' }}></i> <span
                      className="me-1 fw-bold">Status:</span><span className="badge bg-warning text-black fw-bold">
                      {invoiceData.status}</span></li>
                </ul>
              </div>
            </div>

            <div className="row my-2 mx-1 justify-content-center">
              <table className="table table-striped table-borderless">
                <thead style={{ backgroundColor: '#84B0CA' }} className="text-white">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items.map(item => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.description}</td>
                      <td>{item.qty}</td>
                      <td>${item.unitPrice}</td>
                      <td>${item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="col-xl-8">
                <p className="ms-3">Add additional notes and payment information</p>
              </div>
              <div className="col-xl-3">
                <ul className="list-unstyled">
                  <li className="text-muted ms-3"><span className="text-black me-4">SubTotal</span>${invoiceData.subtotal}</li>
                  <li className="text-muted ms-3 mt-2"><span className="text-black me-4">Tax(15%)</span>${invoiceData.tax}</li>
                </ul>
                <p className="text-black float-start"><span className="text-black me-3"> Total Amount</span><span
                    style={{ fontSize: '25px' }}>${invoiceData.totalAmount}</span></p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-xl-10">
                <p>Thank you for your purchase</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
       
      </div>
    );
  }
  
  export default Bill;