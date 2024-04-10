import React, { useState } from "react";
import SideNavbar from "../SideNavbar";
import "./InvoiceList.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InvoicesList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleRowClick = (invoice) => {
    setSelectedInvoice(invoice);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdateInvoice = (updatedInvoice) => {
    // Implement logic to update the invoice data
    setInvoices((prevInvoices) => {
      const updatedInvoices = prevInvoices.map((invoice) => {
        if (invoice.Id === updatedInvoice.Id) {
          return updatedInvoice;
        }
        return invoice;
      });
      return updatedInvoices;
    });
    setShowModal(false);
  };

  const handleInvoiceUpdate = (fieldName, value) => {
    setSelectedInvoice((prevInvoice) => ({
      ...prevInvoice,
      [fieldName]: value,
    }));
  };

  const handleItemsUpdate = (fieldName, value) => {
    setSelectedInvoice((prevInvoice) => ({
      ...prevInvoice,
      Items: {
        ...prevInvoice.Items,
        [fieldName]: value,
      },
    }));
  };

  const handleSundryUpdate = (fieldName, value) => {
    setSelectedInvoice((prevInvoice) => ({
      ...prevInvoice,
      BillSundrys: {
        ...prevInvoice.BillSundrys,
        [fieldName]: value,
      },
    }));
  };

  const InvoiceItem = {
    Id: "1",
    itemName: "First Item",
    quantity: 20,
    price: 500,
    amount: 10000,
  };

  const InvoiceBillSundry = {
    Id: "1",
    billSundryName: "ABC",
    amount: "10000",
  };

  const [invoices, setInvoices] = useState([
    {
      Id: "1",
      date: "10-04-2024",
      InvoiceNumber: 1,
      CustomerName: "Gulshan",
      BillingAddress: "string",
      ShippingAddress: "string",
      GSTIN: "string",
      Items: InvoiceItem,
      BillSundrys: InvoiceBillSundry,
      TotalAmount: 10000,
    },
    {
      Id: "2",
      date: "10-04-2024",
      InvoiceNumber: 2,
      CustomerName: "Gulshan",
      BillingAddress: "string",
      ShippingAddress: "string",
      GSTIN: "string",
      Items: InvoiceItem,
      BillSundrys: InvoiceBillSundry,
      TotalAmount: 20000,
    },
  ]);

  return (
    <>
      <div className="container d-flex flex-row">
        <div className="navbar-container">
          <SideNavbar />
        </div>
        <div className="invoice-list-container">
          <p>List of Invoices </p>
          <Button className="button primary" onClick={() => {setSelectedInvoice(null); setShowModal(true)}}>
            Add
          </Button>
          <table border={2} className="my-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Invoice Number</th>
                <th>Customer Name</th>
                <th>Billing Address</th>
                <th>Shipping Address</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((item, index) => {
                return (
                  <tr key={index} onClick={() => handleRowClick(item)}>
                    <td>{item.Id}</td>
                    <td>{item.date}</td>
                    <td>{item.InvoiceNumber}</td>
                    <td>{item.CustomerName}</td>
                    <td>{item.BillingAddress}</td>
                    <td>{item.ShippingAddress}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedInvoice? "Update Invoice" : "Add Invoice"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="invoiceNumber">Invoice Number:&nbsp;&nbsp;</label>
            <input
              id="invoiceNumber"
              onChange={(e) =>
                handleInvoiceUpdate("InvoiceNumber", e.target.value)
              }
              type="text"
              value={selectedInvoice?.InvoiceNumber}
              disabled={selectedInvoice !== null}
            />
            <br />
            <label htmlFor="customerName">Customer Name:&nbsp;&nbsp;</label>
            <input
              id="customerName"
              onChange={(e) =>
                handleInvoiceUpdate("CustomerName", e.target.value)
              }
              type="text"
              value={selectedInvoice?.CustomerName}
            />
            <br />
            <label htmlFor="billingAddress">Billing Address:&nbsp;&nbsp;</label>
            <input
              id="billingAddress"
              onChange={(e) =>
                handleInvoiceUpdate("BillingAddress", e.target.value)
              }
              type="text"
              value={selectedInvoice?.BillingAddress}
            />
            <br />
            <label htmlFor="shippingAddress">Shipping Address:&nbsp;&nbsp;</label>
            <input
              id="shippingAddress"
              onChange={(e) =>
                handleInvoiceUpdate("ShippingAddress", e.target.value)
              }
              type="text"
              value={selectedInvoice?.ShippingAddress}
            />
            <br />
            <label htmlFor="gstin">GSTIN:&nbsp;&nbsp;</label>
            <input
              id="gstin"
              onChange={(e) => handleInvoiceUpdate("GSTIN", e.target.value)}
              type="text"
              value={selectedInvoice?.GSTIN}
            />
            <br />
            <label htmlFor="totalAmount">Total Amount:&nbsp;&nbsp;</label>
            <input
              id="totalAmount"
              onChange={(e) =>
                handleInvoiceUpdate("TotalAmount", e.target.value)
              }
              type="text"
              value={selectedInvoice?.TotalAmount}
            />
            <h5>Items:</h5>
            <label htmlFor="itemName">Item Name:&nbsp;&nbsp;</label>
            <input
              id="itemName"
              onChange={(e) => handleItemsUpdate("itemName", e.target.value)}
              type="text"
              value={selectedInvoice?.Items.itemName}
            />
            <br />
            <label htmlFor="quantity">Quantity:&nbsp;&nbsp;</label>
            <input
              id="quantity"
              onChange={(e) => handleItemsUpdate("quantity", e.target.value)}
              type="text"
              value={selectedInvoice?.Items.quantity}
            />
            <br />
            <label htmlFor="price">Price:&nbsp;&nbsp;</label>
            <input
              id="price"
              onChange={(e) => handleItemsUpdate("price", e.target.value)}
              type="text"
              value={selectedInvoice?.Items.price}
            />
            <br />
            <label htmlFor="itemAmount">Amount:&nbsp;&nbsp;</label>
            <input
              id="itemAmount"
              onChange={(e) => handleItemsUpdate("amount", e.target.value)}
              type="text"
              value={selectedInvoice?.Items.amount}
            />
            {/* <p>Bill Sundries:</p */}
            <h5>Bill Sundries:</h5>
            <label htmlFor="billSundryName">Bill Sundry Name:&nbsp;&nbsp;</label>
            <input
              id="billSundryName"
              onChange={(e) =>
                handleSundryUpdate("billSundryName", e.target.value)
              }
              type="text"
              value={selectedInvoice?.BillSundrys.billSundryName}
            />
            <br />
            <label htmlFor="sundryAmount">Amount:&nbsp;&nbsp;</label>
            <input
              id="sundryAmount"
              onChange={(e) => handleSundryUpdate("amount", e.target.value)}
              type="text"
              value={selectedInvoice?.BillSundrys.amount}
            />
          </form>

          {selectedInvoice && (
            <p>Selected Invoice: {selectedInvoice.InvoiceNumber}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {selectedInvoice?(<Button
            variant="primary"
            onClick={() => handleUpdateInvoice(selectedInvoice)}
          >
            Save Changes
          </Button>):(<Button
            variant="primary"
            onClick={() => handleAddInvoice()}
          >Add Invoice</Button>
            )}   
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InvoicesList;
