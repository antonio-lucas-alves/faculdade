import React from "react";

const Result = ({ age }) => {
  return (
    <div className="mt-4 p-2 border border-gray-300 rounded">
      <h2 className="text-lg">Você tem {age} anos!</h2>
    </div>
  );
};

export default Result;
