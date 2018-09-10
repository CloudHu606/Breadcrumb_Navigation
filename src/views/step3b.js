import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Third = props => {
  return (
    <div>
      <h1>Step 3.2</h1>
      <Link to="/step4">
        <Button onClick={() => props.addToNavBar("/step4 ", "Activate")}>
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default Third;
