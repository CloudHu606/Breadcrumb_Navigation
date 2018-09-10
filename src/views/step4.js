import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Third = props => {
  return (
    <div>
      <h1>Step 4</h1>
      <Link to="/step4">
        <Button>Done</Button>
      </Link>
    </div>
  );
};

export default Third;
