// import KitchenSink from '../lib/HTML5';
import { Dialog } from '@headlessui/react';
import { ChevronDownIcon, PencilAltIcon, SaveAsIcon, ShareIcon, StarIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Modal, Tab, Box, Message, Radio } from '../lib';


export function FormSpecimens() {
  return (
    <form>
      <p>
        <label htmlFor="example-input-email">Email address</label>
        <input type="email" id="example-input-email" placeholder="Enter email"/>
      </p>
      <p>
        <label htmlFor="example-input-password1">Number</label>
        <input type="number" id="example-input-number" placeholder="Number"/>
      </p>
      <p>
        <label htmlFor="example-input-password">Password</label>
        <input type="password" id="example-input-password" placeholder="Password"/>
      </p>
      <p>
        <label htmlFor="example-input-search">Search</label>
        <input type="search" id="example-input-serach" placeholder="Search .."/>
      </p>
      <p>
        <label htmlFor="example-input-tel">Telephone number</label>
        <input type="tel" id="example-input-tel" placeholder="Telephone number"/>
      </p>

      <p>
        <label htmlFor="example-input-text">Text</label>
        <input type="text" id="example-input-text" placeholder="Enter some text here"/>
      </p>
      <p>
        <label htmlFor="example-input-url">Url</label>
        <input type="url" id="example-input-url" placeholder="Enter a url here"/>
      </p>
      <p>
        <label htmlFor="example-input-color">Color</label>
        <input type="color" id="example-inupt-color" placeholder="#fff"/>
      </p>
      <p>
        <label htmlFor="example-input-date">Date</label>
        <input type="date" id="example-input-date" placeholder="date"/>
      </p>
      <p>
        <label htmlFor="example-input-date-time">Date / Time</label>
        <input type="datetime" id="example-input-date-time" placeholder="date / time"/>
      </p>
      <p>
        <label htmlFor="example-input-date-time-local">Date / Time local</label>
        <input type="datetime-local" id="example-input-date-time-local" placeholder="date / time local"/>
      </p>
      <p>
        <label htmlFor="example-input-month">Month</label>
        <input type="month" id="example-input-month" placeholder="Month"/>
      </p>
      <p>
        <label htmlFor="example-input-week">Week</label>
        <input type="week" id="example-input-week" placeholder="Week"/>
      </p>
      <p>
        <label htmlFor="example-input-time">Time</label>
        <input type="time" id="example-input-time" placeholder="Time"/>
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
        <textarea id="example-textarea" rows={3}></textarea>
      </p>
      <p>
        <label htmlFor="example-input-file">File input</label>
        <input type="file" id="example-input-file"/>
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
            <input type="radio" name="options-radios" id="options-radios2" value="option2" /> Option two can be something else and selecting it will deselect option on/e
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="optionsRadios" id="options-radios3" value="option3" disabled /> Option three is disable/d
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>I am also legend</legend>
        <input type="checkbox" /> Check me out
        <input type="checkbox" /> Or check me out
      </fieldset>
      <p>
        <button type="button" name="button">Button</button>
        <input type="button" name="input" value="Input Button"/>
        <input type="submit" name="submit" value="Submit Button"/>
        <input type="reset" name="reset" value="Reset Button"/>
      </p>
    </form>
  );
}

const Indicator = ({ color = 'blue ' }: { color: string }) => {
  let clsx = {
    'orange': 'text-orange-600 ring-orange-100 bg-orange-50',
    'blue': 'text-blue-600 ring-blue-100 bg-blue-50',
    'yellow': 'text-yellow-600 ring-yellow-200 bg-yellow-50',
    'green': 'text-green-600 ring-green-100 bg-green-50',
  };


  return (
  <div className={`flex items-center font-medium gap-2 p-0.5 bg-orange-50 px-2 text-xs rounded text-orange-600 ring-orange-100 ring-1 relative ${clsx[color]}`}>
    <span className='font-sans uppercase text-xxs'>Active Now</span>
    <div className='w-2 h-2 bg-red-600 rounded-full animate-ping absolute -top-1 -right-1' />
  </div>
  );
};

