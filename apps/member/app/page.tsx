import Link from "next/link";
import { t } from "./i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("homeTitle")}</h1>
      <p>{t("homeSubtitle")}</p>
      <nav>
        <Link href="/orders">{t("navOrders")}</Link>
        <Link href="/insights">{t("navInsights")}</Link>
        <Link href="/settings">{t("navSettings")}</Link>
      </nav>
      <button type="button">{t("homeCtaButton")}</button>
    </main>
  );
}
