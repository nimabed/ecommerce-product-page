export default function Modal({ children, ref }: {
  children: React.ReactNode,
  ref: React.Ref<HTMLDialogElement>
}) {
  return (
    <dialog 
      ref={ref}
      className="size-full bg-transparent cursor-default backdrop:bg-black/80"
    >
      {children}
    </dialog>
  )
}