import React from "react";
import s from "./Stories.module.css";
import { NavLink } from "react-router-dom";
import TimeAgo from "timeago-react";

const Stories = ({ stories, storyIds }) => {
  return (
    <div className={s.stories}>
      {stories.map(item =>
        item ? (
          <div className={s.storiesText}>
            <NavLink
              to={`/news/${item.id}`}
              key={item.id}
              className={s.storiesItem}
            >
              <div className={s.text}>
                <div className={s.storiesTitle}>{item.title}</div>
                <div className={s.description}>
                  {item.score} likes by <span>{item.by}</span> {" "}
                  <span>
                    <TimeAgo datetime={new Date(item.time * 1000).toISOString()} />
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Stories;
