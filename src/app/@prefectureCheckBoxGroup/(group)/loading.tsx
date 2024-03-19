export default function Loading() {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-4'>
      {Array.from({ length: 47 }, (_, index) => (
        <div key={index} className='flex items-center space-x-2'>
          <div className='w-6 h-6  border border-gray-300 animate-pulse'></div>
          <div className='w-20 h-6 rounded-sm border bg-gray-300 animate-pulse'></div>
        </div>
      ))}
    </div>
  );
}
