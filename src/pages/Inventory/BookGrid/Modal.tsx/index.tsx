import { useEffect, useRef, useState } from "react";
import "../../index.css";
import { RxCross2 } from "react-icons/rx";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../config/firebase";
import { NewBook } from "../../../../hooks/useBook";
import { useInventoryContext } from "../../../../context/InventoryContext";
import { serverTimestamp } from "firebase/firestore";

interface Props {
  id: string;
}

const Modal = ({id}: Props) => {
  console.log(id);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [files, setFiles] = useState<FileList | null>();
  const [bookURL, setBookURL] = useState("");
  const [perLoadImg, setPerLoadImg] = useState<number>();
  const [isSubmit, setIsSubmit] = useState(false);
  const {updateBook} = useInventoryContext();
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
        setIsCollapsed(true);
        setIsSubmit(false);
      },1000)
      return () => clearTimeout(timeout);
    }
  }, [isSubmit])

  const updateBookHandle = (id: string) => {
    if (titleRef.current && authorRef.current && descriptionRef.current) {
      console.log(id);  
      type NewType = NewBook;
      const newBook: NewType = {
        title: titleRef.current.value,
        author: authorRef.current.value,
        description: descriptionRef.current.value,
        timeStamp: serverTimestamp(),
        bookURL: bookURL,
      } 
      updateBook(id,newBook); 
    }
  };
  return (
    <div className="modal">
      <button className="modal__btn" onClick={() => setIsCollapsed(false)}>
        Update
      </button>
      <div
        className={
          isCollapsed ? "modal__layer modal__layer--collapsed" : "modal__layer"
        }
      >
        <div className="content">
          <h2>Update Book</h2>
          <span onClick={() => setIsCollapsed(true)} className="icon">
            <RxCross2 />
          </span>
          <div className="update">
            <div className="update__content">
              <div className="update__img">
                {perLoadImg == 100 ? <p>Loaded image successfully</p> : ""}
                <label>Image</label>
                <input type="file" onChange={(e) => setFiles(e.target.files)} />
                {file ? <img src={bookURL ? bookURL : ""} alt="" /> : ""}
              </div>
              <div className="update__info">
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
                <button
                  disabled={
                    perLoadImg == null ||
                    perLoadImg < 100 ||
                    titleRef.current == null
                  }
                  onClick={() => {
                        updateBookHandle(id);
                        setIsSubmit(true);
                  }}
                >
                  Update Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
