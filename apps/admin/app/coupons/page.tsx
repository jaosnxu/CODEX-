import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("couponsTitle")}</h1>
      <nav>
        <Link href="/dashboard">{t("navDashboard")}</Link>
        <Link href="/campaigns">{t("navCampaigns")}</Link>
      </nav>
      <button type="button">{t("couponsCreateButton")}</button>
    </main>
  );
}
