import classes from "./ShelteredList.module.css";

import Sheltered from "./Sheltered";
import ShelteredContext from "../../context/sheltered-context";
import ProfileCoin from "../ui/ProfileCoin";

const ShelteredList = () => {
  const path_balto =
    "https://d.newsweek.com/en/full/1790333/wolf.jpg?w=1600&h=1600&q=88&f=f04b94ef33da2b7b39f988db223810ab";
  const path_jenna =
    "https://i.pinimg.com/736x/ea/3e/82/ea3e8273575ab284056e95fa7c7c9348.jpg";

  return (
    <div className={classes["sheltered-list"]}>
      <ShelteredContext.Consumer>
        {(context) => {
          return context.map((sheltered) => (
            <Sheltered
              key={sheltered.id}
              name={sheltered.name}
              age={sheltered.age}
              species={sheltered.species}
              breed1={sheltered.breed1}
              breed2={sheltered.breed2}
              weight={sheltered.weight}
              fed={sheltered.fed}
              exercised={sheltered.exercised}
              status={sheltered.status}
            ></Sheltered>
          ));
        }}
      </ShelteredContext.Consumer>
      <ProfileCoin img_path={path_balto} name="Balto"></ProfileCoin>
      <ProfileCoin img_path={path_jenna} name="Jenna"></ProfileCoin>
    </div>
  );
};

export default ShelteredList;
