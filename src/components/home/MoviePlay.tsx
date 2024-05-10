import Image from "next/image";
import Link from "next/link";

const MoviePlay = ({ movieData }) => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;

  const randomIndex = Math.floor(Math.random() * movieData.results.length) + 1; // 랜덤 인덱스 생성
  const data = movieData.results[randomIndex];

  return (
    <section className="flex-column items-center mb-43pxr gap-11pxr">
      <div className="h-375pxr w-full relative">
        <Image src={`${posterBaseUrl}${data.poster_path}`} alt={`영화 포스터 이미지: ${data.title}`} fill />
      </div>
      <div>
        {/* icon */}
        <span>#{randomIndex} in Korea Today</span>
      </div>
      <div className="flex gap-50pxr">
        <div>
          {/* icon */}
          My List
        </div>
        <Link href={`/media/${data.id}`}>
          {/* icon */}
          Play
        </Link>
        <div>
          {/* icon */}
          Info
        </div>
      </div>
    </section>
  );
};

export default MoviePlay;
