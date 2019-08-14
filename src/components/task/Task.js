import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CalendarIcon from "../svg/CalendarIcon";
import CircleIcon from "../svg/CircleIcon";
import "./task.scss";
import {Draggable} from "react-beautiful-dnd";

const Task = ({date, title, description, bgColor, setTask, setOpen, id,column}) => {
  return (
    <>
      <Draggable draggableId={`${column}-column-${id}`} index={0}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <TaskWrapper
              className="task"
              bgColor={bgColor}
              onClick={() => {
                setOpen(true);
                setTask({
                  title: title,
                  description: description
                });
              }}
            >
              <div className="task-header">
                <span className="date">{date}</span>
                <span className="icon">
          <CalendarIcon fill={"#c7c7c7"}/>
        </span>
              </div>
              <div className="task-body">
                <div className="title">
          <span className="icon">
            <CircleIcon fill={"#fff"} stroke={"#c7c7c7"}/>
          </span>
                  <span className="text">{title}</span>
                </div>
                <div className="description">{description}</div>
              </div>
            </TaskWrapper>
          </div>
        )}
      </Draggable>
    </>

  );
};

export default Task;

Task.propTypes = {
  date: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const TaskWrapper = styled.div`
  &:before {
    background-color: ${props => props.bgColor};
  }
  &:hover {
  }
`;
