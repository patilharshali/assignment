import React from "react";
import BasicLabel from "./BasicLabel";
import BasicInputText from "./BasicInputText";
import BasicSelect from "./BasicSelect";

export default function RenderComponent({ item, onChange, formData }) {
  const show = evaluateShow(
    item?.conditional?.show_if,
    formData[item?.conditional?.name]
  );
  const Render = itemManager(item.tag);

  return <div>{show && <Render {...item} onChange={onChange} />}</div>;
}

function itemManager(tag) {
  let component = null;
  switch (tag) {
    case "input":
      component = BasicInputText;
      break;
    case "select":
      component = BasicSelect;
      break;
    default:
      component = BasicLabel;
  }

  return component;
}

function evaluateShow(stringFunction, value) {
  if (stringFunction) {
    let wrap = (s) => "{ return " + stringFunction + " };"; //return the block having function expression
    let func = new Function(wrap(stringFunction));
    return func.call(null).call(null, value); //invoke the function using arguments
  } else {
    return true;
  }
}
