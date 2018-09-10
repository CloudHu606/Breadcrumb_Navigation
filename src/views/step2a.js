import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Third = props => {
  return (
    <div>
      <h1>Step 2.1</h1>
      <Link to="/step3">
        <Button onClick={() => props.addToNavBar("/step3", "Location")}>
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default Third;
