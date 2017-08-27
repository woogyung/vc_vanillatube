/*
 * AJAX Quiz
 * - Vanilla Coding
*/

// $ 변수를 이용하여 jQuery를 사용합니다.
// jQuery는 ajax 요청이외의 목적으로는 사용하지 마세요.
// 절대 지우지 마세요!
import $ from 'jquery';

/*
 * 사용할 수 있는 강아지 종류입니다.
 * 아래의 배열에 담겨있는 종의 강아지들을 사용자가 선택할 수 있도록 UI를 자유롭게 만들어 주세요.
 */
var breeds = [
    'bulldog',
    'chihuahua',
    'collie',
    'corgi',
    'husky',
    'labrador',
    'poodle',
    'pug',
    'retriever',
    'shiba'
];

/*
 *
 * 웹페이지에 각각의 종을 보여주도록 수정하는 부분입니다.
 * 다른 형식으로 바꾸셔도 좋습니다.
 *
 */
var breedListEl = document.getElementById('breed-list');

breeds.forEach(function (breed) {
    var listEl = document.createElement('li');

    listEl.textContent = breed;
    breedListEl.appendChild(listEl);
});



/*
 *
 * 1. 이벤트 등록하기
 *
 * 사용자가 하나의 강아지종을 click했을때
 * 선택한 종을 event 객체에서 찾아서 fetchPhotoURL을 실행시키세요.
 *
 */




/*
 * 2. AJAX 요청
 *
 * 성공적으로 response를 받으면, 받은 데이터에서 사진 url을 찾아서 UI에 해당 사진을 보여주세요.
 * 기존에 선택했던 사진이 있다면, 교체해야 합니다.
 *
 * 보너스: 한번 가져온 데이터는 다시 또 요청이 나가지 않도록 해주세요.
 */
function fetchPhotoURL (breed) {
    var apiURL = 'https://dog.ceo/api/breed/' + breed + '/images/random';
    $.get(apiURL, function (data) {
        console.log('Success: ', data);
    });
}
