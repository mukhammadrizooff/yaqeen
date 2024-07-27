// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const PartnerBrandCard = ({ title, src, alt }) => {
  return (
    <div className="partner-brand-card flex justify-center items-center gap-2">
      <img src={src} alt={alt} />
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
};

export default PartnerBrandCard;
