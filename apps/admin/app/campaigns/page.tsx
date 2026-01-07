import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("campaignsTitle")}</h1>
      <nav>
        <Link href="/dashboard">{t("navDashboard")}</Link>
        <Link href="/orders">{t("navOrders")}</Link>
      </nav>
      <button type="button">{t("campaignsLaunchButton")}</button>
    </main>
  );
}