const PageTitleVDP = ({ title = '2022 Toyota Highlander CUV' }: { title: string }) => {
  let [fav, setFav] = useState(false);
  return (
    <div className='flex gap-2 items-center'>
      <hgroup className='space-y-1'>
        <caption className='font-semibold flex items-center gap-4 text-sm tracking-tighter font-mono '>
          <div className='text-gray-500'>2C4RC1BG1LR268970</div>
          <Indicator color='blue' />
        </caption>
        <div className="flex justify-between gap-2 items-center ">
          <div className='flex gap-2'>
            <h1 className='font-medium tracking-tight leading-5 text-xl'>
              {title}
            </h1>
            <StarIcon
              onClick={() => setFav(!fav)}
              className={`w-6 cursor-pointer bg-clip-text text-gray-200 hover:text-gold-200 ${fav && 'text-gold-400 hover:text-gold-500'}`} />
          </div>
        </div>
        <div className='font-medium text-xs flex gap-1 flex-wrap leading-snug'>
          <div className='p-1 bg-gray-100 opacity-75 hover:opacity-100 rounded px-1.5 text-gray-600 text-xxs'>35,711mi</div>
          <div className='p-1 bg-gray-100 opacity-75 hover:opacity-100 rounded px-1.5 text-gray-600 text-xxs'>FWD</div>
          <div className='p-1 bg-gray-100 opacity-75 hover:opacity-100 rounded px-1.5 text-gray-600 text-xxs'>3.6L 6 Cyl  </div>
          <div className='p-1 bg-gray-100 opacity-75 hover:opacity-100 rounded px-1.5 text-gray-600 text-xxs'>Gasodivne</div>
          <div className='p-1 bg-gray-100 opacity-75 hover:opacity-100 rounded px-1.5 text-gray-600 text-xxs'>Auto</div>
        </div>

      </hgroup>
    </div>
  );
};

export function KitchenSink() {

  return (
    <main className=''>
      <div className='flex gap-1 pb-4 border-b border-gray-100 justify-between mb-4'>
        <PageTitleVDP title='2019 Chevy Impala' />
        <div className='flex flex-col gap-0'>
          <button className='prism-btn text-xs p-1 text'><SaveAsIcon /></button>
          <button className='prism-btn text-xs p-1 text'><ShareIcon /></button>
          <button className='prism-btn text-xs p-1 text'><PencilAltIcon /></button>
        </div>
      </div>
      <section className='space-y-6'>
        <article className='prism-prose-sm'>
          <p>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <abbr title="For The Win">ftw</abbr>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
          <h4 className='prism-heading-4'>h4 Five or six big jet planes zoomed quickly by the new tower.</h4>
          <p>You can also use <kbd>keyboard text</kbd>, which sometimes is styled similarly to the <code>&lt;code&gt;</code> or <samp>samp</samp> tags. Even more specifically, there is a tag just for <var>variables</var>. Not to be mistaken with blockquotes
            below, the quote tag lets you denote something as <q>quoted text</q>. Lastly don't forget the sub (H<sub>2</sub>O) and sup (E = MC<sup>2</sup>) tags. </p>
          <h3 className='prism-heading-3'>h3 Jaunty <a href='#'>zinnias</a> vie with flaunting phlox</h3>
          <p>This is a mult-line blockquote with a cite reference. People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’tdone as the things I have done. Innovation is saying no to 1,000 things.
            <cite>Steve Jobs – Apple Worldwide Developers’ Conference, 1997</cite>
          </p>
          <blockquote>
            <p className='italic text-gray-700 font-light text-xl'>People think focus means saying yes to the thing you’ve got to focus on. Lorem ipsum delorate et deus etimo. I quickly explained that many big jobs involve few hazards. <cite className='text-xs font-medium not-italic'>- A person</cite></p>
          </blockquote>
          <table className='prism-table text-xs break-before-column'>
            <tbody>
              <tr>
                <th>Person</th>
                <th>Number</th>
                <th>Third Column</th>
              </tr>
              <tr>
                <td className='font-bold'>Someone Lastname</td>
                <td>900</td>
                <td>Nullam quis risus eget urna mollis ornare vel eu leo.</td>
              </tr>
              <tr>
                <td className='font-bold'><a href="#">Person Name</a></td>
                <td>1200</td>
                <td>Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.</td>
              </tr>
              <tr>
                <td className='font-bold'>Another Person</td>
                <td>1500</td>
                <td>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.</td>
              </tr>
              <tr>
                <td className='font-bold'>Last One</td>
                <td>2800</td>
                <td>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</td>
              </tr>
            </tbody>
          </table>
          <h3 className='prism-heading-3'>Overview of Features</h3>
          <p>People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’tdone as the things I have done.</p>
          <h3 className='prism-heading-3'>h3 Jaunty <a href='#'>zinnias</a> vie with flaunting phlox</h3>
          <p>This is a mult-line blockquote with a cite reference. People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’tdone as the things I have done. Innovation is saying no to 1,000 things. <cite>Steve Jobs – Apple Worldwide Developers’ Conference, 1997</cite>
          </p>
          <div className='not-prism-prose pb-4 border-b'>
            <h6 className='prism-heading-6'>Something about definition lists</h6>
            <p className='text-sm text-muted'>This is a mult-line blockquote with a cite reference. People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully.</p>
          </div>
          <h3 className='prism-heading-3'>h3 Jaunty <a href='#'>zinnias</a> vie with flaunting phlox</h3>
          <p>This is a mult-line blockquote with a cite reference. People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick
            carefully. I’m actually as proud of the things we haven’tdone as the things I have done. Innovation is saying no to 1,000 things.
          </p>
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
        <Box as='div' className='bg-gray-50 border border-gray-100 my-4 p-4 px-8'>
            <dl className='prism-def grid grid-cols-[max-content,1fr] gap-6 text-sm '>
              <dt>Definition List Title</dt>
              <dd>Definition list division.</dd>
              <dt>Kitchen Sink</dt>
              <dd>Used in expressions to describe work in which all conceivable (and some inconceivable) sources have been mined. In this case, a bunch of markup.</dd>
              <dt>aside</dt>
              <dd>Defines content aside from the page content</dd>
              <dt>blockquote</dt>
              <dd>Defines a section that is quoted from another source</dd>
            </dl>
          </Box>
        </article>
      </section>
    </main>
  );
}


