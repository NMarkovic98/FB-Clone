import Image from 'next/image';

function Header() {
  return (
    <div>
      <h1>Header</h1>

      {/* left */}

      <div>
        <Image
          width={40}
          height={40}
          layout="fixed"
          alt="facebook image"
          src="https://links.papareact.com/5me"
        />
      </div>
      {/* center */}

      {/* right */}
    </div>
  );
}

export default Header;
