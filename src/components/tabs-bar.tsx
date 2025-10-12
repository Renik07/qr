// components/tabs-bar.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Qr from "./qr";
import {
  Bitcoin,
  BookText,
  Calendar1,
  ChevronDown,
  Dribbble,
  File,
  FileImage,
  Globe,
  IdCard,
  Mail,
  MapPinned,
  MessageCircle,
  Phone,
  TextInitial,
  Twitter,
  Wifi,
} from "lucide-react";
import { Textarea } from "./ui/textarea";
import { QrOptions } from "./qr-options";

export default function TabsBar() {
  const [activeTab, setActiveTab] = useState("url");

  const socialMediaTabs = [
    { value: "instagram", label: "Instagram" },
    { value: "facebook", label: "Facebook" },
    { value: "twitter", label: "Twitter" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "tiktok", label: "TikTok" },
  ];

  const fileTabs = [
    { value: "pdf", label: "PDF Document" },
    { value: "doc", label: "Word Document" },
    { value: "excel", label: "Excel Spreadsheet" },
    { value: "ppt", label: "PowerPoint" },
  ];

  const appStoreTabs = [
    { value: "appstore", label: "App Store" },
    { value: "googleplay", label: "Google Play" },
    { value: "appgallery", label: "Huawei AppGallery" },
    { value: "galaxystore", label: "Samsung Galaxy Store" },
    { value: "amazonstore", label: "Amazon Appstore" },
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="h-auto w-full gap-1 flex-wrap">
          <TabsTrigger value="url" className="tab-title">
            <Globe />
            Url
          </TabsTrigger>
          <TabsTrigger value="text" className="tab-title">
            <BookText />
            Text
          </TabsTrigger>
          <TabsTrigger value="phone" className="tab-title">
            <Phone />
            Phone
          </TabsTrigger>
          <TabsTrigger value="sms" className="tab-title">
            <MessageCircle />
            Sms
          </TabsTrigger>
          <TabsTrigger value="email" className="tab-title">
            <Mail />
            E-mail
          </TabsTrigger>
          <TabsTrigger value="vcard" className="tab-title">
            <IdCard />
            VCard
          </TabsTrigger>
          <TabsTrigger value="wifi" className="tab-title">
            <Wifi />
            WiFi
          </TabsTrigger>
          <TabsTrigger value="event" className="tab-title">
            <Calendar1 />
            Event
          </TabsTrigger>
          <TabsTrigger value="location" className="tab-title">
            <MapPinned />
            Location
          </TabsTrigger>
          <TabsTrigger value="crypto" className="tab-title">
            <Bitcoin />
            Crypto
          </TabsTrigger>
          <TabsTrigger value="file" className="tab-title">
            <File />
            File
          </TabsTrigger>
          <TabsTrigger value="img" className="tab-title">
            <FileImage />
            Image
          </TabsTrigger>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-lg text-foreground data-[state=open]:bg-accent cursor-pointer"
              >
                <Twitter />
                Social media
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="">
              {socialMediaTabs.map((tab) => (
                <DropdownMenuItem
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className="cursor-pointer"
                >
                  {tab.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </TabsList>

        <div className="flex flex-col gap-x-4 md:flex-row">
          <div className="w-full flex flex-col gap-4">
            <div>
              {/* URL */}
              <TabsContent value="url">
                <Card>
                  <CardHeader>
                    <CardTitle>URL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label className="text-lg" htmlFor="url">
                        Enter your URL
                      </Label>
                      <Input
                        className="md:text-xl"
                        id="url"
                        placeholder="https://example.com"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              {/* PHONE */}
              <TabsContent value="phone">
                <Card>
                  <CardHeader>
                    <CardTitle>PHONE</CardTitle>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
              </TabsContent>
              {/* SMS */}
              {/* TEXT */}
              <TabsContent value="text">
                <Card>
                  <CardHeader>
                    <CardTitle>TEXT</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      className="md:text-xl"
                      placeholder="Type your text here"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              {/* SMS */}
              <TabsContent value="sms">
                <Card>
                  <CardHeader>
                    <CardTitle>SMS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      className="md:text-xl"
                      placeholder="Type your text here"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              {/* EMAIL */}
              <TabsContent value="email">
                <Card>
                  <CardHeader>
                    <CardTitle>E-mail</CardTitle>
                    <CardDescription>E-mail text</CardDescription>
                  </CardHeader>
                  <CardContent>E-mail content</CardContent>
                </Card>
              </TabsContent>
              {/* VCARD */}
              <TabsContent value="vcard">
                <Card>
                  <CardHeader>
                    <CardTitle>Vcard</CardTitle>
                    <CardDescription>Vcard</CardDescription>
                  </CardHeader>
                  <CardContent>Vcard</CardContent>
                </Card>
              </TabsContent>
              {/* WIFI */}
              <TabsContent value="wifi">
                <Card>
                  <CardHeader>
                    <CardTitle>WIFI</CardTitle>
                    <CardDescription>WIFI</CardDescription>
                  </CardHeader>
                  <CardContent>WIFI</CardContent>
                </Card>
              </TabsContent>
              {/* EVENT */}
              <TabsContent value="event">
                <Card>
                  <CardHeader>
                    <CardTitle>EVENT</CardTitle>
                    <CardDescription>event description</CardDescription>
                  </CardHeader>
                  <CardContent>Event</CardContent>
                </Card>
              </TabsContent>
              {/* LOCATION */}
              <TabsContent value="location">
                <Card>
                  <CardHeader>
                    <CardTitle>LOCATION</CardTitle>
                    <CardDescription>location description</CardDescription>
                  </CardHeader>
                  <CardContent>Location</CardContent>
                </Card>
              </TabsContent>

              {/* CRYPTO */}
              <TabsContent value="crypto">
                <Card>
                  <CardHeader>
                    <CardTitle>crypto</CardTitle>
                    <CardDescription>crypto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="facebook">crypto</Label>
                      <Input
                        id="facebook"
                        placeholder="https://facebook.com/username"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Files Content */}
              <TabsContent value="file">
                <Card>
                  <CardHeader>
                    <CardTitle>PDF, Excel, Word etc. Document</CardTitle>
                    <CardDescription>Upload a PDF file</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="pdf">Upload PDF</Label>
                      <Input id="pdf" type="file" accept=".pdf" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* IMAGE Content */}
              <TabsContent value="img">
                <Card>
                  <CardHeader>
                    <CardTitle>Jpeg., png., etc</CardTitle>
                    <CardDescription>Upload an image</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="img">Upload Image</Label>
                      <Input id="img" type="file" accept=".jpg" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Social Media Content */}
              <TabsContent value="instagram">
                <Card>
                  <CardHeader>
                    <CardTitle>Instagram</CardTitle>
                    <CardDescription>
                      Add your Instagram profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="instagram">Instagram URL</Label>
                      <Input
                        id="instagram"
                        placeholder="https://instagram.com/username"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="facebook">
                <Card>
                  <CardHeader>
                    <CardTitle>Facebook</CardTitle>
                    <CardDescription>Add your Facebook profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="facebook">Facebook URL</Label>
                      <Input
                        id="facebook"
                        placeholder="https://facebook.com/username"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="twitter">
                <Card>
                  <CardHeader>
                    <CardTitle>twitter</CardTitle>
                    <CardDescription>Add your twitter profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="facebook">twitter URL</Label>
                      <Input
                        id="facebook"
                        placeholder="https://facebook.com/username"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="linkedin">
                <Card>
                  <CardHeader>
                    <CardTitle>linkedin</CardTitle>
                    <CardDescription>Add your linkedin profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="facebook">linkedin URL</Label>
                      <Input
                        id="facebook"
                        placeholder="https://facebook.com/username"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="tiktok">
                <Card>
                  <CardHeader>
                    <CardTitle>tiktok</CardTitle>
                    <CardDescription>Add your tiktok profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="facebook">tiktok URL</Label>
                      <Input
                        id="facebook"
                        placeholder="https://facebook.com/username"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
            <QrOptions />
          </div>
          {/* QR-CODE */}

          <Qr />
        </div>
      </Tabs>
    </div>
  );
}
