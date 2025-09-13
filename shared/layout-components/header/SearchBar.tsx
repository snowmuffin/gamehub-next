"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ListGroup } from "react-bootstrap";
import MENUITEMS from "../sidebar/nav";
import { filterMenuItems } from "./utils/filterMenuItems"; // Import the new utility function

const SearchBar = () => {
  const searchRef = useRef(null);
  const [showa, setShowa] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [show2, setShow2] = useState(false);
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [searchval, setsearchval] = useState("Type something");
  const [NavData, setNavData] = useState([]);

  const myfunction = (inputvalue: string) => {
    const { filteredItems, hasResults } = filterMenuItems(MENUITEMS, inputvalue);

    setShowa(true);
    setNavData(filteredItems);

    if (!hasResults || inputvalue === "") {
      setShow2(false);
      setsearchval(inputvalue === "" ? "Type something" : "There is no component with this name");
      setsearchcolor(inputvalue === "" ? "text-dark" : "text-danger");
    } else {
      setShow2(true);
    }
  };

  const handleClick = (event: { target: any }) => {
    const searchInput: any = searchRef.current;

    if (searchInput && (searchInput === event.target || searchInput.contains(event.target))) {
      document.querySelector(".header-search")?.classList.add("searchdrop");
    } else {
      document.querySelector(".header-search")?.classList.remove("searchdrop");
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <input
        type="text"
        className="header-search-bar form-control border-0"
        placeholder="Search for results..."
        autoComplete="off"
        ref={searchRef}
        defaultValue={InputValue}
        onChange={(ele) => {
          myfunction(ele.target.value);
          setInputValue(ele.target.value);
        }}
      />
      {showa && (
        <div className="card search-result position-absolute z-index-9 search-fix border mt-1">
          <div className="card-header">
            <div className="card-title me-2 text-break">Search result of {InputValue}</div>
          </div>
          <ListGroup className="m-2">
            {show2 ? (
              NavData.map((e: any) => (
                <ListGroup.Item key={Math.random()} className="">
                  <Link
                    href={`${e.path}/`}
                    className="search-result-item"
                    onClick={() => {
                      setShowa(false);
                      setInputValue("");
                    }}
                  >
                    {e.title}
                  </Link>
                </ListGroup.Item>
              ))
            ) : (
              <b className={`${searchcolor}`}>{searchval}</b>
            )}
          </ListGroup>
        </div>
      )}
      <Link href="#!" scroll={false} className="header-search-icon border-0">
        <i className="bi bi-search"></i>
      </Link>
    </>
  );
};

export default SearchBar;
