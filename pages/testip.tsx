import React from 'react';
import axios from 'axios';
import { NextPage } from 'next';

const Test: NextPage = ({publicIp, otherIp}: any) => {
  console.log('from backend + axios', otherIp)
  axios.get('https://extreme-ip-lookup.com/json/?key=rIYWtcUpWDpaEfSSHyea')
  .then((response: any) => {
    console.log('from local', response)
  })
  
  return <div></div>
}

Test.getInitialProps  = async (ctx) => {
  const { data } = await axios.get('https://ipinfo.io')
  return {
    otherIp: data
  }
}

export default Test;