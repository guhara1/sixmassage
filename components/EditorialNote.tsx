import { site } from "@/lib/site-data";

type EditorialNoteProps = {
  reviewedFor: string;
};

export function EditorialNote({ reviewedFor }: EditorialNoteProps) {
  return (
    <aside className="rounded-md border border-black/10 bg-mint p-5 text-sm leading-7 text-ink/72">
      <p className="font-bold text-leaf">작성 및 검수 정보</p>
      <p className="mt-2">
        작성 책임: {site.name} 운영팀 · 검수 기준: 실제 운영지역, 전화 상담 절차, 이용 전 확인사항. 이 문서는 검색 노출만을 위해 만든
        지역명 치환형 글이 아니라, {reviewedFor} 이용자가 예약 전 판단할 수 있도록 작성한 안내입니다.
      </p>
      <p className="mt-2">
        의료 효과, 치료 보장, 성인·유흥 암시 표현, 과장 후기, 숨김 텍스트는 사용하지 않으며, 운영하지 않는 지역은 안내 범위에 포함하지 않습니다.
      </p>
    </aside>
  );
}
