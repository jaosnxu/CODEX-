import Link from "next/link";
import { t } from "../../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("orderDetailTitle")}</h1>
      <nav>
        <Link href="/orders">{t("ordersTitle")}</Link>
        <Link href="/">{t("homeTitle")}</Link>
      </nav>
      <button type="button">{t("orderDetailBackButton")}</button>
    </main>
  );
}
