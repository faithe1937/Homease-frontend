import React from "react";
import "../App.css";

export default props => {
  return (
    <div
      className="d-flex bd-highlight p-4 shadow"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="p-2 flex-grow-1 bd-highlight align-self-center">
        <img
          src="https://cdn.dribbble.com/users/59947/screenshots/7304926/media/869beb3d15924c36781a6eacd03c5b2d.jpg"
          alt="logoestiam"
          style={{ height: 35 }}
        />
      </div>
      <div className="p-2 bd-highlight align-self-center">
        <i className="uil uil-bell h2" />
      </div>
      <div className="p-2 bd-highlight align-self-center">
        <img
          src={Image}
          alt="imageprofil"
          className="rounded-circle"
          style={{ height: 40, width: 40 }}
        />
      </div>
      <div className="p-2 bd-highlight align-self-center">
        <span className="text-muted">
          Michel Platini <i className="uil uil-angle-down" />
        </span>
      </div>
    </div>
  );
};

// {
//   class AppNav extends Component {
//   state = { activeItem: "Profile" };

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {
//     const { activeItem } = this.state;
/* <Menu pointing>
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
        </Menu> */
