import React from "react";
import s from "./Comments.module.css";
import TimeAgo from "timeago-react";

const Comments = ({ news, addChildrens }) => {
  //debugger;
  if (!news[0].childrens) return null;
  let comments = news[0].childrens;
  let commentsCopy = comments.slice();
  return (
    <div>
      <h1 className={s.nameCom}>Comments</h1>
      <div>
        {commentsCopy
          .sort((a, b) => b.time - a.time)
          .map(comment => (
            <div className={s.wrapper}>
              <div className={s.com}>
                <span className={s.author}>
                  {comment.by} {" | "}
                  <TimeAgo datetime={new Date(comment.time * 1000)} />
                </span>
                <div
                  className={s.text}
                  onClick={() => {
                    addChildrens(comment.id, news);
                  }}
                >
                  {comment.text ? comment.text : "Deleted :("}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Comments;
