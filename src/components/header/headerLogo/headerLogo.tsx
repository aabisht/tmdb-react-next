import logoImg from "../../../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { TFunction } from "i18next";

const HeaderLogo = ({ t }: { t: TFunction }) => {
  return (
    <Link href="/" className="inline-flex content-center">
      <Image
        src={logoImg}
        priority={true}
        alt={t("header.headerLogo.logoAlt")}
        width={150}
      />
    </Link>
  );
};

export default HeaderLogo;
