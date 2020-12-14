import React, { useEffect } from "react";
import Stories from "./Stories";
import { connect } from "react-redux";
import { requestIds, requestStories } from "../redux/stories-reducer";

const StoriesContainer = ({
  requestIds,
  requestStories,
  storyIds,
  stories
}) => {
  useEffect(() => {
    if (storyIds.length === 0) requestIds();
    if (storyIds.length > 100) requestStories(storyIds);
  }, [requestIds, requestStories, storyIds.length]);

  return <Stories stories={stories} storyIds={storyIds} />;
};

const mapStateToProps = state => ({
  stories: state.storiesPage.stories,
  storyIds: state.storiesPage.storyIds
});

export default connect(mapStateToProps, { requestIds, requestStories })(
  StoriesContainer
);
