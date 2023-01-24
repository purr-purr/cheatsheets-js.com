import {FC} from 'react';
import styled from "styled-components";
import Image from "next/image";

import Skeleton from "@modules/common/skeleton";
import messages from "@utils/messages";

import POSTER from '/public/assets/images/code-frame_poster.png';

export const PosterFrame = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

export const LoadButton = styled.button`
  position: absolute;
  top: calc((100% - 30px) / 2);
  left: calc((100% - 140px) / 2);
  width: 140px;
  height: 36px;
  background-color: var(--main-bg);
  color: var(--main-black);
  border-radius: 8px;
  font-size: 16px;
  line-height: 1.1;
  font-weight: 500;

  span {
    content: '';
    animation: blink 1.5s infinite;
    animation-fill-mode: both;
    display: inline-flex;
    height: 2px;
    width: 2px;
    background-color: var(--main-black);
    border-radius: 50%;
    margin-left: 2px;

    &:nth-child(2) {
      animation-delay: .2s;
      margin-left: 3px;
    }

    &:nth-child(3) {
      animation-delay: .4s;
      margin-left: 3px;
    }
  }

  @keyframes blink {
    0%, 100% {
      opacity: .1;
    }
    20% {
      opacity: 1;
    }
  }
`;

const Poster: FC<{
    onClick: () => void;
    isLoading: boolean;
}> = ({onClick, isLoading = false}) => {
    return (
        <>
            <PosterFrame>
                <Image src={POSTER} alt={messages.POSTER_IMAGE}/>
                <LoadButton onClick={onClick}>
                    {isLoading ? (
                        <>
                            {messages.LOADING}
                            <span></span>
                            <span></span>
                            <span></span>
                        </>
                    ) : messages.OPEN}
                </LoadButton>
            </PosterFrame>

            {isLoading && <Skeleton/>}
        </>
    );
};

export default Poster;
