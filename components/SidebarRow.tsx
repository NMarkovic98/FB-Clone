type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

import Image from 'next/image';

function SidebarRow({
  Icon,
  src,
  title,
}: {
  Icon?: HeroIcon;
  src?: string;
  title: string;
}) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
          alt="side row image"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-bule-500" />}
      <p className="hidden lg:inline-flex font-medium">{title}</p>
    </div>
  );
}
export default SidebarRow;
