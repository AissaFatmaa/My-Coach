import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Zoom from "react-img-zoom";
import { useDispatch, useSelector } from "react-redux";
import { addcommande } from "../JS/commandeSlice";
import Swal from "sweetalert2";

function Details({ product, ping, setping, notif, setnotif }) {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user?.user);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const date = new Date();
  const dispatch = useDispatch();
  const [newcommande, setnewcommande] = useState({
    nameuser: user?.name,
    nameproduct: product?.nameproduct,
    image: product?.image,
    price: product?.price,
    date: date,
    status: "non-payé",
  });
  return (
    <div>
      {/*  */}
      <>
        <Button variant="primary" onClick={handleShow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            style={{ width: "25px", height: "25px" }}
          >
            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
          </svg>
        </Button>

        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{product?.nameproduct}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="bigbox">
              <div className="box1">
                <Zoom
                  img={product?.image}
                  zoomScale={3}
                  width={400}
                  height={400}
                />
              </div>
              <div className="box2">
                <h3>{product?.nameproduct}</h3>
                <h3>{product?.description}</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque sit unde ex possimus aut iste soluta sunt, delectus
                  culpa nesciunt, repellendus expedita dicta? Vitae, repudiandae
                  fugit fuga in eos temporibus?
                </p>
                <ul>
                  <li>Pour {product?.gender}</li>
                  <li>Taille : {product?.taille}</li>
                  <li>Price: {product?.price} dt</li>
                </ul>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(addcommande(newcommande));
                Swal.fire("Votre commande a été enregistrée");
                setnotif(notif++);
                setping(!ping);
              }}
            >
              Book now
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Details;
