import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("checkoutTitle")}</h1>
      <nav>
        <Link href="/cart">{t("navCart")}</Link>
        <Link href="/pay/preview">{t("payTitle")}</Link>
      </nav>
      <button type="button">{t("checkoutPayButton")}</button>
    </main>
  );
}
