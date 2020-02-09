import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/Profile"
            name="Profile"
            active={activeItem === "Profile"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/projectBoard"
            name="ProjectBoard"
            active={activeItem === "ProjectBoard"}
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
export default Navbar;
