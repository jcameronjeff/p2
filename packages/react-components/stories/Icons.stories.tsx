import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as P2 from '@prism2/icons/react/prism';
export default {
  title: 'Components/Icons',
} as ComponentMeta<any>;
const {
  CreditCardIcon,
  Envelop5Icon,
  ExportIcon,
  HeartIcon,
  InfoIcon,
  SpinnerIcon,
  NotificationCircleIcon,
} = P2;
export const BasicUsage = () => (
  <div className='flex text-gray-700 gap-4'>
    <CreditCardIcon className='w-4' />
    <Envelop5Icon className='w-4 text-blue-700' />
    <ExportIcon className='w-4 text-gold-400' />
    <HeartIcon className='w-4 text-red-300'/>
    <InfoIcon className='w-4 text-blue-300 animate-pulse' />
    <NotificationCircleIcon className='w-4 animate-bounce' />
  </div>
);


export const Spinner = () => (
  <SpinnerIcon className='w-12 animate-spin animate-pulse' />
);
export const AllIcons = () => (
  <div className='flex flex-wrap gap-4 text-center justify-center'>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.AlarmAddIcon className='w-8' /></div>
      <div className='text-gray-400'>AlarmAdd</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.AlarmClockIcon className='w-8' /></div>
      <div className='text-gray-400'>AlarmClock</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.AlarmSetIcon className='w-8' /></div>
      <div className='text-gray-400'>AlarmSet</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowDownIcon className='w-8' /></div>
      <div className='text-gray-400'>ArrowDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowLeftIcon className='w-8' /></div>
      <div className='text-gray-400'>ArrowLeft</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowRightIcon className='w-8' /></div>
      <div className='text-gray-400'>ArrowRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowUpIcon className='w-8' /></div>
      <div className='text-gray-400'>ArrowUp</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowsLeftRightIcon className='w-8' /></div>
      <div className='text-gray-400'>ArrowsLeftRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowsUpDownIcon className='w-8' /></div>
      <div className='text-gray-400'>ArrowsUpDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.AttachIcon className='w-8' /></div>
      <div className='text-gray-400'>Attach</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BackToStartIcon className='w-8' /></div>
      <div className='text-gray-400'>BackToStart</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BarcodeIcon className='w-8' /></div>
      <div className='text-gray-400'>Barcode</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BellIcon className='w-8' /></div>
      <div className='text-gray-400'>Bell</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BellOIcon className='w-8' /></div>
      <div className='text-gray-400'>BellO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BlockedIcon className='w-8' /></div>
      <div className='text-gray-400'>Blocked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BoltIcon className='w-8' /></div>
      <div className='text-gray-400'>Bolt</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BubbleIcon className='w-8' /></div>
      <div className='text-gray-400'>Bubble</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BubblesIcon className='w-8' /></div>
      <div className='text-gray-400'>Bubbles</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BulletIcon className='w-8' /></div>
      <div className='text-gray-400'>Bullet</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CalendarIcon className='w-8' /></div>
      <div className='text-gray-400'>Calendar</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CamcorderIcon className='w-8' /></div>
      <div className='text-gray-400'>Camcorder</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CameraIcon className='w-8' /></div>
      <div className='text-gray-400'>Camera</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CancelCircleIcon className='w-8' /></div>
      <div className='text-gray-400'>CancelCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CancelCircleOIcon className='w-8' /></div>
      <div className='text-gray-400'>CancelCircleO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CarIcon className='w-8' /></div>
      <div className='text-gray-400'>Car</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CarSideIcon className='w-8' /></div>
      <div className='text-gray-400'>CarSide</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CheckboxCheckedIcon className='w-8' /></div>
      <div className='text-gray-400'>CheckboxChecked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CheckboxUncheckedIcon className='w-8' /></div>
      <div className='text-gray-400'>CheckboxUnchecked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CheckmarkCircleIcon className='w-8' /></div>
      <div className='text-gray-400'>CheckmarkCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CheckmarkIcon className='w-8' /></div>
      <div className='text-gray-400'>Checkmark</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronDownChamferedIcon className='w-8' /></div>
      <div className='text-gray-400'>ChevronDownChamfered</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronDownIcon className='w-8' /></div>
      <div className='text-gray-400'>ChevronDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronDownLightIcon className='w-8' /></div>
      <div className='text-gray-400'>ChevronDownLight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronLeftIcon className='w-8' /></div>
      <div className='text-gray-400'>ChevronLeft</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronLeftLightIcon className='w-8' /></div>
      <div className='text-gray-400'>ChevronLeftLight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronRightIcon className='w-8' /></div>
      <div className='text-gray-400'>ChevronRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronRightLightIcon className='w-8' /></div>
      <div className='text-gray-400'>ChevronRightLight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronUpIcon className='w-8' /></div>
      <div className='text-gray-400'>ChevronUp</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronUpLightIcon className='w-8' /></div>
      <div className='text-gray-400'>ChevronUpLight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ClipboardCheckedIcon className='w-8' /></div>
      <div className='text-gray-400'>ClipboardChecked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ClipboardIcon className='w-8' /></div>
      <div className='text-gray-400'>Clipboard</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ClockIcon className='w-8' /></div>
      <div className='text-gray-400'>Clock</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CloudUploadIcon className='w-8' /></div>
      <div className='text-gray-400'>CloudUpload</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ConditionReportIcon className='w-8' /></div>
      <div className='text-gray-400'>ConditionReport</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CreditCardIcon className='w-8' /></div>
      <div className='text-gray-400'>CreditCard</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CrossIcon className='w-8' /></div>
      <div className='text-gray-400'>Cross</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CrossSmallIcon className='w-8' /></div>
      <div className='text-gray-400'>CrossSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CupIcon className='w-8' /></div>
      <div className='text-gray-400'>Cup</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DamagesIcon className='w-8' /></div>
      <div className='text-gray-400'>Damages</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DetailsIcon className='w-8' /></div>
      <div className='text-gray-400'>Details</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DirectionIcon className='w-8' /></div>
      <div className='text-gray-400'>Direction</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DiskIcon className='w-8' /></div>
      <div className='text-gray-400'>Disk</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DollarOIcon className='w-8' /></div>
      <div className='text-gray-400'>DollarO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DownloadIcon className='w-8' /></div>
      <div className='text-gray-400'>Download</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EditIcon className='w-8' /></div>
      <div className='text-gray-400'>Edit</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EnlargeIcon className='w-8' /></div>
      <div className='text-gray-400'>Enlarge</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Envelop5Icon className='w-8' /></div>
      <div className='text-gray-400'>Envelop5</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Envelope2Icon className='w-8' /></div>
      <div className='text-gray-400'>Envelope2</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EnvelopeIcon className='w-8' /></div>
      <div className='text-gray-400'>Envelope</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ErrorTriangleIcon className='w-8' /></div>
      <div className='text-gray-400'>ErrorTriangle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ExportIcon className='w-8' /></div>
      <div className='text-gray-400'>Export</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EyeBlockedIcon className='w-8' /></div>
      <div className='text-gray-400'>EyeBlocked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EyeIcon className='w-8' /></div>
      <div className='text-gray-400'>Eye</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FileEmptyIcon className='w-8' /></div>
      <div className='text-gray-400'>FileEmpty</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FileExcelIcon className='w-8' /></div>
      <div className='text-gray-400'>FileExcel</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FilePdfIcon className='w-8' /></div>
      <div className='text-gray-400'>FilePdf</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FileSpreadsheetIcon className='w-8' /></div>
      <div className='text-gray-400'>FileSpreadsheet</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FileTextIcon className='w-8' /></div>
      <div className='text-gray-400'>FileText</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FilesEmptyIcon className='w-8' /></div>
      <div className='text-gray-400'>FilesEmpty</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FilterIcon className='w-8' /></div>
      <div className='text-gray-400'>Filter</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FlagIcon className='w-8' /></div>
      <div className='text-gray-400'>Flag</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ForkSpoonIcon className='w-8' /></div>
      <div className='text-gray-400'>ForkSpoon</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FuelIcon className='w-8' /></div>
      <div className='text-gray-400'>Fuel</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GavelIcon className='w-8' /></div>
      <div className='text-gray-400'>Gavel</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GearIcon className='w-8' /></div>
      <div className='text-gray-400'>Gear</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GraphPieIcon className='w-8' /></div>
      <div className='text-gray-400'>GraphPie</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GridIcon className='w-8' /></div>
      <div className='text-gray-400'>Grid</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GridSmallIcon className='w-8' /></div>
      <div className='text-gray-400'>GridSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GroundingIcon className='w-8' /></div>
      <div className='text-gray-400'>Grounding</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.HeartIcon className='w-8' /></div>
      <div className='text-gray-400'>Heart</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.HeartOIcon className='w-8' /></div>
      <div className='text-gray-400'>HeartO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.HomeIcon className='w-8' /></div>
      <div className='text-gray-400'>Home</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ImageIcon className='w-8' /></div>
      <div className='text-gray-400'>Image</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ImagesIcon className='w-8' /></div>
      <div className='text-gray-400'>Images</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.InboxIcon className='w-8' /></div>
      <div className='text-gray-400'>Inbox</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.InfoIcon className='w-8' /></div>
      <div className='text-gray-400'>Info</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.InfoOIcon className='w-8' /></div>
      <div className='text-gray-400'>InfoO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LeaveIcon className='w-8' /></div>
      <div className='text-gray-400'>Leave</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LeftRightIcon className='w-8' /></div>
      <div className='text-gray-400'>LeftRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LinkIcon className='w-8' /></div>
      <div className='text-gray-400'>Link</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ListIcon className='w-8' /></div>
      <div className='text-gray-400'>List</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LocationAreaIcon className='w-8' /></div>
      <div className='text-gray-400'>LocationArea</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LocationIcon className='w-8' /></div>
      <div className='text-gray-400'>Location</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LockedIcon className='w-8' /></div>
      <div className='text-gray-400'>Locked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ManheimMedallionIcon className='w-8' /></div>
      <div className='text-gray-400'>ManheimMedallion</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MarkerIcon className='w-8' /></div>
      <div className='text-gray-400'>Marker</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MedalIcon className='w-8' /></div>
      <div className='text-gray-400'>Medal</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MegaphoneIcon className='w-8' /></div>
      <div className='text-gray-400'>Megaphone</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MenuIcon className='w-8' /></div>
      <div className='text-gray-400'>Menu</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Minus2Icon className='w-8' /></div>
      <div className='text-gray-400'>Minus2</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Minus3Icon className='w-8' /></div>
      <div className='text-gray-400'>Minus3</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MinusCircleIcon className='w-8' /></div>
      <div className='text-gray-400'>MinusCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MinusCircleOIcon className='w-8' /></div>
      <div className='text-gray-400'>MinusCircleO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MinusIcon className='w-8' /></div>
      <div className='text-gray-400'>Minus</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MobileIcon className='w-8' /></div>
      <div className='text-gray-400'>Mobile</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.NewWindowIcon className='w-8' /></div>
      <div className='text-gray-400'>NewWindow</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.NotificationCircleIcon className='w-8' /></div>
      <div className='text-gray-400'>NotificationCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.OdometerIcon className='w-8' /></div>
      <div className='text-gray-400'>Odometer</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PaintCanIcon className='w-8' /></div>
      <div className='text-gray-400'>PaintCan</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PaintDropIcon className='w-8' /></div>
      <div className='text-gray-400'>PaintDrop</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PauseIcon className='w-8' /></div>
      <div className='text-gray-400'>Pause</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Pin2Icon className='w-8' /></div>
      <div className='text-gray-400'>Pin2</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PinIcon className='w-8' /></div>
      <div className='text-gray-400'>Pin</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PlayIcon className='w-8' /></div>
      <div className='text-gray-400'>Play</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PlusCircleIcon className='w-8' /></div>
      <div className='text-gray-400'>PlusCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PlusCircleOIcon className='w-8' /></div>
      <div className='text-gray-400'>PlusCircleO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PlusIcon className='w-8' /></div>
      <div className='text-gray-400'>Plus</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PriceTagIcon className='w-8' /></div>
      <div className='text-gray-400'>PriceTag</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PrinterIcon className='w-8' /></div>
      <div className='text-gray-400'>Printer</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ProfileCcwCircleArrowIcon className='w-8' /></div>
      <div className='text-gray-400'>ProfileCcwCircleArrow</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.QrCodeIcon className='w-8' /></div>
      <div className='text-gray-400'>QrCode</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.RefreshIcon className='w-8' /></div>
      <div className='text-gray-400'>Refresh</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ResetTimeIcon className='w-8' /></div>
      <div className='text-gray-400'>ResetTime</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.RotateLeftIcon className='w-8' /></div>
      <div className='text-gray-400'>RotateLeft</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.RotateRightIcon className='w-8' /></div>
      <div className='text-gray-400'>RotateRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SearchIcon className='w-8' /></div>
      <div className='text-gray-400'>Search</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ShieldCheckIcon className='w-8' /></div>
      <div className='text-gray-400'>ShieldCheck</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ShieldIcon className='w-8' /></div>
      <div className='text-gray-400'>Shield</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ShrinkIcon className='w-8' /></div>
      <div className='text-gray-400'>Shrink</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SortIcon className='w-8' /></div>
      <div className='text-gray-400'>Sort</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SoundOffIcon className='w-8' /></div>
      <div className='text-gray-400'>SoundOff</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SoundOnIcon className='w-8' /></div>
      <div className='text-gray-400'>SoundOn</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SpinnerIcon className='w-8' /></div>
      <div className='text-gray-400'>Spinner</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.StarEmptyIcon className='w-8' /></div>
      <div className='text-gray-400'>StarEmpty</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.StarFullIcon className='w-8' /></div>
      <div className='text-gray-400'>StarFull</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.StarHalfIcon className='w-8' /></div>
      <div className='text-gray-400'>StarHalf</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.StopwatchIcon className='w-8' /></div>
      <div className='text-gray-400'>Stopwatch</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeBarsIcon className='w-8' /></div>
      <div className='text-gray-400'>ThreeBars</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeDotsHorizontalIcon className='w-8' /></div>
      <div className='text-gray-400'>ThreeDotsHorizontal</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeDotsVerticalIcon className='w-8' /></div>
      <div className='text-gray-400'>ThreeDotsVertical</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThumbsDownIcon className='w-8' /></div>
      <div className='text-gray-400'>ThumbsDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThumbsUpIcon className='w-8' /></div>
      <div className='text-gray-400'>ThumbsUp</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TrashIcon className='w-8' /></div>
      <div className='text-gray-400'>Trash</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleDownIcon className='w-8' /></div>
      <div className='text-gray-400'>TriangleDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleDownSmallIcon className='w-8' /></div>
      <div className='text-gray-400'>TriangleDownSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleLeftIcon className='w-8' /></div>
      <div className='text-gray-400'>TriangleLeft</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleLeftSmallIcon className='w-8' /></div>
      <div className='text-gray-400'>TriangleLeftSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleRightIcon className='w-8' /></div>
      <div className='text-gray-400'>TriangleRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleRightSmallIcon className='w-8' /></div>
      <div className='text-gray-400'>TriangleRightSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleUpIcon className='w-8' /></div>
      <div className='text-gray-400'>TriangleUp</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleUpSmallIcon className='w-8' /></div>
      <div className='text-gray-400'>TriangleUpSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TruckIcon className='w-8' /></div>
      <div className='text-gray-400'>Truck</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UnlinkIcon className='w-8' /></div>
      <div className='text-gray-400'>Unlink</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UnlockedIcon className='w-8' /></div>
      <div className='text-gray-400'>Unlocked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UploadIcon className='w-8' /></div>
      <div className='text-gray-400'>Upload</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UserAddIcon className='w-8' /></div>
      <div className='text-gray-400'>UserAdd</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UserIcon className='w-8' /></div>
      <div className='text-gray-400'>User</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UsersIcon className='w-8' /></div>
      <div className='text-gray-400'>Users</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.WifiIcon className='w-8' /></div>
      <div className='text-gray-400'>Wifi</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ZoomInIcon className='w-8' /></div>
      <div className='text-gray-400'>ZoomIn</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ZoomOutIcon className='w-8' /></div>
      <div className='text-gray-400'>ZoomOut</div>
    </div>


  </div>
);





