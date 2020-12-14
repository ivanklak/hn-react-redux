import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/"
});

export const storiesAPI = {
  getStory(id) {
    return instance.get(`item/${id}.json?print=pretty`);
  },
  getStoryIds() {
    return instance.get(`newstories.json?print=pretty`);
  }
};
