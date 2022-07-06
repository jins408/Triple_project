import { useEffect, useState } from "react";
import { CountingText, CountingWrapper, MainRight, MainWrapper, PlayStore, StoreText, StoreWrapper, TripLogoWrapper } from "../components/MainComponents";
import PlayStoreImg from "../assets/play-store2x.png";
import AppleStoreImg from "../assets/badge-apple4x.png";

const MainContainer = () => {
    const [init, setInit] = useState(false);
    const [state, setState] = useState(0);
    const [intervalState, setIntervalState] = useState();
    const [user, setUser] = useState(0);
    const [review, setReview] = useState(0);
    const [save, setSave] = useState(0);

    useEffect(() => {
        setInit(true);
    }, []);

    useEffect(() => {
        if (init) {
            setIntervalState(setInterval(() => {
                setState(value => value + 1);
            }, 800));
            return () => clearInterval(intervalState);
        }
    }, [init]);

    const counter = (value, max) => {
        let now = max;

        const handle = setInterval(() => {
            if (value === 'user') {
                setUser(Math.ceil(max - now));
            } else if (value === 'review') {
                setReview(Math.ceil(max - now));
            } else if (value === 'save') {
                setSave(Math.ceil(max - now));
            }
            
            if (now < 0) {
                clearInterval(handle);
            }
    
            const step = now / 10;
    
            now -= step;
        }, 50);
    };

    useEffect(() => {
        if (state === 1) {
            counter('user', 350);
            counter('review', 21);
            counter('save', 650);
        }
        if (state >= 2) {
            clearInterval(intervalState);
        }
    }, [state]);

    return (
        <MainWrapper>
            <TripLogoWrapper>
                2019년 2월 기준
            </TripLogoWrapper> 
            <MainRight>
                {state >= 1 && (
                <CountingWrapper state={state}>
                    <CountingText>
                        <strong>{user}만 명</strong>의 사용자
                    </CountingText>
                    <CountingText>
                        <strong>{review}만 개</strong>의 리뷰
                    </CountingText>
                    <CountingText>
                        <strong>{save}만 개</strong>의 저장
                    </CountingText>
                </CountingWrapper>
                )}
                {state >= 2 && (
                <StoreWrapper>
                    <PlayStore src={PlayStoreImg} />
                    <StoreText>
                        2018 구글 플레이스토어<br/>
                        올해의 앱 최우수상 수상
                    </StoreText>
                    <PlayStore src={AppleStoreImg} />
                    <StoreText>
                        2018 애플 앱스토어<br />
                        오늘의 여행앱 선정
                    </StoreText>
                </StoreWrapper>
                )}
            </MainRight>
        </MainWrapper>
    );
}

export default MainContainer;