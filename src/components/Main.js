import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as actionsCreators from "../actions/actionsCreators";

const mapStateToProps = state => ({
  resource: state.resource
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...actionsCreators.resources
    },
    dispatch
  );

class Main extends Component {
  componentDidMount() {
    this.props.fetchResources({});
  }
  render() {
    return <div>{JSON.stringify(this.props)}</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
