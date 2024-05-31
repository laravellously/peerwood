import React from 'react'
import classNames from "classnames"

type AppLayoutProps = {
  className?: string
  children?: React.ReactNode
}

export function AppWrap({ className, ...props }: AppLayoutProps) {
  const compClass = classNames({
    "nk-wrap": true,
    [`${className}`]: className,
  });
  return (
    <div className={compClass}>
      {props.children}
    </div>
  )
}

export function AppRoot({ className, ...props }: AppLayoutProps) {
  const compClass = classNames({
    "nk-app-root": true,
    [`${className}`]: className,
  });
  return (
    <div className={compClass}>
      {props.children}
    </div>
  )
}

export function AppMain({ className, ...props }: AppLayoutProps) {
  const compClass = classNames({
    "nk-main": true,
    [`${className}`]: className,
  });
  return (
    <div className={compClass}>
      {props.children}
    </div>
  )
}
