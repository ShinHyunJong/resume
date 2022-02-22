import type { NextPage } from 'next';
import Head from 'next/head';
import { projects, workExperience } from '../constants';

const Home: NextPage = () => {
  return (
    <div className="max-w-4xl px-4 mx-auto py-10">
      <Head>
        <title>신현종 이력서</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-[40px]">방문해주셔서 감사합니다.</h1>
          <h1 className="text-[55px] font-bold">신현종입니다.</h1>
        </div>
      </div>
      <div className="flex flex-col pt-10">
        <div className="flex flex-col text-xl">
          <p className="mb-4">
            6년째 웹 프로그래밍을 하고 있고, 학부 때 부터 소프트웨어
            엔지니어링에 관심이 많아 여러 프로젝트와 스타트업을 통해 경험을
            쌓았으며, 특히 유저와 맞닿아 있는 프론트엔드에 푹 빠져있습니다.
          </p>
          <p>
            단순 반복 작업은 자동화하여 시간을 단축하고 그 외 시간은 창의적이고
            혁신적인 UI/UX와 기술 개발에 치중하는 것을 좋아합니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold py-5 text-blue-700">학력</h1>
        <p className="text-lg">
          · 한양대학교 에리카 캠퍼스 소프트웨어 학부 졸업
        </p>
        <h1 className="text-2xl font-bold py-5 text-blue-700">경력</h1>
        <div className="flex flex-col">
          {workExperience.map((x) => {
            return (
              <div
                key={x.id}
                className="flex w-full border-gray-300 border-solid border-b pt-4"
              >
                <div className="flex flex-col flex-1">
                  <h1 className="text-xl font-bold">{x.name}</h1>
                  <p>{x.position}</p>
                  <p>{x.period}</p>
                </div>
                <div className="flex flex-1">
                  <div className="flex flex-col">
                    {x.projects.map((y) => {
                      return (
                        <div
                          key={`projects-${x}-${y.id}`}
                          className="mb-4 whitespace-pre-line"
                        >
                          <div className="mb-2">
                            <p className="text-2xl font-bold">{y.name}</p>
                            <p>{y.period}</p>
                          </div>
                          <div className="py-2">
                            <p className="text-xl font-medium">Description</p>
                            <p>{y.description}</p>
                          </div>
                          <div className="py-2">
                            <p className="text-xl font-medium">My Work</p>
                            <p>{y.did}</p>
                          </div>
                          <div className="py-2">
                            <p className="text-xl font-medium">Tech Stack</p>
                            <p>{y.techStack}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold py-5 text-blue-700">프로젝트</h1>
          {projects.map((x) => {
            return (
              <div
                key={`projects-${x.id}`}
                className="mb-4 whitespace-pre-line border-b border-solid border-gray-300 py-4"
              >
                <div className="mb-2">
                  <p className="text-2xl font-bold">{x.name}</p>
                  <p>{x.period}</p>
                </div>
                <div className="py-2">
                  <p className="text-xl font-medium">Description</p>
                  <p>{x.description}</p>
                </div>
                <div className="py-2">
                  <p className="text-xl font-medium">My Work</p>
                  <p>{x.did}</p>
                </div>
                <div className="py-2">
                  <p className="text-xl font-medium">Tech Stack</p>
                  <p>{x.techStack}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col border-b border-solid border-gray-300 py-8">
          <h1 className="text-2xl font-bold  text-blue-700 mb-4">수상 내역</h1>
          <p className="font-bold">
            · 한양대학교 에리카 캠퍼스 교내 셔틀콕 서비스 공로상
          </p>
          <p className="font-bold">
            · 한양대학교 에리카 캠퍼스 교내 소프트웨어 해커톤 은상
          </p>
        </div>
        <div className="flex flex-col border-b border-solid border-gray-300 py-8">
          <h1 className="text-2xl font-bold  text-blue-700 mb-4">Contacts</h1>
          <a className="font-bold">· 이메일(pleiades9638@gmail.com)</a>
          <a
            target="_blank"
            href="https://github.com/ShinHyunJong"
            className="font-bold"
            rel="noreferrer"
          >
            · 깃허브(https://github.com/ShinHyunJong)
          </a>
          <a href="tel:01077129638" className="font-bold">
            · H.P(010-7712-9638)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
