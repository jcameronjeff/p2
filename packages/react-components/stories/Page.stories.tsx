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
    </hgroup>
      <p>Basic paragraph text <code>.text-base / 16px</code></p>
      <p className='text-sm'>Small paragraph text <code>.text-sm / 14px</code></p>
      <p className='text-xs'>Extra Small paragraph text <code>.text-xs / 12px</code></p>
      <p className='text-xxs'>Extra Extra Small paragraph text <code>.text-xxs / 10px</code></p>
      <hr />
      <p className='prism-label'>.prism-label (14px)</p>
      <p className='prism-label-xs'>.prism-label-xs (12px)</p>
      <hr />
      <p className='prism-link'>.prism-link - Accordion Link, Inline Link, Menu Link (16px)</p>
      <p className='prism-link-sm'>.prism-link-sm - Accordion Link, Inline Link (14px)</p>
      <p className='prism-link-xs'>.prism-link-xs - Inline Link XS (12px) </p>
      <p className='prism-link-xxs'>.prism-link-xxs - Inline Link XXS (10px) </p>
      <hr />


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
    <p className='prism-link'>.prism-link</p>
    <p className='prism-link-sm'>.prism-text-link-sm</p>
    <p className='prism-link-xs'>.prism-xs</p>
  </div>
)



export const NavsHTML: ComponentStory<any> = (args) => (
  <section>
    <header className='border shadow-sm rounded-sm flex items-center px-4'>
      <img className='w-12 h-12 rounded-full' src="https://www.fillmurray.com/48/48" />
      <div className='border-l h-16 ml-4' />
      <nav>
        <ul className='px-2 flex items-stretch'>

          <a className='h-16 items-center hover:bg-gray-100 flex px-4' href='#'>
            <span>Home</span>
          </a>
         <a className='h-16 items-center hover:bg-gray-100 flex px-4' href='#'>
            <span>Home</span>
          </a>
        </ul>
      </nav>
    </header>
  </section>
)



export const ArticleHTML: ComponentStory<any> = (args) => (

  <article className='space-y-4 prism'>
    <p className='prism-prose'>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <abbr title="For The Win">ftw</abbr>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
    <p className='prism-prose-sm'>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <abbr title="For The Win">ftw</abbr>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
    <p className='prism-prose-xs'>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <abbr title="For The Win">ftw</abbr>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
    <p className='prism-prose-xxs'>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <abbr title="For The Win">ftw</abbr>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
  </article>

)


export const TableHTML: ComponentStory<any> = (args) => (

  <table className="prism-table">
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

  <form className='space-y-2 prism'>

    <label htmlFor="example-input-email" className='prism-label'>Email address
      <input className='prism-text-input' type="email" id="example-input-email" placeholder="Enter email" />
    </label>

    <label htmlFor="example-input-email" className='prism-form-control'>Inline Form
      <input className='prism-text-input' type="text" id="example-input-text" placeholder="Text input" />
    </label>

    <label className='prism-form-control' htmlFor="example-input-password1">
      Number
      <input type="number" id="example-input-number" placeholder="Number" />
    </label>

    <label className='prism-form-control' htmlFor="example-input-password1">
      Password
      <input type="password" id="example-input-password" placeholder="Password" />
    </label>

    <label htmlFor="example-input-search" className='prism-label'>
      Search
      <input type="search" id="example-input-serach" placeholder="Search .." />
    </label>


      <label className='prism-label' htmlFor="example-input-tel">
        Telephone number
        <input type="tel" id="example-input-tel" placeholder="Telephone number" />
      </label>



      <label className='prism-label' htmlFor="example-input-text">
        Text
        <input type="text" id="example-input-text" placeholder="Enter some text here" />
      </label>


      <label className='prism-label' htmlFor="example-input-url">
        Url
        <input type="url" id="example-input-url" placeholder="Enter a url here" />
      </label>


      <label className='prism-label' htmlFor="example-input-color">
        Color
        <input type="color" id="example-inupt-color" placeholder="#fff" />
      </label>


      <label className='prism-label' htmlFor="example-input-date">
        Date
        <input type="date" id="example-input-date" placeholder="date" />
      </label>


      <label className='prism-label' htmlFor="example-input-date-time">
        Date / Time
        <input type="datetime" id="example-input-date-time" placeholder="date / time" />
      </label>


      <label className='prism-label' htmlFor="example-input-date-time-local">
        Date / Time local
        <input type="datetime-local" id="example-input-date-time-local" placeholder="date / time local" />
      </label>


      <label className='prism-label' htmlFor="example-input-month">
        Month
        <input type="month" id="example-input-month" placeholder="Month" />
      </label>


      <label className='prism-label' htmlFor="example-input-week">
        Week
        <input type="week" id="example-input-week" placeholder="Week" />
      </label>


      <label className='prism-label' htmlFor="example-input-time">
        Time
        <input type="time" id="example-input-time" placeholder="Time" />
      </label>


      <label className='prism-label' htmlFor="example-select1">
        Example select
        <select id="example-select1" className='prism-select'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </label>

      <label htmlFor="example-select2" className='prism-label'>
        Example multiple select
        <select multiple id="example-select2" className='prism-select'>
          <option className='prism-menu-item'>1</option>
          <option className='prism-menu-item'>2</option>
          <option className='prism-menu-item'>3</option>
          <option className='prism-menu-item'>4</option>
          <option className='prism-menu-item'>5</option>
        </select>
      </label>

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
    <div className='flex gap-2 flex-wrap'>
      <button type="button" name="button">No Class Button</button>
      <input className='prism-btn' type="button" name="input" value="Input Button" />
      <input className='prism-btn outline' type="button" name="input" value="Outline Button" />
      <input className='prism-btn fill' type="button" name="input" value="Fill Button" />
      <input className='prism-btn'  type="submit" name="submit" value="Submit Button" />
      <input className='prism-btn' type="reset" name="reset" disabled value="Reset Button" />
    </div>
    <div className='flex gap-2'>
      <input className='prism-btn flex-grow' type="button" name="input" value="More Info" />
      <input className='prism-btn flex-grow fill' type="submit" name="input" value="Submit" />
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
