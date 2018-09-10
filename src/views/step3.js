import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Third = props => {
  return (
    <div>
      <h1>Step 3</h1>
      <Link to="/step3a">
        <Button onClick={() => props.addToNavBar("/step3a", "Location2")}>
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default Third;
