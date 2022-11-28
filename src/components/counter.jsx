import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["Tag1", "Tag2", "Tag3"]
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  

  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold",
  //   };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <ul>{this.renderTags()}</ul>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <span className="badge bg-danger"> No Tags Available!</span>;
    }

    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
