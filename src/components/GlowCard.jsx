export default function GlowCard({ children }) {
  return (
    <div>
      <div className="px-8 py-32">
        <div className="grid gap-8 items-start justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-200 to-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <span className="flex items-center space-x-5">{children}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
