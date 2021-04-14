import React from "react";

const Name = (props) => {
  // const [isActive, setIsActive] = useState(true);

  //empty class to be filled based on the condition

  return (
    <span
      onClick={() => props.onClickHandler(props.babyName)}
      className={props.babyName.sex}
    >
      {props.babyName.name}
    </span>
  );
};

export default Name;
