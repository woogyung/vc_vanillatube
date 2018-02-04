/*
 * Vanillatube
 * - Vanilla Coding
 */

/*
 * import ~ from 이 무엇일까요?
 * 궁금하시다면 -> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import
 */
import { items as VIDEO_DATA } from '../config/sampleData.json';

// const의 특징에 대해 기억하시나요?
// 기억 안나신다면 -> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const
const videoListEl = document.querySelector('.video-list');

const videoListItemManager = {
  createElement: function ({ id, title, url, description }) {
    const videoItemEl = document.createElement('li');
    const videoThumbnailEl = document.createElement('img');
    const videoTitleEl = document.createElement('h2');
    const videoDescriptionEl = document.createElement('p');

    videoDescriptionEl.textContent = description;
    videoTitleEl.textContent = title;
    videoThumbnailEl.src = url;
    videoItemEl.classList.add('video-item');
    videoItemEl.dataset.videoId = id;

    videoItemEl.appendChild(videoThumbnailEl);
    videoItemEl.appendChild(videoTitleEl);
    videoItemEl.appendChild(videoDescriptionEl);

    return videoItemEl;
  },
  getData: function (videoListItemEl) {
    return {
      id: videoListItemEl.dataset.videoId,
      title: videoListItemEl.querySelector('h2').textContent,
      description: videoListItemEl.querySelector('p').textContent
    };
  }
};

const selectedVideoEl = document.querySelector('.selected-video');

const selectedVideoItemManager = {
  iframeEl: selectedVideoEl.querySelector('iframe'),
  videoTitleEl: selectedVideoEl.querySelector('h2'),
  videoDescriptionEl: selectedVideoEl.querySelector('p'),
  set: function ({ id, title, description }) {
    this.iframeEl.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
    this.videoTitleEl.textContent = title;
    this.videoDescriptionEl.textContent = description;
  }
};

selectedVideoItemManager.set({
  id: VIDEO_DATA[0].id.videoId,
  title: VIDEO_DATA[0].snippet.title,
  description: VIDEO_DATA[0].snippet.description
});

VIDEO_DATA.forEach(function (videoData, i, videoList) {
  const videoItemEl = videoListItemManager.createElement({
    id: videoData.id.videoId,
    title: videoData.snippet.title,
    description: videoData.snippet.description,
    url: videoData.snippet.thumbnails.medium.url
  });

  videoListEl.appendChild(videoItemEl);
});

videoListEl.addEventListener('click', function onVideoListClick (e) {
  let targetVideoEl;

  if (e.target === e.currentTarget) {
    return;
  }

  if (e.target.parentElement.classList.contains('video-item')) {
    targetVideoEl = e.target.parentElement;
  } else {
    targetVideoEl = e.target;
  }

  const { id, title, description } = videoListItemManager.getData(targetVideoEl);

  selectedVideoItemManager.set({ id, title, description });

  window.scrollTo(0,0);
});

// MVC TODO
