import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("cartTitle")}</h1>
      <nav>
        <Link href="/menu">{t("navMenu")}</Link>
        <Link href="/checkout">{t("checkoutTitle")}</Link>
      </nav>
      <button type="button">{t("cartCheckoutButton")}</button>
    </main>
  );
}
