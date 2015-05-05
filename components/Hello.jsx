window.Hello = React.createClass({
  getInitialState: function() {
    return { name: 'world' };
  },
  handleChange: function(event) {
    this.setState({ name: event.target.value });
  },
  render: function() {
    return(
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
      </div>
    );
  }
});

// module.exports = Hello;
