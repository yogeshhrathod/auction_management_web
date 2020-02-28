import Loader from "../../common/loader/spinner";
import "./adDesign.scss";
import { bool, func, string, number, shape } from "prop-types";
import React from "react";

const propTypes = {
  data: shape({
    loading: bool.isRequired,
    pic: string.isRequired,
    title: string.isRequired,
    handler: func.isRequired,
    desc: string.isRequired,
    type: number.isRequired,
    date: string.isRequired,
    bid: number.isRequired,
    multiple: number.isRequired,
    afterSubmission: func.isRequired,
    displayImage: func.isRequired
  })
};
function NewAuction(props) {
  const {
    loading,
    pic,
    image,
    title,
    handler,
    desc,
    date,
    type,
    bid,
    multiple,
    afterSubmission,
    displayImage
  } = props;

  return (
    <>
      <Loader display={loading} />
      
      <form onSubmit={afterSubmission} className="outer-form">
      <div className="outer-container">
        <div className="outer-body">
          <div className="con-box">
            <h1>Create New Auction</h1>
          </div>
        </div>
        <div className="con-box">
          <div className="image-box">
            <img
              className="display-image"
              src={
                pic !== ""
                  ? pic
                  : "http://antiquetraveller.com/wp-content/uploads/2017/04/DSCF2144-Large.jpg"
              }
              alt="pic"
            />
            <input type="file" onChange={displayImage} ref={image} required />
          </div>
          <div className="details">
            <input
              className="name"
              type="text"
              placeholder="Title"
              id="title"
              value={title}
              onChange={handler}
              required
            />
            <textarea
              className="info"
              placeholder="Description"
              id="desc"
              value={desc}
              onChange={handler}
              required
            ></textarea>
          </div>
        </div>
        <div className="other-details">
          <div className="block">
            <div className="label"><label>Select Expiry Date </label></div>
            <input
              type="date"
              name="exp-date"
              id="date"
              value={date}
              onChange={handler}
              required
            />
          </div>
          <div className="block">
            <label className="label">Type of Auction </label>
            <select
              value={type}
              id="type"
              onChange={handler}
              required
            >
              <option value="1">Open</option>
              <option value="2">Close</option>
            </select>
          </div>
          <div className="block">
            <label className="label">Initial Bid Price <span className="currency">$</span></label>
            <input
              
              type="number"
              id="bid"
              value={bid}
              onChange={handler}
              required
            />
          </div>
          <div className="block">
            <label className="label" >Bid Multiple Price<span className="currency">$</span></label>
            <input
              
              type="number"
              id="multiple"
              value={multiple}
              onChange={handler}
              required
            />
          </div>
        </div>
        <div className="button-box">
          <button className="add-button" type="submit">
            ADD POST
          </button>
        </div>
        </div>
      </form>
    </>
  );
}
NewAuction.propTypes = propTypes;

export default NewAuction;
