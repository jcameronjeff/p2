import { ImgHTMLAttributes } from 'react';

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


export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Username to be displayed. Will return up to 3 initials..
   */
  name: string,
  /**
   * Optionally display a name next to the avatar, defaults to false.
   */
  showName?: boolean
}


export function Avatar({ name, src, alt, showName = false, className, ...args }: AvatarProps) {

  const clsx = [
    'rounded-full relative flex border-4 w-12 h-12',
    'items-center relative justify-center border-gold-400',
    'overflow-hidden bg-transparent bg-cover', className].join(' ');

  const Picture = (
    <div className={clsx}>
      <span
        className='prism-heading-4 translate-y-[1px] inset-0'
        aria-label={name}>
        {getInitials(name || '')}
      </span>
      <div
        {...args}
        aria-hidden
        className='absolute bg-transparent bg-cover inset-0'
        style={{ backgroundImage: `url(${src})` }} />
      <img src={src} alt={alt} aria-hidden className='hidden' />
    </div>
  );

  return !showName ? Picture : (
    <div className="flex gap-2 items-center">
      {Picture}
      <span className='prism-heading-4'>{name}</span>
    </div>
  );
}

export default Avatar;

