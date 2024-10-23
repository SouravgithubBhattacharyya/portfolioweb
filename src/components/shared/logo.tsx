import Link from "next/link";
import { IoLogoChrome } from "react-icons/io";

type PropTypes = {
  mobile?: boolean;
};

const Logo = ({ mobile = false }: PropTypes) => {
  return (
    <Link href="/">
      {/* <Image
        src={logo}
        alt="logo"
        className={`${mobile ? "w-[32px]" : "w-[40px]"} dark:invert-white`}
      /> */}
      <IoLogoChrome
        size={50}
        color="#c22fd3"
        className={`${mobile ? "w-[32px]" : "w-[40px]"} dark:invert-white`}
      />
    </Link>
  );
};

export default Logo;
