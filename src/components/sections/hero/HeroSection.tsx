import Spline from '@splinetool/react-spline'
import { useEffect, useRef } from 'react'

export const HeroSection = () => {
  const splineContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = splineContainerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      // Spline 내부에서 발생한 스크롤 이벤트를 페이지 스크롤로 전파
      window.scrollBy({
        top: e.deltaY,
        behavior: 'auto',
      })
    }

    // Spline이 렌더링된 후 내부 canvas/iframe 요소 찾기
    const findSplineElement = () => {
      const canvas = container.querySelector('canvas')
      const iframe = container.querySelector('iframe')
      return canvas || iframe || container
    }

    // 약간의 지연 후 Spline 요소 찾기 (렌더링 완료 대기)
    const timeoutId = setTimeout(() => {
      const splineElement = findSplineElement()
      if (splineElement) {
        splineElement.addEventListener('wheel', handleWheel, { passive: false })
      }
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      const splineElement = findSplineElement()
      if (splineElement) {
        splineElement.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])
  return (
    <section id="hero" className="bg-white pb-6 relative">
      <div className="relative" ref={splineContainerRef}>
        <Spline scene="https://prod.spline.design/FA7jps2pxNFc5u0R/scene.splinecode" />
        {/* 오른쪽 하단 문구 가리기 */}
        <div className="absolute bg-linear-to-tr from-[#BDD6EB] to-[#D1E1EF] w-[160px] h-v bottom-0 right-0 z-50"></div>
      </div>
    </section>
  )
}

export default HeroSection
