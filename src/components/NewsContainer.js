import React, { useEffect } from "react";
import { connect } from "react-redux";
import News from "./News";
import { requestNews, requestComments} from "../redux/news-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "../../../Library/Caches/typescript/3.6/node_modules/redux";
import { getNews } from "../redux/news-selector";

const NewsContainer = ({ requestNews, requestComments, news, ...props }) => {
  //debugger;

  useEffect(() => {
    requestNews(props.match.params.id);
  }, []);
  useEffect(() => {
    news.length !== 0 && requestComments(props.match.params.id, news);
  }, [news.length, props.match.params.id, requestComments]);

  return <News news={news} storyId={props.match.params.id} />;
};

const mapStateToProps = state => ({
  news: getNews(state)
});

export default compose(
  connect(mapStateToProps, { requestNews, requestComments }),
  withRouter
)(NewsContainer);
