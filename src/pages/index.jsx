export const IndexPage = () => (
  <main className="w-[400px] p-6 space-y-6 text-white font-mono">
    <div className="p-4 h-[calc(100px + 50px * 2)] bg-red-500">
      <code>h-[calc(100px + 50px * 2)]</code>
      <div className="mt-2 opacity-60">Houston we have a problem</div>
    </div>
    <div className="p-4 h-[calc(100px+50px*2)] bg-green-500">
      <code>h-[calc(100px+50px*2)]</code>
      <div className="mt-2 opacity-60">Tailwind JIT FTW!</div>
    </div>
  </main>
)

export default IndexPage
