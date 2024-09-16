export default function Loading() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <svg
        className='animate-spin w-12 h-12 mb-4'
        viewBox='0 0 24 24'
        strokeWidth='6'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <defs>
          <linearGradient id='loaderGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#ef4444' /> {/* red-500 */}
            <stop offset='16.6%' stopColor='#f97316' /> {/* orange-500 */}
            <stop offset='33.3%' stopColor='#eab308' /> {/* yellow-500 */}
            <stop offset='50%' stopColor='#22c55e' /> {/* green-500 */}
            <stop offset='66.6%' stopColor='#3b82f6' /> {/* blue-500 */}
            <stop offset='83.3%' stopColor='#6366f1' /> {/* indigo-500 */}
            <stop offset='100%' stopColor='#8b5cf6' /> {/* purple-500 */}
          </linearGradient>
        </defs>
        {/* Replace the lines below with the actual paths/lines from the Loader2 icon */}
        <circle cx='12' cy='12' r='10' stroke='url(#loaderGradient)' />
      </svg>
    </div>
  )
}
