// 1️⃣ 애니메이션 데이터 저장 (한 번만 실행하면 됨)
const animeList = [
  {
    id: "001",
    title: "귀멸의 칼날 1기",
    author: "吾峠 呼世晴 ／ Koyoharu Gotouge",
    image: "img/trending/trend-3.jpg",
    description: "숯을 파는 마음씨 착한 소년 탄지로는, 어느 날 혈귀에게 가족을 몰살당한다.유일하게 살아남은 누이동생 네즈코 마저도 혈귀로 변하고 마는데...절망적인 현실에 큰 타격을 입은 탄지로였지만,동생을 인간으로 돌려놓기 위해, 가족을 죽인 혈귀를 심판하기 위해, ‘귀살대’의 길을 가기로 결의한다.인간과 혈귀가 엮어낸 애절한 오누이의 이야기가 지금 시작된다-!",
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
    description: "무한열차의 임무를 마친 탄지로 일행의 다음 행선지는? 귀살대 최고의 검사 ‘주‘의 한 사람 ‘음주' 우즈이 텐겐과 탄지로 일행의 새로운 싸움의 막이 열린다!",
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
    description: "샐러리맨인 미카미 사토루는 길에서 칼에 찔려 죽었다. 하지만 문득 정신이 들어 깨어나보니 이세계로 전생해있었다, 그것도 슬라임의 모습으로! 리무루라는 이름으로 새롭게 슬라임 인생을 얻어, 여러 종족이 함께 사는 세계에 떨어지게 된 그는 '종족은 상관없이 모두가 행복하게 살 수 있는 나라'를 만드는 것을 새로운 인생 목표로 삼게 된다!",
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
    description: "어릴 적 소꿉친구인 오리모토 리카를 교통사고로 눈앞에서 잃은 옷코츠 유타. '약속해, 리카와 유타는 어른이 되면 결혼하기로' 옷코츠는 원령으로 변한 리카의 저주에 괴로워한 나머지, 자신도 죽기를 바라지만 최강의 주술사인 고죠 사토루에 의해 주술고전에 들어가게 된다. 그리고 동급생인 젠인 마키, 이누마키 토게, 판다를 만나면서 굳은 결심을 한다. '살아도 된다는 자신감이 필요해' '나는 주술고전에서 리카의 저주를 풀겠습니다' 한편, 옷코츠와 친구들 앞에 과거에 일반인을 대량으로 학살해서 고전에서 추방된 최악의 주저사인 게토 스구루가 나타난다. '12월 24일, 우리는 백귀야행을 결행한다' 주술사만의 낙원을 만들려는 게토는 비술사를 섬멸하겠다면서, 신주쿠와 교토에 천의 저주를 내리는데…과연 옷코츠는 게토를 막을 수 있을까? 그리고 리카의 저주를 풀 수 있을까?",
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
    description: "큐슈의 작은 마을에서 살고 있는 소녀 ‘스즈메’는 어느 날, 여행을 하며 ‘문’을 찾고 있는 한 청년을 만난다. 그의 뒤를 쫓아간 소녀는 산속 폐허에서 덩그러니 남겨진 낡은 문을 발견한다. 무언가에 이끌린 듯 ‘스즈메’는 문으로 손을 뻗는데… 2023년, ‘문단속을 위한 여행’이 시작된다!",
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
    description: "사무라이의 영혼을 건, 최후의 난리법석이 시작된다! 해결사 긴토키 일행이 뿔뿔이 흩어진 지 2년 후, 지구 멸망을 향한 카운트다운이 시작된다. 부활한 우츠로를 막기 위해 긴토키 3인방과 예전의 동료들, 라이벌들까지 모두 합세하는데. 모두의 운명을 건 최후의 결전!",
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
    description: "메이지 원년(1868년) 시기, 신센구미의 부장인 히지카타 토시조의 이야기로 영화가 시작된다. 성릉도(星稜刀세이 료 토)[1]를 선물로 받는 토시조가 정부군의 습격을 받고, 이후 장면은 토시조가 병풍 뒤에 있는 정부군을 칼로 찌른 자국을 보고 있는 에도가와 코난으로 전환된다. 모리 코고로와 코난은 오노에 가의 저택에 방문한 상태로, 오노에 가의 창고는 '오늘 밤 자정에 오노에 가가 보관하고 있던 히가시쿠보가 만든 검을 훔치러 가겠다'라는 괴도 키드의 예고장 때문에 경비가 삼엄한 상황이었다.  코난은 이리저리 돌아다니다 오노에 타쿠조가 히사가키라는 사람이 오지 않아 화를 내며 전화하고 있는 것을 목격하지만, 이내 코고로에게 제지당한다. 코고로와 코난은 스즈키 소노코와 화상 통화로 잡다한 이야기[2]를 나누며, 오노에 가에는 키드가 노리는 빅 쥬얼이 없는데다가 가지러 간다는 검도 히가시쿠보 에이타츠라는 무명 장인이 만든 역사적 가치도 없는 검이라서 의아해 하고 있었다.",
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
    description: "모든 악당이 두려워하고 모든 살인청부업자들이 동경하던 그 남자는―― 어느 날, 사랑에 빠졌다!!!  편의점에서 일하는 아오이에게 첫눈에 반한 사카모토는 산뜻하게 살인청부업자를 은퇴한다. 결혼을 하고, 딸이 생기며, 시간이 지나 평온한 마을에서 개인 상점을 운영하는 사카모토는,  전의 모습은 찾아볼 수 없을 정도로…… 살이 쪘다!!  사랑하는 가족과의 평화로운 일상을 지키기 위해, 전직・전설의 살인청부업자가 계속해서 찾아오는 자객에 도전한다. 일상×비일상의 네오 액션 스토리, 여기에 개막!!",
    genre: "코미디, 액션",
    studio: "TMS Entertainment",
    episodes: "22",
    rating: "9.0"
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
    description: "저기, 알고 있니? 카모메 학원의 7대 불가사의  구교사 3층 여자 화장실. 거기엔 하나코 씨가 있는데, 무언가 하나를 대가로 자신을 불러낸 사람의 소원을 이루어 준대. 불러내는 방법은 노크 세 번.  그리고--  '하나코 씨, 하나코 씨, 계세요?'  7대 불가사의 7번째 '화장실의 하나코 씨'인 '하나코 군'과 인연을 맺은 소녀, 야시로 네네. 퇴마사 가문의 소년 미나모토 코우. 두 사람은 하나코 군과 함께 소문이 바뀌어 버린 7대 불가사의와 괴이들의 소문을 원래대로 되돌리기 위해 매일 분투하며 뛰어다니고 있다.",
    genre: "판타지, 미스터리",
    studio: "Lerche",
    episodes: "12",
    rating: "8.8"
},
{
    id: "013",
    title: "닥터스톤 4기",
    author: "稲垣理一郎 ／ Riichiro Inagaki",
    image: "img/recent/recent-5.jpg",
    description: "보물섬에서의 격전을 마치고, 무사히 과학왕국으로 귀환한 센쿠 일행. 손에 넣은 석화 장치로, 콜드 슬립 하고 있던 츠카사를 부활시키는 데 성공. 츠카사는 과학 왕국의 동료가 되었다! 그리고 인류 석화의 흑막・와이맨의 본거지가 '달'임을 알아낸 센쿠 일행은, 달을 목표로 한다! 이 스톤월드에서, 처음부터 우주선을 만드는 빅 프로젝트를 시작한다.",
    genre: "SF, 모험",
    studio: "TMS Entertainment",
    episodes: "24",
    rating: "8.8"
},
{
    id: "014",
    title: "황혼호텔",
    author: "TBD",
    image: "img/recent/recent-6.jpg",
    description: "미스터리한 호텔에서 벌어지는 사건과 주인공이 마주하는 진실을 담은 서스펜스 스토리.",
    genre: "추리, 스릴러",
    studio: "PRA",
    episodes: "12",
    rating: "8.0"
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
description: "습격해 온 엘자 일행의 맹공을 물리치고 대토와의 싸움에서 베아트리스와의 계약에 성공한 '성역'의 해방으로부터 1년이 지났다. 왕선에 임하는 에밀리아 진영은 일치단결해서 충실한 나날을 보내고 있던 나츠키 스바루였지만 그런 평화는 다른 진영의 사자가 가지고 온 한 장의 편지를 계기로 끝을 알렸다. 그것은 왕선 후보자 중 한 명인 아나스타시아가 에밀리아에게 보내는 루그니카 왕국의 오대 도시 중 하나인 수문도시 프리스텔라로의 초대장이었다. 초대를 받아들이고 프리스텔라로 향하는 스바루 일행을 기다리고 있던 것은 다양한 재회였다. 하나는 예상 밖의, 하나는 의도하지 않은, 그리고 하나는 언젠가 도래했을. 물밑에서 꿈틀대는 악의의 태동과 함께 닥쳐오는 미증유의 위기. 소년은 다시 한번 가혹한 운명과 맞선다.",
genre: "이세계, 판타지",
studio: "WHITE FOX",
episodes: "16",
rating: "9.7"
},
{
id: "024",
title: "스파이 패밀리",
author: "遠藤 達哉 ／ Tatsuya Endo",
image: "img/trending/trend-6.jpg",
description: "'사람은 누구나 아무에게도 보여줄 수 없는 자신을 갖고 있다-- 세계 각국이 물밑에서 치열하게 정보전을 펼치는 시대. 오스타니아와 웨스탈리스는 십수 년간에 걸쳐 냉전 상태에 있었다. 웨스탈리스의 정보국 대동과 소속의 수완가 스파이인 <황혼>은 동서 평화를 위협하는 위험인물, 오스타니아의 국가통일당 총재 도노반 데스몬드의 동향을 살피기 위해 어떤 극비 임무를 수행하게 된다. 그 이름은 오퍼레이션 <올빼미>. 임무 내용은 일주일 이내에 가족을 만들어, 데스몬드의 아들이 다니는 명문 학교의 친목회에 잠입하라. <황혼>은 정신과 의사 로이드 포저로 위장하고 가족을 만들게 된다. 하지만, 그가 만난 딸 아냐는 마음을 읽을 수 있는 초능력자, 아내 요르는 암살자였다! 3명의 이해가 일치하여 서로 정체를 숨기면서 함께 생활하게 되는데.해프닝 연속인 임시 가족에게, 세계의 평화는 맡겨졌다──.",
genre: "일상, 개그, 첩보",
studio: "WIT STUDIO x CloverWorks",
episodes: "25",
rating: "9.8"
},
{
id: "025",
title: "은혼",
author: "空知英秋 ／ Hideaki Sorachi",
image: "img/hero/hero-4.webp",
description: "외계인들이 습격으로 지구인과 천인 사이에 20여년에 걸친 전쟁으로 대다수의 무사와 양이지사(攘夷志士)가 천인이 벌인 전쟁에 참가했다. 하지만 천인의 막강한 힘에 무릎을 꿇은 막부는 천인의 침략을 인정하고 조약을 체결하게 된다. 무사들은 폐도령(廢刀令)으로 칼을 잃고, 막부는 천인이 세운 괴뢰정권으로 변했다. 이 내용은 실제 일어난 쿠로후네 사건을 모티브로 하고, 에도 시대와 현대 문화 및 우주선을 자신의 감각에 맞게 섞어 놓았다. 이 무렵 은발의 무사인 사카타 긴토키가 동료들과 함께 기상천외한 생활을 겪는 이야기.",
genre: "일상, 개그",
studio: "TV 도쿄, 덴츠",
episodes: "367",
rating: "9.8"
},
{
  id: "026",
  title: "소드 아트 온라인",
  author: "遠藤 達哉 ／ Tatsuya Endo",
  image: "img/hero/hero-5.webp",
  description: "2022년. 인류는 마침내 완전한 가상 공간을 실현했다. 모든 게이머가 꿈꿔왔던 VRMMORPG (가상 대규모 온라인 롤 플레잉 게임)  '소드 아트 온라인' 이 정식 가동을 시작한다. 주인공은 소드 아트 온라인 플레이어인 키리토.  그는 SAO의 세계에서 플레이를 만끽하던 중 다른 1만 명의 플레이어와 함께 게임 마스터의 무자비한 선고를 듣는다. 100층까지 있다는 부유성 아인크라드의 정상을 정복해 게임을 클리어 하지 못하면 로그아웃을 할 수 없다고… 그리고 게임 오버는 현실 세계에서 '죽음'을 의미한다고... 키리토는 재빨리 게임의 '진실'을 받아들이고 파티를 짜지 않는 솔로 플레이어로 끝이 보이지 않는 사투에 몸을 던진다.",
  genre: "가상현실, SF",
  studio: "A-1 Pictures",
  episodes: "24",
  rating: "9.8"
  }
];

