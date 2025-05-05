import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";

type Props = {
  topic?: string | undefined;
};

export default async function VideoGallery({ topic }: Props) {
  const url = !topic
    ? "https://api.pexels.com/v1/curated"
    : `https://api.pexels.com/v1/search?query=${topic}`;

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Videos Found</h2>;

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="my-3 grid auto-rows-[10px] grid-cols-gallery px-1">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
}
