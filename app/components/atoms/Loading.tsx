import React from "react";

export default function Loading() {
  return (
    <div className="absolute left-1/2 flex items-center justify-center">
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </div>
  );
}
