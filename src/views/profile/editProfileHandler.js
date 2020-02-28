import React, { useState, useEffect } from "react";
import "./profileDesign.scss";
import { connect } from "react-redux";
import { showAlertWithTimeout } from "../../common/alerts/alertActions";
import EditProfile from "./editProfile";
const PATH = "/profile/";

function EditProfileHandler(props) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  const afterSubmission = async e => {
    e.preventDefault();
    const response = await fetch("/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        name: name,
        bio: bio
      })
    });
    const body = await response.json();

    if (body.code === 200) {
      showAlertWithTimeout(props.dispatch, body.success, "success");
    } else showAlertWithTimeout(props.dispatch, body.failed, "error");
    props.history.push("/user-profile");
  };

  const uploadFile = async event => {
    const data = new FormData();

    data.set("email", localStorage.getItem("user"));
    data.append("file", event.target.files[0]);
    setLoading(true);
    const response = await fetch("/upload-image", {
      method: "POST",
      body: data
    });
    await response.json;
    setLoading(false);
    window.location.reload();
  };

  useEffect(() => {
    setImage(PATH + localStorage.getItem("user") + ".jpeg");
  }, [loading]);
  useEffect(() => {}, [image]);

  useEffect(() => {
    const initProfile = async () => {
      const response = await fetch("/user-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: localStorage.getItem("userId")
        })
      });

      const body = await response.json();
      setName(body.name);
      setBio(body.bio);
      setEmail(body.email);
      setProfilePic(body.profilePic);
    };
    initProfile();
  }, []);

  const handler = event => {
    if (event.target.id === "name") setName(event.target.value);
    else setBio(event.target.value);
  };
  return (
    <EditProfile
      afterSubmission={afterSubmission}
      name={name}
      loading={loading}
      profilePic={profilePic}
      uploadFile={uploadFile}
      handler={handler}
      email={email}
      bio={bio}
    />
  );
}
export default connect()(EditProfileHandler);
