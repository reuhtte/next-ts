export default function Layout({ children }: LayoutProps<"/equipment">) {
  return (
    <div className="flex flex-col flex-1 font-sans bg-[#101513] p-4">
      <main className="flex flex-1 w-full flex-col border-2 border-[#536457] rounded-lg p-4">
        {children}
      </main>
    </div>
  );
}
