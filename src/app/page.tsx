import ClientSection from "@/components/ClientSection";
import Gallery from "@/components/Gallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BackgroundEffect from "@/components/ui/background-effect";
import { ContainerWrapper, SectionWrapper } from "@/components/ui/wrappers";
import VideoGallery from "@/components/VideoGallery";

export default function HomePage() {
  return (
    <>
      <section className="border-b">
        <ContainerWrapper className="wrapper relative">
          <BackgroundEffect />

          <SectionWrapper className="space-y-2">
            <Tabs defaultValue="home" className="w-full">
              <TabsList className="mx-auto grid w-[300px] grid-cols-2 bg-transparent">
                <TabsTrigger
                  value="home"
                  className="rounded-3xl data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Home
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="rounded-3xl data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Videos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="home">
                <ClientSection title="Photos" />
                <Gallery />
              </TabsContent>
              <TabsContent value="videos">
                <ClientSection title="Videos" />
                <VideoGallery />
              </TabsContent>
            </Tabs>
          </SectionWrapper>
        </ContainerWrapper>
      </section>
    </>
  );
}
