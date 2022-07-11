import { useState, HTMLProps } from 'react';

/**
 *
 * @remark Genearlly these types of methods should live inside their
 * component unless they need to be shared. In which case they ought
 * to live in their own files. However, we have moved `getInitials` to
 * the top-level so it can be exported and tested directly.
 *
 * @see Avatar.spec.tsx
 */
export function getInitials(str: string) {
  if (str.split(' ').length === 1) {
    if (str.length < 3) return str.toUpperCase();
    return str.slice(0, 1).toUpperCase();
  }
  return str.split(' ').map(word => word.slice(0, 1)).join('');
}


export interface AvatarProps extends HTMLProps<HTMLDivElement> {
  /**
   * Username to be displayed. Will return up to 3 initials..
   */
  name: string,
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


export function Avatar({ alt = 'Image', src, name, className, ...args }: AvatarProps) {
  const [hasImage, setHasImage] = useState(!!src);
  const clsx = ['rounded-full relative flex border-4 items-center relative justify-center border-gold-dark w-12 h-12 overflow-hidden',  className].join(' ');
  return (
    <div {...args} className={clsx}>

      {hasImage ? (
        <img className='w-full h-full absolute top-0' src={src} alt={alt} onError={() => setHasImage(false)} />
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

