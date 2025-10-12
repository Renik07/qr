import { Accordion } from "@/components/ui/accordion";
import MainOptions from "./qr-options/main-options";
import DotsOptions from "./qr-options/dots-options";
import CornersSquareOptions from "./qr-options/corners-square-options";
import CornersDotsOptions from "./qr-options/corners-dots-options";
import BackgroundOptions from "./qr-options/background-options";
import ImageOptions from "./qr-options/image-options";

export function QrOptions() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-3"
      className="w-full border rounded-xl px-6"
    >
      <MainOptions value="item-1" />
      <DotsOptions value="item-2" />
      <CornersSquareOptions value="item-3" />
      <CornersDotsOptions value="item-4" />
      <BackgroundOptions value="item-5" />
      <ImageOptions value="item-6" />
    </Accordion>
  );
}
