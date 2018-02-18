/*
 * Vanillatube
 * - Vanilla Coding
 */
import { items as VIDEO_DATA } from '../config/sampleData.json';

import Model from './gorilla/Model';

import Router from './gorilla/Router';

import AppUI from './components/App';
import SelectedVideoItemUI from './components/SelectedVideoItem';
import VideoListUI from './components/VideoList';
import SearchBarUI from './components/SearchBar';

import { findClosestParentWithClass } from './utils/domUtils';

// `getYouTubeData`라는 변수에 유투브 데이터를 가져올 수 있는 함수가 담겨 있습니다.
// `utils/youtube` 파일에 가셔서 본인의 유튜브 API KEY를 넣어주세요.
import { getYouTubeData } from './utils/youtube';

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

// Router
const router = new Router({
  item: {
    path: function ({ param }) {
      return `/items/${param}`;
    }
  }
});

// Param value gets passed into the path function
const defaultVideoId = window.location.hash.split('items/')[1] || VIDEO_DATA[0].id.videoId;

router.set('item', {
  param: defaultVideoId
});

// 1. Show Interest for a topic and subscribe
router.on('item', function ({ param }) {
  showSelectedVideo(param);
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
      const filteredModel = videoListModel.filter(function (data) {
        return data.snippet.title.indexOf(inputValue) > -1;
      });

      videoListUI.model = {
        videos: filteredModel.map(videoListModel.createVideoItemModel)
      };

      videoListUI.render();
    }
  }
});

// Selected Video Component
const defaultVideoData = videoListModel.find({ id: { videoId: defaultVideoId } });

const selectedVideoItemUI = SelectedVideoItemUI.create({
  element: document.querySelector('.selected-video'),
  model: videoListModel.createSelectedVideoItemModel(defaultVideoData)
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

    // 2. New Action - Publish
    router.set('item', {
      param: targetVideoEl.dataset.id
    });

    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 500);
  }
});

function showSelectedVideo (videoId) {
  var selectedVideoId = videoId;
  var selectedVideoData = videoListModel.findByVideoId(selectedVideoId);

  selectedVideoItemUI.model = videoListModel.createSelectedVideoItemModel(selectedVideoData);

  selectedVideoItemUI.render();
}
