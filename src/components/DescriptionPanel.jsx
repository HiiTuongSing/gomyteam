import React from "react";

// 1. <DescriptionPanel imagePath= title="" description="" buttonText="" reverse="" />

export default function DescriptionPanel({
  imagePath,
  title,
  description,
  buttonText,
  reverse = false,
}) {
  if (reverse) {
    return (
      <div className="descriptive-panel row d-flex justify-content-center p-5 mx-auto mb-5 reverse rounded">
        <div className="col-12 col-md-6 descriptive-panel-description pe-lg-5">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="#" className="btn btn-reverse btn-lg">
            {buttonText}
          </a>
        </div>

        <div className="col-12 col-md-6 descriptive-panel-image pb-2 pb-lg-0">
          <img src={imagePath} alt={title} className="rounded" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="descriptive-panel row d-flex justify-content-center p-5 mx-auto mb-5 rounded">
        <div className="col-12 col-md-6 descriptive-panel-image pb-2 pb-lg-0">
          <img src={imagePath} alt={title} className="rounded" />
        </div>

        <div className="col-12 col-md-6 descriptive-panel-description ps-lg-5">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="#" className="btn btn-reverse btn-lg">
            {buttonText}
          </a>
        </div>
      </div>
    );
  }
}