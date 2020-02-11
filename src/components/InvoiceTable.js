import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";

// const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "olive",
//   "green",
//   "teal",
//   "blue",
//   "violet",
//   "purple",
//   "pink",
//   "brown",
//   "grey",
//   "black"
// ];

const InvoiceTable = () => {
  const [invoicedata, setInvoiceData] = useState([]);

  useEffect(() => {
    //   getProjects();
    getInvoices();
  }, []);

  const getInvoices = async () => {
    const response = await fetch(`http://localhost:3001/api/v1/invoices`);
    const data = await response.json();
    setInvoiceData(data);
  };
  console.log(invoicedata);

  return (
    <>
      {invoicedata.map(invoice => (
        <Table color={"teal"} key={"red"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>QTY</Table.HeaderCell>
              <Table.HeaderCell>UNIT PRICE</Table.HeaderCell>
              <Table.HeaderCell>DESCRIPTION</Table.HeaderCell>
              <Table.HeaderCell>COST</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>{invoice.qty}</Table.Cell>
              <Table.Cell>{invoice.unitprice}</Table.Cell>
              <Table.Cell>{invoice.description}</Table.Cell>
              <Table.Cell>{invoice.cost}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ))}
    </>
  );
};
export default InvoiceTable;
