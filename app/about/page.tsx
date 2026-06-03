import { InternalLinks } from "@/components/InternalLinks";
import { PageHero } from "@/components/PageHero";
import { coreInternalLinks } from "@/lib/internal-links";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "회사소개",
  description: "쓰리 마사지 운영사와 사업자 정보를 안내합니다."
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="쓰리 마사지 소개" description="지정 운영지역 중심의 방문 마사지 예약 안내 서비스를 제공합니다." />
      <section className="section" id="business">
        <div className="prose-panel container max-w-3xl rounded-md bg-white p-8 leading-8 shadow-sm">
          <h2 className="text-2xl font-black text-leaf">사업자 정보</h2>
          <p className="mt-4">상호: {site.name}</p>
          <p>운영사: {site.company}</p>
          <p>대표: {site.owner}</p>
          <p>사업자등록번호: {site.registration}</p>
          <p>주소: {site.address}</p>
          <p>전화예약: {site.phone}</p>

          <h2 className="mt-10 text-2xl font-black text-leaf">콘텐츠 작성 기준</h2>
          <p className="mt-4">
            쓰리 마사지 사이트의 콘텐츠는 운영지역과 전화 상담 절차를 기준으로 작성합니다. 지역 페이지는 실제 예약 가능 여부를 확인하려는
            사용자를 위한 전환용 안내이며, 매거진은 직장인 피로 관리, 가족 공간 준비, 지역별 웰니스 생활 팁처럼 정보 제공 목적의 글로
            분리합니다. 같은 문장에 지역명만 바꿔 넣는 방식은 사용하지 않는 것을 원칙으로 합니다.
          </p>
          <p className="mt-4">
            작성 책임은 쓰리 마사지 운영팀에 있으며, 각 문서는 운영지역, 상담 흐름, 이용 전 확인사항, 금지 표현 기준을 검토한 뒤
            게시합니다. 의료 효과, 치료 보장, 성인·유흥 암시, 과장 후기, 숨김 텍스트, 운영하지 않는 지역명 노출은 배제합니다. 이 기준은
            사용자가 사이트를 직접 방문했을 때도 충분히 판단 가능한 정보를 제공하기 위한 내부 편집 원칙입니다.
          </p>
          <InternalLinks
            title="회사 정보를 확인한 뒤 이어서 볼 페이지"
            description="사업자 정보와 편집 기준을 확인한 뒤 실제 운영지역과 이용 전 확인사항으로 이동할 수 있습니다."
            links={coreInternalLinks}
          />
        </div>
      </section>
    </>
  );
}
