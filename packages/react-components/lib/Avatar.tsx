import React from 'react';

type VariantName = 'text'|'outline'|'auxiliary'|'link'|'base'
type Variant = Record<VariantName, string>;
type ButtonType = 'button' | 'submit' | 'reset';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: string,
  name?: string,
}

/**
 *
 * @todo Generate a singular Button component that:
 * - includes styles for everything with small footprint.
 * - styles do not pollute other elements.
 * - minimal API surface area (variant + tailwind)
 *
 */
export function Avatar({ size = '12', alt = 'Image', ...args }: Props):React.ReactElement {
  const { children, className } = args;
  const [hasImage, setHasImage] = React.useState(true)
  const clsx = ["rounded-full flex border-2 items-center justify-center border-gold-dark w-12 h-12 overflow-hidden",  className].join(' ');

  function getInitials(str: string) {
    if (str.split(' ').length === 1) {
      if (str.length < 3) return str.toUpperCase();
      return str.slice(0, 1).toUpperCase();
    }
    return str.split(' ').map(word => word.slice(0, 1)).join('');
  }

  return (
    <div className={clsx}>
      {hasImage && args.src ? (
        <img className='w-full h-full' src={args.src} alt={alt} onError={() => setHasImage(false)} />
      ) : (
        <span className='font-normal'>{getInitials(args.name || '')}</span>
      )}
    </div>
  );
}
Avatar.defaultProps = {
  variant: 'base',
};
export default Avatar;
