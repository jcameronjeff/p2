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
export const AllIcons = () => (
  <div className='p-4'>
  {['text-gray-700', 'text-blue-600', 'text-gray-300'].map(fill => (
  <div className={`grid grid-cols-6 text-center text-xxs flex-wrap gap-8 ${fill}`}>
    <div className='flex gap-1 flex-col items-center '><P2.ArrowDownIcon className='w-6' /><div>ArrowDown</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ArrowLeftIcon className='w-6' /><div>ArrowLeft</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ArrowRightIcon className='w-6' /><div>ArrowRight</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ArrowUpIcon className='w-6' /><div>ArrowUp</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.BarcodeIcon className='w-6' /><div>Barcode</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.BellIcon className='w-6' /><div>Bell</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.BellOIcon className='w-6' /><div>BellO</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.BlockedIcon className='w-6' /><div>Blocked</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.BubblesIcon className='w-6' /><div>Bubbles</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CalendarIcon className='w-6' /><div>Calendar</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CancelCircleIcon className='w-6' /><div>CancelCircle</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CancelCircleOIcon className='w-6' /><div>CancelCircleO</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CarIcon className='w-6' /><div>Car</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CarSideIcon className='w-6' /><div>CarSide</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CheckboxCheckedIcon className='w-6' /><div>CheckboxChecked</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CheckboxUncheckedIcon className='w-6' /><div>CheckboxUnchecked</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CheckmarkCircleIcon className='w-6' /><div>CheckmarkCircle</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CheckmarkIcon className='w-6' /><div>Checkmark</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ChevronDownChamferedIcon className='w-6' /><div>ChevronDownChamfered</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ChevronDownIcon className='w-6' /><div>ChevronDown</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ChevronLeftIcon className='w-6' /><div>ChevronLeft</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ChevronRightIcon className='w-6' /><div>ChevronRight</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ChevronUpIcon className='w-6' /><div>ChevronUp</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CloudUploadIcon className='w-6' /><div>CloudUpload</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CreditCardIcon className='w-6' /><div>CreditCard</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CrossIcon className='w-6' /><div>Cross</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.CrossSmallIcon className='w-6' /><div>CrossSmall</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.DetailsIcon className='w-6' /><div>Details</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.DirectionIcon className='w-6' /><div>Direction</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.Envelop5Icon className='w-6' /><div>Envelop5</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ExportIcon className='w-6' /><div>Export</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.EyeBlockedIcon className='w-6' /><div>EyeBlocked</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.EyeIcon className='w-6' /><div>Eye</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.FileExcelIcon className='w-6' /><div>FileExcel</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.FilePdfIcon className='w-6' /><div>FilePdf</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.FileSpreadsheetIcon className='w-6' /><div>FileSpreadsheet</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.FilesEmptyIcon className='w-6' /><div>FilesEmpty</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.FilterIcon className='w-6' /><div>Filter</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.GavelIcon className='w-6' /><div>Gavel</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.HeartIcon className='w-6' /><div>Heart</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.HeartOIcon className='w-6' /><div>HeartO</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ImagesIcon className='w-6' /><div>Images</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.InfoIcon className='w-6' /><div>Info</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.InfoOIcon className='w-6' /><div>InfoO</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ListIcon className='w-6' /><div>List</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.LocationIcon className='w-6' /><div>Location</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ManheimMedallionIcon className='w-6' /><div>ManheimMedallion</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.MarkerIcon className='w-6' /><div>Marker</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.MedalIcon className='w-6' /><div>Medal</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.MenuIcon className='w-6' /><div>Menu</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.Minus2Icon className='w-6' /><div>Minus2</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.MinusCircleIcon className='w-6' /><div>MinusCircle</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.MinusCircleOIcon className='w-6' /><div>MinusCircleO</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.MinusIcon className='w-6' /><div>Minus</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.MobileIcon className='w-6' /><div>Mobile</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.NotificationCircleIcon className='w-6' /><div>NotificationCircle</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.PaintCanIcon className='w-6' /><div>PaintCan</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.PlusIcon className='w-6' /><div>Plus</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.PrinterIcon className='w-6' /><div>Printer</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.SearchIcon className='w-6' /><div>Search</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ShieldCheckIcon className='w-6' /><div>ShieldCheck</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ShieldIcon className='w-6' /><div>Shield</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.SortIcon className='w-6' /><div>Sort</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.StarEmptyIcon className='w-6' /><div>StarEmpty</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.StarFullIcon className='w-6' /><div>StarFull</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.StarHalfIcon className='w-6' /><div>StarHalf</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ThreeBarsIcon className='w-6' /><div>ThreeBars</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.ThreeDotsHorizontalIcon className='w-6' /><div>ThreeDotsHorizontal</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.TriangleDownIcon className='w-6' /><div>TriangleDown</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.TriangleLeftIcon className='w-6' /><div>TriangleLeft</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.TriangleRightIcon className='w-6' /><div>TriangleRight</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.TriangleUpIcon className='w-6' /><div>TriangleUp</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.TruckIcon className='w-6' /><div>Truck</div></div>
    <div className='flex gap-1 flex-col items-center '><P2.UserIcon className='w-6' /><div>User</div></div>
  </div>
  ))}
  </div>
);





