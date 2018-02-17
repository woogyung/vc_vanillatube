/*
 * Vanillatube
 * - Vanilla Coding
 */
import { items as VIDEO_DATA } from '../config/sampleData.json';

import Model from './gorilla/Model';

import AppUI from './components/App';
import SelectedVideoItemUI from './components/SelectedVideoItem';
import VideoListUI from './components/VideoList';
import SearchBarUI from './components/SearchBar';

import { findClosestParentWithClass } from './utils/domUtils';

const videoListModel = new Model({
  data: VIDEO_DATA,
  createSelectedVideoItemModel: function (raw) {
    return {
      description: raw.snippet.description,
      title: raw.snippet.title,
      src: `https://www.youtube.com/embed/${raw.id.videoId}`
    };
  },
  createVideoItemModel: function (raw) {
    return {
      id: raw.id.videoId,
      src: raw.snippet.thumbnails.medium.url,
      title: raw.snippet.title,
      description: raw.snippet.description
    };
  },
  findByVideoId: function (videoId) {
    return this.find(function (video) {
      return video.id.videoId === videoId;
    });
  }
});

// App Component
const appUI = AppUI.create({
  element: document.getElementById('root'),
  model: {
    title: '바닐라튜브',
    user: '켄'
  }
});

appUI.render();

// Search Bar Component
const searchBarUI = SearchBarUI.create({
  element: document.querySelector('.search-bar'),
  model: {},
  getPageSearchInputValue: function () {
    const pageSearchInputEl = searchBarUI.find('.video-filter-text');
    return pageSearchInputEl.value;
  }
});

searchBarUI.render();

searchBarUI.events({
  click: {
    selector: '.page-search-button',
    handler: function (ev) {
      const inputValue = searchBarUI.getPageSearchInputValue();

      videoListUI.model = {
        videos: videoListModel.data
      };

      videoListUI.render();
    }
  }
});

// Selected Video Component
const selectedVideoItemUI = SelectedVideoItemUI.create({
  element: document.querySelector('.selected-video'),
  model: videoListModel.createSelectedVideoItemModel(VIDEO_DATA[0])
});

selectedVideoItemUI.render();

// Video List Component
const videoListUI = VideoListUI.create({
  element: document.querySelector('.video-list-container'),
  model: {
    videos: videoListModel.map(videoListModel.createVideoItemModel)
  }
});

videoListUI.render();

// You can add events like this!
videoListUI.events({
  click: function (ev) {
    if (ev.target === ev.currentTarget) {
      return;
    }

    var targetVideoEl = findClosestParentWithClass(ev.target, 'video-item');

    if (!targetVideoEl) {
      return;
    }

    var selectedVideoId = targetVideoEl.dataset.id;
    var selectedVideoData = videoListModel.findByVideoId(selectedVideoId);

    selectedVideoItemUI.model = videoListModel.createSelectedVideoItemModel(selectedVideoData);

    selectedVideoItemUI.render();

    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 500);
  }
});
