"use client";
import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import QRCodeStyling, { Options, FileExtension } from "qr-code-styling";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ClientQR() {
  const [options, setOptions] = useState<Options>({
    width: 300,
    height: 300,
    type: "svg",
    data: "http://qr-code-styling.com",
    image:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q",
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: "anonymous",
      saveAsBlob: true,
    },
    cornersSquareOptions: {
      color: "red",
      type: "extra-rounded",
    },
    dotsOptions: {
      color: "#222222",
      roundSize: true,
    },
    backgroundOptions: {
      color: "#5FD4F3",
    },
  });
  const [fileExt, setFileExt] = useState<FileExtension>("svg");
  const [qrCode, setQrCode] = useState<QRCodeStyling>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQrCode(new QRCodeStyling(options));
  }, []);

  useEffect(() => {
    if (ref.current) {
      qrCode?.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode?.update(options);
  }, [qrCode, options]);

  const onDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOptions((options) => ({
      ...options,
      data: event.target.value,
    }));
  };

  const onExtensionChange = (value: FileExtension) => {
    setFileExt(value);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt,
    });
  };

  return (
    <div className="">
      {/* <h2>Client QR code styling for Next.js</h2> */}
      <div ref={ref} />
      <div className="">
        <input value={options.data} onChange={onDataChange} className="" />

        <Select value={fileExt} onValueChange={onExtensionChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a format" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Formats</SelectLabel>
              <SelectItem value="svg">SVG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
              <SelectItem value="webp">WEBP</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <button onClick={onDownloadClick}>Download</button>
      </div>
    </div>
  );
}
/* bars-arrow-down */
