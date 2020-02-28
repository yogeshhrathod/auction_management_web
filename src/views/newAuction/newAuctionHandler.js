import { useState, useRef } from "react";
import { connect } from "react-redux";
import React from "react";
import { showAlertWithTimeout } from "../../common/alerts/alertActions";
import NewAuction from "./newAuction";
import storeData from "../../common/repository/storeAuction";

function NewAuctionHandler(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [bid, setBid] = useState("");
  const [multiple, setMultiple] = useState("");
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState("");
  const [type, setType] = useState(1);
  const image = useRef(null);

  const handler = async event => {
    const e = event.target.id;

    if (e === "title") setTitle(event.target.value);
    if (e === "desc") setDesc(event.target.value);
    if (e === "bid") setBid(event.target.value);
    if (e === "date") setDate(event.target.value);
    if (e === "type") setType(event.target.value);
    if (e === "multiple") setMultiple(event.target.value);
  };
  const displayImage = event => {
    var reader = new FileReader();

    reader.onloadend = function() {
      setPic(reader.result);
    };
    const file = event.target.files[0];

    if (file) {
      reader.readAsDataURL(file);
      setPic("");
    }
  };
  const validateData = () => {
    if (new Date(date) < new Date()) {
      showAlertWithTimeout(props.dispatch, "End date should be greater than the current date", "error");
      return false;
    }
    if(bid<0||multiple<0)
      { 
        showAlertWithTimeout(props.dispatch, "Negative price not allowed", "error");
        return false
      }
      
    return true;
  };
  const afterSubmission = async e => {
    e.preventDefault();

    if (validateData()) {
      const response = await storeData(
        title,
        desc,
        date,
        bid,
        type,
        multiple,
        image
      );
      const body = await response.json();
      setLoading(false);
      if (body.code === 200) {
        showAlertWithTimeout(props.dispatch, body.success, "success");
        props.history.push("/");
      } else showAlertWithTimeout(props.dispatch, body.failed, "error");
    }
  };
  return (
   
      <NewAuction
        loading={loading}
        pic={pic}
        title={title}
        handler={handler}
        desc={desc}
        date={date}
        type={type}
        bid={bid}
        image={image}
        multiple={multiple}
        afterSubmission={afterSubmission}
        displayImage={displayImage}
      />
   
    
  );
}

export default connect()(NewAuctionHandler);
