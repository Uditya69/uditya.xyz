import { Metadata } from "next";
import CommingSoon from "~/components/CommingSoon";

export const metadata: Metadata ={
  title:'Projects | Udityaa'
}
export default async function Page() {
  return (
    <div>
      <CommingSoon />
    </div>
  );
}
