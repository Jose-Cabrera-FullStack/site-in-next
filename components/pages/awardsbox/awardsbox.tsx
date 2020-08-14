import ReactWOW from 'react-wow';
import LazyLoad from 'react-lazyload';

import {
  StyledAwards, AwardItem, ItemDescription,
  ItemContent, ItemImage, ItemStar,
  ItemTitle, ItemYear, AwardsContainer,
} from './awardsbox.styles'


interface AwardProps {
  title: string;
  image?: string;
  year?: string;
  link?: string;
  description?: string;
}

interface Props {
  awards: Array<AwardProps>;
}

export const AwardsBox = ({awards}: Props) => {
  return (
    <AwardsContainer>
      <StyledAwards>
        {
          awards.map(({image, title, year, link, description}: AwardProps, k) => {
            return (
              <ReactWOW animation="fadeInLeft" delay={`${(k + 1) * 0.3}s`} key={k}>
                <AwardItem href={link} target="_blank">
                  <ItemContent>
                    {image && <LazyLoad><ItemImage src={image} /></LazyLoad>}
                    <ItemStar width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0l2.125 4.575 5.008.607-3.695 3.435.97 4.95L7.5 11.116l-4.408 2.453.97-4.95L.367 5.181l5.008-.607L7.5 0z" fill="#E8833F"/></ItemStar>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemDescription>{description}</ItemDescription>
                    {/* {year && <ItemYear>Año {year}</ItemYear>} */}
                  </ItemContent>
                </AwardItem>
              </ReactWOW>
            )
          })
        }
      </StyledAwards>
    </AwardsContainer>
  )
}