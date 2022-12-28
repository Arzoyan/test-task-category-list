import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getCategoryItemsList } from "../../Services/main/action";

import "./styles.css";

const MainPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const paths = useSelector((state) => state.mainStore.paths);
  const categoryList = useSelector((state) => state.mainStore.categoryList);
  const categoryItemList = useSelector(
    (state) => state.mainStore.categoryItemList
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (paths.includes(history.location.pathname) && page > 0) {
      dispatch(
        getCategoryItemsList({
          page,
          id: categoryList.find((item) => {
            return `/${item.name}` === history.location.pathname;
          }).id,
        })
      );
    }
  }, [history.location.pathname, page, categoryList]);

  return (
    <div>
      <div className="category-item-container">
        {categoryItemList &&
          categoryItemList.map((item) => {
            return (
              <img src={item.url} key={item.id} className={"category-item"} />
            );
          })}
      </div>
      {categoryItemList && (
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => {
              setPage((prevState) => {
                return prevState - 1;
              });
            }}
          >
            prev
          </button>

          <button
            className="pagination-btn"
            onClick={() => {
              setPage((prevState) => {
                return prevState + 1;
              });
            }}
          >
            next >>
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
