import { PrismFC } from '../types';

/**
 * @package Tooltip
 * @description simple element for handling Tooltips.
 *
 * @example
 *
 * <p>This paragraph has normal text which includes a
 * <Tooltip content="I am a tooltip">tooltip</Tooltip> in the
 * flow of the text.</p>
 */

interface Props {
  /**
   * Content to display in tooltip.
   */
  content: string,
}

export const Tooltip:PrismFC<Props> = ({ as, content, children, ...props }) => {
  const Component = as || 'span';
  const cx = ['tt', props.className].join(' ');
  return (
    <Component className={cx} aria-label={content} {...props}>
      {children}
    </Component>
  );
};

export default Tooltip;
