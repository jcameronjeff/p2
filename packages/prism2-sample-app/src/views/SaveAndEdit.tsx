import { Button, TextInput } from '@prism2/react-components';
import { useState } from 'react';


export function SaveAndEdit() {
  const [count, increment] = useState(0);

  const Introduction = () => (
    <div className='space-y-4 w-100'>
      <h1>Saving &amp; Editing</h1>
      <h2>Guidance</h2>
      <p>The primary action for saving something new should be labeled “Save [Action]”. Please work with a Content Designer when questions arise.</p>
      <p>The primary action for editing something that already exists should be labeled “Save Changes.”</p>
      <p>In the rare case that there is not enough space for these labels, the primary action may be abbreviated to “Save.” </p>
      <h2>Rationale</h2>
      <p>This ensures that all our applications use clear and consistent language for these scenarios.</p>
    </div>
  )

  const SaveAddressSample = () => (
    <div role='form' className='space-y-4'>
      <h3 role='heading'>Save Shipping Address {count}</h3>
      <p role='note' className='text-sm'>Please name the shipping address below.</p>
      <p role='contentinfo' className='text-sm'><b>1280 Peachtree Street, Atlanta, GA 30309</b></p>
      <TextInput label="Shipping Address Name" name="address-1" placeholder="e.g. Headquarters" />
      <div className='flex justify-end gap-4' role='menubar'>
        <Button className='ghosted' onClick={() => {}}>Cancel</Button>
        <Button type='submit' onClick={() => increment(count + 1)}>Save Changes</Button>
      </div>
    </div>
  )

  const EditAddressExample = () => (
    <div role='form' className='space-y-4'>
      <h3 role='heading'>Edit Shipping Address</h3>
      <TextInput label="Shipping Address" name="address-2" placeholder="123 Main St" />
      <div className='flex gap-4' role='group'>
        <TextInput label="ZIP" name="zip" placeholder="12345" className='w-32' />
        <TextInput name="city" value="Atlanta, GA" className='w-full' readOnly />
      </div>
      <TextInput label="Shipping Address Name" name="address-1" placeholder="e.g. Headquarters" />
      <div className='flex justify-end gap-4' role='menubar'>
        <button className='ghosted' onClick={() => {}}>Cancel</button>
        <button type='submit' onClick={() => increment(count + 1)}>
        <span>Save Changes</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      </div>
    </div>
  )
  return (
    <div className='space-y-8'>
      <Introduction />
      <div className='w-96 space-y-12 p-8 border-green-400 border-2'>
        <SaveAddressSample />
        <hr />
        <EditAddressExample />
      </div>
    </div>
  )
}


export default SaveAndEdit
