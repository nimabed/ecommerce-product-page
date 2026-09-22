import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion';


type filterItemsProp = {
  items: {
    value: string,
    label: string,
    isActive: boolean
  }[]
}

const filterData = [
  {
    title: "Category",
    value: "category",
    items: [
      { value: "all-category", label: "All", isActive: true },
      { value: "lifeStyle", label: "LifeStyle", isActive: false },
      { value: "running", label: "Running", isActive: false },
      { value: "basketball", label: "Basketball", isActive: false },
      { value: "training", label: "Training", isActive: false },
      { value: "outdoor", label: "Outdoor", isActive: false }
    ]
  },
  {
    title: "Gender",
    value: "gender",
    items: [
      { value: "all-gender", label: "All", isActive: true },
      { value: "men", label: "Men", isActive: false },
      { value: "women", label: "Women", isActive: false }
    ]
  },
  {
    title: "Size",
    value: "size",
    items: [
      { value: "all-size", label: "All", isActive: true },
      { value: "36-38", label: "EU36 - 38", isActive: false },
      { value: "39-41", label: "EU39 - 41", isActive: false },
      { value: "42-44", label: "EU42 - 44", isActive: false },
      { value: "45-47", label: "EU45 - 47", isActive: false }
    ]
  },
  {
    title: "Color",
    value: "color",
    items: [
      { value: "bg-white", label: "White", isActive: false },
      { value: "bg-black", label: "black", isActive: false },
      { value: "bg-gray-400", label: "Gray", isActive: false },
      { value: "bg-orange-400", label: "Orange", isActive: false },
      { value: "bg-blue-400", label: "Blue", isActive: false },
      { value: "bg-green-600", label: "Green", isActive: false },
      { value: "bg-pink-400", label: "Pink", isActive: false },
      { value: "bg-rose-300", label: "Rose", isActive: false },
    ]
  },
  {
    title: "Price Range",
    value: "price",
    items: [
      { value: "all-price", label: "All", isActive: true },
      { value: "0-75", label: "$0-$75", isActive: false },
      { value: "76-100", label: "$76-$100", isActive: false },
      { value: "101-150", label: "$101-$150", isActive: false },
      { value: "151+", label: "$151+", isActive: false }
    ]
  }
]

function FilterItems({ items }: filterItemsProp) {
  return (
    <div className="space-y-3 text-dark-grayish-blue px-1 pb-3">
      {
        items.map(item => (
          <div key={item.value} className="flex items-center gap-3">
            <Checkbox id={item.value} name={item.value} defaultChecked={item.isActive} />
            <Label htmlFor={item.value} className="text-base">
              {item.label}
            </Label>
          </div>
        ))
      }
    </div>
  )
}

function FilterColors({ items }: filterItemsProp) {
  return (
    <div className="w-full flex items-center flex-wrap gap-4 px-1 pt-1 pb-3">
      {
        items.map(color =>
          <Button
            key={color.label}
            className={cn("size-7 rounded-full border border-dark-grayish-blue/20", color.value,
              color.isActive ? "bg-clip-padding ring-2 ring-primary" : "hover:bg-clip-padding hover:ring-1"
            )}
          />
        )
      }
    </div>
  )
}

export default function FilterAccordion({ isDesktop }: {
  isDesktop: boolean
}) {
  return (
    <Accordion
      multiple
      defaultValue={
        isDesktop
          ? ["category", "gender", "size"]
          : undefined}
    >
      {
        filterData.map(filter => (
          <AccordionItem
            key={filter.value}
            value={filter.value}
            className={cn("border-b-dark-grayish-blue/20",
              isDesktop ? "px-3" : "px-6"
            )}
          >
            <AccordionTrigger
              chevronColor={isDesktop ? "text-primary" : "text-black"}
              className="font-semibold text-base cursor-pointer hover:no-underline"
            >{filter.title}</AccordionTrigger>
            <AccordionContent>
              {
                filter.value === "color"
                  ? <FilterColors items={filter.items} />
                  : <FilterItems items={filter.items} />
              }
            </AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion >

  )
}