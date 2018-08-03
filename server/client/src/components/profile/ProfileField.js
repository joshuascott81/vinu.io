import React from "react";

export default props => {
  if (props.formControl === "textarea") {
    return (
      <div className="form-group">
        <label>{props.label}</label>
        <textarea className="form-control" {...props.input} rows={props.rows} />
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <label>{props.label}</label>

        <input className="form-control" {...props.input} />

        <small className="form-text text-danger">
          {props.meta.touched && props.meta.error}
        </small>
      </div>
    );
  }
};
