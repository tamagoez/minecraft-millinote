import Link from "next/link";
import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  const nowurl = router.pathname;
  return (
    <>
      <Link href={nowurl + "/execute"}>
        <p>execute</p>
      </Link>
    </>
  );
}
