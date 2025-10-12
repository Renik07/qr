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

export default function CornersDotsOptions({ value }: { value: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="accordion-title">
        Corners Dot Options
      </AccordionTrigger>
      <AccordionContent className="">
        <p>
          We stand behind our products with a comprehensive 30-day return
          policy. If you&apos;re not completely satisfied, simply return the
          item in its original condition.
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}
