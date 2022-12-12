import axios from "axios";
import { useAppContext } from "../context/context";
import { useState } from "react";
import "../assets/css/SingleCard.css";
import EditCard from "./EditCard";

const SingleCard = (props) => {
  // card title edit mode toggle
  const [cardEdit, setCardEdit] = useState(false);
  // card title
  const [cardTitle, setCardTitle] = useState(props.name);

  

  return (
    <>
      {/* main card component */}
      {cardEdit ? (
        <>
        {/* modal background. if clicked -> toggle edit mode off */}
          <div
            className="cards__modal-bkground"
            onClick={() => setCardEdit(false)}
          ></div>
          <EditCard
            id={props.id}
            cardTitle={cardTitle}
            listCards={props.listCards}
            setListCards={props.setListCards}
            setCardTitle={setCardTitle}
            setCardEdit={setCardEdit}
          />
        </>
      ) : (
        // non-edit mode
        <>
          <div className="cards__card" key={props.id}>
            <div
              className="cards__name"
              onClick={() => props.showCard(props.currentCard)}
              readOnly
            >
              {props.name}
            </div>
            {/* edit icons */}
            <div className="cards__action-icons">
              <button
                className="cards__edit-btn cards__action-icon"
                onClick={() => setCardEdit(true)}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleCard;
