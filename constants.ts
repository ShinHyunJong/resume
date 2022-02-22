export const workExperience = [
  {
    id: 0,
    name: '(주)풀릿',
    position: '대표이사 및 CTO',
    period: '2020. 02 ~ 현재',
    projects: [
      {
        id: 'vero',
        name: '베로',
        description:
          '교육 성장 플랫폼, 디스코드와 같은 채팅 플랫폼의 교육 버전 개발',
        period: '2021. 09 ~ 현재',
        did: '· 일렉트론 \n · 웹소켓 \n · 클라이언트, 서버 설계 및 개발',
        techStack:
          'React, Electron, SWR, Next.js, Typescript / Node.js, express, serverless, lambda',
      },
      {
        id: 'consulting',
        name: '풀릿 컨설팅 시스템 및 CRM',
        description:
          '학부모와 교육 컨설턴트들을 매칭시켜 컨설팅 날짜와 시간을 예약해주는 플랫폼과, 컨설턴트들의 컨설팅 예약, 정산, 상담내역을 관리할 수 있는 시스템 개발',
        period: '2019. 11 ~ 2021. 02',
        did: '· 결제 연동 및 예약시스템 개발\n · 컨설팅을 하기 전 구글폼과 같은 설문 시스템 개발 \n · Github Actions를 통한 CI',
        techStack:
          'React, React Redux, Redux-Saga, Next.js / Node.js, express, serverless, lambda',
      },
      {
        id: 'canvas',
        name: '풀릿 캔버스',
        description: '오프라인 학원에서 이용하는 학습 관리 시스템 개발\n',
        did: '· tus를 이용한 영상 업로드, 과제 등 파일 업로드\n · 학습 성적 데이터를 이용한 통계 및 학부모 알림 서비스\n · 온라인 테스트 시스템',
        techStack:
          'React, React Redux, Redux-Saga / Node.js, express, serverless, lambda',
      },
    ],
  },
  {
    id: 1,
    name: 'TONE',
    position: 'CTO',
    period: '2021. 06 ~ 2022.01',
    projects: [
      {
        id: 'dateplaylist',
        name: '데플리',
        description:
          '연인과 친구들 가족들을 위한 데이트 플랫폼 클라이언트 및 서버 개발',
        period: '2021. 06 ~ 2022. 01',
        did: '· 데이트 장소 맞춤형 큐레이션 기능 개발 \n · 지역 키워드, 통합 검색 기능 개발\n',
        techStack:
          'React-Native, Redux, Redux-Saga / Node.js, express, serverless, lambda, prisma',
      },
    ],
  },
  {
    id: 2,
    name: '(주)수파자',
    position: 'Front-End Engineer',
    period: '2019. 12 ~ 2020.02',
    projects: [
      {
        id: 'supaja',
        name: '수파자 CRM',
        description: '수파자 화상 과외 플랫폼의 고객 관리 시스템 개발',
        period: '2019. 12 ~ 2020. 02',
        did: '· CRM 클라이언트의 설계와 개발\n · HTML캔버스, Web RTC, Record RTC를 활용한 문제풀이 플랫폼 개발',
        techStack: 'React, React-Redux, Redux-Saga',
      },
    ],
  },
  {
    id: 2,
    name: '(주)알고리즘 랩스',
    position: 'Front-End Engineer',
    period: '2018. 08 ~ 2019. 08',
    projects: [
      {
        id: 'alms',
        name: 'ALMS(알고리즘 랩스 학습 관리 시스템)',
        description: '알고리즘 랩스의 코딩 학습 관리 시스템 개발',
        period: '2018. 08 ~ 2019. 08',
        did: '· 코딩 환경 및 채점 클라이언트 개발 \n · 코치 어드민(코치들이 학생들의 코드와 학습현황을 관리할 수 있는 플랫폼 개발)\n · AI에 활용될 학생들의 코드 데이터 축적 알고리즘 개발 \n · 셀레니움을 이용한 UI TEST 개발',
        techStack: 'React, React-Redux, Redux-Saga, Selenium',
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: '웨어비',
    position: 'Front-End, Back-End Engineer',
    period: '2018. 02 ~ 2018.06',
    description: '신체측정을 통해 맞춤형 의상을 추천해주는 서비스 개발',
    did: '· post net api를 통해 신체치수 측정 후 쇼핑몰과 연계',
    techStack: 'pose net, React-Native, node js, express',
  },
  {
    id: 2,
    name: '한양대 캡스톤 프로젝트: CompSight',
    position: 'Front-End, Back-End Engineer',
    period: '2018. 02 ~ 2019.02',
    description:
      '국내 3사 통신사의 뉴스 기사를 다량으로 수집해 기간별 인물과, 핵심 키워드를 뽑아내는 서비스',
    did: '· Daum, Naver API 를 통한 기사 수집\n · node 키워드 추출 API를 통한 데이터 시각화\n  · AWS comprehend를 통한 감정분석',
    techStack: 'React, Node.js, express, MongoDB',
  },
  {
    id: 3,
    name: '코인허브',
    position: 'Front-End, Back-End Engineer',
    period: '2017. 11 ~ 2018.01',
    description: '가상화폐에 대한 정보를 공유하는 플랫폼 클라이언트 개발',
    did: '· Daum, Naver API 를 통한 코인 종목별 뉴스 기사에 SNS기능 탑재',
    techStack: 'React, Node.js, express, MongoDB',
  },
  {
    id: 4,
    name: 'HOOAH!U',
    position: 'Front-End Engineer',
    period: '2016. 11 ~ 2017.06',
    description: '주한 미군을 위한 한국 관광 가이드 플랫폼',
    did: '· 클라이언트 설계 및 개발',
    techStack: 'React, Node.js, express, MongoDB',
  },
];
