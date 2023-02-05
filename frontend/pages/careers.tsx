import React from 'react';

import axios from 'axios';

function Cereers({ career }: { career: any }) {
  return (
    <div>
      {career.data.map((c: any) => (
        <div>{c.attributes.title}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:1337/api/careers').then((res) =>
    res.json()
  );
  console.log(res.data[0].attributes.title);
  return {
    props: {
      career: res,
    },
  };
}

export default Cereers;
