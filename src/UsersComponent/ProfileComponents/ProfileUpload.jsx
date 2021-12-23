import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import firebase from "../../firebase";
import { AuthContextApi } from "../../Apis/AuthContent";
import { Link } from 'react-router-dom';

const ProfileUpload = () => {
  let Auth = useContext(AuthContextApi);
  let [state, setstate] = useState({
    profile_photo: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });
  let { loading, profile_photo, barStatus, progress } = state;
  let handleChange = e => {
    setstate({ ...state, [e.target.name]: e.target.files[0] });
  };
  let handleSubmit =  e => {
    e.preventDefault();
    try {
      setstate({ loading: true });
      let { name } = profile_photo;
      let uploadTask = firebase
        .storage()
        .ref(`user-photo/${name}`)
        .put(profile_photo);

      //firebase events
      uploadTask.on(
        "state-changed",
        snapshot => {
          //progress bar
          let progressbar =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setstate({ loading: true, barStatus: true, progress: progressbar });
        },
        error => {
          toast.error(error.message);
        },
        async () => {
          let downloadURL = await firebase
            .storage()
            .ref("user-photo")
            .child(name)
            .getDownloadURL();
          Auth.updateProfile({
            photoURL: downloadURL,
          });
          window.location.assign("./userhome/profile");

          toast.success("Successfully photo uploaded");
          // setstate({ loading: false, barStatus: false, progress: 0 });
        }
      );

      //   console.log(profile_photo);
    } catch (error) {
      toast.error(error.message);
    }
  };
  let ProgressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
     
        {progress}
      </progress>
    );
  };
  return (
    <section id="photo_upload_block">
      <article>
        {
          <section id="progressSection">
            <article>
              {barStatus === true ? (
                <>
                  <span>
                    <ProgressTemplate />
                  </span>
                  <span>{Math.round(progress) + "%"}</span>
                </>
              ) : (
                ""
              )}
            </article>
          </section>
        }
        <div className="_block">
          <h2>Upload photo</h2>
          <form onSubmit={handleSubmit}>
            <input type="file" name="profile_photo" onChange={handleChange} />
            <button>
              {/* <Link to="/userhome/profile"> */}
               
                {loading === true ? (
                  <i className="fas fa-spinner"></i>
                ) : (
                  "upload"
                )}
              {/* </Link> */}
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ProfileUpload;
