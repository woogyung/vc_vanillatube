/*
 * Vanillatube
 * - Vanilla Coding
 */
import { items as VIDEO_DATA } from '../config/sampleData.json';
import AppUI from './components/App';
import SelectedVideoItemUI from './components/SelectedVideoItem';
import VideoListUI from './components/VideoList';

// App Component
const appUI = AppUI.create({
  element: document.getElementById('root'),
  model: {
    title: '바닐라튜브',
    user: '켄'
  }
});

appUI.render();

// Adding an event demo #1
appUI.events({
  click: {
    selector: '.page-search-button',
    handler: function (ev) {
      console.log('click - 1: ', ev.target);
    }
  }
});

// Selected Video Component
let selectedVideoData = VIDEO_DATA[0];

const selectedVideoItemUI = SelectedVideoItemUI.create({
  element: document.querySelector('.selected-video'),
  model: {
    description: selectedVideoData.snippet.description,
    title: selectedVideoData.snippet.title,
    src: `https://www.youtube.com/embed/${selectedVideoData.id.videoId}`
  }
});

SelectedVideoItemUI.render();

// Video List Component
const videoListUI = VideoListUI.create({
  element: document.querySelector('.video-list-container'),
  model: {
    videos: _.map(VIDEO_DATA, function (data) {
      return {
        src: data.snippet.thumbnails.medium.url,
        title: data.snippet.title,
        description: data.snippet.description
      };
    })
  }
});

videoListUI.render();

// Adding an event demo #2
videoListUI.events({
  click: function (ev) {
    console.log('click - 1: ', ev.target);
  }
});
