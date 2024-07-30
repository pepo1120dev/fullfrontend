import React, { Component } from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import "./OrganigramaStyle.css";

class App extends Component {
  render() {
    const initechOrg = {
      name: "nombre persona",
      actor: "COMANDANTE INCIDENTE",
      children: [
        {
          name: "Peter Gibbons",
          actor: "Ron Livingston",
          children: [
            {
              name: "And More!!",
              actor:
                "This is just to show how to build a complex tree with multiple levels of children. Enjoy!",
            },
          ],
        },
        {
          name: "Milton Waddams",
          actor: "Stephen Root",
        },
        {
          name: "Bob Slydell",
          actor: "John C. McGi...",
        },
      ],
    };

    const MyNodeComponent = ({ node }) => {
      return (
        <section className="initechNode">
          <p className="node-name">{node.name}</p>
          <p className="node-actor">{node.actor}</p>
        </section>
      );
    };

    return (
      <div className="App" id="initechOrgChart">
        <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
      </div>
    );
  }
}

export default App;
