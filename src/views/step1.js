import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Second = props => {
  return (
    <div>
      <h1>Step 1</h1>
      <Link to="/step2">
        <Button onClick={() => props.addToNavBar("/step2", "Program")}>
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default Second;
