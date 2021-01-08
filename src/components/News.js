import React from "react";
import s from "./News.module.css";
import { NavLink } from "react-router-dom";
import TimeAgo from "timeago-react";
import Comments from "./Comments";

const News = ({ news, storyId }) => {
  //debugger;
  if (news.length < 1) return null;
  return (
    <div className={s.news}>
      <div className={s.newsBody}>
        <div className={s.newsText}>
          <div className={s.title}>{news[0].title}</div>
          <div className={s.description}>
            <span>By: {news[0].by}</span> {" | "}
            <TimeAgo datetime={new Date(news[0].time * 1000)} /> {" | "}
            <span>Likes: {news[0].score}</span>
          </div>
        </div>
        <div className={s.down}>
          <NavLink to="/storiespage" className={s.newsLink}>
            Back to stories
          </NavLink>
          <span>Comments: {news.length - 1}</span>
          <span>
            {
              <a href={news[0].url} className={s.newsUrl}>
                Original
              </a>
            }
          </span>
        </div>
      </div>
      <div>
        <Comments news={news} />
      </div>
    </div>
  );
};

export default News;