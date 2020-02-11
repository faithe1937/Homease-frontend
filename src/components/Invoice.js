import React, { useState } from "react";
import useForm from "./useForm";
import { Form, Grid, Image, Header, Message } from "semantic-ui-react";
import InvoiceTable from "./InvoiceTable";
// import { Link } from "react-router-dom";

const Invoice = props => {
  const { values, handleChange, handleSubmit } = useForm(postInvoice);
  const [newInvoice, setNewInvoice] = useState("");

  function postInvoice() {
    console.log(values);

    let invoice = {
      qty: values.qty,
      unitprice: values.unitprice,
      description: values.description,
      cost: values.cost,
      project_id: values.projectid
    };

    console.log(invoice);
    fetch("http://localhost:3001/api/v1/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ invoice })
    })
      .then(resp => resp.json())
      .then(data => setNewInvoice(data))
      .then(console.log(newInvoice));
  }

  return (
    <Grid container style={{ padding: "1em .5em" }}>
      {/* <Grid.Row>
        <Grid.Column>
          <Header as="h1" dividing>
            INVOICE
          </Header>
        </Grid.Column>
      </Grid.Row> */}

      <Grid.Row>
        <Grid.Column>
          <Message>
            <Header as="h1">INVOICE</Header>

            <Image
              src="https://34t9wx3d3efh36333w49fxon-wpengine.netdna-ssl.com/wp-content/uploads/Single-Pencil-1-736x414.jpg"
              height="100px"
              width="100%"
            />
            <p>Fill out the invoice template below to get started</p>
            {/* <Button color="blue"></Button> */}
          </Message>

          <Form className="attached fluid segment" onSubmit={handleSubmit}>
            <Form.Group widths="equal"></Form.Group>
            <Form.Group>
              <Form.Input
                placeholder="qty"
                name="qty"
                value={values.qty}
                onChange={handleChange}
              />
              <Form.Input
                placeholder="unitprice"
                name="unitprice"
                value={values.unitprice}
                onChange={handleChange}
              />
              <Form.Input
                placeholder="desrcription"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
              <Form.Input
                placeholder="cost"
                name="cost"
                value={values.cost}
                onChange={handleChange}
              />
              <Form.Input
                placeholder="projectid"
                name="projectid"
                value={values.projectid}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Button color="teal" content="Submit" type="submit" />
          </Form>
        </Grid.Column>
      </Grid.Row>
      <InvoiceTable />
    </Grid>
  );
};
export default Invoice;
