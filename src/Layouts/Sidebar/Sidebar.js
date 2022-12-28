import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCategoryList } from "../../Services/main/action";
import "./styles.css";

function Sidebar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const categoryList = useSelector((state) => state.mainStore.categoryList);

  const [selectedItem, setSetSelectedItem] = useState(
    history.location.pathname
  );

  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  const changeRoust = (name) => {
    history.push(`/${name}`);
    setSetSelectedItem(`/${name}`);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            {categoryList?.length &&
              categoryList.map((item) => {
                return (
                  <li key={item.id}>
                    <div
                      className={
                        selectedItem === `/${item.name}` ? "active" : ""
                      }
                      onClick={() => {
                        changeRoust(item.name);
                      }}
                    >
                      <span className="item">{item.name}</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
