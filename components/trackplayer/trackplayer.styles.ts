import styled from '@emotion/styled';

export const TrackContainer = styled.div`
  width: 100%;
  height: 46px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background: rgba(27, 113, 191, 0.5);
  border-radius: 5px;
`;

export const TrackIcon = styled.svg`
  width: 29px;
  height: 29px;
  cursor: pointer;
`;

export const ProgresBarFull = styled.div`
  width: 57%;
  height: 13px;
  background-color: #C4C4C4;
  border-radius: 18px;
  position: relative;
  @media screen and (max-width: 1100px){
    width: 53%;
  }
  @media screen and (max-width: 900px){
    width: 77%;
  }
  @media screen and (max-width: 600px){
    width: 57%;
  }
`;

export const ProgresBar = styled.div`
  height: 100%;
  background: ${({theme}: any) => theme.colors.lightOrange};
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 18px;
`;

export const ProgresBarGrabber = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: ${({theme}: any) => theme.colors.lightOrange};
  border: 1px solid ${({theme}: any) => theme.colors.white};
  box-sizing: border-box;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  position: absolute;
  right: -10px;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const VolList = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 4px;
`;

export const VolItem = styled.div`
  width: 4px;
  background: #0A345A;
  border-radius: 32px;
  cursor: pointer;
  &:nth-of-type(1){
    height: 10px;
  }
  &:nth-of-type(2){
    height: 15px;
  }
  &:nth-of-type(3){
    height: 18px;
  }
  &:nth-of-type(4){
    height: 21px;
  }
  &.active{
    background: #2B84E0;
  }
  & + & {
    margin-left: 3px;
  }
`;

export const DownloadTrack = styled.a`
  color: ${({theme}: any) => theme.colors.white};
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;

export const DownloadIcon = styled.svg`
  margin-left: 5px;
`;

export const TrackWrapper = styled.div`
  display: flex;
`;