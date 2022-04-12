import classes from "./Card.module.css";

/**
 * Profile card ideas:
 * 1. make a circle
 * 2. make the circle the photo
 * 3. shade bottom half (still transparent) and add details
 * 4. click to go to animal profile
 * 5. large "metal-looking" ring around profile
 */

const Card = (props) => {
  return <div className={classes["card"]}>{props.children}</div>;
};

export default Card;
