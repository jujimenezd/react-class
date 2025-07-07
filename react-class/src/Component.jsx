import { useState } from "react";

function sum() {
  alert("hola");
}

function Component() {
  return (
    <div>
      <button type="button" onClick={sum} className="btn btn-success">
        Contador
      </button>
    </div>
  );
}

export default Component;
