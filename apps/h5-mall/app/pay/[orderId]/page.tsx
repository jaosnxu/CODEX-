import Link from "next/link";
import { t } from "../../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("payTitle")}</h1>
      <nav>
        <Link href="/orders">{t("navOrders")}</Link>
        <Link href="/">{t("homeTitle")}</Link>
      </nav>
      <button type="button">{t("payFinishButton")}</button>
    </main>
  );
}
