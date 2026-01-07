import Link from "next/link";
import { t } from "./i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("homeTitle")}</h1>
      <p>{t("homeSubtitle")}</p>
      <nav>
        <Link href="/menu">{t("navMenu")}</Link>
        <Link href="/cart">{t("navCart")}</Link>
        <Link href="/orders">{t("navOrders")}</Link>
        <Link href="/me">{t("navMe")}</Link>
      </nav>
      <button type="button">{t("homeOrderButton")}</button>
    </main>
  );
}
