import React from 'react';

import { getCareers } from '../lib/helpers';

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
  const data = await getCareers();

  return {
    props: {
      career: data,
    },
  };
}

export default Cereers;
