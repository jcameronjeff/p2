import { XMarkIcon } from "@prism2/icons-react/24/outline"
import { style as styles } from './Combobox';

export type ITag<T = any> = React.HTMLAttributes<HTMLDivElement> & {
  i:T,
  getter?: (arg0:T) => React.ReactNode
}
export const Tag = ({i, onClick, getter}:ITag) => {
  return (
    <div className={styles.next.tag} onClick={onClick}>
      <span>{getter ? getter(i) : i as string}</span>
      <XMarkIcon className='h-3' />
    </div>
  )
}
