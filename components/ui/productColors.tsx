export default function ProductColors({ colors }: {
  colors: (string | undefined)[] | null | undefined
}) {
  return (
    <div className="flex items-center justify-start gap-1.5 py-2">
      {
        colors?.map(color => (
          <div 
            key={color} 
            className={`size-3.5 ring ring-dark-grayish-blue/20 rounded-full md:size-4`} 
            style={{backgroundColor: color}}
          />
        ))
      }
    </div>
  )
}