// src/app/careers/apply/page.tsx
import ApplyJobPage from "../[slug]/apply/page";

export default function GeneralApplyPage() {
  return <ApplyJobPage params={Promise.resolve({ slug: "general-application" })} />;
}
