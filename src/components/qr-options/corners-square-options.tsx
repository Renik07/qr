import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function CornersSquareOptions({ value }: { value: string }) {
  const [activeTab, setActiveTab] = useState("color-single");
  const [activeGradientTab, setActiveGradientTab] = useState("linear");
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="accordion-title">
        Corners square options
      </AccordionTrigger>
      <AccordionContent className="">
        <div className="flex flex-col gap-1">
          <Label className="input-title">Corners Square Style</Label>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a corners square style" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Corners square style</SelectLabel>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="square">Square</SelectItem>
                <SelectItem value="dot">Dot</SelectItem>
                <SelectItem value="extra-rounded">Extra rounded</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex flex-col gap-1">
              <Label className="input-title">Color Type</Label>
              <TabsList className="">
                <TabsTrigger value="color-single" className="tab-title">
                  Single color
                </TabsTrigger>
                <TabsTrigger value="color-gradient" className="tab-title">
                  Color gradient
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent
              value="color-single"
              className="flex items-center gap-2"
            >
              <Label className="input-title">Corners square color</Label>
              <input type="color" />
              <input type="color" />
            </TabsContent>
            <TabsContent value="color-gradient">
              <Tabs
                value={activeGradientTab}
                onValueChange={setActiveGradientTab}
              >
                <div className="flex flex-col gap-1">
                  <Label className="input-title">Gradient type</Label>
                  <TabsList className="">
                    <TabsTrigger value="linear" className="tab-title">
                      Linear
                    </TabsTrigger>
                    <TabsTrigger value="radial" className="tab-title">
                      Radial
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="linear" className="flex flex-col">
                  <Label className="input-title">Dots gradient</Label>
                  <div>
                    <input type="color" />
                    <input type="color" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label className="input-title">Rotation</Label>
                    <Input
                      className="input max-w-[180px]"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="radial" className="flex flex-col">
                  <Label className="input-title">Dots gradient</Label>
                  <div>
                    <input type="color" />
                    <input type="color" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label className="input-title">Radius</Label>
                    <Input
                      className="input max-w-[180px]"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
