import React from "react";
import s from "./Stories.module.css";
import { NavLink } from "react-router-dom";

const Stories = ({ stories, storyIds }) => {
  return (
    <div className={s.stories}>
      {stories.map(item =>
        item ? (
          <NavLink
            to={`/news/${item.id}`}
            key={item.id}
            className={s.storiesItem}
          >
            <div className={s.storiesText}>
              <div className={s.storiesTitle}>{item.title}</div>
              <div className={s.description}>
                {item.score} likes <span>{item.by}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </NavLink>
        ) : null
      )}
    </div>
  );
};

export default Stories;
