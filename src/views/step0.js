import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const First = props => {
  return (
    <div>
      <h1>Step 0</h1>
      <Link to="/step1">
        <Button onClick={() => props.addToNavBar("/step1", "Account")}>
          Let's Begin
        </Button>
      </Link>
    </div>
  );
};

export default First;
