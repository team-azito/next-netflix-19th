import { getMediaDetails } from "@/api/media";
import Image from "next/image";
import PlayIcon from "#/icons/home/play.svg";

interface Params {
  id: number;
}

const DetailPage = async ({ params }: { params: Params }) => {
  const posterBaseUrl = process.env.NEXT_PUBLIC_POSTER_BASE_URL;
  const data = await getMediaDetails(params.id);
  return (
    <div className="flex-center flex-column gap-32pxr">
      <div className="relative h-415pxr w-full">
        <Image src={`${posterBaseUrl}${data.poster_path}`} alt={`영화 포스터 이미지: ${data.title}`} fill />
        <div className="absolute inset-0pxr bg-gradient-to-b"></div>
      </div>
      <button className="flex-center h-45pxr w-303pxr gap-15pxr rounded-md bg-gray-30 text-18pxr font-semibold text-black">
        <PlayIcon alt="play 아이콘" />
        Play
      </button>
      <div className="flex-column gap-20pxr px-32pxr">
        <h2 className="text-27pxr font-bold">Previews</h2>
        <span className="text-11pxr">{data.overview}</span>
      </div>
    </div>
  );
};

export default DetailPage;
