window.Hello = React.createClass({
  getInitialState : function() {
    return { name: 'world' };
  },
  render : function() {
    return(
      <div>
        <h1>Hello, {this.state.name}!</h1>
        <input type="text" />
      </div>
    );
  }
});

// module.exports = Hello;
