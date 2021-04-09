import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommunityList from './Components/CommunityList';

const FEED = [
  {
    id: 1,
    name: 'Jieun-Yang',
    date: '3 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HUFSP37F-3effa2c4b2de-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMTY0/MDAxNjE3NzY2Nzg5Nzc4.w3IbGXuAOx2GHD8NYbllncuKQsfvXPnKBkZ4YHYP0D4g.j_B6K24VnT7cqYycUfsU1R78YA3trvqLf0tvG20TThwg.PNG.maplesosser/image.png?type=w966',
    text: '미현님 분란 일으키지 마세요',
    hashTag: '#왕십리 #호주 #OODT',
  },
  {
    id: 2,
    name: 'Sehyeong-Kim',
    date: '23 days ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HQQX7Q3G-e487e2d19f0d-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMTAy/MDAxNjE3NzY5NTk0MDA1.IIimh8dGPLfeSlSL2jysBYlAZhU0H_d07PfCBShZgtsg.y5xLuf8c-RAE2HqpVkElrLv6o6LKlAb7wNTVskaMQDEg.PNG.maplesosser/image.png?type=w966',
    text: "결혼정보회사 듀오 설문에 참여한 미혼남녀는 가장 합리적인 데이트 비용 분담 방법으로 '수입이 높은 쪽이 더 많이 낸다'(53.8%)를 꼽았다.",
    hashTag: '#남친구함',
  },

  {
    id: 3,
    name: 'Mihyeon-Kim',
    date: '10 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01BUTEH43F-07d3e47d80a0-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMTQw/MDAxNjE3NzY5NDU5MjM0.eeG-uZ8DYLJJTZznlXOvn6huuZ0KFKCi2kzmE0hhtTkg.wwNzttM6C-ibkKoxo304fmPSk9xQlV6P_0Af0KpzcBsg.PNG.maplesosser/image.png?type=w966',
    text: '선배 로그인과 후배 로그인의 진솔한 대화가 필요할 거 같아요 ~',
    hashTag: '#로그인 ',
  },
  {
    id: 4,
    name: 'Songhee-Choi',
    date: '5 days ago',
    profile_img: ' https://ca.slack-edge.com/TH0U6FBTN-U018V3NJ69E-2d2cb7428bad-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMjUx/MDAxNjE3NzcwNjIwMDM0.VdcsZYc_udRUKU7FG-AeL-6eziIyQMlysyXF22pgftgg.hhd7z-2qjjjNlvvBuNKHJ61BdnYFAJOpFE6D_UpNIPUg.PNG.maplesosser/image.png?type=w966',
    text: '여기가 이탈리아 였다면 당신은 이미... ',
    hashTag: '#위코드데이에봐요~',
  },
  {
    id: 5,
    name: 'Sunghun-Bae',
    date: '2 months ago',
    profile_img: ' https://ca.slack-edge.com/TH0U6FBTN-U01HGQZ9LG7-850e55179786-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfNjYg/MDAxNjE3Nzk0NzQwMjM1.2BsBLogjO-FDFg3O5t1Sj0nfzRz2LPjHISXS60ZQaUIg.m1zq2p906X4bubcq5J40k3ZoO2gaTVxKiam1ATIkrLEg.PNG.maplesosser/image.png?type=w966',
    text:
      '2차 프로젝트는 직방으로 결정이 났다. 우린 방을 보여주는것이 아닌 맛집의 가게를 보여주기로 하여 팀의 이름을 먹방으로 지었다.(먹방... 왠지 느낌이 좋다)',
    hashTag: '#아자아자',
  },
  {
    id: 6,
    name: 'Kyeonghyeon-Park',
    date: '11 days ago',
    profile_img:
      'https://postfiles.pstatic.net/MjAyMTA0MDNfMTQx/MDAxNjE3NDUzOTA3Njc5.tuPDVnn-ATwzl5V09tddg1-tLAh4H6P6bhihC-bdvS8g.yC0MyyEglP4BgRb7rg3P0Ird9cK3e8rPVaQwIntiaksg.PNG.maplesosser/image.png?type=w966',
    image:
      ' https://postfiles.pstatic.net/MjAyMTA0MDdfMTEz/MDAxNjE3Nzk1MzA4MjAx.HuruBF11NDmcKLDLm3ez8WIOgyVifrjCFpVXlILzIogg.W8se9a73Q5HINvWPZuvLPCl2VMqxF2cwo5fXKete-Y0g.PNG.maplesosser/image.png?type=w966',
    text: '각선미 하면 저죠 !',
    hashTag: '#구로',
  },
  {
    id: 7,
    name: 'Dahye-Song',
    date: 'a months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01BXEAETPG-50a4aa71a3b5-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMTM4/MDAxNjE3NzgxNDg2OTU2.Xnfko3AQK-e4q-2ZTbYqqatHWDpuAwJhbcisWsHifaEg.btZQ9fg_kFm4btFgdjdKIuM0yZy5QlEfSq1KE0GHYy0g.PNG.maplesosser/image.png?type=w966',
    text: '저는 곱빼기로 시킬게요 ~ ',
    hashTag: '#오산으로놀러오세요',
  },
  {
    id: 8,
    name: 'Jiyeong-Han',
    date: '12 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HUFSUUER-340af7cccfca-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMjYw/MDAxNjE3Nzc1ODYwNTkz.igNZPRrUHxlk0l9KJyAyGVq0qYN1kgmOnjlzzH-i1eIg.p59WWbWHLMh-VccizhE03XlyLOohInYMmm_0NO7ohfog.PNG.maplesosser/image.png?type=w966',
    text: '나 진짜 알쓰인데,, 같이 일하는 알쓰님과 다이다이떴다... 진 사람이 엽떡사기^-^,, 다신 술 안마실거다 정말... 술은 참이슬이죠! ',
    hashTag: '#킹록님',
  },

  {
    id: 9,
    name: 'Subin-Jung',
    date: '18 days ago',
    profile_img:
      'https://postfiles.pstatic.net/MjAyMTA0MDVfNTEg/MDAxNjE3NTUxMzQ0MzAx.r0pH2m1rrev-IbOKfYUHWhfcneLkI0iCgon2NTnqz8sg.lbA1OBgLWA5G9a-w5f6s8UsHihd7GnzEAS6Ylb_sSz4g.PNG.maplesosser/image.png?type=w966',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMjQ3/MDAxNjE3Nzk0NzY2MzA5.KEPPcJrLOdR-AePYXNt3NBZI_zfsu_Ju9sUkRVAXTmgg.u-PyrLj29HZqDQEqWRdPrm1YkXHZVguUzKusjxtxPEUg.PNG.maplesosser/image.png?type=w966',
    text: '나니?',
    hashTag: '#스케이트',
  },
  {
    id: 10,
    name: 'Wooyoung-Kim',
    date: '2 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01JMDNLH4Y-32433c079416-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMTU1/MDAxNjE3Nzk0NzYwNDY4.26rdJkpedphJoYo0SDaVBQ3imOA-Mu2SInnVPZHLD9Qg.YKQVqUgajByNfPr4850EbeSO_nwa27MTMSfBoY8o7R8g.PNG.maplesosser/image.png?type=w966 ',
    text: '매일 출근해서 내 자리에 앉아 투닥투닥 키보드나 두드리는 슬픈 일상과 다를것 같다는 느낌은  프로젝트를 진행하면서 점점 확신으로 변하였다. ',
    hashTag: '#스시 #야탑 ',
  },
  {
    id: 11,
    name: 'Jungwon-Heo',
    date: '3 days ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HXJC8JFL-5203f3e53842-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMjYx/MDAxNjE3Nzk0Nzc0MDE4.U437ROrrgjbcjYLd-I5o3FqBbCZT-EgaYCd6C-ZYDNAg.nc9YCdIsso78aDAd_VXEo7zLYnS1_6uCxdReOscQv8Eg.PNG.maplesosser/image.png?type=w966',
    text:
      '군대에서 전역할 때 들었던 생각이 있다. 매일이 욕나오고 피곤한 하루의 연속이었지만 지금까지 만난 동기, 후임, 선임들과 그 기간을 함께해서 다행이라 생각했고, 나 또한 그들에게 그런 존재로 남았으면 좋겠다고 생각했다.',
    hashTag: '#백엔드',
  },
  {
    id: 12,
    name: 'Junwoo-Kang  ',
    date: '5 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HQQVRY4W-3401a100151a-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfNyAg/MDAxNjE3Nzk0NzU0NDI0.XOHNTww76fnz7a6C2jE1E0-ex-Vb1j77O49d2UYVIQUg.o6L1J3Igp-aDnMfpgoj-1zBkbqLaXfrAkHmLX_53XLUg.PNG.maplesosser/image.png?type=w966',
    text: '야호 ~ ',
    hashTag: '#네',
  },
  {
    id: 13,
    name: 'LaeYoung-Hong',
    date: '1 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HXJC2HK4-8c539960ec71-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMTc4/MDAxNjE3Nzk0NzYzMjYz.2QAOECwb9pTdGzwdnON8hhjtG5OjVsxXf0Owe7B3vkcg.QbmSC9dNpJ-SlxZFGjOg2dEgDhan473mPG4ifMHpOSYg.PNG.maplesosser/image.png?type=w966',
    text:
      '머선 129 머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129머선 129',
    hashTag: '#잠실',
  },
  {
    id: 14,
    name: 'Jaewook-jung',
    date: '29 days ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HXQDR7NX-902a5fc0299b-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDhfMzMg/MDAxNjE3ODA5MjI3NDAx.00ynZEVRBrTdbHten4vjUtEh9tWQGqt-IRf-Q-i5TNgg.oRW8DLkzETGIIEJjCJuKPNFk-u9Swtsy4Dc8gIOsyzkg.PNG.maplesosser/image.png?type=w966',
    text: '음악이 좋아서 음대를 갔고. 개발이 하고 싶어서 개발을 배웁니다',
    hashTag: '#음대생',
  },
  {
    id: 15,
    name: 'Byungsoo-Ye',
    date: '1 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HXJAPC4S-95c491f55785-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMTA1/MDAxNjE3Nzk0NzU3NDE0.RaJxJ1gNkRrV1PRr7YkpIhdp_psJ5fd-o9WUAlblFPMg.2EqxrlAY_NYrzWzAL8KVI-SoWKAJsCwG-_hT8dUSg3Eg.PNG.maplesosser/image.png?type=w966',
    text: '병수잇 ',
    hashTag: '#코드잇',
  },
  {
    id: 16,
    name: 'Naeun-Song',
    date: '2 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HXJAHJ02-03d0864e58db-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMjE4/MDAxNjE3Nzk0NzUwMzU1.FL7LYD-5U20de726aNE7CwOYVzLjOXSogSL2ke-ti-Mg.tXVJf1AwPx-S-XTIPoyJBW-PswiPuFKdlE4Nh-cxcasg.PNG.maplesosser/image.png?type=w966',
    text: '  제 마니또 누구예요? ',
    hashTag: '#광주',
  },

  {
    id: 17,
    name: 'Damin-Ahn',
    date: '9 days ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HQQVL45C-41ea3195db62-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMTcg/MDAxNjE3Nzk0NzQ2MjQz.dkUcUXZ2Taz8DhgiWqVhNmPjhZWK0KuhBYp7zyrW1p0g.ckQ8R9nR4f4ink4IxNukraR_5kJ9WTy5gPJNtVvVZ68g.PNG.maplesosser/image.png?type=w966',
    text: '음..',
    hashTag: '#스타벅스 #정리왕',
  },
  {
    id: 18,
    name: 'Geunhwa-Lee',
    date: '8 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01JA7GB9FT-5c1bb49eb579-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDdfMTkg/MDAxNjE3NzY3NDg5MzQz.9Ylq6L9ODIb8GRI1r-IpdulgA-yTvGspNMyXkzsbuSkg.wOfxqBU2rvlnBPIDkVsF3kVQMPdLlsEfrupKVz3TTIYg.PNG.maplesosser/image.png?type=w966',
    text:
      '방어는 전갱이목의 전갱이과에 속하는 바다물고기이다. 다 자란 방어는 몸 길이가 1m를 훌쩍 넘는 대형 어류로 한국 연안을 회유하며 정어리·멸치·꽁치 등 작은 물고기를 잡아 먹고 사는 어종이다?',
    hashTag: '#로그인 #소통 #일상',
  },
  {
    id: 19,
    name: 'Gyudong-Kim',
    date: '11 months ago',
    profile_img: 'https://ca.slack-edge.com/TH0U6FBTN-U01HUFRF03F-9e45316d7ab4-512',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDhfMTky/MDAxNjE3ODA5MjMwNzEx.1a8Mov9CSIFqlEXzd0RQoHcZn7JC5qAdMvzAKOrJ7hsg.Mt15Y9Czn38d2prH6q81OqSWa2snc_VEYBekdtoTRJwg.PNG.maplesosser/image.png?type=w966',
    text: '화이팅 입니다',
    hashTag: '#텐동 #화이팅',
  },
  {
    id: 20,
    name: 'Youjin-kwon',
    date: '12 months ago',
    profile_img: 'https://media.vlpt.us/images/yoojin-kwon/profile/67b048a2-02d5-4368-b80c-d3106448cd41/social.png?w=240',
    image:
      'https://postfiles.pstatic.net/MjAyMTA0MDhfNDYg/MDAxNjE3ODA5MjIyNzk0.ZVZiZnK7pPFkaA17ysKv4dpUB6ITGHsrDmq9vA23rA4g.1jPrPVQ2NYyrYZVMAqEap_mjSKBrmtICWvJWFKvP6QQg.PNG.maplesosser/image.png?type=w966',
    text: '아...',
    hashTag: '#텐동 #화이팅',
  },
];

