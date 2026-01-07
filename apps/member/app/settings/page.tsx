import Link from "next/link";
import { t } from "../i18n";

export default function Page() {
  return (
    <main>
      <h1>{t("settingsTitle")}</h1>
      <nav>
        <Link href="/">{t("homeTitle")}</Link>
        <Link href="/insights">{t("navInsights")}</Link>
      </nav>
      <button type="button">{t("settingsSaveButton")}</button>
    </main>
  );
}
