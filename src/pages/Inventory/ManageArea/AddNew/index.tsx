import { useEffect, useRef } from "react";
import { useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import useBook, { NewBook } from "../../../../hooks/useBook";
import { storage } from "../../../../config/firebase";
import { useInventoryContext } from "../../../../context/InventoryContext";

const AddNew = () => {
  const {addNewBook} = useInventoryContext(); 
  const [files, setFiles] = useState<FileList | null>();
  const [bookURL, setBookURL] = useState("");
  const [perLoadImg, setPerLoadImg] = useState<number>();
  const [isSubmit, setIsSubmit] = useState(false);
  const file = files ? files[0] : null;

  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    const uploadFile = async () => {
    const name = new Date().getTime() + (file? file.name : "");

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
          window.alert(error);
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

  useEffect(() => {
    if (isSubmit == true) {
      const timeout = setTimeout(()=>{
        setFiles(undefined);
        setPerLoadImg(undefined);
        if (titleRef.current && authorRef.current && descriptionRef.current) {
          titleRef.current.value = "",
          authorRef.current.value= "",
          descriptionRef.current.value = "";
          setBookURL("");
        }
        setIsSubmit(false);
      },500)
      return () => clearTimeout(timeout);
    }
  }, [isSubmit])

  const addNewBookHandle = () => {
    if (titleRef.current && authorRef.current && descriptionRef.current) {
      type NewType = NewBook;

      const newBook: NewType = {
        title: titleRef.current.value,
        author: authorRef.current.value,
        description: descriptionRef.current.value,
        timeStamp: serverTimestamp(),
        bookURL: bookURL,
      }
      addNewBook(newBook);
    }
  };
  return (
    <div className='addNew'>
      <h1>Upload new Book</h1>
      <div className="addNew__content">
        <div className="addNew__img">
          {perLoadImg==100 ? <p>Loaded image successfully</p> : ""}
          <label>Image</label>
          <input type="file" onChange={(e) => setFiles(e.target.files)} />
          {file ? <img src={bookURL ? bookURL : ""} alt="" /> : ""}
        </div>
        <div className="addNew__info">
          <div className="info-item">
            <label>Book's Title</label>
            <input ref={titleRef} type="text" />
          </div>
          <div className="info-item">
            <label>Book's Author</label>
            <input ref={authorRef} type="text" />
          </div>
          <div className="info-item">
            <label>Description</label>
            <input ref={descriptionRef} type="text" />
          </div>
          <button disabled={perLoadImg==null || perLoadImg < 100 || titleRef.current==null} onClick={() => {addNewBookHandle(), setIsSubmit(true)}}>Create New Book</button>
        </div>
      </div>
    </div>
  )
}

export default AddNew