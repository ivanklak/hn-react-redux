import React from "react";
import s from "./News.module.css";
import { NavLink } from "react-router-dom";
import TimeAgo from "timeago-react";

const News = ({ news, storyId }) => {
  //debugger;
  return (
    <div className={s.news}>
      <div className={s.newsBody}>
        <div className={s.newsText}>
          <div className={s.title}>{news.title}</div>
          <div className={s.description}>
            <span>By: {news.by}</span> {" | "}
            <TimeAgo datetime={new Date(news.time * 1000)} />
          </div>
        </div>
        <div className={s.down}>
          <NavLink to="/storiespage" className={s.newsLink}>
            Back to stories
          </NavLink>
          <span>Comments:</span>
          <span>
            {
              <a href={news.url} className={s.newsUrl}>
                Original
              </a>
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default News;

//   {stories.map(item =>
//     item ? (
//       <div className={s.storiesText}>
//         <NavLink
//           to={`/news/${item.id}`}
//           key={item.id}
//           className={s.storiesItem}
//         >
//           <div className={s.text}>
//             <div className={s.storiesTitle}>{item.title}</div>
//             <div className={s.description}>
//               {item.score} likes by <span>{item.by}</span> {" "}
//               <span>
//                 <TimeAgo datetime={new Date(item.time * 1000).toISOString()} />
//               </span>
//             </div>
//           </div>
//         </NavLink>
//       </div>
//     ) : null
//   )}
