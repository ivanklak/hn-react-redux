import React, { useEffect } from "react";
import { connect } from "react-redux";
import News from "./News";
import { requestNews } from "../redux/news-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "../../../Library/Caches/typescript/3.6/node_modules/redux";

const NewsContainer = ({ requestNews, news, ...props }) => {
  useEffect(() => {
    requestNews(props.match.params.id);
  }, [props.match.params.id, requestNews]);
  return (
    <div>
      <News news={news} storyId={props.match.params.id} />
    </div>
  );
};
const mapStateToProps = state => ({
  news: state.newsPage.news
});

export default compose(
  connect(mapStateToProps, { requestNews }),
  withRouter
)(NewsContainer);
