import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from '.';
const {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Caption,
  Label,
  Anchor,
} = Typography;
export default {
  title: 'Components/Typography',
  component: Typography.Heading1,
} as ComponentMeta<any>;


const Template: ComponentStory<any> = () => (
  <>
    <Heading1>This is our future h1 - Heading 1</Heading1>
    <Heading2>This is Our Future h2 - Heading 2</Heading2>
    <Heading3>This is Our Future h3 - Heading 3</Heading3>
    <Heading4>This is Our Future h4 - Heading 4</Heading4>
    <Heading5>This is Our Future h5 - Heading 5</Heading5>
    <Heading6>This is Our Future h6 - Heading 6</Heading6>
    <Anchor as='p'>Action/Anchor</Anchor>
    <p className='prism-link'>link text</p>
    <p>Body text</p>
    <Caption>Captions</Caption>
    <Label>Labels</Label>
    <p className='underline'>Underlined text</p>
    <p><em>emphasis text</em></p>
    <p><strong>strong text</strong></p>
    <p><mark>marked text</mark></p>
    <p><dfn title='Major League Baseball' className='tt'>tooltip text (definitions)</dfn></p>'
  </>
);

export const Basic = Template.bind({});
