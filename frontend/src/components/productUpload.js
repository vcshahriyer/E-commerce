import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions/productAction";
import _ from "lodash";
class ProductUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quantity: 0,
      description: "",
      price: 0,
      image: {},
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFileInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("name", this.state.name);
    formdata.append("quantity", this.state.quantity);
    formdata.append("description", this.state.description);
    formdata.append("price", this.state.price);
    formdata.append("image", this.state.image, this.state.image.name);
    this.props.addProduct(formdata);
    // for (var pair of formdata.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
  };
  handleCloseBtn = (e) => {
    e.target.parentElement.style.display = "none";
  };
  render() {
    const { errors } = this.props.error;
    const { uploadStatus } = this.props.product;
    return (
      <div className="row">
        <div className="col-50">
          <div className="container">
            {uploadStatus === "success" ? (
              <div className="alert success">
                <span className="closebtn" onClick={this.handleCloseBtn}>
                  &times;
                </span>
                <strong>Success !</strong> Product upload successfully.
              </div>
            ) : null}
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-50">
                  <h3>Product Details</h3>
                  <label htmlFor="pname">Product Name</label>
                  <input
                    type="text"
                    id="pname"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    required
                    onChange={this.onChange}
                    value={this.state.quantity}
                  />
                  <label htmlFor="desc">Description</label>
                  <textarea
                    type="text"
                    id="desc"
                    name="description"
                    required
                    onChange={this.onChange}
                    value={this.state.description}
                  />
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    required
                    onChange={this.onChange}
                    value={this.state.price}
                  />
                  <label htmlFor="img">Image</label>
                  <input
                    type="file"
                    id="img"
                    name="image"
                    accept="image/*"
                    required
                    onChange={this.onFileInputChange}
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Add product"
                className="cart-order-btn hover blue"
              />
            </form>
            {!_.isEmpty(errors) ? (
              <div className="alert danger">
                <span className="closebtn" onClick={this.handleCloseBtn}>
                  &times;
                </span>
                <strong>Danger!</strong> <br />
                {_.map(errors.errors, (value, key) => {
                  return (
                    <Fragment key={key}>
                      {value.message} <br />
                    </Fragment>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.error,
  product: state.product,
});

export default connect(mapStateToProps, { addProduct })(ProductUpload);