export function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [variant, setVariant] = useState('slideout');
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, [isOpen]);
  return (
    <div className='bg-gray-50 min-h-screen overflow-x-hidden w-screen'>
      <Tab.Group unstyle>

      <Box title='app-header' as='div' className='sticky top-0 left-0 right-0 w-screen z-50 bg-white space-y-2 border-b-4 shadow-sm border-gold-400 p-2'>
        <Box title='app-mode-select' as='div' className='flex gap-2 items-center pr-4 container justify-end m-auto'>
          <h5 className='font-medium text-xxs text-gray-400'>Mode Select</h5>
          {['modal', 'slideout', 'slideout-left'].map(value => (
            <Radio
              name='dialog-style'
              onChange={() => setVariant(value)}
              value={value}
              className='text-xxs text-gray-200'
              defaultChecked={variant === value} />
          ))}
        </Box>
        <Box title='app-menu' as='div' className='flex justify-between container m-auto'>
          <Tab.List as='div' className='flex gap-1'>
            <button className='prism-btn fill flex gap-1  text-sm items-center self-center' onClick={() => setIsOpen(!isOpen)}>
              Buy
              <ChevronDownIcon className='w-4' />
            </button>
            <Tab className='prism-btn text text-sm bg-gray-50'>Message</Tab>
            <Tab className='prism-btn text text-sm bg-gray-50'>Summary</Tab>
            <Tab className='prism-btn text text-sm bg-gray-50'>VDP</Tab>
            <Tab className='prism-btn text text-sm bg-gray-50'>Cards</Tab>
          </Tab.List>

        </Box>
      </Box>
      <Box className='container border mt-12 m-auto rounded border-gray-100 p-8 bg-white' as='div'>
        <Tab.Panel>
          <Message title="This is my title" variant='success'>
            <p>
              This is some text message lorem ipsum delorate message lorem ipsum
            </p>
          </Message>
        </Tab.Panel>
        <Tab.Panel>
          <div className='flex gap-1 pb-4 border-b border-gray-100 justify-between'>
            <PageTitleVDP title='2020 Toyota Corlla Hatchback' />
            <div className='flex flex-col gap-0'>
              <button className='prism-btn text-xs p-1 text'><SaveAsIcon /></button>
              <button className='prism-btn text-xs p-1 text'><ShareIcon /></button>
              <button className='prism-btn text-xs p-1 text'><PencilAltIcon /></button>
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <KitchenSink />
        </Tab.Panel>
        <Tab.Panel>
          <div className='columns-2 lg:columns-4 gap-4 space-y-4'>
          {['2022 Toyota Rav 4', '2019 Honda Civic SE', '2020 Hyundai Elantra N',
            '1998 Jeep Grand Cherokee', '2001 Dodge Caravan', '1986 Honda Prelude SE',
          ].map(title =>
            <div className='border-l-4 p-4 hover:border-gold-400 border border-gray-100'>
              <PageTitleVDP title={title} />
            </div>,
          )}
          </div>
        </Tab.Panel>
      </Box>
      </Tab.Group>
      <Modal show={isOpen} variant={variant as 'modal'} onClose={() => setIsOpen(false)}>
        <div>
        <Dialog.Title><PageTitleVDP /></Dialog.Title>
        <Dialog.Description>Lorem ipsum delorat.</Dialog.Description>
        </div>
        <Dialog.Panel>
          <div className='flex pt-6 mt-2 border-t border-blue-100 gap-2 justify-end'>
            <button className='prism-btn text-xs' onClick={() => setIsOpen(false)}>Dismiss</button>
            <button className='prism-btn fill text-xs' onClick={() => setIsOpen(false)}>Confirm</button>
          </div>
        </Dialog.Panel>
      </Modal>
    </div>
  );
}

export default App;
