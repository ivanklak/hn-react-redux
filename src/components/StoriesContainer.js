import React, { useEffect } from "react";
import Stories from "./Stories";
import { connect } from "react-redux";
import { requestIds, requestStories } from "../redux/stories-reducer";
import Preloader from "./Preloader/Preloader";

const StoriesContainer = ({
  requestIds,
  requestStories,
  storyIds,
  stories,
  isFetching
}) => {
  useEffect(() => {
    if (storyIds.length === 0) requestIds();
    if (storyIds.length > 100) requestStories(storyIds);
  }, [requestIds, requestStories, storyIds.length]);

  return isFetching ? (
    <Preloader />
  ) : (
    <Stories stories={stories} storyIds={storyIds} />
  );
};

const mapStateToProps = state => ({
  stories: state.storiesPage.stories,
  storyIds: state.storiesPage.storyIds,
  isFetching: state.storiesPage.isFetching
});

export default connect(mapStateToProps, { requestIds, requestStories })(
  StoriesContainer
);
