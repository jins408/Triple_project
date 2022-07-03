import { useEffect, useState } from "react";
import { CountingText, CountingWrapper, MainRight, MainWrapper, PlayStore, StoreText, StoreWrapper, TripLogoWrapper } from "../components/MainComponents";
import PlayStoreImg from "../assets/play-store2x.png";
import AppleStoreImg from "../assets/badge-apple4x.png";

const MainContainer = () => {
    const [init, setInit] = useState(false);
    const [state, setState] = useState(0);
    const [intervalState, setIntervalState] = useState();
    const [user, setUser] = useState(0);
    const [intervalUser, setIntervalUser] = useState();
    const [review, setReview] = useState(0);
    const [intervalReview, setIntervalReview] = useState();
    const [save, setSave] = useState(0);
    const [intervalSave, setIntervalSave] = useState();

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

    useEffect(() => {
        if (state === 1) {
            setIntervalUser(setInterval(() => {
                setUser(value => value + 1);
            }, 1500 / 348));

            setIntervalReview(setInterval(() => {
                setReview(value => value + 1);
            }, 1500 / 19));

            setIntervalSave(setInterval(() => {
                setSave(value => value + 1);
            }, 1500 / 648));
        }
        if (state >= 2) {
            clearInterval(intervalState);
        }
    }, [state]);

    useEffect(() => {
        if (user === 348) {
            clearInterval(intervalUser);
            setIntervalUser(setInterval(() => {
                setUser(value => value + 1);
            }, 500 / 2));
        }
        if (user === 350) {
            clearInterval(intervalUser);
        }
    }, [user]);
    useEffect(() => {
        if (review === 19) {
            clearInterval(intervalReview);
            setIntervalReview(setInterval(() => {
                setReview(value => value + 1);
            }, 500 / 2));
        }
        if (review === 21) {
            clearInterval(intervalReview);
        }
    }, [review]);
    useEffect(() => {
        if (save === 648) {
            clearInterval(intervalSave);
            setIntervalSave(setInterval(() => {
                setSave(value => value + 1);
            }, 500 / 2));
        }
        if (save === 650) {
            clearInterval(intervalSave);
        }
    }, [save]);

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