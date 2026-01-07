import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("ordersTitle")}</h1>
      <nav>
        <Link href="/dashboard">{t("navDashboard")}</Link>
        <Link href="/coupons">{t("navCoupons")}</Link>
      </nav>
      <button type="button">{t("ordersReviewButton")}</button>
    </main>
  );
}
