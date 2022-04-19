import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Views/HTML',
  argTypes: {
    enablePrism: { control: 'boolean'},
    textSize: {
      control: { type: 'select' },
      options: ['text-sm', 'text-base', 'text-xl', 'text-xs'],
    },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<any>;

export const Template: ComponentStory<any> = (args) => (

  <div className='space-y-8'>
    <HeadingsHTML />
    <NavsHTML />
    <ArticleHTML />
    <FormHTML {...args} />
    <ListHTML />
    <DefinitionHTML />
    <FigureHTML />
    <TableHTML />
    <AddressHTML />
  </div>
)

export const HeadingsHTML: ComponentStory<any> = (args) => (
  <section>
    <hgroup className='space-y-4'>
      <h1>h1 HTML5 Kitchen Sink</h1>
      <h2>h2 Back in my quaint</h2>
      <h3>h3 Jaunty vie with flaunting phlox</h3>
      <h4>h4 Five or six big jet planes zoomed quickly by the new tower.</h4>
      <h5>h5 Expect skilled signwriters to use many jazzy, quaint old alphabets effectively.</h5>
      <h6>h6 Pack my box with five dozen liquor jugs.</h6>
      <p>Basic paragraph text <code>.text-base / 16px</code></p>
      <p className='text-sm'>Small paragraph text <code>.text-sm / 14px</code></p>
      <p className='text-xs'>Extra Small paragraph text <code>.text-xs / 12px</code></p>
      <p className='text-xxs'>Extra Extra Small paragraph text <code>.text-xxs / 10px</code></p>
      <p className='prism-label'>.prism-label</p>
      <p className='prism-label-xs'>.prism-label-xs</p>
      <p className='prism-text-link-xs'>.prism-text-link-xs</p>
      <p className='prism-text-link-sm'>.prism-text-link-sm</p>
    </hgroup>
  </section>
)

export const BodyTextHTML: ComponentStory<any> = (args) => (
  <div>
    <p>Basic paragraph text <code>.text-base / 16px</code></p>
    <p className='text-sm'>Small paragraph text <code>.text-sm / 14px</code></p>
    <p className='text-xs'>Extra Small paragraph text <code>.text-xs / 12px</code></p>
    <p className='text-xxs'>Extra Extra Small paragraph text <code>.text-xxs / 10px</code></p>
    <p className='prism-label'>.prism-label</p>
    <p className='prism-label-xs'>.prism-label-xs</p>
    <p className='prism-text-link-xs'>.prism-text-link-xs</p>
    <p className='prism-text-link-sm'>.prism-text-link-sm</p>
  </div>
)



export const NavsHTML: ComponentStory<any> = (args) => (
  <section>
    <header className='border shadow-sm rounded-sm flex items-center px-4'>
      <img className='w-12 h-12 rounded-full' src="https://www.fillmurray.com/48/48" />
      <div className='border-l h-16 ml-4' />
      <nav>
        <ul className='px-2'>
          <li className='p-0'><a className='h-16 tracking-tight uppercase hover:bg-gray-100 inline-block p-4' href='#'>Home</a></li>
          <li className='p-0'><a className='h-16 tracking-tight uppercase hover:bg-gray-100 inline-block p-4' href='#'>Buy</a></li>
          <li className='p-0'><a className='h-16 tracking-tight uppercase hover:bg-gray-100 inline-block p-4' href='#'>Sell</a></li>
        </ul>
      </nav>
    </header>
  </section>
)



export const ArticleHTML: ComponentStory<any> = (args) => (

  <article className='space-y-4'>
    <input className='prism-text-input' type='text' placeholder="my placeholder" />
    <p className='prism-prose'>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <abbr title="For The Win">ftw</abbr>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
    <p className='prism-prose-sm'>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <abbr title="For The Win">ftw</abbr>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
    <p className='prism-prose-xs'>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <abbr title="For The Win">ftw</abbr>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
    <p className='prism-prose-xxs'>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <abbr title="For The Win">ftw</abbr>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
  </article>

)


export const TableHTML: ComponentStory<any> = (args) => (

  <table className={`prism-table`}>
    <caption>Tables can have captions now.</caption>
    <tbody>
      <tr>
        <th>Person</th>
        <th>Number</th>
        <th>Third Column</th>
      </tr>
      <tr>
        <td>Someone Lastname</td>
        <td>900</td>
        <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
      </tr>
      <tr>
        <td><a href="#">Person Name</a></td>
        <td>1200</td>
        <td>Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.</td>
      </tr>
      <tr>
        <td>Another Person</td>
        <td>1500</td>
        <td>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.</td>
      </tr>
      <tr>
        <td>Last One</td>
        <td>2800</td>
        <td>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</td>
      </tr>
    </tbody>
  </table>
)




export const FormHTML: ComponentStory<any> = (args) => (

  <form className='space-y-2'>
    <p>
      <label htmlFor="example-input-email">Email address</label>
      <input className='form-input' type="email" id="example-input-email" placeholder="Enter email" />
    </p>
    <p>
      <label htmlFor="example-input-password1">Number</label>
      <input type="number" id="example-input-number" placeholder="Number" />
    </p>
    <p>
      <label htmlFor="example-input-password">Password</label>
      <input type="password" id="example-input-password" placeholder="Password" />
    </p>
    <p>
      <label htmlFor="example-input-search">Search</label>
      <input type="search" id="example-input-serach" placeholder="Search .." />
    </p>
    <p>
      <label htmlFor="example-input-tel">Telephone number</label>
      <input type="tel" id="example-input-tel" placeholder="Telephone number" />
    </p>

    <p>
      <label htmlFor="example-input-text">Text</label>
      <input type="text" id="example-input-text" placeholder="Enter some text here" />
    </p>
    <p>
      <label htmlFor="example-input-url">Url</label>
      <input type="url" id="example-input-url" placeholder="Enter a url here" />
    </p>
    <p>
      <label htmlFor="example-input-color">Color</label>
      <input type="color" id="example-inupt-color" placeholder="#fff" />
    </p>
    <p>
      <label htmlFor="example-input-date">Date</label>
      <input type="date" id="example-input-date" placeholder="date" />
    </p>
    <p>
      <label htmlFor="example-input-date-time">Date / Time</label>
      <input type="datetime" id="example-input-date-time" placeholder="date / time" />
    </p>
    <p>
      <label htmlFor="example-input-date-time-local">Date / Time local</label>
      <input type="datetime-local" id="example-input-date-time-local" placeholder="date / time local" />
    </p>
    <p>
      <label htmlFor="example-input-month">Month</label>
      <input type="month" id="example-input-month" placeholder="Month" />
    </p>
    <p>
      <label htmlFor="example-input-week">Week</label>
      <input type="week" id="example-input-week" placeholder="Week" />
    </p>
    <p>
      <label htmlFor="example-input-time">Time</label>
      <input type="time" id="example-input-time" placeholder="Time" />
    </p>
    <p>
      <label htmlFor="example-select1">Example select</label>
      <select id="example-select1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </p>
    <p>
      <label htmlFor="example-select2">Example multiple select</label>
      <select multiple id="example-select2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </p>
    <p>
      <label htmlFor="example-textarea">Example textarea</label>
      <textarea id="example-textarea" rows={3} />
    </p>
    <p>
      <label htmlFor="example-input-file">File input</label>
      <input type="file" id="example-input-file" />
    </p>
    <fieldset>
      <legend>I am legend</legend>
      <div>
        <label>
          <input type="radio" name="options-radios" id="optionsR-radios1" value="option1" checked /> Option one is this and that&mdash;be sure to include why it's great
        </label>
      </div>

      <div>
        <label>
          <input type="radio" name="options-radios" id="options-radios2" value="option2" /> Option two can be something else and selecting it will deselect option one
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="optionsRadios" id="options-radios3" value="option3" disabled /> Option three is disabled
        </label>
      </div>
    </fieldset>

    <fieldset>
      <legend>I am also legend</legend>
      <input type="checkbox" /> Check me out
      <input type="checkbox" /> Or check me out
    </fieldset>
    <div className='flex gap-2'>
      <button type="button" name="button">Button</button>
      <input type="button" name="input" value="Input Button" />
      <input type="submit" name="submit" value="Submit Button" />
      <input type="reset" name="reset" value="Reset Button" />
    </div>
  </form>

)



export const ListHTML: ComponentStory<any> = (args) => (

  <section className='grid grid-cols-2 w-full space-between'>
    <div className='space-y-4'>
    <h3>Basic </h3>
    <ul className='prism-list'>
      <li>List item two</li>
      <li>List item three</li>
      <li>List item four</li>
    </ul>
    <h3>Nested</h3>
    <ul className='prism-list'>
      <li>Unordered List item one
        <ul className='prism-list'>
          <li>Nested list item
            <ul className='prism-list'>
              <li>Level 3, item one</li>
              <li>Level 3, item two</li>
              <li>Level 3, item three</li>
              <li>Level 3, item four</li>
            </ul>
          </li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ul>
      </li>
      <li>List item two</li>
      <li>List item three</li>
      <li>List item four</li>
    </ul>
    </div>
    <div className='space-y-4'>
    <h3>Small Text</h3>
    <ol className='prism-list text-sm'>
      <li>List item one 2</li>
      <li>List item two</li>
      <li>List item three</li>
      <li>List item four</li>
    </ol>
    <h3>Extra Small Text</h3>
    <ol className='prism-list text-xs'>
      <li>List item one 2</li>
      <li>List item two</li>
      <li>List item three</li>
      <li>List item four</li>
    </ol>
    </div>
  </section>

)


export const DefinitionHTML: ComponentStory<any> = (args) => (

  <section>
    <dl>
      <dt>Definition List Title</dt>
      <dd>Definition list division.</dd>
      <dt>Kitchen Sink</dt>
      <dd>Used in expressions to describe work in which all conceivable (and some inconceivable) sources have been mined. In this case, a bunch of markup.</dd>
      <dt>aside</dt>
      <dd>Defines content aside from the page content</dd>
      <dt>blockquote</dt>
      <dd>Defines a section that is quoted from another source</dd>
    </dl>
  </section>

)

export const FigureHTML: ComponentStory<any> = (args) => (

  <figure>
    <img src="https://www.fillmurray.com/505/314" />
    <figcaption>Fig1. A picture of Bill Murray from <a href="https://www.fillmurray.com/">fillmurray.com</a></figcaption>
  </figure>

)

export const BlockquoteHTML: ComponentStory<any> = (args) => (
  <section className='space-y-4 prose prose-sm'>
    <blockquote>
      <p>Blockquote: I quickly explained that many big jobs involve few hazards</p>
    </blockquote>
    <blockquote>
      <p>This is a mult-line blockquote with a cite reference. People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick
        carefully. I’m actually as proud of the things we haven’tdone as the things I have done. Innovation is saying no to 1,000 things.
        <cite>Steve Jobs – Apple Worldwide Developers’ Conference, 1997</cite>
      </p>
    </blockquote>
  </section>
)


export const AddressHTML: ComponentStory<any> = (args) => (
  <address>1 Infinite Loop<br/>
  Cupertino, CA 95014<br/>
  United States</address>
)


export const CodeblockHTML: ComponentStory<any> = (args) => (
  <pre>
    {`pre {
      display: block;
      padding: 7px;
      background-color: #F5F5F5;
      border: 1px solid #E1E1E8;
      border-radius: 3px;
      white-space: pre-wrap;
      word-break: break-all;
      font-family: Menlo, Monaco;
      line-height: 160%;
    }`}</pre>
)
