import { CommentList } from "../events/CommentList";
import "./Modal.css";

export const Modal = ({ isActive, setModalIsActive, eventId }) => {
  // console.log(id);
  if (isActive) {
    return (
      <>
        <div
          className="overlay--user "
          onClick={(click) => setModalIsActive(false)}
        ></div>
        <div className="modal--user">
          <button
            className="close-modal-btn"
            onClick={() => {
              setModalIsActive(false);
            }}
          >
            X
          </button>
          {<CommentList eventId={eventId} />}
        </div>
      </>
    );
  } else {
    return "";
  }
};
