import Image from 'next/image';

import { signIn } from 'next-auth/react';

function Login() {
  // Avoid on event types error

  const runSignIn = () => {
    signIn();
  };

  return (
    <div className="grid place-items-center">
      <Image
        className="mb-20"
        alt="facebook image"
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={runSignIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
