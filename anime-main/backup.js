// localStorage.js

const animeData = [
  {
      id: "001",
      title: "귀멸의 칼날 1기",
      author: "吾峠 呼世晴 ／ Koyoharu Gotouge",
      image: "img/trending/trend-3.jpg",
      description: "가족을 도깨비에게 몰살당한 소년 탄지로가 도깨비 사냥꾼이 되어 동생 네즈코를 인간으로 되돌리기 위해 싸우는 이야기.",
      genre: "액션, 판타지",
      studio: "ufotable",
      episodes: "26",
      rating: "8.9"
  },
  {
      id: "002",
      title: "귀멸의 칼날 환락의 거리편",
      author: "吾峠 呼世晴 ／ Koyoharu Gotouge",
      image: "img/trending/trend-4.jpg",
      description: "귀살대 최고 전력인 '음주' 우즈이 텐겐과 함께 환락가에서 강력한 상현 도깨비를 추적하는 탄지로 일행의 이야기.",
      genre: "액션, 판타지",
      studio: "ufotable",
      episodes: "11",
      rating: "9.1"
  },
  {
      id: "003",
      title: "전생했더니 슬라임이 되었던 건에 대하여 1기",
      author: "伏瀬 ／ Fuse",
      image: "img/trending/trend-5.jpg",
      description: "평범한 직장인이 이세계에서 슬라임으로 환생해 강력한 힘을 얻고 새로운 세계를 개척하는 모험 판타지.",
      genre: "이세계, 판타지",
      studio: "8bit",
      episodes: "24",
      rating: "8.5"
  },
  {
      id: "004",
      title: "주술회전 0",
      author: "芥見 下々 ／ Gege Akutami",
      image: "img/popular/popular-1.jpg",
      description: "특급 주술사 옷코츠 유타가 저주를 풀기 위해 주술 고등학교에 입학하여 강력한 저주들과 싸우는 이야기.",
      genre: "오컬트, 액션",
      studio: "MAPPA",
      episodes: "Movie",
      rating: "8.8"
  },
  {
      id: "005",
      title: "스즈메의 문단속",
      author: "新海 誠 ／ Makoto Shinkai",
      image: "img/popular/popular-2.jpg",
      description: "일본 곳곳에 존재하는 재난을 막기 위해 신비한 문을 닫는 소녀 스즈메의 성장과 모험을 그린 이야기.",
      genre: "판타지, 드라마",
      studio: "CoMix Wave Films",
      episodes: "Movie",
      rating: "8.7"
  },
  {
      id: "006",
      title: "더 퍼스트 슬램덩크",
      author: "井上 雄彦 ／ Takehiko Inoue",
      image: "img/popular/popular-3.jpg",
      description: "전설적인 농구 만화 '슬램덩크'의 극장판, 강백호와 송태섭을 중심으로 한 새로운 시점의 이야기.",
      genre: "스포츠, 드라마",
      studio: "Toei Animation",
      episodes: "Movie",
      rating: "9.0"
  },
  {
      id: "007",
      title: "은혼 더 파이널",
      author: "空知英秋 ／ Hideaki Sorachi",
      image: "img/popular/popular-4.jpg",
      description: "은혼의 최종장! 사카타 긴토키와 동료들이 인류의 운명을 건 최후의 전투를 펼친다.",
      genre: "코미디, 액션, 시대극",
      studio: "BN Pictures",
      episodes: "Movie",
      rating: "9.2"
  },
  {
      id: "008",
      title: "명탐정 코난: 척안의 잔상",
      author: "青山 剛昌 ／ Gosho Aoyama",
      image: "img/popular/popular-5.jpg",
      description: "코난과 FBI가 베일에 싸인 새로운 적 '검은 조직'과의 대결을 펼치는 극장판.",
      genre: "추리, 액션",
      studio: "TMS Entertainment",
      episodes: "Movie",
      rating: "8.6"
  },
  {
      id: "009",
      title: "명탐정 코난: 100만 달러의 펜타그램",
      author: "青山 剛昌 ／ Gosho Aoyama",
      image: "img/popular/popular-6.jpg",
      description: "코난과 친구들이 숨겨진 유산을 둘러싼 거대한 음모에 맞서는 스릴 넘치는 모험.",
      genre: "추리, 액션",
      studio: "TMS Entertainment",
      episodes: "Movie",
      rating: "8.5"
  },
  {
      id: "010",
      title: "사카모토 데이즈",
      author: "鈴木祐斗 ／ Yuto Suzuki",
      image: "img/recent/recent-2.jpg",
      description: "전설적인 킬러 사카모토가 은퇴 후 평범한 마트 사장으로 살아가려 하지만, 과거가 그를 가만두지 않는다!",
      genre: "코미디, 액션",
      studio: "TBD",
      episodes: "TBD",
      rating: "TBD"
  },
  {
      id: "011",
      title: "나 혼자만 레벨업",
      author: "추공",
      image: "img/recent/recent-3.jpg",
      description: "헌터들이 몬스터를 사냥하는 세계에서 가장 약했던 주인공이 최강의 헌터로 성장하는 이야기.",
      genre: "판타지, 액션",
      studio: "A-1 Pictures",
      episodes: "12",
      rating: "8.9"
  },
  {
      id: "012",
      title: "지박소년 하나코 군 2기",
      author: "あいだいろ ／ AidaIro",
      image: "img/recent/recent-4.jpg",
      description: "학교 괴담의 한 명이자 화장실 유령인 하나코 군의 새로운 사건과 모험이 펼쳐진다.",
      genre: "판타지, 미스터리",
      studio: "Lerche",
      episodes: "TBD",
      rating: "TBD"
  },
  {
      id: "013",
      title: "닥터스톤 4기",
      author: "稲垣理一郎 ／ Riichiro Inagaki",
      image: "img/recent/recent-5.jpg",
      description: "문명이 멸망한 세계에서 천재 소년이 과학의 힘으로 인류 문명을 다시 세우는 이야기.",
      genre: "SF, 모험",
      studio: "TMS Entertainment",
      episodes: "TBD",
      rating: "TBD"
  },
  {
      id: "014",
      title: "황혼호텔",
      author: "TBD",
      image: "img/recent/recent-6.jpg",
      description: "미스터리한 호텔에서 벌어지는 사건과 주인공이 마주하는 진실을 담은 서스펜스 스토리.",
      genre: "추리, 스릴러",
      studio: "TBD",
      episodes: "TBD",
      rating: "TBD"
  },
  {
    id: "015",
    title: "주술회전 1기",
    author: "芥見 下々 ／ Gege Akutami",
    image: "img/trending/trend-1.jpg",
    description: "쓰라린 고통, 후회, 치욕 인간으로부터 흘러나온 부정적인 감정이 저주로 변해 일상에 숨어든다, 저주는 세상에 만연한 재앙의 근원이며, 최악의 경우 인간을 죽음으로 이끈다. 그리고 저주는 저주로밖에 없앨 수 없다. 경이적인 신체능력을 가진 소년 이타도리 유지는 아주 평범한 고등학생이었지만, 어느 날 저주에 습격당한 친구를 구하기 위해 특급 주물 양면 스쿠나의 손가락을 먹고 영혼에 저주가 깃들게 된다. 저주인 양면 스쿠나 와 몸을 공유하게 된 이타도리는 최강의 주술사인 고죠 사토루의 안내로 저주에 대항하는 전문 기관인 도쿄 도립 주술 고등전문학교에 편입하게 되는데.....저주를 없애기 위해 저주가 된 소년의 돌이킬 수 없는 장렬한 이야기가 움직이기 시작한다",
    genre: "오컬트, 액션",
    studio: "MAPPA",
    episodes: "24",
    rating: "9.0"
},
{
    id: "016",
    title: "주술회전 회옥옥절",
    author: "芥見 下々 ／ Gege Akutami",
    image: "img/trending/trend-2.jpg",
    description: "최강의 두 사람이, 이제는 돌아갈 수 없는 푸르른 봄날. 2018년 6월, 양면 스쿠나를 자기 몸속에 깃들게 한 이타도리 유지. 2017년 12월, 오리모토 리카의 저주를 푼 옷코츠 유타. 그리고 더 거슬러 올라가서 때는 2006년 봄. 고전 시절의 고죠 사토루와 게토 스구루. 주술사로서 활약하며 어디에도 적수가 없는 두 사람에게, 불사의 술식을 가진 주술계의 주축 텐겐으로부터 의뢰가 도착한다. 의뢰 내용은 두 가지. 텐겐과의 적합자인 성장체(星漿体) 아마나이 리코의 호위와 말소.",
    genre: "오컬트, 액션",
    studio: "MAPPA",
    episodes: "23",
    rating: "9.2"
},    
{
  id: "017",
  title: "바람의 검심",
  author: "和月伸宏 ／ Nobuhiro Watsuki",
  image: "img/live/live-1.jpg",
  description: "메이지 시대를 배경으로, 전설적인 검객 히무라 켄신이 더 이상 살인을 하지 않겠다는 맹세를 지키며 살아가는 이야기.",
  genre: "사무라이, 액션",
  studio: "Warner Bros. Japan",
  episodes: "Movie",
  rating: "8.5"
},
{
  id: "018",
  title: "도쿄구울",
  author: "石田スイ ／ Sui Ishida",
  image: "img/live/live-2.jpg",
  description: "인간을 먹는 괴물 '구울'과 인간 사이에서 고통받는 주인공 카네키 켄의 생존과 투쟁을 그린 이야기.",
  genre: "다크 판타지, 호러",
  studio: "Shochiku",
  episodes: "Movie",
  rating: "7.2"
},
{
  id: "019",
  title: "은혼 (실사판)",
  author: "空知英秋 ／ Hideaki Sorachi",
  image: "img/live/live-3.jpg",
  description: "사무라이와 외계인이 공존하는 시대에서 긴토키와 친구들이 좌충우돌하며 벌이는 코미디 액션.",
  genre: "코미디, 액션",
  studio: "Warner Bros. Japan",
  episodes: "Movie",
  rating: "7.9"
},
{
  id: "020",
  title: "데스노트 (실사판)",
  author: "大場つぐみ・小畑健 ／ Tsugumi Ohba & Takeshi Obata",
  image: "img/live/live-4.jpg",
  description: "신비한 노트 '데스노트'를 손에 넣은 라이토가 절대 정의를 실현하기 위해 벌이는 두뇌 싸움.",
  genre: "스릴러, 심리전",
  studio: "Warner Bros. Japan",
  episodes: "Movie",
  rating: "7.6"
},
{
  id: "021",
  title: "크로우즈 제로 2",
  author: "髙橋ヒロシ ／ Hiroshi Takahashi",
  image: "img/live/live-5.jpg",
  description: "불량 학생들의 전쟁, 스즈란 고등학교에서 펼쳐지는 새로운 세력 간의 싸움과 우정.",
  genre: "액션, 청춘",
  studio: "Toho",
  episodes: "Movie",
  rating: "8.0"
},
{
  id: "022",
  title: "진격의 거인 (실사판)",
  author: "諫山創 ／ Hajime Isayama",
  image: "img/live/live-6.jpg",
  description: "거대한 벽으로 둘러싸인 인간 세계, 거인들의 침공에 맞서 싸우는 인류의 생존기.",
  genre: "다크 판타지, 액션",
  studio: "Toho",
  episodes: "Movie",
  rating: "6.5"
},
{
  id: "023",
  title: "Re: 제로부터 시작하는 이세계 생활 3기",
  author: "長月 達平 ／ Tappei Nagatsuki",
  image: "img/recent/recent-1.jpg",
  description: "습격해 온 엘자 일행의 맹공을 물리치고, '성역'의 해방으로부터 1년이 지난 후의 이야기. 나츠키 스바루와 에밀리아 일행이 새로운 도전에 맞선다.",
  genre: "이세계, 판타지",
  studio: "WHITE FOX",
  episodes: "TBD",
  rating: "9.7"
},
{
  id: "024",
  title: "스파이 패밀리",
  author: "遠藤 達哉 ／ Tatsuya Endo",
  image: "img/hero/hero-2.jpg",
  description: "스파이 아빠, 초능력 딸, 암살자 엄마가 비밀을 간직한 채 가족으로 살아가는 코미디 첩보 액션.",
  genre: "일상, 개그, 첩보",
  studio: "WIT STUDIO x CloverWorks",
  episodes: "25",
  rating: "9.8"
},
{
  id: "025",
  title: "은혼",
  author: "遠藤 達哉 ／ Tatsuya Endo",
  image: "img/hero/hero-4.webp",
  description: "사무라이의 나라.우리의 나라가 그렇게 불리던 것은 지금은 이제는 먼 옛 이야기이다.20년 전 갑작스럽게 우주에서 내려온 천인의 개항과 폐도령에 의해 사무라이는 쇠퇴의 길을 걷게 된다...",
  genre: "일상, 개그",
  studio: "TV 도쿄, 덴츠",
  episodes: "367",
  rating: "9.8"

}
];





