import React, { ReactElement } from 'react';
import * as Interstate from '@prism2/icons-react/interstate';

let boxClass =
  'grid grid-cols-[50px,1fr] text-left items-center text-sm gap-1 w-[200px]';

interface IconProps extends React.ComponentProps<'svg'> {}

const IconSample = ({
  Icon,
  textColor = 'text-gray-400',
  iconClass = 'h-6',
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
  [Interstate.ThreeSixtyInteriorFrontSolidIcon,'ThreeSixtyInteriorFrontSolidIcon'],
  [Interstate.ThreeSixtyInteriorRearSolidIcon, 'ThreeSixtyInteriorRearSolidIcon'],
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

export const AllIcons = ({
  list = interstateList,
  textColor = 'text-gray-400',
  iconClass = 'h-6',
}) => {
  return (
    <div className='flex flex-wrap justify-center gap-4 text-center'>
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
