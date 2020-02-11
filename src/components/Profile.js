import React from "react";
import { Icon, Table, Card, Image } from "semantic-ui-react";
import CreateProject from "./CreateProject";

const Profile = () => (
  <>
    <CreateProject />
    <Card>
      <Image
        src="https://cdn.dribbble.com/users/981580/screenshots/6327964/poppy.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Olive Juice</Card.Header>
        <Card.Meta>
          <span className="date">Homeowner</span>
        </Card.Meta>
      </Card.Content>
    </Card>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Project Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Bathroom Remodel</Table.Cell>
          <Table.Cell negative>Demolition</Table.Cell>
          <Table.Cell>Dog was barking couldn't finish</Table.Cell>
        </Table.Row>
        <Table.Row positive>
          <Table.Cell>Kitchen Sink</Table.Cell>
          <Table.Cell>
            <Icon name="checkmark" />
            Completed
          </Table.Cell>
          <Table.Cell>Payment Recieved</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Kitchen Window</Table.Cell>
          <Table.Cell negative>Clean Up</Table.Cell>
          <Table.Cell>Requires call</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
);

export default Profile;
