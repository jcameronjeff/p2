import { ComponentMeta } from '@storybook/react';
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

let boxClass = 'text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between border-gray-500/50';

export const AllIcons = ({ textColor = 'text-gray-400' }) => (
  <div className='flex flex-wrap gap-4 text-center justify-center'>
    <div className={boxClass}>
      <div><P2.AlarmAddIcon className='w-8' /></div>
      <div className={textColor}>AlarmAdd</div>
    </div>
    <div className={boxClass}>
      <div><P2.AlarmClockIcon className='w-8' /></div>
      <div className={textColor}>AlarmClock</div>
    </div>
    <div className={boxClass}>
      <div><P2.AlarmSetIcon className='w-8' /></div>
      <div className={textColor}>AlarmSet</div>
    </div>
    <div className={boxClass}>
      <div><P2.ArrowDownIcon className='w-8' /></div>
      <div className={textColor}>ArrowDown</div>
    </div>
    <div className={boxClass}>
      <div><P2.ArrowLeftIcon className='w-8' /></div>
      <div className={textColor}>ArrowLeft</div>
    </div>
    <div className={boxClass}>
      <div><P2.ArrowRightIcon className='w-8' /></div>
      <div className={textColor}>ArrowRight</div>
    </div>
    <div className={boxClass}>
      <div><P2.ArrowUpIcon className='w-8' /></div>
      <div className={textColor}>ArrowUp</div>
    </div>
    <div className={boxClass}>
      <div><P2.ArrowsLeftRightIcon className='w-8' /></div>
      <div className={textColor}>ArrowsLeftRight</div>
    </div>
    <div className={boxClass}>
      <div><P2.ArrowsUpDownIcon className='w-8' /></div>
      <div className={textColor}>ArrowsUpDown</div>
    </div>
    <div className={boxClass}>
      <div><P2.AttachIcon className='w-8' /></div>
      <div className={textColor}>Attach</div>
    </div>
    <div className={boxClass}>
      <div><P2.BackToStartIcon className='w-8' /></div>
      <div className={textColor}>BackToStart</div>
    </div>
    <div className={boxClass}>
      <div><P2.BarcodeIcon className='w-8' /></div>
      <div className={textColor}>Barcode</div>
    </div>
    <div className={boxClass}>
      <div><P2.BellIcon className='w-8' /></div>
      <div className={textColor}>Bell</div>
    </div>
    <div className={boxClass}>
      <div><P2.BellOIcon className='w-8' /></div>
      <div className={textColor}>BellO</div>
    </div>
    <div className={boxClass}>
      <div><P2.BlockedIcon className='w-8' /></div>
      <div className={textColor}>Blocked</div>
    </div>
    <div className={boxClass}>
      <div><P2.BoltIcon className='w-8' /></div>
      <div className={textColor}>Bolt</div>
    </div>
    <div className={boxClass}>
      <div><P2.BubbleIcon className='w-8' /></div>
      <div className={textColor}>Bubble</div>
    </div>
    <div className={boxClass}>
      <div><P2.BubblesIcon className='w-8' /></div>
      <div className={textColor}>Bubbles</div>
    </div>
    <div className={boxClass}>
      <div><P2.BulletIcon className='w-8' /></div>
      <div className={textColor}>Bullet</div>
    </div>
    <div className={boxClass}>
      <div><P2.CalendarIcon className='w-8' /></div>
      <div className={textColor}>Calendar</div>
    </div>
    <div className={boxClass}>
      <div><P2.CamcorderIcon className='w-8' /></div>
      <div className={textColor}>Camcorder</div>
    </div>
    <div className={boxClass}>
      <div><P2.CameraIcon className='w-8' /></div>
      <div className={textColor}>Camera</div>
    </div>
    <div className={boxClass}>
      <div><P2.CancelCircleIcon className='w-8' /></div>
      <div className={textColor}>CancelCircle</div>
    </div>
    <div className={boxClass}>
      <div><P2.CancelCircleOIcon className='w-8' /></div>
      <div className={textColor}>CancelCircleO</div>
    </div>
    <div className={boxClass}>
      <div><P2.CarIcon className='w-8' /></div>
      <div className={textColor}>Car</div>
    </div>
    <div className={boxClass}>
      <div><P2.CarSideIcon className='w-8' /></div>
      <div className={textColor}>CarSide</div>
    </div>
    <div className={boxClass}>
      <div><P2.CheckboxCheckedIcon className='w-8' /></div>
      <div className={textColor}>CheckboxChecked</div>
    </div>
    <div className={boxClass}>
      <div><P2.CheckboxUncheckedIcon className='w-8' /></div>
      <div className={textColor}>CheckboxUnchecked</div>
    </div>
    <div className={boxClass}>
      <div><P2.CheckmarkCircleIcon className='w-8' /></div>
      <div className={textColor}>CheckmarkCircle</div>
    </div>
    <div className={boxClass}>
      <div><P2.CheckmarkIcon className='w-8' /></div>
      <div className={textColor}>Checkmark</div>
    </div>
    <div className={boxClass}>
      <div><P2.ChevronDownChamferedIcon className='w-8' /></div>
      <div className={textColor}>ChevronDownChamfered</div>
    </div>
    <div className={boxClass}>
      <div><P2.ChevronDownIcon className='w-8' /></div>
      <div className={textColor}>ChevronDown</div>
    </div>
    <div className={boxClass}>
      <div><P2.ChevronDownLightIcon className='w-8' /></div>
      <div className={textColor}>ChevronDownLight</div>
    </div>
    <div className={boxClass}>
      <div><P2.ChevronLeftIcon className='w-8' /></div>
      <div className={textColor}>ChevronLeft</div>
    </div>
    <div className={boxClass}>
      <div><P2.ChevronLeftLightIcon className='w-8' /></div>
      <div className={textColor}>ChevronLeftLight</div>
    </div>
    <div className={boxClass}>
      <div><P2.ChevronRightIcon className='w-8' /></div>
      <div className={textColor}>ChevronRight</div>
    </div>
    <div className={boxClass}>
      <div><P2.ChevronRightLightIcon className='w-8' /></div>
      <div className={textColor}>ChevronRightLight</div>
    </div>
    <div className={boxClass}>
      <div><P2.ChevronUpIcon className='w-8' /></div>
      <div className={textColor}>ChevronUp</div>
    </div>
    <div className={boxClass}>
      <div><P2.ChevronUpLightIcon className='w-8' /></div>
      <div className={textColor}>ChevronUpLight</div>
    </div>
    <div className={boxClass}>
      <div><P2.ClipboardCheckedIcon className='w-8' /></div>
      <div className={textColor}>ClipboardChecked</div>
    </div>
    <div className={boxClass}>
      <div><P2.ClipboardIcon className='w-8' /></div>
      <div className={textColor}>Clipboard</div>
    </div>
    <div className={boxClass}>
      <div><P2.ClockIcon className='w-8' /></div>
      <div className={textColor}>Clock</div>
    </div>
    <div className={boxClass}>
      <div><P2.CloudUploadIcon className='w-8' /></div>
      <div className={textColor}>CloudUpload</div>
    </div>
    <div className={boxClass}>
      <div><P2.ConditionReportIcon className='w-8' /></div>
      <div className={textColor}>ConditionReport</div>
    </div>
    <div className={boxClass}>
      <div><P2.CreditCardIcon className='w-8' /></div>
      <div className={textColor}>CreditCard</div>
    </div>
    <div className={boxClass}>
      <div><P2.CrossIcon className='w-8' /></div>
      <div className={textColor}>Cross</div>
    </div>
    <div className={boxClass}>
      <div><P2.CrossSmallIcon className='w-8' /></div>
      <div className={textColor}>CrossSmall</div>
    </div>
    <div className={boxClass}>
      <div><P2.CupIcon className='w-8' /></div>
      <div className={textColor}>Cup</div>
    </div>
    <div className={boxClass}>
      <div><P2.DamagesIcon className='w-8' /></div>
      <div className={textColor}>Damages</div>
    </div>
    <div className={boxClass}>
      <div><P2.DetailsIcon className='w-8' /></div>
      <div className={textColor}>Details</div>
    </div>
    <div className={boxClass}>
      <div><P2.DirectionIcon className='w-8' /></div>
      <div className={textColor}>Direction</div>
    </div>
    <div className={boxClass}>
      <div><P2.DiskIcon className='w-8' /></div>
      <div className={textColor}>Disk</div>
    </div>
    <div className={boxClass}>
      <div><P2.DollarOIcon className='w-8' /></div>
      <div className={textColor}>DollarO</div>
    </div>
    <div className={boxClass}>
      <div><P2.DownloadIcon className='w-8' /></div>
      <div className={textColor}>Download</div>
    </div>
    <div className={boxClass}>
      <div><P2.EditIcon className='w-8' /></div>
      <div className={textColor}>Edit</div>
    </div>
    <div className={boxClass}>
      <div><P2.EnlargeIcon className='w-8' /></div>
      <div className={textColor}>Enlarge</div>
    </div>
    <div className={boxClass}>
      <div><P2.Envelop5Icon className='w-8' /></div>
      <div className={textColor}>Envelop5</div>
    </div>
    <div className={boxClass}>
      <div><P2.Envelope2Icon className='w-8' /></div>
      <div className={textColor}>Envelope2</div>
    </div>
    <div className={boxClass}>
      <div><P2.EnvelopeIcon className='w-8' /></div>
      <div className={textColor}>Envelope</div>
    </div>
    <div className={boxClass}>
      <div><P2.ErrorTriangleIcon className='w-8' /></div>
      <div className={textColor}>ErrorTriangle</div>
    </div>
    <div className={boxClass}>
      <div><P2.ExportIcon className='w-8' /></div>
      <div className={textColor}>Export</div>
    </div>
    <div className={boxClass}>
      <div><P2.EyeBlockedIcon className='w-8' /></div>
      <div className={textColor}>EyeBlocked</div>
    </div>
    <div className={boxClass}>
      <div><P2.EyeIcon className='w-8' /></div>
      <div className={textColor}>Eye</div>
    </div>
    <div className={boxClass}>
      <div><P2.FileEmptyIcon className='w-8' /></div>
      <div className={textColor}>FileEmpty</div>
    </div>
    <div className={boxClass}>
      <div><P2.FileExcelIcon className='w-8' /></div>
      <div className={textColor}>FileExcel</div>
    </div>
    <div className={boxClass}>
      <div><P2.FilePdfIcon className='w-8' /></div>
      <div className={textColor}>FilePdf</div>
    </div>
    <div className={boxClass}>
      <div><P2.FileSpreadsheetIcon className='w-8' /></div>
      <div className={textColor}>FileSpreadsheet</div>
    </div>
    <div className={boxClass}>
      <div><P2.FileTextIcon className='w-8' /></div>
      <div className={textColor}>FileText</div>
    </div>
    <div className={boxClass}>
      <div><P2.FilesEmptyIcon className='w-8' /></div>
      <div className={textColor}>FilesEmpty</div>
    </div>
    <div className={boxClass}>
      <div><P2.FilterIcon className='w-8' /></div>
      <div className={textColor}>Filter</div>
    </div>
    <div className={boxClass}>
      <div><P2.FlagIcon className='w-8' /></div>
      <div className={textColor}>Flag</div>
    </div>
    <div className={boxClass}>
      <div><P2.ForkSpoonIcon className='w-8' /></div>
      <div className={textColor}>ForkSpoon</div>
    </div>
    <div className={boxClass}>
      <div><P2.FuelIcon className='w-8' /></div>
      <div className={textColor}>Fuel</div>
    </div>
    <div className={boxClass}>
      <div><P2.GavelIcon className='w-8' /></div>
      <div className={textColor}>Gavel</div>
    </div>
    <div className={boxClass}>
      <div><P2.GearIcon className='w-8' /></div>
      <div className={textColor}>Gear</div>
    </div>
    <div className={boxClass}>
      <div><P2.GraphPieIcon className='w-8' /></div>
      <div className={textColor}>GraphPie</div>
    </div>
    <div className={boxClass}>
      <div><P2.GridIcon className='w-8' /></div>
      <div className={textColor}>Grid</div>
    </div>
    <div className={boxClass}>
      <div><P2.GridSmallIcon className='w-8' /></div>
      <div className={textColor}>GridSmall</div>
    </div>
    <div className={boxClass}>
      <div><P2.GroundingIcon className='w-8' /></div>
      <div className={textColor}>Grounding</div>
    </div>
    <div className={boxClass}>
      <div><P2.HeartIcon className='w-8' /></div>
      <div className={textColor}>Heart</div>
    </div>
    <div className={boxClass}>
      <div><P2.HeartOIcon className='w-8' /></div>
      <div className={textColor}>HeartO</div>
    </div>
    <div className={boxClass}>
      <div><P2.HomeIcon className='w-8' /></div>
      <div className={textColor}>Home</div>
    </div>
    <div className={boxClass}>
      <div><P2.ImageIcon className='w-8' /></div>
      <div className={textColor}>Image</div>
    </div>
    <div className={boxClass}>
      <div><P2.ImagesIcon className='w-8' /></div>
      <div className={textColor}>Images</div>
    </div>
    <div className={boxClass}>
      <div><P2.InboxIcon className='w-8' /></div>
      <div className={textColor}>Inbox</div>
    </div>
    <div className={boxClass}>
      <div><P2.InfoIcon className='w-8' /></div>
      <div className={textColor}>Info</div>
    </div>
    <div className={boxClass}>
      <div><P2.InfoOIcon className='w-8' /></div>
      <div className={textColor}>InfoO</div>
    </div>
    <div className={boxClass}>
      <div><P2.LeaveIcon className='w-8' /></div>
      <div className={textColor}>Leave</div>
    </div>
    <div className={boxClass}>
      <div><P2.LeftRightIcon className='w-8' /></div>
      <div className={textColor}>LeftRight</div>
    </div>
    <div className={boxClass}>
      <div><P2.LinkIcon className='w-8' /></div>
      <div className={textColor}>Link</div>
    </div>
    <div className={boxClass}>
      <div><P2.ListIcon className='w-8' /></div>
      <div className={textColor}>List</div>
    </div>
    <div className={boxClass}>
      <div><P2.LocationAreaIcon className='w-8' /></div>
      <div className={textColor}>LocationArea</div>
    </div>
    <div className={boxClass}>
      <div><P2.LocationIcon className='w-8' /></div>
      <div className={textColor}>Location</div>
    </div>
    <div className={boxClass}>
      <div><P2.LockedIcon className='w-8' /></div>
      <div className={textColor}>Locked</div>
    </div>
    <div className={boxClass}>
      <div><P2.ManheimMedallionIcon className='w-8' /></div>
      <div className={textColor}>ManheimMedallion</div>
    </div>
    <div className={boxClass}>
      <div><P2.MarkerIcon className='w-8' /></div>
      <div className={textColor}>Marker</div>
    </div>
    <div className={boxClass}>
      <div><P2.MedalIcon className='w-8' /></div>
      <div className={textColor}>Medal</div>
    </div>
    <div className={boxClass}>
      <div><P2.MegaphoneIcon className='w-8' /></div>
      <div className={textColor}>Megaphone</div>
    </div>
    <div className={boxClass}>
      <div><P2.MenuIcon className='w-8' /></div>
      <div className={textColor}>Menu</div>
    </div>
    <div className={boxClass}>
      <div><P2.Minus2Icon className='w-8' /></div>
      <div className={textColor}>Minus2</div>
    </div>
    <div className={boxClass}>
      <div><P2.Minus3Icon className='w-8' /></div>
      <div className={textColor}>Minus3</div>
    </div>
    <div className={boxClass}>
      <div><P2.MinusCircleIcon className='w-8' /></div>
      <div className={textColor}>MinusCircle</div>
    </div>
    <div className={boxClass}>
      <div><P2.MinusCircleOIcon className='w-8' /></div>
      <div className={textColor}>MinusCircleO</div>
    </div>
    <div className={boxClass}>
      <div><P2.MinusIcon className='w-8' /></div>
      <div className={textColor}>Minus</div>
    </div>
    <div className={boxClass}>
      <div><P2.MobileIcon className='w-8' /></div>
      <div className={textColor}>Mobile</div>
    </div>
    <div className={boxClass}>
      <div><P2.NewWindowIcon className='w-8' /></div>
      <div className={textColor}>NewWindow</div>
    </div>
    <div className={boxClass}>
      <div><P2.NotificationCircleIcon className='w-8' /></div>
      <div className={textColor}>NotificationCircle</div>
    </div>
    <div className={boxClass}>
      <div><P2.OdometerIcon className='w-8' /></div>
      <div className={textColor}>Odometer</div>
    </div>
    <div className={boxClass}>
      <div><P2.PaintCanIcon className='w-8' /></div>
      <div className={textColor}>PaintCan</div>
    </div>
    <div className={boxClass}>
      <div><P2.PaintDropIcon className='w-8' /></div>
      <div className={textColor}>PaintDrop</div>
    </div>
    <div className={boxClass}>
      <div><P2.PauseIcon className='w-8' /></div>
      <div className={textColor}>Pause</div>
    </div>
    <div className={boxClass}>
      <div><P2.Pin2Icon className='w-8' /></div>
      <div className={textColor}>Pin2</div>
    </div>
    <div className={boxClass}>
      <div><P2.PinIcon className='w-8' /></div>
      <div className={textColor}>Pin</div>
    </div>
    <div className={boxClass}>
      <div><P2.PlayIcon className='w-8' /></div>
      <div className={textColor}>Play</div>
    </div>
    <div className={boxClass}>
      <div><P2.PlusCircleIcon className='w-8' /></div>
      <div className={textColor}>PlusCircle</div>
    </div>
    <div className={boxClass}>
      <div><P2.PlusCircleOIcon className='w-8' /></div>
      <div className={textColor}>PlusCircleO</div>
    </div>
    <div className={boxClass}>
      <div><P2.PlusIcon className='w-8' /></div>
      <div className={textColor}>Plus</div>
    </div>
    <div className={boxClass}>
      <div><P2.PriceTagIcon className='w-8' /></div>
      <div className={textColor}>PriceTag</div>
    </div>
    <div className={boxClass}>
      <div><P2.PrinterIcon className='w-8' /></div>
      <div className={textColor}>Printer</div>
    </div>
    <div className={boxClass}>
      <div><P2.ProfileCcwCircleArrowIcon className='w-8' /></div>
      <div className={textColor}>ProfileCcwCircleArrow</div>
    </div>
    <div className={boxClass}>
      <div><P2.QrCodeIcon className='w-8' /></div>
      <div className={textColor}>QrCode</div>
    </div>
    <div className={boxClass}>
      <div><P2.RefreshIcon className='w-8' /></div>
      <div className={textColor}>Refresh</div>
    </div>
    <div className={boxClass}>
      <div><P2.ResetTimeIcon className='w-8' /></div>
      <div className={textColor}>ResetTime</div>
    </div>
    <div className={boxClass}>
      <div><P2.RotateLeftIcon className='w-8' /></div>
      <div className={textColor}>RotateLeft</div>
    </div>
    <div className={boxClass}>
      <div><P2.RotateRightIcon className='w-8' /></div>
      <div className={textColor}>RotateRight</div>
    </div>
    <div className={boxClass}>
      <div><P2.SearchIcon className='w-8' /></div>
      <div className={textColor}>Search</div>
    </div>
    <div className={boxClass}>
      <div><P2.ShieldCheckIcon className='w-8' /></div>
      <div className={textColor}>ShieldCheck</div>
    </div>
    <div className={boxClass}>
      <div><P2.ShieldIcon className='w-8' /></div>
      <div className={textColor}>Shield</div>
    </div>
    <div className={boxClass}>
      <div><P2.ShrinkIcon className='w-8' /></div>
      <div className={textColor}>Shrink</div>
    </div>
    <div className={boxClass}>
      <div><P2.SortIcon className='w-8' /></div>
      <div className={textColor}>Sort</div>
    </div>
    <div className={boxClass}>
      <div><P2.SoundOffIcon className='w-8' /></div>
      <div className={textColor}>SoundOff</div>
    </div>
    <div className={boxClass}>
      <div><P2.SoundOnIcon className='w-8' /></div>
      <div className={textColor}>SoundOn</div>
    </div>
    <div className={boxClass}>
      <div><P2.SpinnerIcon className='w-8' /></div>
      <div className={textColor}>Spinner</div>
    </div>
    <div className={boxClass}>
      <div><P2.StarEmptyIcon className='w-8' /></div>
      <div className={textColor}>StarEmpty</div>
    </div>
    <div className={boxClass}>
      <div><P2.StarFullIcon className='w-8' /></div>
      <div className={textColor}>StarFull</div>
    </div>
    <div className={boxClass}>
      <div><P2.StarHalfIcon className='w-8' /></div>
      <div className={textColor}>StarHalf</div>
    </div>
    <div className={boxClass}>
      <div><P2.StopwatchIcon className='w-8' /></div>
      <div className={textColor}>Stopwatch</div>
    </div>
    <div className={boxClass}>
      <div><P2.ThreeBarsIcon className='w-8' /></div>
      <div className={textColor}>ThreeBars</div>
    </div>
    <div className={boxClass}>
      <div><P2.ThreeDotsHorizontalIcon className='w-8' /></div>
      <div className={textColor}>ThreeDotsHorizontal</div>
    </div>
    <div className={boxClass}>
      <div><P2.ThreeDotsVerticalIcon className='w-8' /></div>
      <div className={textColor}>ThreeDotsVertical</div>
    </div>
    <div className={boxClass}>
      <div><P2.ThumbsDownIcon className='w-8' /></div>
      <div className={textColor}>ThumbsDown</div>
    </div>
    <div className={boxClass}>
      <div><P2.ThumbsUpIcon className='w-8' /></div>
      <div className={textColor}>ThumbsUp</div>
    </div>
    <div className={boxClass}>
      <div><P2.TrashIcon className='w-8' /></div>
      <div className={textColor}>Trash</div>
    </div>
    <div className={boxClass}>
      <div><P2.TriangleDownIcon className='w-8' /></div>
      <div className={textColor}>TriangleDown</div>
    </div>
    <div className={boxClass}>
      <div><P2.TriangleDownSmallIcon className='w-8' /></div>
      <div className={textColor}>TriangleDownSmall</div>
    </div>
    <div className={boxClass}>
      <div><P2.TriangleLeftIcon className='w-8' /></div>
      <div className={textColor}>TriangleLeft</div>
    </div>
    <div className={boxClass}>
      <div><P2.TriangleLeftSmallIcon className='w-8' /></div>
      <div className={textColor}>TriangleLeftSmall</div>
    </div>
    <div className={boxClass}>
      <div><P2.TriangleRightIcon className='w-8' /></div>
      <div className={textColor}>TriangleRight</div>
    </div>
    <div className={boxClass}>
      <div><P2.TriangleRightSmallIcon className='w-8' /></div>
      <div className={textColor}>TriangleRightSmall</div>
    </div>
    <div className={boxClass}>
      <div><P2.TriangleUpIcon className='w-8' /></div>
      <div className={textColor}>TriangleUp</div>
    </div>
    <div className={boxClass}>
      <div><P2.TriangleUpSmallIcon className='w-8' /></div>
      <div className={textColor}>TriangleUpSmall</div>
    </div>
    <div className={boxClass}>
      <div><P2.TruckIcon className='w-8' /></div>
      <div className={textColor}>Truck</div>
    </div>
    <div className={boxClass}>
      <div><P2.UnlinkIcon className='w-8' /></div>
      <div className={textColor}>Unlink</div>
    </div>
    <div className={boxClass}>
      <div><P2.UnlockedIcon className='w-8' /></div>
      <div className={textColor}>Unlocked</div>
    </div>
    <div className={boxClass}>
      <div><P2.UploadIcon className='w-8' /></div>
      <div className={textColor}>Upload</div>
    </div>
    <div className={boxClass}>
      <div><P2.UserAddIcon className='w-8' /></div>
      <div className={textColor}>UserAdd</div>
    </div>
    <div className={boxClass}>
      <div><P2.UserIcon className='w-8' /></div>
      <div className={textColor}>User</div>
    </div>
    <div className={boxClass}>
      <div><P2.UsersIcon className='w-8' /></div>
      <div className={textColor}>Users</div>
    </div>
    <div className={boxClass}>
      <div><P2.WifiIcon className='w-8' /></div>
      <div className={textColor}>Wifi</div>
    </div>
    <div className={boxClass}>
      <div><P2.ZoomInIcon className='w-8' /></div>
      <div className={textColor}>ZoomIn</div>
    </div>
    <div className={boxClass}>
      <div><P2.ZoomOutIcon className='w-8' /></div>
      <div className={textColor}>ZoomOut</div>
    </div>
  </div>
);






export const SplashPage = () => (
  <>
  <div className='flex justify-center bg-blue-600 p-12 text-white flex-col items-center space-y-4'>
    <h1 className='text-4xl font-light font-mono tracking-tighter'>
      <span className='opacity-25 font-light'>@prism2/</span>
      <span>icons</span>
    </h1>
    <div className='text-sm tracking-tight w-[540px] bg-slate-900 text-slate-300 rounded font-mono p-4'>
      <span className='opacity-50'>// install</span><br />
      <span className='opacity-25'>$</span> pnpm add @prism2/icons<br />
      <span className='opacity-50'>// import</span><br />
      {'import { HeartIcon } from \'@prism2/icons/react/prism\''}<br />
      <span className='opacity-50'>// insert</span><br />
      {'<HeartIcon className="w-24 text-blue-200" />'}
    </div>
    <HeartIcon className="w-24 text-blue-200" />
  </div>
  <div className='flex justify-center items-center text-gray-900'>
    <div className="container  py-12">
      <AllIcons />
    </div>
    <div className="container bg-slate-800 text-gray-50  py-12">
      <AllIcons textColor='text-gray-500'/>
    </div>
  </div>
  </>
);
