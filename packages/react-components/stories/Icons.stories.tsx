import { ComponentMeta } from '@storybook/react';
import { version as iconsVerson } from '@prism2/icons-react/package.json';
import * as P2 from '@prism2/icons-react';
import * as Interstate from '@prism2/icons-react/interstate';
import mdx from './IconUsage.mdx';

export default {
  title: 'Components/Icon',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered',
    docs: {
      page: mdx,
    },
  },
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
export const BasicUsage = () => {
  // import { CreditCardIcon, Envelop5Icon, ExportIcon, HeartIcon, InfoIcon } from "@prism2/icons-react";
  return (
    <div className="flex gap-2 text-gray-600 icons:h-6">
      <CreditCardIcon />
      <Envelop5Icon />
      <ExportIcon />
      <HeartIcon />
      <InfoIcon />
    </div>
  );
};

export const Spinner = () => (
  <SpinnerIcon className="w-12 animate-spin animate-pulse" />
);

let boxClass =
  'text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between border-gray-500/50';

const interstateList = [
  [Interstate.AlarmAddSolidIcon, 'AlarmAddSolidIcon'],
  [Interstate.AlarmClockSolidIcon, 'AlarmClockSolidIcon'],
  [Interstate.AlarmSetSolidIcon, 'AlarmSetIcon'],
  [Interstate.ArrowDownTrayIcon, 'ArrowDownTrayIcon'],
  [Interstate.ArrowPathIcon, 'ArrowPathIcon'],
  [Interstate.ArrowRightOnRectangleIcon, 'ArrowRightOnRectangleIcon'],
  [Interstate.ArrowSmallDownIcon, 'ArrowSmallDownIcon'],
  [Interstate.ArrowSmallUpIcon, 'ArrowSmallUpIcon'],
  [Interstate.ArrowTopRightOnSquareIcon, 'ArrowTopRightOnSquareIcon'],
  [Interstate.ArrowUpOnSquareIcon, 'ArrowUpOnSquareIcon'],
  [Interstate.ArrowUpTrayIcon, 'ArrowUpTrayIcon'],
  [Interstate.ArrowUturnLeftIcon, 'ArrowUturnLeftIcon'],
  [Interstate.ArrowUturnRightIcon, 'ArrowUturnRightIcon'],
  [Interstate.ArrowsPointingInIcon, 'ArrowsPointingInIcon'],
  [Interstate.ArrowsPointingOutIcon, 'ArrowsPointingOutIcon'],
  [Interstate.ArrowsRightLeftIcon, 'ArrowsRightLeftIcon'],
  [Interstate.ArrowsUpDownIcon, 'ArrowsUpDownIcon'],
  [Interstate.BackToStartSolidIcon, 'BackToStartSolidIcon'],
  [Interstate.BarCodeSolidIcon, 'BarCodeSolidIcon'],
  [Interstate.Bars3Icon, 'Bars3Icon'],
  [Interstate.BellIcon, 'BellIcon'],
  [Interstate.BoltIcon, 'BoltIcon'],
  [Interstate.CalendarIcon, 'CalendarIcon'],
  [Interstate.CameraIcon, 'CameraIcon'],
  [Interstate.CarSolidIcon, 'CarSolidIcon'],
  [Interstate.CarSideIcon, 'CarSideIcon'],
  [Interstate.ChartPieIcon, 'ChartPieIcon'],
  [Interstate.ChatBubbleLeftIcon, 'ChatBubbleLeftIcon'],
  [Interstate.ChatBubbleLeftRightIcon, 'ChatBubbleLeftRightIcon'],
  [Interstate.CheckCircleIcon, 'CheckCircleIcon'],
  [Interstate.CheckmarkSolidIcon, 'CheckmarkSolidIcon'],
  [Interstate.ChevronDownIcon, 'ChevronDownIcon'],
  [Interstate.ChevronLeftIcon, 'ChevronLeftIcon'],
  [Interstate.ChevronRightIcon, 'ChevronRightIcon'],
  [Interstate.ChevronUpDownIcon, 'ChevronUpDownIcon'],
  [Interstate.ChevronUpIcon, 'ChevronUpIcon'],
  [Interstate.ClipboardCheckIcon, 'ClipboardCheckIcon'],
  [Interstate.ClipboardIcon, 'ClipboardIcon'],
  [Interstate.ClockIcon, 'ClockIcon'],
  [Interstate.CloudArrowUpIcon, 'CloudArrowUpIcon'],
  [Interstate.Cog8ToothIcon, 'Cog8ToothIcon'],
  [Interstate.ConditionReportSolidIcon, 'ConditionReportSolidIcon'],
  [Interstate.CreditCardIcon, 'CreditCardIcon'],
  [Interstate.CupIcon, 'CupIcon'],
  [Interstate.CurrencyDollarIcon, 'CurrencyDollarIcon'],
  [Interstate.DamagesSolidIcon, 'DamagesSolidIcon'],
  [Interstate.DetailsIcon, 'DetailsIcon'],
  [Interstate.DevicePhoneMobileIcon, 'DevicePhoneMobileIcon'],
  [Interstate.DocumentDuplicateIcon, 'DocumentDuplicateIcon'],
  [Interstate.DocumentIcon, 'DocumentIcon'],
  [Interstate.DocumentTextIcon, 'DocumentTextIcon'],
  [Interstate.EllipsisHorizontalIcon, 'EllipsisHorizontalIcon'],
  [Interstate.EllipsisVerticalIcon, 'EllipsisVerticalIcon'],
  [Interstate.EnterSolidIcon, 'EnterSolidIcon'],
  [Interstate.EnvelopeIcon, 'EnvelopeIcon'],
  [Interstate.ExclaimationCircleIcon, 'ExclaimationCircleIcon'],
  [Interstate.ExclamationTriangleIcon, 'ExclamationTriangleIcon'],
  [Interstate.EyeIcon, 'EyeIcon'],
  [Interstate.EyeSlashIcon, 'EyeSlashIcon'],
  [Interstate.FileExcelSolidIcon, 'FileExcelSolidIcon'],
  [Interstate.FilePdfSolidIcon, 'FilePdfSolidIcon'],
  [Interstate.FileSpreadsheetSolidIcon, 'FileSpreadsheetIcon'],
  [Interstate.FlagIcon, 'FlagIcon'],
  [Interstate.FloppyDiskSolidIcon, 'FloppyDiskSolidIcon'],
  [Interstate.ForkSpoonIcon, 'ForkSpoonIcon'],
  [Interstate.FuelSolidIcon, 'FuelSolidIcon'],
  [Interstate.FunnelIcon, 'FunnelIcon'],
  [Interstate.GavelIcon, 'GavelIcon'],
  [Interstate.GridSmallIcon, 'GridSmallIcon'],
  [Interstate.GroundingSolidIcon, 'GroundingSolidIcon'],
  [Interstate.HandThumbDownIcon, 'HandThumbDownIcon'],
  [Interstate.HandThumbUpIcon, 'HandThumbUpIcon'],
  [Interstate.HeartIcon, 'HeartSolidIcon'],
  [Interstate.HeartIcon, 'HeartIcon'],
  [Interstate.HomeIcon, 'HomeIcon'],
  [Interstate.ImagesIcon, 'ImagesIcon'],
  [Interstate.InboxArrowDownIcon, 'InboxArrowDownIcon'],
  [Interstate.InformationCircleIcon, 'InformationCircleIcon'],
  [Interstate.LinkIcon, 'LinkIcon'],
  [Interstate.ListBulletIcon, 'ListBulletIcon'],
  [Interstate.LocationAreaIcon, 'LocationAreaIcon'],
  [Interstate.LockClosedIcon, 'LockClosedIcon'],
  [Interstate.LockOpenIcon, 'LockOpenIcon'],
  [Interstate.MagnifyingGlassIcon, 'MagnifyingGlassIcon'],
  [Interstate.MagnifyingGlassMinusIcon, 'MagnifyingGlassMinusIcon'],
  [Interstate.MagnifyingGlassPlusIcon, 'MagnifyingGlassPlusIcon'],
  [Interstate.ManheimMedallionSolidIcon, 'ManheimMedallionSolidIcon'],
  [Interstate.MapPinIcon, 'MapPinIcon'],
  [Interstate.MedalSolidIcon, 'MedalSolidIcon'],
  [Interstate.MegaphoneIcon, 'MegaphoneIcon'],
  [Interstate.MinusCircleIcon, 'MinusCircleIcon'],
  [Interstate.MinusIcon, 'MinusIcon'],
  [Interstate.MinusSmallIcon, 'MinusSmallIcon'],
  [Interstate.NoSymbolIcon, 'NoSymbolIcon'],
  [Interstate.OdometerSolidIcon, 'OdometerSolidIcon'],
  [Interstate.PaintCanIcon, 'PaintCanIcon'],
  [Interstate.PaintDropSolidIcon, 'PaintDropSolidIcon'],
  [Interstate.PaperClipIcon, 'PaperClipIcon'],
  [Interstate.PauseCircleIcon, 'PauseCircleIcon'],
  [Interstate.PencilSquareIcon, 'PencilSquareIcon'],
  [Interstate.PhotoIcon, 'PhotoIcon'],
  [Interstate.Pin2Icon, 'Pin2Icon'],
  [Interstate.PinSolidIcon, 'PinSolidIcon'],
  [Interstate.PlayCircleIcon, 'PlayCircleIcon'],
  [Interstate.PlusCircleIcon, 'PlusCircleIcon'],
  [Interstate.PlusIcon, 'PlusIcon'],
  [Interstate.PlusSmallIcon, 'PlusSmallIcon'],
  [Interstate.PrinterIcon, 'PrinterIcon'],
  [Interstate.ProfileCcwCircleArrowIcon, 'ProfileCcwCircleArrowIcon'],
  [Interstate.QrCodeIcon, 'QrCodeIcon'],
  [Interstate.ResetTimeIcon, 'ResetTimeIcon'],
  [Interstate.SeatsIcon, 'SeatsIcon'],
  [Interstate.ShieldCheckIcon, 'ShieldCheckIcon'],
  [Interstate.ShieldSolidIcon, 'ShieldSolidIcon'],
  [Interstate.SpeakerWaveIcon, 'SpeakerWaveIcon'],
  [Interstate.SpeakerXMarkIcon, 'SpeakerXMarkIcon'],
  [Interstate.Squares2X2Icon, 'Squares2X2Icon'],
  [Interstate.StarHalfSolidIcon, 'StarHalfSolidIcon'],
  [Interstate.StarIcon, 'StarSolidIcon'],
  [Interstate.StarIcon, 'StarIcon'],
  [Interstate.SteeringWheelIcon, 'SteeringWheelIcon'],
  [Interstate.StopwatchSolidIcon, 'StopwatchSolidIcon'],
  [Interstate.TagIcon, 'TagIcon'],
  [Interstate.ThreeSixtyExteriorSolidIcon, 'ThreeSixtyExteriorSolidIcon'],
  [Interstate.ThreeSixtySolidIcon, 'ThreeSixtySolidIcon'],
  [
    Interstate.ThreeSixtyInteriorFrontSolidIcon,
    'ThreeSixtyInteriorFrontSolidIcon',
  ],
  [
    Interstate.ThreeSixtyInteriorRearSolidIcon,
    'ThreeSixtyInteriorRearSolidIcon',
  ],
  [Interstate.TrashIcon, 'TrashIcon'],
  [Interstate.TruckIcon, 'TruckIcon'],
  [Interstate.UnlinkIcon, 'UnlinkIcon'],
  [Interstate.UserCircleIcon, 'UserCircleIcon'],
  [Interstate.UserIcon, 'UserIcon'],
  [Interstate.UserPlusIcon, 'UserPlusIcon'],
  [Interstate.UsersIcon, 'UsersIcon'],
  [Interstate.VideoCameraIcon, 'VideoCameraIcon'],
  [Interstate.WifiIcon, 'WifiIcon'],
  [Interstate.XCircleIcon, 'XCircleIcon'],
  [Interstate.XMarkIcon, 'XMarkIcon'],
] as [React.FunctionComponent<React.ComponentProps<'svg'>>, string][];

