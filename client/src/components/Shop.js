import React, { useState } from "react";
import { useSelector } from "react-redux";
import Details from "./Details";
import "./shop.css";

function Shop({ ping, setping, notif, setnotif }) {
  const [category, setcategory] = useState("all");
  const [gender, setgender] = useState("all");
  const handleChange = (e) => {
    setcategory(e.target.value);
  };
  const handleChange2 = (e) => {
    setgender(e.target.value);
  };

  const products = useSelector((state) => state.product?.productList);
  console.log(products);
  return (
    <div className="bodyshop">
      <div className="container">
        {" "}
        <div
          className="bg-white rounded d-flex align-items-center justify-content-between"
          id="header"
        >
          {" "}
          <button
            className="btn btn-hide text-uppercase"
            type="button"
            data-toggle="collapse"
            data-target="#filterbar"
            aria-expanded="false"
            aria-controls="filterbar"
            id="filter-btn"
            onclick="changeBtnTxt()"
          >
            {" "}
            <span className="fas fa-angle-left" id="filter-angle" />{" "}
            <span id="btn-txt">Hide filters</span>{" "}
          </button>{" "}
          <nav className="navbar navbar-expand-lg navbar-light pl-lg-0 pl-auto">
            {" "}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mynav"
              aria-controls="mynav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onclick="chnageIcon()"
              id="icon"
            >
              {" "}
              <span className="navbar-toggler-icon" />{" "}
            </button>{" "}
            <div className="collapse navbar-collapse" id="mynav">
              {" "}
              <ul className="navbar-nav d-lg-flex align-items-lg-center">
                {" "}
                <li className="nav-item active">
                  {" "}
                  <select
                    name="sort"
                    id="sort"
                    value={category}
                    onChange={handleChange}
                  >
                    {" "}
                    <option value hidden selected>
                      Sort by category
                    </option>{" "}
                    <option value="all">All</option>{" "}
                    <option value="veste">Veste</option>{" "}
                    <option value="teeshirt">Tee-shirt</option>{" "}
                    <option value="basket">Basket</option>{" "}
                  </select>{" "}
                </li>{" "}
                <li className="nav-item d-inline-flex align-items-center justify-content-between mb-lg-0 mb-3">
                  {" "}
                  <div
                    className="d-inline-flex align-items-center mx-lg-2"
                    id="select2"
                  >
                    {" "}
                    <div className="pl-2">Products:</div>{" "}
                    <select
                      name="pro"
                      id="pro"
                      value={gender}
                      onChange={handleChange2}
                    >
                      {" "}
                      <option value="all">All</option>
                      <option value="homme">Homme</option>{" "}
                      <option value="femme">Femme</option>{" "}
                    </select>{" "}
                  </div>{" "}
                </li>{" "}
                <li className="nav-item d-lg-none d-inline-flex"> </li>{" "}
              </ul>{" "}
            </div>{" "}
          </nav>{" "}
          <div className="ml-auto mt-3 mr-2">
            {" "}
            <nav aria-label="Page navigation example">
              {" "}
              <ul className="pagination">
                {" "}
                <li className="page-item">
                  {" "}
                  <a className="page-link" href="#" aria-label="Previous">
                    {" "}
                    <span aria-hidden="true" className="font-weight-bold">
                      &lt;
                    </span>{" "}
                    <span className="sr-only">Previous</span>{" "}
                  </a>{" "}
                </li>{" "}
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>{" "}
                <li className="page-item">
                  <a className="page-link" href="#">
                    ..
                  </a>
                </li>{" "}
                <li className="page-item">
                  <a className="page-link" href="#">
                    24
                  </a>
                </li>{" "}
                <li className="page-item">
                  {" "}
                  <a className="page-link" href="#" aria-label="Next">
                    {" "}
                    <span aria-hidden="true" className="font-weight-bold">
                      &gt;
                    </span>{" "}
                    <span className="sr-only">Next</span>{" "}
                  </a>{" "}
                </li>{" "}
              </ul>{" "}
            </nav>{" "}
          </div>{" "}
        </div>{" "}
        <div id="content" className="my-5">
          {" "}
          <div id="filterbar" className="collapse">
            {" "}
            <div className="box border-bottom">
              {" "}
              <div className="form-group text-center">
                {" "}
                <div className="btn-group" data-toggle="buttons">
                  {" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="radio"
                    /> Reset{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label active">
                    {" "}
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultChecked
                    />{" "}
                    Apply{" "}
                  </label>{" "}
                </div>{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="tick">
                  New <input type="checkbox" defaultChecked="checked" />{" "}
                  <span className="check" />{" "}
                </label>{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="tick">
                  Sale <input type="checkbox" /> <span className="check" />{" "}
                </label>{" "}
              </div>{" "}
            </div>{" "}
            <div className="box border-bottom">
              {" "}
              <div className="box-label text-uppercase d-flex align-items-center">
                Outerwear{" "}
                <button
                  className="btn ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#inner-box"
                  aria-expanded="false"
                  aria-controls="inner-box"
                  id="out"
                  onclick="outerFilter()"
                >
                  {" "}
                  <span className="fas fa-plus" />{" "}
                </button>{" "}
              </div>{" "}
              <div id="inner-box" className="collapse mt-2 mr-1">
                {" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Windbreaker{" "}
                    <input type="checkbox" defaultChecked="checked" />{" "}
                    <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Jumpsuit <input type="checkbox" />{" "}
                    <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Jacket <input type="checkbox" /> <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Coat <input type="checkbox" /> <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Raincoat <input type="checkbox" />{" "}
                    <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Handbag <input type="checkbox" defaultChecked />{" "}
                    <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Warm vest <input type="checkbox" />{" "}
                    <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Wallets <input type="checkbox" defaultChecked />{" "}
                    <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="box border-bottom">
              {" "}
              <div className="box-label text-uppercase d-flex align-items-center">
                season{" "}
                <button
                  className="btn ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#inner-box2"
                  aria-expanded="false"
                  aria-controls="inner-box2"
                >
                  <span className="fas fa-plus" />
                </button>{" "}
              </div>{" "}
              <div id="inner-box2" className="collapse mt-2 mr-1">
                {" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Spring <input type="checkbox" defaultChecked="checked" />{" "}
                    <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Summer <input type="checkbox" /> <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Autumn <input type="checkbox" defaultChecked />{" "}
                    <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Winter <input type="checkbox" /> <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
                <div className="my-1">
                  {" "}
                  <label className="tick">
                    Rainy <input type="checkbox" /> <span className="check" />{" "}
                  </label>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="box border-bottom">
              {" "}
              <div className="box-label text-uppercase d-flex align-items-center">
                price{" "}
                <button
                  className="btn ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#price"
                  aria-expanded="false"
                  aria-controls="price"
                >
                  <span className="fas fa-plus" />
                </button>{" "}
              </div>{" "}
              <div className="collapse" id="price">
                {" "}
                <div className="middle">
                  {" "}
                  <div className="multi-range-slider">
                    {" "}
                    <input
                      type="range"
                      id="input-left"
                      min={0}
                      max={100}
                      defaultValue={10}
                    />{" "}
                    <input
                      type="range"
                      id="input-right"
                      min={0}
                      max={100}
                      defaultValue={50}
                    />{" "}
                    <div className="slider">
                      {" "}
                      <div className="track" /> <div className="range" />{" "}
                      <div className="thumb left" />{" "}
                      <div className="thumb right" />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="d-flex align-items-center justify-content-between mt-2">
                  {" "}
                  <div>
                    {" "}
                    <span
                      id="amount-left"
                      className="font-weight-bold"
                    /> uah{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span
                      id="amount-right"
                      className="font-weight-bold"
                    /> uah{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="box">
              {" "}
              <div className="box-label text-uppercase d-flex align-items-center">
                size{" "}
                <button
                  className="btn ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#size"
                  aria-expanded="false"
                  aria-controls="size"
                >
                  <span className="fas fa-plus" />
                </button>{" "}
              </div>{" "}
              <div id="size" className="collapse">
                {" "}
                <div
                  className="btn-group d-flex align-items-center flex-wrap"
                  data-toggle="buttons"
                >
                  {" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                    /> 80{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />{" "}
                    92{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />{" "}
                    102{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />{" "}
                    104{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />{" "}
                    106{" "}
                  </label>{" "}
                  <label className="btn btn-success form-check-label">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />{" "}
                    108{" "}
                  </label>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* hhhhhhhhhhhhhhhhhhhhhhhhhhhhh */}
          <div id="products">
            <div className="row mx-0">
              {category == "all"
                ? products?.map((el) => (
                    <div className="col-lg-4 col-md-6 pt-md-0 pt-3">
                      {" "}
                      <div className="card d-flex flex-column align-items-center">
                        {" "}
                        <div className="product-name">
                          {el?.nameproduct}
                        </div>{" "}
                        <div className="card-img">
                          {" "}
                          <img
                            src={el?.image}
                            alt=""
                            height={100}
                            id="shirt"
                          />{" "}
                        </div>{" "}
                        <div className="text-muted text-center mt-auto">
                          Available Sizes
                        </div>{" "}
                        <div id="avail-size">
                          {" "}
                          <div
                            className="btn-group d-flex align-items-center flex-wrap"
                            data-toggle="buttons"
                          >
                            {" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />{" "}
                              80{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              92{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              102{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              104{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              106{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              108{" "}
                            </label>{" "}
                            <Details
                              product={el}
                              ping={ping}
                              setping={setping}
                              notif={notif}
                              setnotif={setnotif}
                            />
                          </div>{" "}
                        </div>{" "}
                        <div className="card-body pt-0">
                          {" "}
                          <div className="text-muted text-center mt-auto">
                            Available Colors
                          </div>{" "}
                          <div className="d-flex align-items-center justify-content-center colors my-2">
                            {" "}
                            <div
                              className="btn-group"
                              data-toggle="buttons"
                              data-tooltip="tooltip"
                              data-placement="right"
                              title="choose color"
                            >
                              {" "}
                              <label className="btn btn-light border form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                              <label className="btn btn-blue form-check-label active">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                              <label className="btn btn-green form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                              <label className="btn btn-orange form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                              <label className="btn btn-pink form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="d-flex align-items-center price">
                            {" "}
                            <div className="del mr-2">
                              <span className="text-dark">
                                {el?.price + 50} dt
                              </span>
                            </div>{" "}
                            <div className="font-weight-bold">
                              {el?.price} dt
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  ))
                : category == "teeshirt"
                ? products
                    ?.filter((el) => el.category == "teeshirt")
                    .map((el) => (
                      <div className="col-lg-4 col-md-6 pt-md-0 pt-3">
                        {" "}
                        <div className="card d-flex flex-column align-items-center">
                          {" "}
                          <div className="product-name">
                            {el?.nameproduct}
                          </div>{" "}
                          <div className="card-img">
                            {" "}
                            <img
                              src={el?.image}
                              alt=""
                              height={100}
                              id="shirt"
                            />{" "}
                          </div>{" "}
                          <div className="text-muted text-center mt-auto">
                            Available Sizes
                          </div>{" "}
                          <div id="avail-size">
                            {" "}
                            <div
                              className="btn-group d-flex align-items-center flex-wrap"
                              data-toggle="buttons"
                            >
                              {" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />{" "}
                                80{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                92{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                102{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                104{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                106{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                108{" "}
                              </label>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="card-body pt-0">
                            {" "}
                            <div className="text-muted text-center mt-auto">
                              Available Colors
                            </div>{" "}
                            <div className="d-flex align-items-center justify-content-center colors my-2">
                              {" "}
                              <div
                                className="btn-group"
                                data-toggle="buttons"
                                data-tooltip="tooltip"
                                data-placement="right"
                                title="choose color"
                              >
                                {" "}
                                <label className="btn btn-light border form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-blue form-check-label active">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-green form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-orange form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-pink form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="d-flex align-items-center price">
                              {" "}
                              <div className="del mr-2">
                                <span className="text-dark">
                                  {el?.price + 50} dt
                                </span>
                              </div>{" "}
                              <div className="font-weight-bold">
                                {el?.price} dt
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>
                    ))
                : category == "veste"
                ? products
                    ?.filter((el) => el.category == "veste")
                    .map((el) => (
                      <div className="col-lg-4 col-md-6 pt-md-0 pt-3">
                        {" "}
                        <div className="card d-flex flex-column align-items-center">
                          {" "}
                          <div className="product-name">
                            {el?.nameproduct}
                          </div>{" "}
                          <div className="card-img">
                            {" "}
                            <img
                              src={el?.image}
                              alt=""
                              height={100}
                              id="shirt"
                            />{" "}
                          </div>{" "}
                          <div className="text-muted text-center mt-auto">
                            Available Sizes
                          </div>{" "}
                          <div id="avail-size">
                            {" "}
                            <div
                              className="btn-group d-flex align-items-center flex-wrap"
                              data-toggle="buttons"
                            >
                              {" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />{" "}
                                80{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                92{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                102{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                104{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                106{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                108{" "}
                              </label>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="card-body pt-0">
                            {" "}
                            <div className="text-muted text-center mt-auto">
                              Available Colors
                            </div>{" "}
                            <div className="d-flex align-items-center justify-content-center colors my-2">
                              {" "}
                              <div
                                className="btn-group"
                                data-toggle="buttons"
                                data-tooltip="tooltip"
                                data-placement="right"
                                title="choose color"
                              >
                                {" "}
                                <label className="btn btn-light border form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-blue form-check-label active">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-green form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-orange form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-pink form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="d-flex align-items-center price">
                              {" "}
                              <div className="del mr-2">
                                <span className="text-dark">
                                  {el?.price + 50} dt
                                </span>
                              </div>{" "}
                              <div className="font-weight-bold">
                                {el?.price} dt
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>
                    ))
                : gender == "homme"
                ? products
                    ?.filter((el) => el.gender == "homme")
                    .map((el) => (
                      <div className="col-lg-4 col-md-6 pt-md-0 pt-3">
                        {" "}
                        <div className="card d-flex flex-column align-items-center">
                          {" "}
                          <div className="product-name">
                            {el?.nameproduct}
                          </div>{" "}
                          <div className="card-img">
                            {" "}
                            <img
                              src={el?.image}
                              alt=""
                              height={100}
                              id="shirt"
                            />{" "}
                          </div>{" "}
                          <div className="text-muted text-center mt-auto">
                            Available Sizes
                          </div>{" "}
                          <div id="avail-size">
                            {" "}
                            <div
                              className="btn-group d-flex align-items-center flex-wrap"
                              data-toggle="buttons"
                            >
                              {" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />{" "}
                                80{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                92{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                102{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                104{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                106{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                108{" "}
                              </label>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="card-body pt-0">
                            {" "}
                            <div className="text-muted text-center mt-auto">
                              Available Colors
                            </div>{" "}
                            <div className="d-flex align-items-center justify-content-center colors my-2">
                              {" "}
                              <div
                                className="btn-group"
                                data-toggle="buttons"
                                data-tooltip="tooltip"
                                data-placement="right"
                                title="choose color"
                              >
                                {" "}
                                <label className="btn btn-light border form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-blue form-check-label active">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-green form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-orange form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-pink form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="d-flex align-items-center price">
                              {" "}
                              <div className="del mr-2">
                                <span className="text-dark">
                                  {el?.price + 50} dt
                                </span>
                              </div>{" "}
                              <div className="font-weight-bold">
                                {el?.price} dt
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>
                    ))
                : gender == "femme"
                ? products
                    ?.filter((el) => el.gender == "femme")
                    .map((el) => (
                      <div className="col-lg-4 col-md-6 pt-md-0 pt-3">
                        {" "}
                        <div className="card d-flex flex-column align-items-center">
                          {" "}
                          <div className="product-name">
                            {el?.nameproduct}
                          </div>{" "}
                          <div className="card-img">
                            {" "}
                            <img
                              src={el?.image}
                              alt=""
                              height={100}
                              id="shirt"
                            />{" "}
                          </div>{" "}
                          <div className="text-muted text-center mt-auto">
                            Available Sizes
                          </div>{" "}
                          <div id="avail-size">
                            {" "}
                            <div
                              className="btn-group d-flex align-items-center flex-wrap"
                              data-toggle="buttons"
                            >
                              {" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                />{" "}
                                80{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                92{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                102{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                104{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                106{" "}
                              </label>{" "}
                              <label className="btn btn-success form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultChecked
                                />{" "}
                                108{" "}
                              </label>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="card-body pt-0">
                            {" "}
                            <div className="text-muted text-center mt-auto">
                              Available Colors
                            </div>{" "}
                            <div className="d-flex align-items-center justify-content-center colors my-2">
                              {" "}
                              <div
                                className="btn-group"
                                data-toggle="buttons"
                                data-tooltip="tooltip"
                                data-placement="right"
                                title="choose color"
                              >
                                {" "}
                                <label className="btn btn-light border form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-blue form-check-label active">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-green form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-orange form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                                <label className="btn btn-pink form-check-label">
                                  {" "}
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    autoComplete="off"
                                  />{" "}
                                </label>{" "}
                              </div>{" "}
                            </div>{" "}
                            <div className="d-flex align-items-center price">
                              {" "}
                              <div className="del mr-2">
                                <span className="text-dark">
                                  {el?.price + 50} dt
                                </span>
                              </div>{" "}
                              <div className="font-weight-bold">
                                {el?.price} dt
                              </div>{" "}
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>
                    ))
                : products?.map((el) => (
                    <div className="col-lg-4 col-md-6 pt-md-0 pt-3">
                      {" "}
                      <div className="card d-flex flex-column align-items-center">
                        {" "}
                        <div className="product-name">
                          {el?.nameproduct}
                        </div>{" "}
                        <div className="card-img">
                          {" "}
                          <img
                            src={el?.image}
                            alt=""
                            height={100}
                            id="shirt"
                          />{" "}
                        </div>{" "}
                        <div className="text-muted text-center mt-auto">
                          Available Sizes
                        </div>{" "}
                        <div id="avail-size">
                          {" "}
                          <div
                            className="btn-group d-flex align-items-center flex-wrap"
                            data-toggle="buttons"
                          >
                            {" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />{" "}
                              80{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              92{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              102{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              104{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              106{" "}
                            </label>{" "}
                            <label className="btn btn-success form-check-label">
                              {" "}
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />{" "}
                              108{" "}
                            </label>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="card-body pt-0">
                          {" "}
                          <div className="text-muted text-center mt-auto">
                            Available Colors
                          </div>{" "}
                          <div className="d-flex align-items-center justify-content-center colors my-2">
                            {" "}
                            <div
                              className="btn-group"
                              data-toggle="buttons"
                              data-tooltip="tooltip"
                              data-placement="right"
                              title="choose color"
                            >
                              {" "}
                              <label className="btn btn-light border form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                              <label className="btn btn-blue form-check-label active">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                              <label className="btn btn-green form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                              <label className="btn btn-orange form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                              <label className="btn btn-pink form-check-label">
                                {" "}
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  autoComplete="off"
                                />{" "}
                              </label>{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="d-flex align-items-center price">
                            {" "}
                            <div className="del mr-2">
                              <span className="text-dark">
                                {el?.price + 50} dt
                              </span>
                            </div>{" "}
                            <div className="font-weight-bold">
                              {el?.price} dt
                            </div>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
