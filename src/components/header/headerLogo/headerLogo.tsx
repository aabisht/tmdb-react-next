import Link from "next/link";
import Image from "next/image";
import { TFunction } from "i18next";

const HeaderLogo = ({ t }: { t: TFunction }) => {
  return (
    <Link href="/" className="header-logo inline-flex content-center">
      <Image
        src="/logo.svg"
        priority={true}
        alt={t("header.headerLogo.logoAlt")}
        width={150}
        height={20}
      />
    </Link>
  );
};

export default HeaderLogo;
