import React, { useEffect } from "react";
import Header from "../../layout/HeaderLayout/Header";
import { toast } from "react-toastify";
import "./broad.scss";
import { useDispatch } from "react-redux";
import { fetchBroad } from "../../stores/slices/BroadSlice";
import { useSelector } from "react-redux";
import { broadSelector } from "../../stores/selectors/selectors";
import Loading from "../../components/Loading/Loading";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

export default function Broad() {
  const dispatch = useDispatch();
  const broadState = useSelector(broadSelector);
  useEffect(() => {
    toast.success("Welcome to Trello version 2", {
      autoClose: 2000,
    });
    dispatch(fetchBroad());
  }, []);

  return (
    <div>
      <Header />
      {broadState.status === "loading" ? (
        <Loading />
      ) : (
        <div className="broad-wrapper">
          <DragDropContext></DragDropContext>
          {broadState.columns.map((column) => {
            return <Column />;
          })}
          <button className="btnNewColumn">+ Add a new column</button>
        </div>
      )}
    </div>
  );
}