interface IconProps extends React.ComponentProps<'svg'> { }

const IconSample = ({
  Icon,
  textColor = 'text-gray-400',
  iconClass = 'h-8',
  name = '',
}: {
  Icon: React.FC<IconProps>;
  name: string;
  iconClass: string;
  textColor: string;
}) => (
  <div className={boxClass}>
    <Icon className={iconClass} />
    <div className={textColor}>{name}</div>
  </div>
);

export const AllInterstateIcons = ({
  list = interstateList,
  textColor = 'text-gray-400',
  iconClass = 'h-8',
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-center">
      {list.map((Icon) => (
        <IconSample
          Icon={Icon[0]}
          name={Icon[1]}
          textColor={textColor}
          iconClass={iconClass}
        />
      ))}
    </div>
  );
};

export const AllIcons = ({ textColor = 'text-gray-400' }) => (
  <div className="flex flex-wrap justify-center gap-4 text-center">
    <div className={boxClass}>
      <P2.ThreeSixtyIcon className="h-8" />
      <div className={textColor}>ThreeSixty</div>
    </div>
    <div className={boxClass}>
      <P2.ThreeSixtyExteriorIcon className="h-8" />
      <div className={textColor}>ThreeSixtyExterior</div>
    </div>
    <div className={boxClass}>
      <P2.ThreeSixtyInteriorFrontIcon className="h-8" />
      <div className={textColor}>ThreeSixtyInteriorFront</div>
    </div>
    <div className={boxClass}>
      <P2.ThreeSixtyInteriorRearIcon className="h-8" />
      <div className={textColor}>ThreeSixtyInteriorRear</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.AlarmAddIcon className="h-8" />
      </div>
      <div className={textColor}>AlarmAdd</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.AlarmClockIcon className="h-8" />
      </div>
      <div className={textColor}>AlarmClock</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.AlarmSetIcon className="h-8" />
      </div>
      <div className={textColor}>AlarmSet</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ArrowDownIcon className="h-8" />
      </div>
      <div className={textColor}>ArrowDown</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ArrowLeftIcon className="h-8" />
      </div>
      <div className={textColor}>ArrowLeft</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ArrowRightIcon className="h-8" />
      </div>
      <div className={textColor}>ArrowRight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ArrowUpIcon className="h-8" />
      </div>
      <div className={textColor}>ArrowUp</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ArrowsLeftRightIcon className="h-8" />
      </div>
      <div className={textColor}>ArrowsLeftRight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ArrowsUpDownIcon className="h-8" />
      </div>
      <div className={textColor}>ArrowsUpDown</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.AttachIcon className="h-8" />
      </div>
      <div className={textColor}>Attach</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.BackToStartIcon className="h-8" />
      </div>
      <div className={textColor}>BackToStart</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.BarcodeIcon className="h-8" />
      </div>
      <div className={textColor}>Barcode</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.BellIcon className="h-8" />
      </div>
      <div className={textColor}>Bell</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.BellOIcon className="h-8" />
      </div>
      <div className={textColor}>BellO</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.BlockedIcon className="h-8" />
      </div>
      <div className={textColor}>Blocked</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.BoltIcon className="h-8" />
      </div>
      <div className={textColor}>Bolt</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.BubbleIcon className="h-8" />
      </div>
      <div className={textColor}>Bubble</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.BubblesIcon className="h-8" />
      </div>
      <div className={textColor}>Bubbles</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.BulletIcon className="h-8" />
      </div>
      <div className={textColor}>Bullet</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CalendarIcon className="h-8" />
      </div>
      <div className={textColor}>Calendar</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CamcorderIcon className="h-8" />
      </div>
      <div className={textColor}>Camcorder</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CameraIcon className="h-8" />
      </div>
      <div className={textColor}>Camera</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CancelCircleIcon className="h-8" />
      </div>
      <div className={textColor}>CancelCircle</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CancelCircleOIcon className="h-8" />
      </div>
      <div className={textColor}>CancelCircleO</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CarIcon className="h-8" />
      </div>
      <div className={textColor}>Car</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CarSideIcon className="h-8" />
      </div>
      <div className={textColor}>CarSide</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CheckboxCheckedIcon className="h-8" />
      </div>
      <div className={textColor}>CheckboxChecked</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CheckboxUncheckedIcon className="h-8" />
      </div>
      <div className={textColor}>CheckboxUnchecked</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CheckmarkCircleIcon className="h-8" />
      </div>
      <div className={textColor}>CheckmarkCircle</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CheckmarkIcon className="h-8" />
      </div>
      <div className={textColor}>Checkmark</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ChevronDownChamferedIcon className="h-8" />
      </div>
      <div className={textColor}>ChevronDownChamfered</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ChevronDownIcon className="h-8" />
      </div>
      <div className={textColor}>ChevronDown</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ChevronDownLightIcon className="h-8" />
      </div>
      <div className={textColor}>ChevronDownLight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ChevronLeftIcon className="h-8" />
      </div>
      <div className={textColor}>ChevronLeft</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ChevronLeftLightIcon className="h-8" />
      </div>
      <div className={textColor}>ChevronLeftLight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ChevronRightIcon className="h-8" />
      </div>
      <div className={textColor}>ChevronRight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ChevronRightLightIcon className="h-8" />
      </div>
      <div className={textColor}>ChevronRightLight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ChevronUpIcon className="h-8" />
      </div>
      <div className={textColor}>ChevronUp</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ChevronUpLightIcon className="h-8" />
      </div>
      <div className={textColor}>ChevronUpLight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ClipboardCheckedIcon className="h-8" />
      </div>
      <div className={textColor}>ClipboardChecked</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ClipboardIcon className="h-8" />
      </div>
      <div className={textColor}>Clipboard</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ClockIcon className="h-8" />
      </div>
      <div className={textColor}>Clock</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CloudUploadIcon className="h-8" />
      </div>
      <div className={textColor}>CloudUpload</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ConditionReportIcon className="h-8" />
      </div>
      <div className={textColor}>ConditionReport</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CreditCardIcon className="h-8" />
      </div>
      <div className={textColor}>CreditCard</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CrossIcon className="h-8" />
      </div>
      <div className={textColor}>Cross</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CrossSmallIcon className="h-8" />
      </div>
      <div className={textColor}>CrossSmall</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.CupIcon className="h-8" />
      </div>
      <div className={textColor}>Cup</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.DamagesIcon className="h-8" />
      </div>
      <div className={textColor}>Damages</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.DetailsIcon className="h-8" />
      </div>
      <div className={textColor}>Details</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.DirectionIcon className="h-8" />
      </div>
      <div className={textColor}>Direction</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.DiskIcon className="h-8" />
      </div>
      <div className={textColor}>Disk</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.DollarOIcon className="h-8" />
      </div>
      <div className={textColor}>DollarO</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.DownloadIcon className="h-8" />
      </div>
      <div className={textColor}>Download</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.EditIcon className="h-8" />
      </div>
      <div className={textColor}>Edit</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.EnlargeIcon className="h-8" />
      </div>
      <div className={textColor}>Enlarge</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.Envelop5Icon className="h-8" />
      </div>
      <div className={textColor}>Envelop5</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.Envelope2Icon className="h-8" />
      </div>
      <div className={textColor}>Envelope2</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.EnvelopeIcon className="h-8" />
      </div>
      <div className={textColor}>Envelope</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ErrorTriangleIcon className="h-8" />
      </div>
      <div className={textColor}>ErrorTriangle</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ExportIcon className="h-8" />
      </div>
      <div className={textColor}>Export</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.EyeBlockedIcon className="h-8" />
      </div>
      <div className={textColor}>EyeBlocked</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.EyeIcon className="h-8" />
      </div>
      <div className={textColor}>Eye</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.FileEmptyIcon className="h-8" />
      </div>
      <div className={textColor}>FileEmpty</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.FileExcelIcon className="h-8" />
      </div>
      <div className={textColor}>FileExcel</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.FilePdfIcon className="h-8" />
      </div>
      <div className={textColor}>FilePdf</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.FileSpreadsheetIcon className="h-8" />
      </div>
      <div className={textColor}>FileSpreadsheet</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.FileTextIcon className="h-8" />
      </div>
      <div className={textColor}>FileText</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.FilesEmptyIcon className="h-8" />
      </div>
      <div className={textColor}>FilesEmpty</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.FilterIcon className="h-8" />
      </div>
      <div className={textColor}>Filter</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.FlagIcon className="h-8" />
      </div>
      <div className={textColor}>Flag</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ForkSpoonIcon className="h-8" />
      </div>
      <div className={textColor}>ForkSpoon</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.FuelIcon className="h-8" />
      </div>
      <div className={textColor}>Fuel</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.GavelIcon className="h-8" />
      </div>
      <div className={textColor}>Gavel</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.GearIcon className="h-8" />
      </div>
      <div className={textColor}>Gear</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.GraphPieIcon className="h-8" />
      </div>
      <div className={textColor}>GraphPie</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.GridIcon className="h-8" />
      </div>
      <div className={textColor}>Grid</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.GridSmallIcon className="h-8" />
      </div>
      <div className={textColor}>GridSmall</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.GroundingIcon className="h-8" />
      </div>
      <div className={textColor}>Grounding</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.HeartIcon className="h-8" />
      </div>
      <div className={textColor}>Heart</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.HeartOIcon className="h-8" />
      </div>
      <div className={textColor}>HeartO</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.HomeIcon className="h-8" />
      </div>
      <div className={textColor}>Home</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ImageIcon className="h-8" />
      </div>
      <div className={textColor}>Image</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ImagesIcon className="h-8" />
      </div>
      <div className={textColor}>Images</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.InboxIcon className="h-8" />
      </div>
      <div className={textColor}>Inbox</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.InfoIcon className="h-8" />
      </div>
      <div className={textColor}>Info</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.InfoOIcon className="h-8" />
      </div>
      <div className={textColor}>InfoO</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.LeaveIcon className="h-8" />
      </div>
      <div className={textColor}>Leave</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.LeftRightIcon className="h-8" />
      </div>
      <div className={textColor}>LeftRight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.LinkIcon className="h-8" />
      </div>
      <div className={textColor}>Link</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ListIcon className="h-8" />
      </div>
      <div className={textColor}>List</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.LocationAreaIcon className="h-8" />
      </div>
      <div className={textColor}>LocationArea</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.LocationIcon className="h-8" />
      </div>
      <div className={textColor}>Location</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.LockedIcon className="h-8" />
      </div>
      <div className={textColor}>Locked</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ManheimMedallionIcon className="h-8" />
      </div>
      <div className={textColor}>ManheimMedallion</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.MarkerIcon className="h-8" />
      </div>
      <div className={textColor}>Marker</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.MedalIcon className="h-8" />
      </div>
      <div className={textColor}>Medal</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.MegaphoneIcon className="h-8" />
      </div>
      <div className={textColor}>Megaphone</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.MenuIcon className="h-8" />
      </div>
      <div className={textColor}>Menu</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.Minus2Icon className="h-8" />
      </div>
      <div className={textColor}>Minus2</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.Minus3Icon className="h-8" />
      </div>
      <div className={textColor}>Minus3</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.MinusCircleIcon className="h-8" />
      </div>
      <div className={textColor}>MinusCircle</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.MinusCircleOIcon className="h-8" />
      </div>
      <div className={textColor}>MinusCircleO</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.MinusIcon className="h-8" />
      </div>
      <div className={textColor}>Minus</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.MobileIcon className="h-8" />
      </div>
      <div className={textColor}>Mobile</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.NewWindowIcon className="h-8" />
      </div>
      <div className={textColor}>NewWindow</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.NotificationCircleIcon className="h-8" />
      </div>
      <div className={textColor}>NotificationCircle</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.OdometerIcon className="h-8" />
      </div>
      <div className={textColor}>Odometer</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PaintCanIcon className="h-8" />
      </div>
      <div className={textColor}>PaintCan</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PaintDropIcon className="h-8" />
      </div>
      <div className={textColor}>PaintDrop</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PauseIcon className="h-8" />
      </div>
      <div className={textColor}>Pause</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.Pin2Icon className="h-8" />
      </div>
      <div className={textColor}>Pin2</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PinIcon className="h-8" />
      </div>
      <div className={textColor}>Pin</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PlayIcon className="h-8" />
      </div>
      <div className={textColor}>Play</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PlusCircleIcon className="h-8" />
      </div>
      <div className={textColor}>PlusCircle</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PlusCircleOIcon className="h-8" />
      </div>
      <div className={textColor}>PlusCircleO</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PlusIcon className="h-8" />
      </div>
      <div className={textColor}>Plus</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PriceTagIcon className="h-8" />
      </div>
      <div className={textColor}>PriceTag</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.PrinterIcon className="h-8" />
      </div>
      <div className={textColor}>Printer</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ProfileCcwCircleArrowIcon className="h-8" />
      </div>
      <div className={textColor}>ProfileCcwCircleArrow</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.QrCodeIcon className="h-8" />
      </div>
      <div className={textColor}>QrCode</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.RefreshIcon className="h-8" />
      </div>
      <div className={textColor}>Refresh</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ResetTimeIcon className="h-8" />
      </div>
      <div className={textColor}>ResetTime</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.RotateLeftIcon className="h-8" />
      </div>
      <div className={textColor}>RotateLeft</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.RotateRightIcon className="h-8" />
      </div>
      <div className={textColor}>RotateRight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.SearchIcon className="h-8" />
      </div>
      <div className={textColor}>Search</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ShieldCheckIcon className="h-8" />
      </div>
      <div className={textColor}>ShieldCheck</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ShieldIcon className="h-8" />
      </div>
      <div className={textColor}>Shield</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ShrinkIcon className="h-8" />
      </div>
      <div className={textColor}>Shrink</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.SortIcon className="h-8" />
      </div>
      <div className={textColor}>Sort</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.SoundOffIcon className="h-8" />
      </div>
      <div className={textColor}>SoundOff</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.SoundOnIcon className="h-8" />
      </div>
      <div className={textColor}>SoundOn</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.SpinnerIcon className="h-8" />
      </div>
      <div className={textColor}>Spinner</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.StarEmptyIcon className="h-8" />
      </div>
      <div className={textColor}>StarEmpty</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.StarFullIcon className="h-8" />
      </div>
      <div className={textColor}>StarFull</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.StarHalfIcon className="h-8" />
      </div>
      <div className={textColor}>StarHalf</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.StopwatchIcon className="h-8" />
      </div>
      <div className={textColor}>Stopwatch</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ThreeBarsIcon className="h-8" />
      </div>
      <div className={textColor}>ThreeBars</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ThreeDotsHorizontalIcon className="h-8" />
      </div>
      <div className={textColor}>ThreeDotsHorizontal</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ThreeDotsVerticalIcon className="h-8" />
      </div>
      <div className={textColor}>ThreeDotsVertical</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ThumbsDownIcon className="h-8" />
      </div>
      <div className={textColor}>ThumbsDown</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ThumbsUpIcon className="h-8" />
      </div>
      <div className={textColor}>ThumbsUp</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TrashIcon className="h-8" />
      </div>
      <div className={textColor}>Trash</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TriangleDownIcon className="h-8" />
      </div>
      <div className={textColor}>TriangleDown</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TriangleDownSmallIcon className="h-8" />
      </div>
      <div className={textColor}>TriangleDownSmall</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TriangleLeftIcon className="h-8" />
      </div>
      <div className={textColor}>TriangleLeft</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TriangleLeftSmallIcon className="h-8" />
      </div>
      <div className={textColor}>TriangleLeftSmall</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TriangleRightIcon className="h-8" />
      </div>
      <div className={textColor}>TriangleRight</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TriangleRightSmallIcon className="h-8" />
      </div>
      <div className={textColor}>TriangleRightSmall</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TriangleUpIcon className="h-8" />
      </div>
      <div className={textColor}>TriangleUp</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TriangleUpSmallIcon className="h-8" />
      </div>
      <div className={textColor}>TriangleUpSmall</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.TruckIcon className="h-8" />
      </div>
      <div className={textColor}>Truck</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.UnlinkIcon className="h-8" />
      </div>
      <div className={textColor}>Unlink</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.UnlockedIcon className="h-8" />
      </div>
      <div className={textColor}>Unlocked</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.UploadIcon className="h-8" />
      </div>
      <div className={textColor}>Upload</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.UserAddIcon className="h-8" />
      </div>
      <div className={textColor}>UserAdd</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.UserIcon className="h-8" />
      </div>
      <div className={textColor}>User</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.UsersIcon className="h-8" />
      </div>
      <div className={textColor}>Users</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.WifiIcon className="h-8" />
      </div>
      <div className={textColor}>Wifi</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.WorkOrderIcon className="h-8" />
      </div>
      <div className={textColor}>WorkOrder</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ZoomInIcon className="h-8" />
      </div>
      <div className={textColor}>ZoomIn</div>
    </div>
    <div className={boxClass}>
      <div>
        <P2.ZoomOutIcon className="h-8" />
      </div>
      <div className={textColor}>ZoomOut</div>
    </div>
  </div>
);

