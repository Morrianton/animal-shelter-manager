import classes from "./ShelteredListPage.module.css";

import ShelteredList from "./ShelteredList";

const ShelteredListPage = (props) => {
  return (
    <div className={classes["sheltered-list-page"]}>
      <ShelteredList></ShelteredList>
    </div>
  );
};

export default ShelteredListPage;
