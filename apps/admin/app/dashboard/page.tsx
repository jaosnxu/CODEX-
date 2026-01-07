import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("dashboardTitle")}</h1>
      <nav>
        <Link href="/orders">{t("navOrders")}</Link>
        <Link href="/coupons">{t("navCoupons")}</Link>
        <Link href="/campaigns">{t("navCampaigns")}</Link>
      </nav>
      <button type="button">{t("dashboardCtaButton")}</button>
    </main>
  );
}