function Community() {
  const [offset, setOffset] = useState(1);
  const pagnation = FEED.slice(0, 8 * offset);

  const handleView = () => {
    setOffset(offset + 1);
  };

  const handleClose = () => {
    setOffset(offset - 1);
  };

  return (
    <CommunityBox>
      <CommunityTitle>
        <h1>CONVERSONG COMMUNITY</h1>
      </CommunityTitle>
      <Description>
        <p className="communityDescription">
          컨컨송 커뮤니티가 전하는 송스타그램 속 <strong className="hashTag">#컨컨송스타일</strong>
        </p>
        <CommunityList feed={pagnation} />
        <Button more onClick={handleView}>
          더보기
        </Button>
        <Button onClick={handleClose}>닫기</Button>
      </Description>
    </CommunityBox>
  );
}

const CommunityBox = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 24px 0 70px 0;
  border-top: 1px solid black;
  cursor: pointer;
`;

const CommunityTitle = styled.div`
  h1 {
    font-size: 36px;
    letter-spacing: -0.025em;
    font-weight: 700;
  }
`;

const Description = styled.div`
  margin-top: 10px;
  .communityDescription {
    font-size: 14px;
    .hashTag {
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: white;
  border: 1px solid #bfbfbf;
  color: #bfbfbf;
  font-size: 16px;
  height: 40px;
  margin-bottom: ${props => (props.more ? '10px' : '0px')};
`;
export default Community;
