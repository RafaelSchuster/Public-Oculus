import React from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import '../css/ResultModal.css'

export default function ResultModal(props) {
  const [isOpen, setIsOpen] = useState(props.show);

  useEffect(() => {
    setIsOpen(props.show);

  }, [props]);

  return (
    <Modal isOpen={isOpen} contentLabel="Example Modal" className="result-modal">
        <div className="content">
            You have a probability of: {props.data}% to have cataract.
            
        </div>
      
      


      <div className="close-btn">
        <button className="btn"
            onClick={() => {
            setIsOpen(false);
            }}
        >
            close
        </button>
      </div>
    </Modal>
  );
}
