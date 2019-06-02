import {MonthType} from './useDatepicker.utils'
export declare const START_DATE = 'startDate'
export declare const END_DATE = 'endDate'
export declare type FocusedInput = 'startDate' | 'endDate' | null
export interface OnDateChangeProps {
  focusedInput: FocusedInput
  startDate: Date | null
  endDate: Date | null
}
export declare type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
export interface UseDatepickerProps {
  onDateChange(data: OnDateChangeProps): void
  minBookingDate?: Date
  maxBookingDate?: Date
  startDate: Date | null
  endDate: Date | null
  focusedInput: FocusedInput
  numberOfMonths?: number
  minBookingDays?: number
  exactMinBookingDays?: boolean
  firstDayOfWeek?: FirstDayOfWeek
  initialVisibleMonth?(numberOfMonths: number): MonthType[]
  isDayBlocked?(date: Date): boolean
}
export declare function useDatepicker({
  startDate,
  endDate,
  focusedInput,
  minBookingDate,
  maxBookingDate,
  onDateChange,
  exactMinBookingDays,
  minBookingDays,
  numberOfMonths,
  firstDayOfWeek,
  isDayBlocked: isDayBlockedProps,
}: UseDatepickerProps): {
  firstDayOfWeek: FirstDayOfWeek
  activeMonths: MonthType[]
  isDateSelected: (date: Date) => boolean
  isDateHovered: (date: Date) => boolean
  isFirstOrLastSelectedDate: (date: Date) => boolean
  isDateBlocked: (date: Date) => boolean
  numberOfMonths: number
  isDateFocused: (date: any) => boolean
  focusedDate: Date | null
  onResetDates: () => void
  onDayHover: (date: Date) => void
  onDaySelect: (date: Date) => void
  onDayFocus: (date: Date) => void
  goToPreviousMonths: () => void
  goToNextMonths: () => void
}
