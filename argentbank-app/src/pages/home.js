import React  from 'react';
import '../assets/css/main.css';
import Header from '../components/header'
import Banner from '../components/banner'

export default function Home() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Banner/>
      </div>
    </div>
  );
}

