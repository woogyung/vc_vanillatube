/*
 * Vanillatube
 * - Vanilla Coding
 */
import { items as VIDEO_DATA } from '../config/sampleData.json';
import AppUI from './components/App';
import SelectedVideoItemUI from './components/SelectedVideoItem';
import VideoListUI from './components/VideoList';
import VideoItemUI from './components/VideoItem';

// App Component
const appUI = AppUI.create({
  parent: document.getElementById('root'),
  model: {
    title: '바닐라튜브',
    user: '켄'
  }
});

appUI.render();

// Selected Video Component
let selectedVideoData = VIDEO_DATA[0];

const selectedVideoItemUI = SelectedVideoItemUI.create({
  parent: document.querySelector('.selected-video'),
  model: {
    description: selectedVideoData.snippet.description,
    title: selectedVideoData.snippet.title,
    src: `https://www.youtube.com/embed/${selectedVideoData.id.videoId}`
  }
});

SelectedVideoItemUI.render();

// Video List Component
const videoListUI = VideoListUI.create({
  parent: document.querySelector('.video-list-container'),
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

// You can add events like this!
videoListUI.events({
  click: function () {
    console.log('click!');
  }
});
