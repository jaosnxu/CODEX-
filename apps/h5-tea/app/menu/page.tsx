import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("menuTitle")}</h1>
      <nav>
        <Link href="/">{t("homeTitle")}</Link>
        <Link href="/cart">{t("navCart")}</Link>
      </nav>
      <button type="button">{t("menuBrowseButton")}</button>
    </main>
  );
}
