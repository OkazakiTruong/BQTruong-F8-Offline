import AuthLoginForm from "./_components/AuthLoginForm";
import { useTranslations } from "next-intl";

export default function auth() {
  const t = useTranslations("Auth");
  return <AuthLoginForm t={t} />;
}
