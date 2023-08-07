import { newSpecPage } from '@stencil/core/testing';
import { IdsCard } from '../ids-card';

describe('ids-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IdsCard],
      html: `<ids-card class="fooga"></ids-card>`,
    });
    expect(page.root).toEqualHtml(`
      <ids-card class="fooga card-vertical">
        <mock:shadow-root>
          <div class="card card-vertical">
            <div class="card-layout">
              <slot name="card-media"></slot>
              <div class="card-body">
                <slot name="card-title"></slot>
                <slot></slot>
              </div>
            </div>
            <slot name="card-footer"></slot>
          </div>
      </ids-card>
    `);
  });
});
