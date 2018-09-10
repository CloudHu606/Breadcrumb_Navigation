import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Third = props => {
  return (
    <div>
      <h1>Step 3.1</h1>
      <Link to="/step3b">
        <Button onClick={() => props.addToNavBar("/step3b", "Location3")}>
          Continue
        </Button>
      </Link>
    </div>
  );
};

export default Third;
