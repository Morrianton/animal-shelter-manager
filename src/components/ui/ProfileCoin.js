import classes from "./ProfileCoin.module.css";

const ProfileCoin = (props) => {
  return (
    <div>
      <div tabIndex="0" className={classes["coin-border"]}>
        <div className={classes["info"]}></div>
        <div className={classes["coin"]}>
          <div className={classes["coin-border-shadow"]}></div>
          <img src={props.img_path} alt={props.name}></img>
          <div className={classes["plaque"]}>
            <div className={classes["plaque-background"]}></div>
            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCoin;
