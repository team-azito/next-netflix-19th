import Image from "next/image";
import Link from "next/link";
import PlusIcon from "#/icons/home/plus.svg";
import PlayIcon from "#/icons/home/play.svg";
import InfoIcon from "#/icons/home/info.svg";
import { GetMoviesResponse } from "@/types/home";

interface MoviePlayProps {
  movieData: GetMoviesResponse;
}
const MoviePlay = ({ movieData }: MoviePlayProps) => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;

  const randomIndex = Math.floor(Math.random() * movieData.results.length);
  const data = movieData.results[randomIndex];

  return (
    <section className="flex-column items-center mb-43pxr gap-11pxr">
      <div className="h-375pxr w-full relative">
        <Image src={`${posterBaseUrl}${data.poster_path}`} alt={`영화 포스터 이미지: ${data.title}`} fill />
        <div className="absolute inset-0pxr bg-gradient-to-b"></div>
      </div>
      <div>
        <span className="text-13pxr font-bold">#{randomIndex + 1} in Korea Today</span>
      </div>
      <div className="flex gap-50pxr">
        <div className="flex-center flex-column gap-3pxr text-13pxr">
          <PlusIcon alt="plus 아이콘" />
          My List
        </div>
        <Link href={`/media/${data.id}`}>
          <div className="flex-center h-45pxr w-110pxr bg-gray-30 rounded-md">
            <div className="text-black flex-center gap-13pxr font-semibold text-18pxr">
              <PlayIcon alt="play 아이콘" />
              Play
            </div>
          </div>
        </Link>
        <div className="flex-center flex-column gap-3pxr text-13pxr">
          <InfoIcon alt="info 아이콘" />
          Info
        </div>
      </div>
    </section>
  );
};

export default MoviePlay;
