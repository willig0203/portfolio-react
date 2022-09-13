import React from "react";
import Pdf from "../../../src/Gary Williams Resume.pdf";

function Resume() {
  return (
    <div className="flex-row">
      <p>
        .NET, SQL, XML, JSON, OPC, REST, Web, API, HTTP
        <a href={Pdf} without rel="noopener noreferrer" target="_blank">
          <button trailingIcon="picture_as_pdf" label="Resume">
            Open Resume in a new tab
          </button>
        </a>
      </p>
    </div>
  );
}

export default Resume;
