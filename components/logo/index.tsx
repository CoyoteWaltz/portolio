import type { FC } from 'react'
import { useState } from 'react'
import cls from 'classnames'
import s from './index.module.scss'

export interface LogoProps {
  wrapperStyle?: React.CSSProperties
  disableHoverAnimation?: boolean
}

export const Logo: FC<LogoProps> = (props) => {
  const { wrapperStyle, disableHoverAnimation } = props
  const [initAnimated, setInitAnimated] = useState(true)
  return (
    <div className="w-full h-full" style={wrapperStyle}>
      <svg className={cls(s['coyote-logo'], {
        [s['coyote-logo--init']]: initAnimated,
        [s['coyote-logo--enable-hover']]: !disableHoverAnimation,
      })} width="80" height="79" viewBox="0 0 80 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          onAnimationEnd={() => {
            setInitAnimated(false)
          }}
          d="M21.5 76C21.5 76 15.3079 76 11.5 76C7.5 76 3.74516 72 3.5 68C3.34678 65.5 3.49998 21.5303 3.5 13C3.50001 7 7.5 4 11.0001 4H22C22 4 28 4 30.5 4C31.5 4 32.7051 3.90171 33 4M21.5 76C21.5 76 32.5 76 41.5 76C41.5 76 49 76 51 76C52.5041 76 52.8886 75.9076 53.5 75.5M21.5 76C21.5 76 23 71.5 24.5 67C24.5 67 27 60.5 27 59.5M30.5001 49C30.5001 48 43.4692 12 43.4692 12M47.5001 0.5C47.5001 1.5 43.4692 12 43.4692 12M43.4692 12L66.5 76H79.5"
          stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
