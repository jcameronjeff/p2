import { useState, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  /**
   * Username to be displayed. Will return up to 3 initials..
   */
  name?: string,
  /**
   * Standard HTML 'alt' attribute to be used on profile picture
   */
  alt?: string,
  /**
   * URL of image to be displayed
   */
  src?: string,
  /**
   * Optional classes to include on the container
   */
  className?: string
}

export function Avatar({ alt = 'Image', src, name, className, ...args }: Props) {
  const [hasImage, setHasImage] = useState(true);
  const clsx = ['rounded-full flex border-4 items-center justify-center border-gold-dark w-12 h-12 overflow-hidden',  className].join(' ');

  function getInitials(str: string) {
    if (str.split(' ').length === 1) {
      if (str.length < 3) return str.toUpperCase();
      return str.slice(0, 1).toUpperCase();
    }
    return str.split(' ').map(word => word.slice(0, 1)).join('');
  }

  return (
    <div {...args} className={clsx}>
      {hasImage && src ? (
        <img className='w-full h-full' src={src} alt={alt} onError={() => setHasImage(false)} />
      ) : (
        <span className='font-normal translate-y-[1px]'>{getInitials(name || '')}</span>
      )}
    </div>
  );
}
Avatar.defaultProps = {
  variant: 'base',
};
export default Avatar;
