import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./pannier.css";

import { Link } from "react-router-dom";

import { deletecommande, getcommande } from "../JS/commandeSlice";
import Swal from "sweetalert2";
function Pannier({ ping, setping }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcommande());
  }, []);
  const user = useSelector((state) => state.user?.user);
  const commandes = useSelector((state) => state.commande?.commandeList);
  console.log(commandes);
  const sum = (TabRes) => {
    let s = 0;
    for (let i = 0; i < TabRes.length; i++) {
      s = TabRes[i].total + s;
      console.log(TabRes[i].total);
    }
    return s;
  };
  return (
    <div>
      <div style={{ marginTop: 100 }}>
        <link
          rel="stylesheet"
          type="text/css"
          href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
        />
        <div className="container bootstrap snippets bootdey">
          <div
            className="col-md-9 col-sm-8 content"
            style={{ marginLeft: 48, marginTop: -55 }}
          >
            <div className="row" style={{ width: 1065, marginLeft: -31 }}>
              <div className="col-md-12">
                <div className="panel panel-info panel-shadow">
                  <div className="panel-body" style={{ marginLeft: 20 }}>
                    <div className="table-responsive">
                      <table className="table" style={{ minWidth: "916px" }}>
                        <thead>
                          <tr>
                            <th>Produit</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Prix</th>
                            <th></th>
                          </tr>
                        </thead>

                        <tbody>
                          {commandes?.filter(
                            (el) => el.nameuser == user?.name
                          ) !== [] ? (
                            commandes
                              .filter((el) => el.nameuser == user?.name)
                              .map((el) => (
                                <tr>
                                  <td
                                    style={{
                                      width: 205,
                                      height: 70,
                                      marginRight: 20,
                                    }}
                                  >
                                    <img src={el?.image} className="img-cart" />
                                  </td>
                                  <td style={{ width: 379 }}>
                                    <strong>{el?.nameproduct}</strong>
                                  </td>
                                  <td>
                                    <p>{el?.date}</p>
                                  </td>
                                  <td>
                                    <p>{el?.price} dt</p>
                                  </td>

                                  <button
                                    style={{
                                      marginLeft: 5,
                                      marginLeft: "5px",
                                      marginTop: "23px",
                                      border: "none",
                                    }}
                                    bsPrefix="delete_btn"
                                    onClick={() => {
                                      dispatch(deletecommande(el._id));
                                      setping(!ping);
                                    }}
                                  >
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 448 512"
                                      class="faTrash"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                    </svg>
                                  </button>
                                </tr>
                              ))
                          ) : (
                            <tr>
                              <td>pas de commande</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                      <span
                        style={{
                          display: "flex",
                          marginLeft: 683,
                          marginBottom: 20,
                        }}
                      >
                        <Link
                          to="/shop"
                          style={{
                            width: 120,
                            fontWeight: "bold",
                            height: 49,
                            backgroundColor: "rgb(222 113 113)",
                            padding: ".375rem .75re",
                            fontSize: "1rem",
                            lineHeight: "1.5",
                            borderRadius: ".25rem",
                            border: "none",
                            color: "white",
                            padding: "0 22px",
                          }}
                        >
                          Poursuivre les achats
                          <span className="glyphicon glyphicon-chevron-right" />
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pannier;
