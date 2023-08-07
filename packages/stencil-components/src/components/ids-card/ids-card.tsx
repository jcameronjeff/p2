import { Component, Host, Prop, h } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'ids-card',
  styleUrl: 'ids-card.css',
  shadow: true,
})

export class IdsCard {
  /** 
   * (optional) denotes if the component is to be displayed horizontally 
   */
  @Prop() horizontal: boolean;

  /** 
   * (optional) the title text of the card. if using this, do not use the `card-title` slot 
   */
  @Prop() header: string;

  /** 
   * (optional) the media source of the card. if using this, do not use the `card-media` slot 
   */
  @Prop() media: string;

  render() {
    // switch class names need to be on the host for cascades
    const hostClass = clsx(
      !this.horizontal && 'card-vertical',
      this.horizontal && 'card-horizontal',
    );

    // component class names go on the first child, not on the host
    const componentClass = clsx(
      'card',
      hostClass,
    );

    // generate header element if the header prop was specified. 
    // otherwise, generate a slot
    const headerEl = this.header ? (
      <div class="card-title">{this.header}</div>
    ) : <slot name="card-title" />;

    // generate media element if the media prop was specified. 
    // otherwise, generate a slot
    const mediaEl = this.media ? (
      <div class="card-media">
        <img src={this.media} alt="" class="w-full" />
      </div>
    ) : <slot name="card-media" />;

    return (
      <Host class={hostClass}>
        <div class={componentClass}>
          <div class="card-layout">
            {mediaEl}
            <div class="card-body">
              {headerEl}
              <slot />
            </div>
          </div>
          <slot name="card-footer" />
        </div>
      </Host>
    );
  }
}
