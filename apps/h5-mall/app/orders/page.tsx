import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("ordersTitle")}</h1>
      <nav>
        <Link href="/">{t("homeTitle")}</Link>
        <Link href="/me">{t("navMe")}</Link>
      </nav>
      <button type="button">{t("ordersDetailButton")}</button>
    </main>
  );
}
