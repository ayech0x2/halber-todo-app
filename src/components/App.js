import React, {useState} from "react";
import {DragDropContext} from 'react-beautiful-dnd';
import Board from "./board/Board";
import Helper from "./helper/Helper";
import InfoIcon from "./svg/InfoIcon";
import Modal from "./modal/Modal";

function App() {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({});
  const [todo, setTodo] = useState([
    {
      title: "RAs zebi",
      description: "Description",
      date: "30-30-3333",
    },
    {
      title: "Test",
      description: "Description",
      date: "30-30-3333",
    },
  ]);
  const [doing, setDoing] = useState([
    {
      title: "RAs zebi",
      description: "Description",
      date: "30-30-3333",
    },
    {
      title: "Test",
      description: "Description",
      date: "30-30-3333",
    },
  ]);
  const [done, setDone] = useState([
    {
      title: "RAs zebi",
      description: "Description",
      date: "30-30-3333",
    },
    {
      title: "Test",
      description: "Description",
      date: "30-30-3333",
    },
  ]);


  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const getTasksList = (source) => {
    switch (source) {
      case "to-do":
        return todo;
      case "doing":
        return doing;
      case "done":
        return done;
    }
  };
  const onDragEnd = (result) => {
    const {source, destination} = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      return;
    }
    const listFrom = getTasksList(source.droppableId);
    const listTo = getTasksList(destination.droppableId);
    const _result = move(listFrom, listTo, source, destination);
    console.log(_result);
    for (let property in _result) {
      if (_result.hasOwnProperty(property)) {
        if (property === "to-do") {
          setTodo(_result["to-do"]);
        }
        if (property === "doing") {
          setDoing(_result["doing"]);
        }
        if (property === "done") {
          setDone(_result["done"]);
        }
      }
    }
  };

  return (
    <div className="boards">
      {open ? <Modal task={task} isOpen={open} setOpen={setOpen}/> : null}

      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <>
          <Board
            column={"to-do"}
            bgColor={"#FF5964"}
            title={"To do"}
            setOpen={setOpen}
            setTask={setTask}
            tasks={todo}
            helper={
              <Helper
                icon={<InfoIcon fill={"#35A7FF"}/>}
                content={
                  "Lorem Ipsum is simply dummy text of the printing and types"
                }
              />
            }
          />

          <Board
            column={"doing"}
            bgColor={"#FFE74C"}
            title={"Doing"}
            setOpen={setOpen}
            setTask={setTask}
            tasks={doing}
            helper={
              <Helper
                icon={<InfoIcon fill={"#35A7FF"}/>}
                content={
                  "Lorem Ipsum is simply dummy text of the printing and types"
                }
              />
            }
          />

          <Board
            column={"done"}
            bgColor={"#6BF178"}
            title={"Done"}
            setOpen={setOpen}
            setTask={setTask}
            tasks={done}
            helper={
              <Helper
                icon={<InfoIcon fill={"#35A7FF"}/>}
                content={
                  "Lorem Ipsum is simply dummy text of the printing and types"
                }
              />
            }
          />
        </>
      </DragDropContext>


    </div>
  );
}

export default App;
