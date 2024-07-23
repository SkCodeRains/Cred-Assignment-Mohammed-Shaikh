// app/dashboard/page.tsx

"use client";



export default function DashboardPage() {
  return (
    <div>

      <div className="relative bg-gray-200 py-20">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Platform</h1>
          <p className="mt-4 text-lg text-gray-600">Discover endless possibilities with us.</p>
          <div className='flex flex-col'>
            <a href="https://github.com/SkCodeRains" target="_blank" className="mt-6 inline-block bg-purple-600 text-white py-2 px-4 rounded">My Github Profile</a>
            <a href="https://skcoderains.github.io/portfolio/" target="_blank" className="mt-6 inline-block bg-purple-600 text-white py-2 px-4 rounded"> My PortFolio </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2">
          <img src="https://miro.medium.com/max/1400/0*RR9j1xiMqGBa-Fr_.jpeg" alt="Overlapping Image" className="mx-auto rounded-full w-48 h-48" ></img>
        </div>
      </div>

    </div>
  );
}
