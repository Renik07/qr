import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export default function MainOptions({ value }: { value: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="accordion-title">
        Main options
      </AccordionTrigger>
      <AccordionContent className="grid grid-cols sm:grid-cols-3 gap-3">
        <div>
          <Label className="input-title">Width</Label>
          <Input className="input" type="number" placeholder="300" />
        </div>
        <div>
          <Label className="input-title">Height</Label>
          <Input className="input" type="number" placeholder="300" />
        </div>
        <div>
          <Label className="input-title">Margin</Label>
          <Input className="input" type="number" placeholder="1" />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
