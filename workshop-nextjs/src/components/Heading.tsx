import React from "react";
interface PropsInt {
  text: String;
}
export default function Heading(props: PropsInt) {
  return <div className="mt-10 font-semibold text-2xl">{props.text}</div>;
}
