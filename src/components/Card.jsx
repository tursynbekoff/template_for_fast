import React, {useState} from "react";
import Modal from "./Modal.jsx";


const Card = ({ item, listMode }) => {
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("")

  function toggleModal(cover) {
    setModal(!modal);
    setImg(cover)
  }

  return (
    <>
      <div className={`card card__${listMode}-list`}>
        {item.cover_i ?
          <button className="card__img-button" onClick={() =>{toggleModal(item.cover_i)}}>
            <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-S.jpg`}/>
          </button>
          :
          <img src={`https://res.cloudinary.com/tursynbekoff/image/upload/w_50/v1662125174/no-image-1024x1024.png`}/>
        }
        <h3 className="title">
          {item.title_suggest}
        </h3>
        { 
          <p className="author">
            {
              (typeof item.author_name === "object") ?
                item.author_name[0] :
                "no author"
            }
          </p>
        }
        <p className="publish-year">{item.first_publish_year}</p>
        {
          <p className="isbn">
            {
              (typeof item.isbn === "object") ? 
                item.isbn[0]
                :
                "no ISBN"
            }
          </p>
        }
      </div>
      {modal ? (
        <Modal>
          <div className="img-wrapper">
            <img src={`https://covers.openlibrary.org/b/id/${img}-L.jpg`}/>
          </div>
          <button onClick={toggleModal}>close</button>
        </Modal>
      ) : null}
    </>
  )
}

export default Card;