import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container max-w-xl">
        <h1 className="text-4xl font-black">페이지를 찾을 수 없습니다</h1>
        <p className="mt-4 text-ink/70">주소가 바뀌었거나 아직 준비되지 않은 페이지입니다.</p>
        <Link className="focus-ring mt-8 inline-flex rounded-md bg-leaf px-5 py-4 font-bold text-white" href="/">
          홈으로 이동
        </Link>
      </div>
    </section>
  );
}
