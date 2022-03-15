import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDitail = () => {
        setSearchParams({mode, detail: detail === 'ture' ? false : true});
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : PerformanceObserverEntryList(mode) +1;
        setSearchParams({mode: nextMode, detail});
    };

    return (
      <div>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
        <p>mode: {mode}</p>
        <button onClick={onToggleDitail}>Toggle detail</button>
        <button onClick={onIncreaseMode}>mode + 1</button>
      </div>
    );
  };
  
  
export default About;