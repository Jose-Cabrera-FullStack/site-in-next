import styled from '@emotion/styled'
import { Loading } from '../loading' 

export const StyledVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const VideoWrapper = styled.div`
  height: 0;
  background-color: ${({theme}: any) => theme.colors.black};
  overflow: hidden;
  padding-top: 55.25%;
  position: relative;
  &.onfullscreen{
    padding-top: calc(100vh - 60px);
  }
  .videoElement{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ControlsContainer = styled.div`
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #C4C4C4;
  cursor: pointer;
`;

export const ProgressControl = styled.div`
  height: 100%;
  background-color: ${({theme}: any) => theme.colors.lightOrange};
  cursor: pointer;
  transition: width .1s ease-out;
`;

export const BottomControls = styled.div`
  width: 100%;
  height: 53px;
  align-items: center;
  background-color: ${({theme}: any) => theme.colors.blue};
  display: flex;
  justify-content: space-between;
`;

export const PlayButton = styled.div`
  width: 72px;
  height: 100%;
  align-items: center;
  background-color: ${({theme}: any) => theme.colors.lightBlue};
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const PlayIcon = styled.svg`
  width: 22px;
`;


export const TimeWrapper = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  margin-left: 20px;
`;

export const TimeText = styled.span`
  align-items: center;
  color: ${({theme}: any) => theme.colors.gray6};
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const AudioInput = styled.div`
`;

export const FullScreen = styled.svg`
  width: 21px;
  cursor: pointer;
`;

export const RightConfigurations = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-right: 25px;
`;

export const LeftConfigurations = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

export const TimeLoading = styled(Loading)`
`;