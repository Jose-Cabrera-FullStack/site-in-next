import LazyLoad from 'react-lazyload';

import { List, Item, ItemImage, ItemAmount, ItemTitle, ItemTitleStar, ItemImageWrapper, ListContainer } from './awardsbox.styles';

interface Props {
  items: Array<any>;
  opacity?: boolean;
}


export const AwardsBox = ({items, opacity = false}: Props) => {
  return (
    <List>
      <ListContainer style={{width: `${(items?.length ? items.length : 0) * 200}px`}}>
        {items?.map((item: any, k: number) => (
          <Item key={k}>
            <ItemImageWrapper>
              <LazyLoad><ItemImage src={item.image} className={item.image.search('guitar') ? 'guitar': 'amplificador'} /></LazyLoad>
            </ItemImageWrapper>
            {item.count && item.count != 1 && <ItemAmount>{item.count}</ItemAmount>}
            <ItemTitle>
              <ItemTitleStar width="18" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.864.545l2.51 5.408 5.92.717-4.367 4.06 1.147 5.85-5.21-2.899-5.21 2.899L4.8 10.73.434 6.67l5.918-.717L8.864.545z" fill="#E8833F"/></ItemTitleStar>
              {item.title}
            </ItemTitle>
          </Item>
        ))}
      </ListContainer>
    </List>
  )
}