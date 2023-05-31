import * as React from "react";

export const Button = (props:React.HTMLAttributes<HTMLButtonElement>) => {
  const { className, children, ...attr } = props;
  const clsx = ['p-4 py-2 hover:bg-orange-700/25 bg-orange-600/10 rounded-xs text-white font-normal tracking-tighter text-xs border-orange-400 border shadow-sm hover:shadow hover:shadow-yellow-300 shadow-yellow-500 transition-all font-mono duration-150 ease-in-out bg-blend-screen active:scale-95 ', className]
    .filter(Boolean).join(' ');

  return <button className={clsx} {...attr}>{children}</button>
};
