import { PencilSquareIcon, ArrowDownOnSquareStackIcon, ShareIcon, StarIcon } from '@prism2/icons-react/24/solid';
import * as P2 from '@prism2/icons-react/prism';
import React, { useState } from 'react';
import { Box } from '../../lib';

export const AllIcons = () => (
  <div className='flex flex-wrap gap-4 text-center justify-center'>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeSixtyIcon className='h-8' /></div>
      <div className='text-gray-400'>ThreeSixty</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeSixtyExteriorIcon className='h-8' /></div>
      <div className='text-gray-400'>ThreeSixtyExterior</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeSixtyInteriorFrontIcon className='h-8' /></div>
      <div className='text-gray-400'>ThreeSixtyInteriorFront</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeSixtyInteriorRearIcon className='h-8' /></div>
      <div className='text-gray-400'>ThreeSixtyInteriorRear</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.AlarmAddIcon className='h-8' /></div>
      <div className='text-gray-400'>AlarmAdd</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.AlarmClockIcon className='h-8' /></div>
      <div className='text-gray-400'>AlarmClock</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.AlarmSetIcon className='h-8' /></div>
      <div className='text-gray-400'>AlarmSet</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowDownIcon className='h-8' /></div>
      <div className='text-gray-400'>ArrowDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowLeftIcon className='h-8' /></div>
      <div className='text-gray-400'>ArrowLeft</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowRightIcon className='h-8' /></div>
      <div className='text-gray-400'>ArrowRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowUpIcon className='h-8' /></div>
      <div className='text-gray-400'>ArrowUp</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowsLeftRightIcon className='h-8' /></div>
      <div className='text-gray-400'>ArrowsLeftRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ArrowsUpDownIcon className='h-8' /></div>
      <div className='text-gray-400'>ArrowsUpDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.AttachIcon className='h-8' /></div>
      <div className='text-gray-400'>Attach</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BackToStartIcon className='h-8' /></div>
      <div className='text-gray-400'>BackToStart</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BarcodeIcon className='h-8' /></div>
      <div className='text-gray-400'>Barcode</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BellIcon className='h-8' /></div>
      <div className='text-gray-400'>Bell</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BellOIcon className='h-8' /></div>
      <div className='text-gray-400'>BellO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BlockedIcon className='h-8' /></div>
      <div className='text-gray-400'>Blocked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BoltIcon className='h-8' /></div>
      <div className='text-gray-400'>Bolt</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BubbleIcon className='h-8' /></div>
      <div className='text-gray-400'>Bubble</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BubblesIcon className='h-8' /></div>
      <div className='text-gray-400'>Bubbles</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.BulletIcon className='h-8' /></div>
      <div className='text-gray-400'>Bullet</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CalendarIcon className='h-8' /></div>
      <div className='text-gray-400'>Calendar</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CamcorderIcon className='h-8' /></div>
      <div className='text-gray-400'>Camcorder</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CameraIcon className='h-8' /></div>
      <div className='text-gray-400'>Camera</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CancelCircleIcon className='h-8' /></div>
      <div className='text-gray-400'>CancelCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CancelCircleOIcon className='h-8' /></div>
      <div className='text-gray-400'>CancelCircleO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CarIcon className='h-8' /></div>
      <div className='text-gray-400'>Car</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CarSideIcon className='h-8' /></div>
      <div className='text-gray-400'>CarSide</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CheckboxCheckedIcon className='h-8' /></div>
      <div className='text-gray-400'>CheckboxChecked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CheckboxUncheckedIcon className='h-8' /></div>
      <div className='text-gray-400'>CheckboxUnchecked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CheckmarkCircleIcon className='h-8' /></div>
      <div className='text-gray-400'>CheckmarkCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CheckmarkIcon className='h-8' /></div>
      <div className='text-gray-400'>Checkmark</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronDownChamferedIcon className='h-8' /></div>
      <div className='text-gray-400'>ChevronDownChamfered</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronDownIcon className='h-8' /></div>
      <div className='text-gray-400'>ChevronDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronDownLightIcon className='h-8' /></div>
      <div className='text-gray-400'>ChevronDownLight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronLeftIcon className='h-8' /></div>
      <div className='text-gray-400'>ChevronLeft</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronLeftLightIcon className='h-8' /></div>
      <div className='text-gray-400'>ChevronLeftLight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronRightIcon className='h-8' /></div>
      <div className='text-gray-400'>ChevronRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronRightLightIcon className='h-8' /></div>
      <div className='text-gray-400'>ChevronRightLight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronUpIcon className='h-8' /></div>
      <div className='text-gray-400'>ChevronUp</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ChevronUpLightIcon className='h-8' /></div>
      <div className='text-gray-400'>ChevronUpLight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ClipboardCheckedIcon className='h-8' /></div>
      <div className='text-gray-400'>ClipboardChecked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ClipboardIcon className='h-8' /></div>
      <div className='text-gray-400'>Clipboard</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ClockIcon className='h-8' /></div>
      <div className='text-gray-400'>Clock</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CloudUploadIcon className='h-8' /></div>
      <div className='text-gray-400'>CloudUpload</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ConditionReportIcon className='h-8' /></div>
      <div className='text-gray-400'>ConditionReport</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CreditCardIcon className='h-8' /></div>
      <div className='text-gray-400'>CreditCard</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CrossIcon className='h-8' /></div>
      <div className='text-gray-400'>Cross</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CrossSmallIcon className='h-8' /></div>
      <div className='text-gray-400'>CrossSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.CupIcon className='h-8' /></div>
      <div className='text-gray-400'>Cup</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DamagesIcon className='h-8' /></div>
      <div className='text-gray-400'>Damages</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DetailsIcon className='h-8' /></div>
      <div className='text-gray-400'>Details</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DirectionIcon className='h-8' /></div>
      <div className='text-gray-400'>Direction</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DiskIcon className='h-8' /></div>
      <div className='text-gray-400'>Disk</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DollarOIcon className='h-8' /></div>
      <div className='text-gray-400'>DollarO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.DownloadIcon className='h-8' /></div>
      <div className='text-gray-400'>Download</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EditIcon className='h-8' /></div>
      <div className='text-gray-400'>Edit</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EnlargeIcon className='h-8' /></div>
      <div className='text-gray-400'>Enlarge</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Envelop5Icon className='h-8' /></div>
      <div className='text-gray-400'>Envelop5</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Envelope2Icon className='h-8' /></div>
      <div className='text-gray-400'>Envelope2</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EnvelopeIcon className='h-8' /></div>
      <div className='text-gray-400'>Envelope</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ErrorTriangleIcon className='h-8' /></div>
      <div className='text-gray-400'>ErrorTriangle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ExportIcon className='h-8' /></div>
      <div className='text-gray-400'>Export</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EyeBlockedIcon className='h-8' /></div>
      <div className='text-gray-400'>EyeBlocked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.EyeIcon className='h-8' /></div>
      <div className='text-gray-400'>Eye</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FileEmptyIcon className='h-8' /></div>
      <div className='text-gray-400'>FileEmpty</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FileExcelIcon className='h-8' /></div>
      <div className='text-gray-400'>FileExcel</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FilePdfIcon className='h-8' /></div>
      <div className='text-gray-400'>FilePdf</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FileSpreadsheetIcon className='h-8' /></div>
      <div className='text-gray-400'>FileSpreadsheet</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FileTextIcon className='h-8' /></div>
      <div className='text-gray-400'>FileText</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FilesEmptyIcon className='h-8' /></div>
      <div className='text-gray-400'>FilesEmpty</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FilterIcon className='h-8' /></div>
      <div className='text-gray-400'>Filter</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FlagIcon className='h-8' /></div>
      <div className='text-gray-400'>Flag</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ForkSpoonIcon className='h-8' /></div>
      <div className='text-gray-400'>ForkSpoon</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.FuelIcon className='h-8' /></div>
      <div className='text-gray-400'>Fuel</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GavelIcon className='h-8' /></div>
      <div className='text-gray-400'>Gavel</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GearIcon className='h-8' /></div>
      <div className='text-gray-400'>Gear</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GraphPieIcon className='h-8' /></div>
      <div className='text-gray-400'>GraphPie</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GridIcon className='h-8' /></div>
      <div className='text-gray-400'>Grid</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GridSmallIcon className='h-8' /></div>
      <div className='text-gray-400'>GridSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.GroundingIcon className='h-8' /></div>
      <div className='text-gray-400'>Grounding</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.HeartIcon className='h-8' /></div>
      <div className='text-gray-400'>Heart</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.HeartOIcon className='h-8' /></div>
      <div className='text-gray-400'>HeartO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.HomeIcon className='h-8' /></div>
      <div className='text-gray-400'>Home</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ImageIcon className='h-8' /></div>
      <div className='text-gray-400'>Image</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ImagesIcon className='h-8' /></div>
      <div className='text-gray-400'>Images</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.InboxIcon className='h-8' /></div>
      <div className='text-gray-400'>Inbox</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.InfoIcon className='h-8' /></div>
      <div className='text-gray-400'>Info</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.InfoOIcon className='h-8' /></div>
      <div className='text-gray-400'>InfoO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LeaveIcon className='h-8' /></div>
      <div className='text-gray-400'>Leave</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LeftRightIcon className='h-8' /></div>
      <div className='text-gray-400'>LeftRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LinkIcon className='h-8' /></div>
      <div className='text-gray-400'>Link</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ListIcon className='h-8' /></div>
      <div className='text-gray-400'>List</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LocationAreaIcon className='h-8' /></div>
      <div className='text-gray-400'>LocationArea</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LocationIcon className='h-8' /></div>
      <div className='text-gray-400'>Location</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.LockedIcon className='h-8' /></div>
      <div className='text-gray-400'>Locked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ManheimMedallionIcon className='h-8' /></div>
      <div className='text-gray-400'>ManheimMedallion</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MarkerIcon className='h-8' /></div>
      <div className='text-gray-400'>Marker</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MedalIcon className='h-8' /></div>
      <div className='text-gray-400'>Medal</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MegaphoneIcon className='h-8' /></div>
      <div className='text-gray-400'>Megaphone</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MenuIcon className='h-8' /></div>
      <div className='text-gray-400'>Menu</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Minus2Icon className='h-8' /></div>
      <div className='text-gray-400'>Minus2</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Minus3Icon className='h-8' /></div>
      <div className='text-gray-400'>Minus3</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MinusCircleIcon className='h-8' /></div>
      <div className='text-gray-400'>MinusCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MinusCircleOIcon className='h-8' /></div>
      <div className='text-gray-400'>MinusCircleO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MinusIcon className='h-8' /></div>
      <div className='text-gray-400'>Minus</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.MobileIcon className='h-8' /></div>
      <div className='text-gray-400'>Mobile</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.NewWindowIcon className='h-8' /></div>
      <div className='text-gray-400'>NewWindow</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.NotificationCircleIcon className='h-8' /></div>
      <div className='text-gray-400'>NotificationCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.OdometerIcon className='h-8' /></div>
      <div className='text-gray-400'>Odometer</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PaintCanIcon className='h-8' /></div>
      <div className='text-gray-400'>PaintCan</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PaintDropIcon className='h-8' /></div>
      <div className='text-gray-400'>PaintDrop</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PauseIcon className='h-8' /></div>
      <div className='text-gray-400'>Pause</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.Pin2Icon className='h-8' /></div>
      <div className='text-gray-400'>Pin2</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PinIcon className='h-8' /></div>
      <div className='text-gray-400'>Pin</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PlayIcon className='h-8' /></div>
      <div className='text-gray-400'>Play</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PlusCircleIcon className='h-8' /></div>
      <div className='text-gray-400'>PlusCircle</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PlusCircleOIcon className='h-8' /></div>
      <div className='text-gray-400'>PlusCircleO</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PlusIcon className='h-8' /></div>
      <div className='text-gray-400'>Plus</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PriceTagIcon className='h-8' /></div>
      <div className='text-gray-400'>PriceTag</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.PrinterIcon className='h-8' /></div>
      <div className='text-gray-400'>Printer</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ProfileCcwCircleArrowIcon className='h-8' /></div>
      <div className='text-gray-400'>ProfileCcwCircleArrow</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.QrCodeIcon className='h-8' /></div>
      <div className='text-gray-400'>QrCode</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.RefreshIcon className='h-8' /></div>
      <div className='text-gray-400'>Refresh</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ResetTimeIcon className='h-8' /></div>
      <div className='text-gray-400'>ResetTime</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.RotateLeftIcon className='h-8' /></div>
      <div className='text-gray-400'>RotateLeft</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.RotateRightIcon className='h-8' /></div>
      <div className='text-gray-400'>RotateRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SearchIcon className='h-8' /></div>
      <div className='text-gray-400'>Search</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ShieldCheckIcon className='h-8' /></div>
      <div className='text-gray-400'>ShieldCheck</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ShieldIcon className='h-8' /></div>
      <div className='text-gray-400'>Shield</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ShrinkIcon className='h-8' /></div>
      <div className='text-gray-400'>Shrink</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SortIcon className='h-8' /></div>
      <div className='text-gray-400'>Sort</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SoundOffIcon className='h-8' /></div>
      <div className='text-gray-400'>SoundOff</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SoundOnIcon className='h-8' /></div>
      <div className='text-gray-400'>SoundOn</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.SpinnerIcon className='h-8' /></div>
      <div className='text-gray-400'>Spinner</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.StarEmptyIcon className='h-8' /></div>
      <div className='text-gray-400'>StarEmpty</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.StarFullIcon className='h-8' /></div>
      <div className='text-gray-400'>StarFull</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.StarHalfIcon className='h-8' /></div>
      <div className='text-gray-400'>StarHalf</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.StopwatchIcon className='h-8' /></div>
      <div className='text-gray-400'>Stopwatch</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeBarsIcon className='h-8' /></div>
      <div className='text-gray-400'>ThreeBars</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeDotsHorizontalIcon className='h-8' /></div>
      <div className='text-gray-400'>ThreeDotsHorizontal</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThreeDotsVerticalIcon className='h-8' /></div>
      <div className='text-gray-400'>ThreeDotsVertical</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThumbsDownIcon className='h-8' /></div>
      <div className='text-gray-400'>ThumbsDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ThumbsUpIcon className='h-8' /></div>
      <div className='text-gray-400'>ThumbsUp</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TrashIcon className='h-8' /></div>
      <div className='text-gray-400'>Trash</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleDownIcon className='h-8' /></div>
      <div className='text-gray-400'>TriangleDown</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleDownSmallIcon className='h-8' /></div>
      <div className='text-gray-400'>TriangleDownSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleLeftIcon className='h-8' /></div>
      <div className='text-gray-400'>TriangleLeft</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleLeftSmallIcon className='h-8' /></div>
      <div className='text-gray-400'>TriangleLeftSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleRightIcon className='h-8' /></div>
      <div className='text-gray-400'>TriangleRight</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleRightSmallIcon className='h-8' /></div>
      <div className='text-gray-400'>TriangleRightSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleUpIcon className='h-8' /></div>
      <div className='text-gray-400'>TriangleUp</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TriangleUpSmallIcon className='h-8' /></div>
      <div className='text-gray-400'>TriangleUpSmall</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.TruckIcon className='h-8' /></div>
      <div className='text-gray-400'>Truck</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UnlinkIcon className='h-8' /></div>
      <div className='text-gray-400'>Unlink</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UnlockedIcon className='h-8' /></div>
      <div className='text-gray-400'>Unlocked</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UploadIcon className='h-8' /></div>
      <div className='text-gray-400'>Upload</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UserAddIcon className='h-8' /></div>
      <div className='text-gray-400'>UserAdd</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UserIcon className='h-8' /></div>
      <div className='text-gray-400'>User</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.UsersIcon className='h-8' /></div>
      <div className='text-gray-400'>Users</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.WifiIcon className='h-8' /></div>
      <div className='text-gray-400'>Wifi</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ZoomInIcon className='h-8' /></div>
      <div className='text-gray-400'>ZoomIn</div>
    </div>
    <div className='text-center w-24 text-xxs h-20 flex flex-col items-center gap-2 p-2 py-3 overflow-hidden border rounded-sm justify-between'>
      <div><P2.ZoomOutIcon className='h-8' /></div>
      <div className='text-gray-400'>ZoomOut</div>
    </div>


  </div>
);

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

export const Indicator = ({ color = 'blue ' }: { color: string }) => {
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

export const PageTitleVDP = ({ title = '2022 Toyota Highlander CUV' }: { title: string }) => {
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
          <button className='prism-btn text-xs p-1 text'><ArrowDownOnSquareStackIcon /></button>
          <button className='prism-btn text-xs p-1 text'><ShareIcon /></button>
          <button className='prism-btn text-xs p-1 text'><PencilSquareIcon /></button>
        </div>
      </div>
      <section className='space-y-6'>
        <article className='prism-prose-sm'>
          <p>This paragraph is nested inside an article. It contains many different, sometimes useful, <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course there are classics like <em>emphasis</em>, <strong>strong</strong>, and <small>small</small>        but there are many others as well. Hover the following text for abbreviation tag: <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym tag like this: <a className='visited' href='#'>"For The Win - ftw"</a>. You can define <del>deleted text</del>        which often gets replaced with <ins>inserted</ins> text.</p>
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
