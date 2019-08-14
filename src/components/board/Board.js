import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "../task/Task";
import "./board.scss";
import TaskIcon from "../svg/TaskIcon";

const Board = ({ title, helper, bgColor, setTask, setOpen, column, tasks }) => {
  return (
    <>
      <div className="board">
        <BoardHeader bgColor={bgColor} className="board-header">
          <h1>{title}</h1>
        </BoardHeader>
        <Droppable droppableId={`${column}`}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div className="board-body">
                <div className="tasks">
                  {tasks.length < 1 ? (
                    <div className="no-tasks">
                      <TaskIcon fill={"#F5F5F5"} />
                      <h3>No tasks for this board</h3>
                    </div>
                  ) : (
                    tasks.map((ele, key) => {
                      return (
                        <Task
                          column={column}
                          key={key}
                          id={key}
                          setOpen={setOpen}
                          setTask={setTask}
                          bgColor={bgColor}
                          date={"30-30-1993"}
                          description={"Hello xxxx"}
                          title={"TASK 1"}
                        />
                      );
                    })
                  )}
                </div>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <div className="board-footer">{helper}</div>
      </div>
    </>
  );
};

export default Board;

Board.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  helper: PropTypes.node.isRequired
};

const BoardHeader = styled.div`
  background-color: ${props => props.bgColor};
`;
