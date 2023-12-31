import { useEffect, useRef } from "react";
import { useState } from "react";
import { storage } from "../config/firebase";
import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import useBook, { NewBook } from "../hooks/useBook";

const New = () => {
  const {addNewBook} = useBook();
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
          descriptionRef.current.value = ""
        }
      },500)
      return () => clearTimeout(timeout);
    }
  }, [isSubmit])

  const addNewBookHandle = () => {
    if (titleRef.current && authorRef.current && descriptionRef.current) {
      const newBook: NewBook = {
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
    <>
      <p>Upload new Book</p>
      {perLoadImg==100 ? <p>Loaded image successfully</p> : ""}
      <label>Image</label>
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <label>Book's Title</label>
      <input ref={titleRef} type="text" />
      <label>Book's Author</label>
      <input ref={authorRef} type="text" />
      <label>Description</label>
      <input ref={descriptionRef} type="text" />
      <button disabled={perLoadImg==null || perLoadImg < 100 || titleRef.current==null} onClick={() => {addNewBookHandle(), setIsSubmit(true)}}>Create New Book</button>
    </>
  );
};

export default New;
