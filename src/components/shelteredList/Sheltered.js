import { useState } from "react";

import classes from "./Sheltered.module.css";

import Card from "../ui/Card";
import Button from "../ui/Button";

const Sheltered = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
    props.status.fed = checked;
  };

  return (
    <Card>
      <div className={classes["profile-pic"]}>
        <img src={props.pic_path} alt={props.name}></img>
      </div>
      <div className={classes["info"]}>
        <p>{props.name}</p>
        <p>{props.species}</p>
        <p>{props.breed1}</p>
        <p>{props.breed2}</p>
        <p>{props.age} years old</p>
        <p>{props.weight} lbs.</p>
      </div>
      <div className={classes["statuses"]}>
        <h4>Status</h4>
        <input
          type="checkbox"
          id="fed"
          checked={checked}
          onChange={handleChecked}
        />
        <label htmlFor="fed">Fed</label>
        <br />
        <input
          type="checkbox"
          id="exercised"
          checked={props.status.exercised}
          disabled
        />
        <label htmlFor="exercised">Exercised</label>
        <br />
        <p>{props.status.health.condition}</p>
      </div>
      <Button label="Submit"></Button>
    </Card>
  );
};

export default Sheltered;
