import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import News from "./News";
import {
  requestNews,
  requestComments,
  setChildrens
} from "../redux/news-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "../../../Library/Caches/typescript/3.6/node_modules/redux";
import { getNews, getIsFetching } from "../redux/news-selector";
import Preloader from "./Preloader/Preloader";

const NewsContainer = ({
  requestNews,
  setChildrens,
  requestComments,
  isFetching,
  news,
  ...props
}) => {
  //debugger;
  const addChildrens = id => {
    setChildrens(id);
  };
  useEffect(() => {
    requestNews(props.match.params.id);
  }, []);
  useEffect(() => {
    news.length !== 0 && requestComments(props.match.params.id, news);
  }, [news.length, props.match.params.id, requestComments]);

  return isFetching ? (
    <Preloader />
  ) : (
    <News
      news={news}
      storyId={props.match.params.id}
      addChildrens={addChildrens}
    />
  );
};

const mapStateToProps = state => ({
  news: getNews(state),
  isFetching: getIsFetching(state)
});

export default compose(
  connect(mapStateToProps, { requestNews, requestComments, setChildrens }),
  withRouter
)(NewsContainer);
