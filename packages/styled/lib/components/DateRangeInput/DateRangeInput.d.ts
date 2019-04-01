import {
  GridTemplateColumnsProperty,
  BackgroundProperty,
  BorderProperty,
  BorderRadiusProperty,
  MinHeightProperty,
  TopProperty,
  PaddingProperty,
  ColorProperty,
  GlobalsNumber,
} from 'csstype'
import {ResponsiveValue, TLengthStyledSystem} from 'styled-system'
import {UseDatepickerProps, FormatFunction, FocusedInput} from '@datepicker-react/hooks'
import {DateRangeInputPhrases} from '../../phrases'
export interface DateRangeInputStyles {
  inputGridTemplateColumns?: ResponsiveValue<GridTemplateColumnsProperty<TLengthStyledSystem>>
  inputGridBackground?: ResponsiveValue<BackgroundProperty<TLengthStyledSystem>>
  inputGridBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputGridBorderRadius?: ResponsiveValue<BorderRadiusProperty<TLengthStyledSystem>>
  inputPadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  inputStartDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  inputEndDatePadding?: ResponsiveValue<PaddingProperty<TLengthStyledSystem>>
  inputBorder?: ResponsiveValue<BorderProperty<TLengthStyledSystem>>
  inputMinHeight?: ResponsiveValue<MinHeightProperty<TLengthStyledSystem>>
  inputCalendarWrapperTop?: ResponsiveValue<TopProperty<TLengthStyledSystem>>
  inputArrowIconColor?: ResponsiveValue<ColorProperty>
  inputArrowIconOpacity?: ResponsiveValue<GlobalsNumber>
}
export interface DateRangeInputProps extends UseDatepickerProps {
  displayFormat?: string | FormatFunction
  phrases?: DateRangeInputPhrases
  onFocusChange(focusInput: FocusedInput): void
  styles?: DateRangeInputStyles
  showStartDateCalendarIcon?: boolean
  showEndDateCalendarIcon?: boolean
}
declare function DateRangeInput({
  startDate,
  endDate,
  minBookingDate,
  maxBookingDate,
  firstDayOfWeek,
  onFocusChange,
  numberOfMonths,
  focusedInput,
  onDateChange,
  showStartDateCalendarIcon,
  showEndDateCalendarIcon,
  styles,
  displayFormat,
  phrases,
}: DateRangeInputProps): JSX.Element
export default DateRangeInput
