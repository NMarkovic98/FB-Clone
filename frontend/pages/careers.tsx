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
  const res = await fetch('http://localhost:1337/api/careers');
  const data = await res.json();

  return {
    props: {
      career: data,
    },
  };
}

export default Cereers;
