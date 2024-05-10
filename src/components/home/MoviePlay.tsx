import Image from "next/image";
import Link from "next/link";
import PlusIcon from "#/icons/home/plus.svg";
import PlayIcon from "#/icons/home/play.svg";
import InfoIcon from "#/icons/home/info.svg";

const MoviePlay = ({ movieData }) => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;

  const randomIndex = Math.floor(Math.random() * movieData.results.length) + 1; // 랜덤 인덱스 생성
  const data = movieData.results[randomIndex];

  return (
    <section className="flex-column items-center mb-43pxr gap-11pxr">
      <div className="h-375pxr w-full relative">
        <Image
          src={`${posterBaseUrl}${data.poster_path}`}
          alt={`영화 포스터 이미지: ${data.title}`}
          fill
          className="bg-gradient-to-b"
        />
      </div>
      <div>
        <span>#{randomIndex} in Korea Today</span>
      </div>
      <div className="flex gap-50pxr">
        <div className="flex-center flex-column">
          <PlusIcon />
          My List
        </div>
        <Link href={`/media/${data.id}`}>
          <div className="flex-center h-45pxr w-110pxr bg-gray-30 rounded-md">
            <div className="text-black flex-center gap-15pxr">
              <PlayIcon />
              Play
            </div>
          </div>
        </Link>
        <div className="flex-center flex-column">
          <InfoIcon />
          Info
        </div>
      </div>
    </section>
  );
};

export default MoviePlay;
