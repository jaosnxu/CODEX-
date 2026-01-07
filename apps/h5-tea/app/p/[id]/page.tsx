import Link from "next/link";
import { t } from "../../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("productTitle")}</h1>
      <nav>
        <Link href="/menu">{t("navMenu")}</Link>
        <Link href="/cart">{t("navCart")}</Link>
      </nav>
      <button type="button">{t("productAddButton")}</button>
    </main>
  );
}
