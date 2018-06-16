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
    this.fetchResources({});
  }

  fetchResources(filter) {
    this.props.fetchResources(filter);
  }

  render() {
    return (
      <div className="flex flex-col justify-center">
        <div className="flex border flex-col mb-2 content-center items-center justify-center w-full">
          <span className="text-black">Filtros</span>
          <div className="w-2/5 px-4 py-2 flex justify-center">
            <button
              onClick={this.fetchResources.bind(this, {
                list: "open"
              })}
              className="pointer mx-2 bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
            >
              Open
            </button>
            <button
              onClick={this.fetchResources.bind(this, {
                list: "closed"
              })}
              className="mx-2 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
            >
              closed
            </button>
            <button
              onClick={this.fetchResources.bind(this, {})}
              className="mx-2 bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            >
              todos
            </button>
          </div>
        </div>
        <ul className="w-full list-reset flex flex-col md:flex-row px-4">
          {this.props.resource.data.map(item => {
            return (
              <li
                key={item.id}
                className={`w-full md:w-1/5 border p-8 flex flex-col  md:mx-2 content-center items-center ${
                  item.list === "open"
                    ? "bg-green hover:bg-green-dark"
                    : "bg-red hover:bg-red-dark"
                } `}
              >
                <span className="py-1 text-xl text-white">{item.id}</span>
                <span className="py-1 text-xl text-white">{item.data}</span>
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
