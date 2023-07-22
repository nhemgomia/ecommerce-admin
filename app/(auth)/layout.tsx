export default function AuthLayout({
  children
}: {
    chilren: React.ReactNode
}) {
  return (
    <div class="flex items-center justify-center h-full">
      {children}
    </div>
  )
}