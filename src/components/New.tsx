import { useEffect } from "react";
import { useState } from "react";
import { db, storage } from "../config/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const New = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [files, setFiles] = useState<FileList | null>();
  const [bookURL, setBookURL] = useState("");
  const [perLoadImg, setPerLoadImg] = useState<number>();
  const file = files ? files[0] : null;
  console.log(bookURL);

  useEffect(() => {
    const uploadFile = async () => {
    const name = new Date().getTime() + (file? file.name : "");
    console.log(name);

    const storageRef = ref(storage, "images/" + (file? file.name : ""));
    const uploadTask = uploadBytesResumable(storageRef, (file as Blob));
    
      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerLoadImg(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setBookURL(downloadURL);
          });
        }
      );
  };
  file && uploadFile();
  },[file]);

  const addNewBook = async () => {
    await addDoc(collection(db, "books"), {
      title: bookTitle,
      description: bookDescription,
      timeStamp: serverTimestamp(),
      bookURL: bookURL,
    });
  };

  return (
    <>
      <p>Upload new Book</p>
      <label>Image</label>
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <label>Book's Title</label>
      <input onChange={(e) => setBookTitle(e.target.value)} type="text" />
      <label>Description</label>
      <input onChange={(e) => setBookDescription(e.target.value)} type="text" />
      <button disabled={perLoadImg==null || perLoadImg < 100 || bookTitle == "" || bookDescription == ""} onClick={addNewBook}>Create New Book</button>
    </>
  );
};

export default New;
