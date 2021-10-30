import React, { Component } from "react";

class Accolades extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      // var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.accolades;
      // var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="accolades">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-8 center">
              <div className="col-md-10"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Accolades;
