import React from "react";

function Span({ text, ignore }) {
  return (
    <>
      {!ignore && <br />}
      <span className="text-[#180090] font-semibold">{text}</span>
    </>
  );
}

export default Span;
