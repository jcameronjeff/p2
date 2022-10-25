import { style as styles } from './Combobox';

export function TextInput(props:React.HTMLAttributes<HTMLInputElement>) {
  return (
    <div className='break-inside-avoid'>
      {props.title && <label className={styles.next.label}>{props.title}</label>}
      <div className={[
        styles.next.input,
        'focus-within:scale-105',
        'block h-8 focus-within:ring-1',
        'focus-within:bg-white dark:focus-within:bg-black/10' ,
        'focus-within:ring-blue-300 drop-shadow-sm'
        ].join(' ')}
      >
        <input
          {...props}
          className={[styles.next.textbox, '-my-1 p-3'].join(' ')}
        />
      </div>
    </div>
  )
}
