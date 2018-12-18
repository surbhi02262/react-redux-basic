import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increaseCount,
  deleteImage,
  editImageinfo
} from "../../../Store/AddImage/actionCreator";

class ImageCard extends Component {
  state = {
    like: 0
  };

  render() {
    const { albumData, showActionButtons } = this.props;
    return (
      <div className="image-container">
        {albumData.map((imgs, index) => (
          <div className="img-details" key={index}>
            <div className="img-holder">
              <img src={imgs.url} alt={imgs.name} />
              <button onClick={() => this.props.increaseCount(imgs)}>
                like: {imgs.like}
              </button>
            </div>
            <div className="img-detail">
              <div className="title">{imgs.name}</div>
              <div className="description">{imgs.discription}</div>
              <div className="user">{imgs.user}</div>
              <div className="tag">{imgs.tag}</div>
              <div className="category">{imgs.category}</div>
            </div>
            {showActionButtons && (
              <div className="img-action-bar">
                <button onClick={() => this.props.showData(imgs)}>View</button>
                <button onClick={() => this.props.editImageinfo(imgs)}>
                  Edit
                </button>
                <button onClick={() => this.props.deleteImage(imgs)}>
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}
export const mapStateToProps = state => {
  return {
    likeCount: state.Img.cdata
  };
};
const mapDispatchToprops = {
  increaseCount,
  editImageinfo,
  deleteImage
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(ImageCard);
