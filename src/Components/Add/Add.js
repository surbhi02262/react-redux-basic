import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addImage } from "../../Store/AddImage/actionCreator";

class Add extends Component {
  state = {
    imageData: {
      url: "",
      name: "",
      discription: "",
      uploadDate: new Date(),
      tag: [],
      category: [],
      user: "",
      like: 0
    },
    redirect: false
  };
  onChange = e => {
    let imgData = this.state.imageData;
    imgData[e.target.name] = e.target.value;
    this.setState({ imageData: imgData });
  };
  onSubmit = () => {
    if (
      this.state.imageData.url.length > 0 &&
      this.state.imageData.name.length > 0 &&
      this.state.imageData.discription.length > 0
    ) {
      this.props.addImage(this.state.imageData);
      this.setState({ redirect: true });
    }
  };
  componentDidMount() {
    if (this.props.isUpdate) {
      this.setState({ imageData: this.props.editData });
    }
  }
  render() {
    const { imageData, redirect } = this.state;
    const { url, name, discription, tag, category, user } = imageData;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="add-container">
        <div className="head-input-container">
          <div className="form-header">Add Image Form</div>
          <div className="input-container">
            <input
              type="text"
              name="url"
              value={url}
              placeholder="Enter Image URL"
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="discription"
              value={discription}
              placeholder="Enter description"
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="tag"
              value={tag}
              placeholder="Enter tag"
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="category"
              value={category}
              placeholder="Enter category"
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="user"
              value={user}
              placeholder="Enter user"
              onChange={e => this.onChange(e)}
            />
          </div>

          <div className="button-container">
            <button onClick={() => this.onSubmit()}>ADD</button>
          </div>
        </div>
      </div>
    );
  }
}
export const mapStateToProps = state => {
  return (
    {
      editData: state.Img.editData
    },
    {
      isUpdate: state.Img.update
    }
  );
};
export const mapDispatchToProps = dispatch => {
  return {
    addImage: data => {
      dispatch(addImage(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
