import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "images/goop_small.jpg",
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-small"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
