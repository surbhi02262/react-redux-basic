import React, { Component } from "react";
import { connect } from "react-redux";
import ImageCard from "../Common/ImageCard/ImageCard";
import Popup from "../Common/Popup/Popup";
class Home extends Component {
  showPop = data => {
    console.log(data);
    this.setState({ popUpData: data });
  };
  state = {
    popUpData: {}
  };
  render() {
    const { addImageData } = this.props;
    return (
      <div className="home">
        <Popup data={this.state.popUpData} />
        <ImageCard
          albumData={addImageData}
          showActionButtons
          showData={this.showPop}
        />
      </div>
    );
  }
}
export const mapStateToProps = state => {
  const { Img } = state;
  return {
    addImageData: Img.Images
  };
};
export default connect(mapStateToProps)(Home);
