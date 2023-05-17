import React from "react";
import Certificate from "./Certificate";

const CertificateSetup = (props) => {
  return (
    <div>
      {props.input.map((certificate) => (
        <Certificate
          name={certificate.name}
          org={certificate.org}
          comment={certificate.comment}
        />
      ))}
    </div>
  );
};

export default CertificateSetup;
