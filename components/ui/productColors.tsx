export default function ProductColors({ colors }: {
  colors: string[]
}) {
  return (
    <div className="flex items-center justify-start gap-1.5 py-2">
      {
        colors.map(color => (
          <div 
            key={color} 
            className={`size-4 ring ring-dark-grayish-blue/20 rounded-full ${color}`} 
          />
        ))
      }
    </div>
  )
}