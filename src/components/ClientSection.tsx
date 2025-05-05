import { H3 } from "./ui/headings";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  title?: string;
}

export default function ClientSection({ title }: Props) {
  return (
    <section className="border-b">
      <div></div>
      <div className="flex flex-row items-center justify-between gap-4">
        <H3>Free Stock {title}</H3>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Trending" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="trending">Trending</SelectItem>
            <SelectItem value="new">New</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
