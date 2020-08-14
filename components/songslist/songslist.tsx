import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { classes } from '../../helpers';

import {
  SongsBox, FilterBox,
  FilterItem, SongsTable,
  TableHeader, Row,
  Column, TableContent,
  SongPlay, GuitarImage,
  SongsTableContainer
} from './songslist.styles';

interface Props {
  songs: Array<any>;
  categories: Array<any>;
}

export const SongsList = ({songs = [], categories = []}: Props) => {
  const [active, setActive] = React.useState(0)
  const [filteredSongs, setFilteredSongs] = React.useState(songs)
  const router = useRouter();
  const filterSongs = (s: string, n: number) => {
    setActive(n)
    const l = songs.filter((item) => {
      if(s === "all" || (item.categories && item.categories.includes(s))){
        return item;
      }
    })
    setFilteredSongs(l ? l : [])
  }
  return (
    <SongsBox>
      <FilterBox>
        {categories.map((item: any, k: number) => <FilterItem className={classes({active: k === active})} key={k} onClick={() => filterSongs(item.slug, k)}>{item.title}</FilterItem>)}
      </FilterBox>
      <SongsTableContainer>
        <SongsTable>
          <Row>
            <Column className="transparent"><TableHeader>Cancion</TableHeader></Column>
            <Column className="transparent"><TableHeader>Intérprete</TableHeader></Column>
            <Column className="transparent"><TableHeader>Estilo</TableHeader></Column>
            <Column className="transparent"><TableHeader>Dificultad</TableHeader></Column>
            <Column className="transparent"><TableHeader>Guitarra</TableHeader></Column>
            <Column className="transparent"></Column>
          </Row>
          <TableContent>
            {filteredSongs && filteredSongs.map((item, k) => (
              <Row key={k}>
                <Column>{item.title}</Column>
                <Column>{item.writer}</Column>
                <Column>{categories.filter(filter => item.categories.includes(filter.slug)).map(filter => filter.title).join(', ')}</Column>
                <Column>
                  <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><g clipPath="url(#clip0)"><path d="M15.06 1.34C13.656.465 11.734 0 9.5 0 7.266 0 5.343.464 3.939 1.34c-1.598.999-2.443 2.484-2.443 4.294 0 1.77 1.082 4.965 2.691 7.952.814 1.509 1.677 2.791 2.498 3.708C7.698 18.426 8.645 19 9.5 19c.854 0 1.801-.574 2.814-1.706.821-.917 1.685-2.2 2.498-3.708 1.61-2.987 2.691-6.182 2.691-7.952 0-1.81-.845-3.295-2.443-4.293z" fill={item.level >= 1 ? '#1B71BF' : '#828282'}/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"/></clipPath></defs></svg>
                  <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><g clipPath="url(#clip0)"><path d="M15.06 1.34C13.656.465 11.734 0 9.5 0 7.266 0 5.343.464 3.939 1.34c-1.598.999-2.443 2.484-2.443 4.294 0 1.77 1.082 4.965 2.691 7.952.814 1.509 1.677 2.791 2.498 3.708C7.698 18.426 8.645 19 9.5 19c.854 0 1.801-.574 2.814-1.706.821-.917 1.685-2.2 2.498-3.708 1.61-2.987 2.691-6.182 2.691-7.952 0-1.81-.845-3.295-2.443-4.293z" fill={item.level >= 2 ? '#1B71BF' : '#828282'}/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"/></clipPath></defs></svg>
                  <svg width="19" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><g clipPath="url(#clip0)"><path d="M15.06 1.34C13.656.465 11.734 0 9.5 0 7.266 0 5.343.464 3.939 1.34c-1.598.999-2.443 2.484-2.443 4.294 0 1.77 1.082 4.965 2.691 7.952.814 1.509 1.677 2.791 2.498 3.708C7.698 18.426 8.645 19 9.5 19c.854 0 1.801-.574 2.814-1.706.821-.917 1.685-2.2 2.498-3.708 1.61-2.987 2.691-6.182 2.691-7.952 0-1.81-.845-3.295-2.443-4.293z" fill={item.level >= 3 ? '#1B71BF' : '#828282'}/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h19v19H0z"/></clipPath></defs></svg>
                </Column>
                <Column>
                  <GuitarImage src={`/images/${item.guitar}.png`} />
                </Column>
                <Column className="transparent no-padding"><Link href={`/cancion/${item.url}/`}><SongPlay src="/images/play-home.svg" alt="Play song icon" /></Link></Column>
              </Row>
            ))}
          </TableContent>
        </SongsTable>
      </SongsTableContainer>
    </SongsBox>
  )
}