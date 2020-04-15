/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Link } from 'react-router-dom';

const content = {
  siteUrl: 'https://template.com',
  bodyText: [
    'I’m a Full Stack Developer moonlighting as a ', <Link to={'/blog'}>writer</Link>, ' and designer.', <br />,
    'I currently ', <Link to={'/projects'}>build things</Link>, ' for the internet at ', <a href='https://ziclisynergy.com' target='_blank'>Zicli Synergy</a>, '. ',
    'I am a ', <a href='https://www.goodreads.com/review/list/112872457-chima-daniel' target='_blank'>bibliophile</a>, ', ',
    <a href='https://open.spotify.com/user/xyggj57mzmnmx51g1qkit74bo?si=1kgEEoxYTneS2iLN53AVEg' target='_blank'>melophile</a>,
    ', ', <a href='https://letterboxd.com/dxnhima/films/' target='_blank'>cinephile</a>, ', and your everyday ',
    <a href='https://myanimelist.net/animelist/dxnchima' target='_blank'>otaku</a>, '.',
  ],
};
export default content;
