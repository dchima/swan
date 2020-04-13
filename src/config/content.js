/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Link } from 'react-router-dom';

const content = {
  siteUrl: 'https://template.com',
  bodyText: [
    'I’m a Full Stack Developer moonlighting as a ', <Link to={'/blog'}>Writer</Link>, ' and Designer.', <br />,
    'I currently ', <Link to={'/projects'}>build things</Link>, ' for the internet at ', <a href='https://ziclisynergy.com' target='_blank'>Zicli Synergy</a>,
    '. I am a ', <a href='https://www.goodreads.com/review/list/112872457-chima-daniel' target='_blank'>bibliophile</a>, ' a ',
    <a href='https://open.spotify.com/user/xyggj57mzmnmx51g1qkit74bo?si=1kgEEoxYTneS2iLN53AVEg' target='_blank'>music</a>,
    ' nerd, and I watch a lot of ',
    <a href='https://letterboxd.com/dxnhima/films/' target='_blank'>movies</a>, '/',
    <a href='https://myanimelist.net/animelist/dxnchima' target='_blank'>anime</a>,
  ],
};
export default content;