// 데이터가 없을 경우 로컬스토리지에 저장
if (!localStorage.getItem("animeList")) {
  localStorage.setItem("animeList", JSON.stringify(animeList));
}

// 2️⃣ URL에서 ID 가져오기
function getAnimeIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

// 3️⃣ 애니메이션 데이터 불러오기
function getAnimeDetails(animeId) {
    const animeList = JSON.parse(localStorage.getItem("animeList")) || [];
    return animeList.find(a => a.id === animeId);
}

// 4️⃣ 페이지에 데이터 표시
function displayAnimeDetails() {
    const animeId = getAnimeIdFromURL();
    if (!animeId) {
        console.error("애니 ID가 URL에 없습니다.");
        return;
    }
    
    const anime = getAnimeDetails(animeId);
    if (!anime) {
        console.error("해당 ID의 애니 정보를 찾을 수 없습니다:", animeId);
        return;
    }

    console.log("현재 애니 정보:", anime);

    document.getElementById("animeTitle").textContent = anime.title;
    document.getElementById("animeAuthor").textContent = anime.author;
    document.getElementById("animeDescription").textContent = anime.description;
    document.getElementById("animeImage").style.backgroundImage = `url(${anime.image})`;

    // 상세 정보 업데이트
    document.getElementById("animeDetails").innerHTML = `
        <li><span>장르:</span> ${anime.genre}</li>
        <li><span>제작사:</span> ${anime.studio}</li>
        <li><span>에피소드:</span> ${anime.episodes}</li>
        <li><span>평점:</span> ${anime.rating}</li>
    `;
}

// 5️⃣ 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", function() {
  displayAnimeDetails(); // 애니 정보를 가져와서 화면에 표시하는 함수

  // 클릭 이벤트 추가 (리스트에서 애니 선택 시 상세 페이지로 이동)
  document.querySelectorAll(".anime-item").forEach(item => {
      item.addEventListener("click", function(event) {
          let animeId = this.dataset.id;
          if (!animeId) {
              console.error("애니메이션 ID가 없습니다.");
              return;
          }
          window.location.href = `anime-details.html?id=${animeId}`;
      });
  });
});

// 현재 페이지에서 URL의 ID 가져오기
const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get("id");

