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
        <TabsList className="flex-wrap">
          <TabsTrigger value="url" className="cursor-pointer uppercase text-lg">
            Url
          </TabsTrigger>
          <TabsTrigger
            value="text"
            className="cursor-pointer uppercase text-lg"
          >
            Text
          </TabsTrigger>
          <TabsTrigger
            value="email"
            className="cursor-pointer uppercase text-lg"
          >
            E-mail
          </TabsTrigger>
          <TabsTrigger
            value="vcard"
            className="cursor-pointer uppercase text-lg"
          >
            VCard
          </TabsTrigger>
          <TabsTrigger
            value="wifi"
            className="cursor-pointer uppercase text-lg"
          >
            WiFi
          </TabsTrigger>

          {/* Social Media Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="cursor-pointer text-foreground uppercase text-lg"
              asChild
            >
              <Button variant="ghost" className="data-[state=open]:bg-accent">
                Social Media ▼
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="">
              {socialMediaTabs.map((tab) => (
                <DropdownMenuItem
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className="cursor-pointer text-foreground text-lg"
                >
                  {tab.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* APP STORES */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="cursor-pointer text-foreground uppercase text-lg"
              asChild
            >
              <Button variant="ghost" className="data-[state=open]:bg-accent">
                App Stores ▼
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="">
              {appStoreTabs.map((tab) => (
                <DropdownMenuItem
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className="cursor-pointer text-foreground text-lg"
                >
                  {tab.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Files Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="data-[state=open]:bg-accent">
                Files ▼
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {fileTabs.map((tab) => (
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

          <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
          <TabsTrigger value="appstores">App Stores</TabsTrigger>
          <TabsTrigger value="img">Images</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="youtube">Youtube</TabsTrigger>
        </TabsList>

        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            {/* Basic tabs content */}
            <TabsContent value="url">
              <Card>
                <CardHeader>
                  <CardTitle>URL</CardTitle>
                  <CardDescription>Enter your website URL</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <Label htmlFor="url">Website URL</Label>
                    <Input id="url" placeholder="https://example.com" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="text">
              <Card>
                <CardHeader>
                  <CardTitle>Text</CardTitle>
                  <CardDescription>Text text</CardDescription>
                </CardHeader>
                <CardContent>Text content</CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardTitle>E-mail</CardTitle>
                  <CardDescription>E-mail text</CardDescription>
                </CardHeader>
                <CardContent>E-mail content</CardContent>
              </Card>
            </TabsContent>

            {/* Social Media Content */}
            <TabsContent value="instagram">
              <Card>
                <CardHeader>
                  <CardTitle>Instagram</CardTitle>
                  <CardDescription>Add your Instagram profile</CardDescription>
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

            {/* Files Content */}
            <TabsContent value="pdf">
              <Card>
                <CardHeader>
                  <CardTitle>PDF Document</CardTitle>
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

            {/* Добавьте остальные TabsContent по аналогии */}
          </div>

          {/* QR-CODE */}
          <div className="w-[300px] border">
            <Qr />
          </div>
        </div>
      </Tabs>
    </div>
  );
}
