import { Combobox } from '@headlessui/react';
import { ChevronDownIcon } from '@prism2/icons-react/24/outline';
import { HTMLAttributes } from 'react';
import './combobox.css';

export type Target = string | React.ComponentType<any>;
export interface WithPrismConfigI {
  /**
   * this is a workaround to avoid a typeguard issue when passing args.
   */
  className?: string,
  /**
   * classes to inject before initialization. Parses provided argument similar
   * to the popular clsx library. Result will be *prepended* to any classNames
   * provided by the end user.
   **/
  clsx?: string | string[],
  /**
   * passthrough for assigning a display name to the resultign component.
   */
  displayName?: string
}

/**
 * @description High-order component that facilitates export of "pre-composed"
 * library components while preserving original functionality in its entirety.
 *
 * @param WrappedComponent - Component we will customize and re-export.
 * @param config - common arguments as an object, see type definition WithPrismConfigI
 * @param ourPresetProps - default props to inject before initialization. This is to
 * limit boilerplate and asserts a level of governance over "out-of-the-box" behavior.
 */
export function withPrismClasses<P extends WithPrismConfigI>(
  // Then we need to type the incoming component.
  // This creates a union type of whatever the component
  // already accepts AND our extraInfo prop
  WrappedComponent: React.ComponentType<P & WithPrismConfigI> | React.ElementType,
  config: WithPrismConfigI,
  ourPresetProps?: Partial<P>,

): React.ComponentType<P> {

  /**
   * @description  method for concatenating provided classNames with preset.
   * @todo Should this just be the `clsx` library itself?
   * @see https://ghe.coxautoinc.com/Prism/prism2/pull/157#discussion_r989531
   **/
  function updateClassnames(args:P ) {
    return {
      ...args,
      className: [args.className, config.clsx].flat().filter(Boolean).join(' '),
    };
  }
  // Assign provided displayName or try to infer one from the WrappedComponent
  function getDisplayName(tag: Target): string {
    if (config.displayName) return config.displayName;
    if (typeof tag === 'string') return `dangerous.${tag}`;
    if (tag.name) return `---${tag.name}---`;
    return tag.displayName || config.displayName || 'Component';
  }

  const ComponentWithExtraInfo = Object.assign((props: P) => {
    let attr = updateClassnames(props);
    // At this point, the props being passed in are the original props the component expects.
    return <WrappedComponent {...ourPresetProps} {...attr} />;
  }, {
    displayName: getDisplayName(WrappedComponent),
  });

  return ComponentWithExtraInfo;
}

// Keep root component separate for readability
const PComboboxFn = withPrismClasses(Combobox, {
  clsx: 'relative h-80',
  displayName: 'PCombobox',
}, { as: 'div' });

// Reduce boilerplate by providing a pre-configured div
const PComboFormFn:React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  let attr = {
    ...props,
    className: ['prism-combobox-input-wrapper', props.className].filter(Boolean).join(),
  };
  return <div {...attr} />;
};

// Create a single object for export
export const PCombobox = Object.assign(PComboboxFn, {
  Button: withPrismClasses(Combobox.Button, {
    clsx: 'prism-combobox-button right-0 absolute',
    displayName: 'PCombobox.Button',
  }, {
    children: <ChevronDownIcon aria-hidden="true" />,
  }),
  Form: Object.assign(PComboFormFn, {
    displayName: 'PCombobox.Form',
  }),
  Input: withPrismClasses(Combobox.Input, {
    clsx: 'prism-combobox-input-area pr-10',
    displayName: 'PCombobox.Input',
  }),
  Label: withPrismClasses(Combobox.Label, {
    clsx: 'prism-label',
    displayName: 'PCombobox.Label',
  }),
  Option: withPrismClasses(Combobox.Option, {
    clsx: 'prism-menu-item',
    displayName: 'PCombobox.Option',
  }),
  Options: withPrismClasses(Combobox.Options, {
    clsx: 'prism-menu absolute mt-1 max-h-60',
    displayName: 'PCombobox.Options',
  }),
});


export default PCombobox;
