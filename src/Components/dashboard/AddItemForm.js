import classes from "./addItemForm.module.css";
import IMAGE from "../../assets/Photos/plus-circle-outlined.png";
import { useState } from "react";
//update firebase from this component
//when the form submitted and refresh redux state from firebase
import { useDispatch } from "react-redux";
import { firebaseContent } from "../../redux/actions/content-actions";
import { barRef, drinksRef, testRef } from "../../firebase-db";
import { addDoc } from "firebase/firestore";
import { storage } from "../../firebase-db";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AddItemForm = ({ closeModal, addToSection }) => {
  //save form input values in state
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, summary, photo);
    // addDoc adds to the collection this object
    let dbRef;
    switch (addToSection) {
      case "testimonials":
        dbRef = testRef;
        break;
      case "bartenders":
        dbRef = barRef;
        break;
      case "drinks":
        dbRef = drinksRef;
        break;
      default:
    }
    if (photo !== "") {
      //upload the image
      //then get the url after upload
      setLoading(true)
      const imageRef = ref(storage, `${photo.name}`);
      const response = await uploadBytes(imageRef, photo);
      const fileUrl = await getDownloadURL(response.ref);

      //and send that image url into firestore database with name and summary
      addDoc(dbRef, { name, summary, photo: fileUrl , photoRef: photo.name}).then((data) => {
        dispatch(firebaseContent());
        closeModal();
        setLoading(false)
      });
    }
    
  };

  return (
    <form className={classes.container}>
      {/* multiple inputs for this form but will read form info from react state */}
      <div className={classes.modalLeft}>
        <img src={IMAGE} alt="" />
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      </div>
      <div className={classes.modalRight}>
        <input
          type="text"
          className={classes.title}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <textarea
          className={classes.desc}
          rows="9"
          cols="40"
          placeholder="Type description here"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <div className={classes.buttons}>
      <button onClick={submitHandler} className={classes.btn}>
        Save
      </button>
      </div>
      </div>
     
    </form>
  );
};

export default AddItemForm;

// - modal is usually opened based on a user interaction
// - overlay is the entire length + width of the screen!