export const AppendPrependButton = () => (
  <div className="flex gap-2">
    <button className="prism-btn">
      <NotificationCircleIcon className="h-[1em]" />
      Button With Icon Before
    </button>

    <button className="prism-btn">
      Button With Icon After
      <NotificationCircleIcon className="h-[1em]" />
    </button>
  </div>
);

export const SplashPage = () => (
  <>
    <div className="flex flex-col items-center justify-center p-12 space-y-4 text-white bg-blue-600 from-blue-900 bg-gradient-to-br">
      <div className="text-center">
        <h1 className="font-sans text-4xl font-medium tracking-tighter">
          <span className="font-light opacity-25">prism2.</span>
          <span>icons</span>
        </h1>
        <h4 className="text-sm text-gold-400">{iconsVerson}</h4>
      </div>
      <div className="text-sm tracking-tight w-[540px] bg-slate-900 text-slate-300 rounded font-mono p-4 shadow-lg">
        <span className="opacity-50">// install</span>
        <br />
        <span className="opacity-25">$</span> pnpm add @prism2/icons
        <br />
        <span className="opacity-50">// import</span>
        <br />
        {"import { HeartIcon } from '@prism2/icons-react/prism'"}
        <br />
        <span className="opacity-50">// insert</span>
        <br />
        {'<HeartIcon className="w-12 text-red-400 animate-pulse" />'}
      </div>
      <HeartIcon className="w-12 text-red-400 animate-pulse" />
    </div>
    <div className="flex items-center justify-center text-gray-900">
      <div className="container py-12">
        <AllIcons />
      </div>
      <div className="container py-12 bg-blue-1000 text-slate-50">
        <AllIcons textColor="text-slate-500" />
      </div>
      <div className="container py-12 bg-blue-1000 text-slate-50">
        <AllInterstateIcons textColor="text-slate-500" />
      </div>
    </div>
  </>
);