document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('id');  // animeId가 null 또는 undefined인지 확인
console.log("애니 ID:", animeId);

  if (!animeId) {
      console.error("애니메이션 ID가 URL에 없음!");
      return;  // ID 없으면 더 진행할 필요 없음
  }

  window.animeList = JSON.parse(localStorage.getItem("animeList")) || [];
  const anime = animeList.find(a => a.id === animeId);
  console.log("애니 목록:", animeList);

  if (!anime) {
      console.error("해당 ID의 애니메이션을 찾을 수 없습니다:", animeId);
      return;  // anime 데이터가 없으면 더 진행할 필요 없음
  }

  // 요소 존재 여부를 먼저 확인 후 값 할당
  const titleElement = document.querySelector(".anime_details_title");
  if (titleElement) titleElement.textContent = anime.title;

  const authorElement = document.querySelector(".anime_details_author");
  if (authorElement) authorElement.textContent = anime.author;

  const picElement = document.querySelector(".anime_details_pic");
  if (picElement) picElement.style.backgroundImage = `url(${anime.image})`;

  const descElement = document.querySelector(".anime_details_description");
  if (descElement) descElement.textContent = anime.description;

  const widgetElement = document.querySelector(".anime__details__widget");
  if (widgetElement) {
      widgetElement.innerHTML = `
          <li><span>장르:</span> ${anime.genre}</li>
          <li><span>제작사:</span> ${anime.studio}</li>
          <li><span>에피소드:</span> ${anime.episodes}</li>
          <li><span>평점:</span> ${anime.rating}</li>
      `;
  }

  // anime 데이터가 없을 경우 description 기본 메시지 설정
  if (!anime) {
      if (descElement) {
          descElement.textContent = "애니메이션 정보를 찾을 수 없습니다.";
      }
  }
});



// localStorage에 데이터 저장 (중복 방지)
if (!localStorage.getItem("animeList")) {
  localStorage.setItem("animeList", JSON.stringify(animeData));
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
function clearLocalStorage() {
  localStorage.clear();
}

