import React, { Component } from "react";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";

class ProjectBoard extends Component {
  render() {
    const { projectList } = this.props;
    return (
      <div>
        <h1>projects</h1>
        <div style={styles.projectListContainer}>
          {projectList.map(project => (
            <ProjectList title={project.title} cards={project.cards} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  projectListContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
};

const mapStateToProps = state => ({
  //coms from the lists reducer/index.js
  projectList: state.projectList
});

export default connect(mapStateToProps)(ProjectBoard);
