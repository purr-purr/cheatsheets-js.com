import ContentLoader from 'react-content-loader';
import styled from "styled-components";
import messages from "@utils/messages";

export const Container = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export const Text = styled.p`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  top: calc((100% - 20px) / 2);
  left: 0;
  width: 100%;
  text-align: center;
  height: 18px;
  font-size: 18px;
  line-height: 14px;
  z-index: 6;

  span {
    content: '';
    animation: blink 1.5s infinite;
    animation-fill-mode: both;
    display: block;
    height: 3px;
    width: 3px;
    background: #1C1C1C;
    border-radius: 50%;
    margin-left: 3px;

    &:nth-child(2) {
      animation-delay: .2s;
      margin-left: 5px;
    }

    &:nth-child(3) {
      animation-delay: .4s;
      margin-left: 5px;
    }
  }

  @keyframes blink {
    0% {
      opacity: .1;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: .1;
    }
  }
`;

const Skeleton = () => (
    <Container>
        <ContentLoader
            width="100%"
            height="100%"
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
        >
            <rect width="100%" height="100%"/>
        </ContentLoader>
        <Text>
            {messages.LOADING}
            <span></span>
            <span></span>
            <span></span>
        </Text>
    </Container>
);

export default Skeleton;
