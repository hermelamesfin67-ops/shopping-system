import React from 'react'

function TitleSubTitle({ title, subTitle, children }: { title: string, subTitle: string, children?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-7 bg-[#DB4444] rounded-sm"></div>
          <span className="text-sm font-semibold text-[#DB4444]">{title}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950">
          {subTitle}
        </h2>
      </div>
      {children}
    </div>
  )
}

export default TitleSubTitle