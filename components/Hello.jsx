window.Hello = React.createClass({
  getInitialState() {
    return { name: 'world' };
  },
  handleChange(event) {
    this.setState({ name: event.target.value });
  },
  render() {
    return(
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
      </div>
    );
  }
});

// module.exports = Hello;
