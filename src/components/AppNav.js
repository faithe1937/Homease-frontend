import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class AppNav extends Component {
  state = { activeItem: "Profile" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            to="/UserLogin"
            name="UserLogin"
            active={activeItem === "UserLogin"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/Projects"
            name="Projects"
            active={activeItem === "Projects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/Messages"
            name="Messages"
            active={activeItem === "Messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/Photos"
            name="Photos"
            active={activeItem === "Photos"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/Invoice"
            name="Invoice"
            active={activeItem === "Invoice"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
export default AppNav;
