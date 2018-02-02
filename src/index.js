/*
 * Vanillatube
 * - Vanilla Coding
 */

/*
 * import ~ from 이 무엇일까요?
 * 궁금하시다면 -> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import
 */
import { items as VIDEO_DATA } from './config/sampleData.json';

// const의 특징에 대해 기억하시나요?
// 기억 안나신다면 -> https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const
const videoListEl = document.querySelector('.video-list');
const selectedVideoEl = document.querySelector('.selected-video');
const selectedVideoIframeEl = selectedVideoEl.querySelector('iframe');
const selectedVideoTitleEl = selectedVideoEl.querySelector('h2');
const selectedVideoDescriptionEl = selectedVideoEl.querySelector('p');

selectedVideoIframeEl.src = `https://www.youtube.com/embed/${VIDEO_DATA[0].id.videoId}?autoplay=1`;
selectedVideoTitleEl.textContent = VIDEO_DATA[0].snippet.title;
selectedVideoDescriptionEl.textContent = VIDEO_DATA[0].snippet.description;

VIDEO_DATA.forEach(function (videoData, i, videoList) {
  const videoItemEl = document.createElement('li');
  const videoThumbnailEl = document.createElement('img');
  const videoTitleEl = document.createElement('h2');
  const videoDescriptionEl = document.createElement('p');

  videoDescriptionEl.textContent = videoData.snippet.description;
  videoTitleEl.textContent = videoData.snippet.title;
  videoThumbnailEl.src = videoData.snippet.thumbnails.medium.url;
  videoItemEl.classList.add('video-item');
  videoItemEl.dataset.videoId = videoData.id.videoId;

  videoItemEl.appendChild(videoThumbnailEl);
  videoItemEl.appendChild(videoTitleEl);
  videoItemEl.appendChild(videoDescriptionEl);

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

  selectedVideoIframeEl.src = `https://www.youtube.com/embed/${targetVideoEl.dataset.videoId}?autoplay=1`;
  selectedVideoTitleEl.textContent = targetVideoEl.querySelector('h2').textContent;
  selectedVideoDescriptionEl.textContent = targetVideoEl.querySelector('p').textContent;

  window.scrollTo(0,0);
});

// Object Oriented Programming TODO

// 1. What kind of logics can we abstact out? Observe.

// 2. Write a simple module around the logic. Keep in mind, "Do not optimize prematurely."
// Related link: https://softwareengineering.stackexchange.com/questions/80084/is-premature-optimization-really-the-root-of-all-evil

// 3. Optimize as needed.
