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
    return (
      <div className="flex justify-center pt-4">
        <ul className="list-reset w-full md:w-1/2">
          {this.props.resource.data.map(item => {
            return (
              <li key={item.id} className="border flex p-2">
                <span className="pr-2">{item.id}</span>
                <span>{item.data}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
