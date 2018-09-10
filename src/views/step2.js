import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Third = props => {
  return (
    <div>
      <h1>Step 2</h1>
      <Link to="/step2a">
        <Button onClick={() => props.addToNavBar("/step2a", "Program2")}>
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default Third;
