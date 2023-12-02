import React, { useState } from "react";
import "./home.scss";
import Column from "./Column";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../stores/slices/TodoSlice";
import { columnSelector } from "../../stores/selector";

export default function Home() {
  const [listColumn, setListColumn] = useState([]);
  const dispatch = useDispatch();
  const columns = useSelector(columnSelector);

  useEffect(() => {
    dispatch(fetchTodos());
    setListColumn(columns);
    localStorage.setItem(
      "columns",
      JSON.stringify(
        columns.map((column) => {
          return {
            _id: column._id,
            column: column.column,
            columnName: column.columnName,
          };
        })
      )
    );
  }, []);
  // useEffect(() => {
  //   localStorage.setItem(
  //     "columns",
  //     JSON.stringify(
  //       columns.map((column) => {
  //         return {
  //           _id: column._id,
  //           column: column.column,
  //           columnName: column.columnName,
  //         };
  //       })
  //     )
  //   );
  // }, [listColumn]);
  return (
    <div className="home-wrapper">
      {columns.map((column) => {
        return <Column key={column._id} data={column} />;
      })}
      <button className="btnAdd">Add new column</button>
    </div>
  );
}
