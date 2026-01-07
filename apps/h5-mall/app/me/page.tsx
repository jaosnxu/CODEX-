import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("meTitle")}</h1>
      <nav>
        <Link href="/">{t("homeTitle")}</Link>
        <Link href="/orders">{t("navOrders")}</Link>
      </nav>
      <button type="button">{t("meProfileButton")}</button>
    </main>
  );
}
