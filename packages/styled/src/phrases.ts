export interface DatepickerPhrases {
  datepickerStartDatePlaceholder: string
  datepickerStartDateLabel: string
  datepickerEndDateLabel: string
  datepickerEndDatePlaceholder: string
  resetDates: string
}

export interface DateRangeInputPhrases extends DatepickerPhrases {
  startDateAriaLabel: string
  endDateAriaLabel: string
  startDatePlaceholder: string
  endDatePlaceholder: string
}

export const datepickerPhrases = {
  datepickerStartDatePlaceholder: 'Select',
  datepickerStartDateLabel: 'Start date:',
  datepickerEndDatePlaceholder: 'Select',
  datepickerEndDateLabel: 'End date:',
  resetDates: 'Reset dates',
}

export const dateRangeInputPhrases = {
  ...datepickerPhrases,
  startDateAriaLabel: 'Start date',
  endDateAriaLabel: 'End date',
  startDatePlaceholder: 'Start date',
  endDatePlaceholder: 'End date',
}
