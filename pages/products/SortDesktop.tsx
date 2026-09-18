import { Field, FieldLabel } from '@/components/ui/field';
import { 
  Select, 
  SelectContent,
  SelectTrigger, 
  SelectValue, 
  SelectGroup, 
  SelectItem} from '@/components/ui/select';

const items = [
  { label: "Featured", value: "featured" },
  { label: "Price: low to high", value: "price-low-to-high" },
  { label: "Price: high to low", value: "price-high-to-low" },
  { label: "Newest arrivals", value: "newest" },
  { label: "Best rated", value: "rate" }
]


export default function SortDesktop() {
  return (
    <div className="w-full max-w-65">
      <Field orientation="horizontal">
        <FieldLabel 
          className="font-semibold text-base"
          htmlFor="sort">Sort by:</FieldLabel>
        <Select items={items} id="sort" defaultValue="featured">
          <SelectTrigger className="w-full max-w-46">
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false}>
            <SelectGroup>
              {
                items.map(item => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  )
}