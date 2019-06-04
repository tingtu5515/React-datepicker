# @datepicker-react/hooks

[![Gzip size](https://img.shields.io/bundlephobia/minzip/@datepicker-react/hooks.svg)](https://img.shields.io/bundlephobia/minzip/@datepicker-react/hooks.svg)
[![Coverage Status](https://coveralls.io/repos/github/tresko/react-datepicker/badge.svg?branch=master)](https://coveralls.io/github/tresko/react-datepicker?branch=master)
[![Build Status](https://travis-ci.org/tresko/react-datepicker.svg?branch=master)](https://travis-ci.org/tresko/react-datepicker)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0c2c3960-87ee-4f5e-a4dc-1e2aac57d2b4/deploy-status)](https://app.netlify.com/sites/react-datepicker/deploys)

[![NPM](https://nodei.co/npm/@datepicker-react/hooks.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@datepicker-react/hooks?downloads=true&downloadRank=true&stars=true)

## Getting Started

### Install

```sh
yarn add @datepicker-react/hooks
```

### Include hooks

```js
import {useDatepicker, useMonth, useDay} from '@datepicker-react/hooks'
```

## Table of Contents

- [`useDatepicker`](#-usedatepicker-)
  * [`useDatepickerProps`](#-usedatepickerprops-)
    + [`onDatesChange: (data: OnDatesChangeProps) => void`](#-ondatechange---data--ondatechangeprops-----void-)
    + [`minBookingDate: Date | undefined`](#-minbookingdate--date---undefined-)
    + [`maxBookingDate: Date | undefined`](#-maxbookingdate--date---undefined-)
    + [`startDate: Date | null`](#-startdate--date---null-)
    + [`endDate: Date | null`](#-enddate--date---null-)
    + [`focusedInput: 'startDate' | 'endDate' | null`](#-focusedinput---startdate-----enddate----null-)
    + [`numberOfMonths: number | undefined (Default: 2)`](#-numberofmonths--number---undefined--default--2--)
    + [`minBookingDays: number | undefined (Default: 1)`](#-minbookingdays--number---undefined--default--1--)
    + [`exactMinBookingDays: boolean | undefined (Default: false)`](#-exactminbookingdays--boolean---undefined--default--false--)
    + [`firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6 (Default: 1 - Monday)`](#-firstdayofweek--0---1---2---3---4---5---6--default--1---monday--)
    + [`isDateBlocked: (date: Date) => boolean`](#-isdayblocked---date--date-----boolean-)
  * [`useDatepickerResult`](#-usedatepickerresult-)
    + [`firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6`](#-firstdayofweek--0---1---2---3---4---5---6-)
    + [`activeMonths: ({year: number, month: number})[]`](#-activemonths----year--number--month--number-----)
    + [`numberOfMonths: number`](#-numberofmonths--number-)
    + [`focusedDate: Date | null`](#-focuseddate--date---null-)
    + [`isDateSelected: (date: Date) => boolean`](#-isdateselected---date--date-----boolean-)
    + [`isDateHovered: (date: Date) => boolean`](#-isdatehovered---date--date-----boolean-)
    + [`isDateBlocked: (date: Date) => boolean`](#-isdateblocked---date--date-----boolean-)
    + [`isDateFocused: (date: Date) => boolean`](#-isdatefocused---date--date-----boolean-)
    + [`isFirstOrLastSelectedDate: (date: Date) => boolean`](#-isfirstorlastselecteddate---date--date-----boolean-)
    + [`onResetDates: () => void`](#-onresetdates--------void-)
    + [`onDayHover: (date: Date) => void`](#-ondayhover---date--date-----void-)
    + [`onDaySelect: (date: Date) => void`](#-ondayselect---date--date-----void-)
    + [`onDayFocus: (date: Date) => void`](#-ondayfocus---date--date-----void-)
    + [`goToNextMonths: () => void`](#-gotonextmonths--------void-)
    + [`goToPreviousMonths: () => void`](#-gotopreviousmonths--------void-)
- [`useMonth`](#-usemonth-)
  * [`useMonthProps`](#-usemonthprops-)
    + [`Year`](#-year-)
    + [`Month`](#-month-)
    + [`weekStartsOn: number | undefined (Default: 1)`](#-weekstartson--number---undefined--default--1--)
    + [`dayFormat: (date: Date) => string | undefined (Default: (date: Date) => format(date, 'MMMM YYYY'))`](#-dayformat---date--date-----string---undefined--default---date--date-----format-date---mmmm-yyyy----)
    + [`weekDayFormat: (date: Date) => string | undefined (Default: (date: Date) => format(date, 'dd'))`](#-weekdayformat---date--date-----string---undefined--default---date--date-----format-date---dd----)
    + [`monthLabelFormat: (date: Date) => string | undefined (Default: (date: Date) => format(date, 'dd'))`](#-monthlabelformat---date--date-----string---undefined--default---date--date-----format-date---dd----)
  * [`useMonthResult`](#-usemonthresult-)
    + [`days: ({date: Date, day: string})[]`](#-days----date--date--day--string-----)
    + [`weekDays: (string)[]`](#-weekdays---string----)
    + [`monthLabel: string`](#-monthlabel--string-)
- [`useDay`](#-useday-)
  * [`useDayProps`](#-usedayprops-)
    + [`date: Date`](#-date--date-)
    + [`dayRef: React.RefObject<HTMLButtonElement>`](#-dayref--reactrefobject-htmlbuttonelement--)
    + [`focusedDate: Date | null`](#-focuseddate--date---null--1)
    + [`isDateFocused(date: Date): boolean`](#-isdatefocused-date--date---boolean-)
    + [`isDateSelected(date: Date): boolean`](#-isdateselected-date--date---boolean-)
    + [`isDateHovered(date: Date): boolean`](#-isdatehovered-date--date---boolean-)
    + [`isDateBlocked(date: Date): boolean`](#-isdateblocked-date--date---boolean-)
    + [`isFirstOrLastSelectedDate(date: Date): boolean`](#-isfirstorlastselecteddate-date--date---boolean-)
    + [`onDayFocus(date: Date): void`](#-ondayfocus-date--date---void-)
    + [`onDaySelect(date: Date): void`](#-ondayselect-date--date---void-)
    + [`onDayHover(date: Date): void`](#-ondayhover-date--date---void-)
  * [`useDayResult`](#-usedayresult-)
    + [`tabIndex: 0 | -1`](#-tabindex--0----1-)
    + [`onKeyDown: (e: KeyboardEvent) => void`](#-onkeydown---e--keyboardevent-----void-)
    + [`onClick: () => void`](#-onclick--------void-)
    + [`onMouseEnter: () => void`](#-onmouseenter--------void-)
    + [`disabledDate: boolean`](#-disableddate--boolean-)
    + [`isWithinHoverRange: boolean`](#-iswithinhoverrange--boolean-)
    + [`isStartOrEnd: boolean`](#-isstartorend--boolean-)
    + [`isActive: boolean`](#-isactive--boolean-)
## `useDatepicker`

The `useDatepicker` hook returns functions like `goToPreviousMonths`, `goToNextMonths`, etc., which
allows us to control the datepicker.

### `useDatepickerProps`

#### `onDatesChange: (data: OnDatesChangeProps) => void`

A callback is triggered when the date is selected (`onDaySelect`).

#### `minBookingDate: Date | undefined`

If prop is set, then all dates before `minBookingDate` are disabled.

#### `maxBookingDate: Date | undefined`

If prop is set, then all dates after `maxBookingDate` are disabled.

#### `startDate: Date | null`

Current start date.

#### `endDate: Date | null`

Current end date.

#### `focusedInput: 'startDate' | 'endDate' | null`

Current focused date.

#### `numberOfMonths: number | undefined (Default: 2)`

Number of visible months.

#### `minBookingDays: number | undefined (Default: 1)`

Minimum allowed date range in days.

#### `exactMinBookingDays: boolean | undefined (Default: false)`

If `exactMinBookingDays` is true, then the range of dates is always the same as `minBookingDays`.

#### `firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6 (Default: 1 - Monday)`

With which day the week begins

#### `isDateBlocked: (date: Date) => boolean`

If `isDateBlocked` returns `true`, then the date is blocked

### `useDatepickerResult`

#### `firstDayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6`

First day of the week.

#### `activeMonths: ({year: number, month: number})[]`

`Array` of visible months. Each month is an object, which contains `year` and `month`.

#### `numberOfMonths: number`

`Number` of visible months.

#### `focusedDate: Date | null`

Focused date.

#### `isDateSelected: (date: Date) => boolean`

Return `true` if a date is selected or within selected range, otherwise `false`.

#### `isDateHovered: (date: Date) => boolean`

Return `true` if a date is hovered, otherwise `false`.

#### `isDateBlocked: (date: Date) => boolean`

Return `true` if a date is blocked, otherwise `false`.

#### `isDateFocused: (date: Date) => boolean`

Return `true` if a date is focused, otherwise `false`.

#### `isFirstOrLastSelectedDate: (date: Date) => boolean`

Return `true` if a date is first or last in the selected range, otherwise `false`.

#### `onResetDates: () => void`

Reset start and end date.

#### `onDayHover: (date: Date) => void`

Set internal `hovered` state.

#### `onDaySelect: (date: Date) => void`

Select a date. Which date is selected, depends of `focusedInput`.

#### `onDayFocus: (date: Date) => void`

Set `focusedDate`.

#### `goToNextMonths: () => void`

Updates `activeMonths` (next months) in accordance with the `numberOfMonths` prop.

#### `goToPreviousMonths: () => void`

Updates `activeMonths` (previous months) in accordance with the `numberOfMonths` prop.

## `useMonth`

The `useMonth` returns all days of the month, weekdays labels and month label.

### `useMonthProps`

#### `Year`

Year

#### `Month`

Month

#### `weekStartsOn: number | undefined (Default: 1)`

With which day the week begins

#### `dayFormat: (date: Date) => string | undefined (Default: (date: Date) => format(date, 'MMMM YYYY'))`

Format day label.

#### `weekDayLabelFormat: (date: Date) => string | undefined (Default: (date: Date) => format(date, 'dd'))`

Format weekday label.

#### `monthLabelFormat: (date: Date) => string | undefined (Default: (date: Date) => format(date, 'dd'))`

Format month label.

### `useMonthResult`

#### `days: ({date: Date, day: string})[]`

`Array` of day objects. Each object contains `date` and `day` (day label).

#### `weekDays: (string)[]`

`Array` of weekday labels.

#### `monthLabel: string`

Month label.

## `useDay`

### `useDayProps`

#### `date: Date`

Day date

#### `dayRef: React.RefObject<HTMLButtonElement>`

`Ref` of a day button.

#### `focusedDate: Date | null`

#### `isDateFocused(date: Date): boolean`

#### `isDateSelected(date: Date): boolean`

#### `isDateHovered(date: Date): boolean`

#### `isDateBlocked(date: Date): boolean`

#### `isFirstOrLastSelectedDate(date: Date): boolean`

#### `onDayFocus(date: Date): void`

#### `onDaySelect(date: Date): void`

#### `onDayHover(date: Date): void`

### `useDayResult`

#### `tabIndex: 0 | -1`

`tabIndex`, which you pass to the day button `tabIndex`.

#### `onKeyDown: (e: KeyboardEvent) => void`

`onKeyDown` callback, which you pass to the day button `onKeyDown`.

#### `onClick: () => void`

`onClick` callback, which you pass to the day button `onClick`.

#### `onMouseEnter: () => void`

`onMouseEnter` callback, which you pass to the day button `onMouseEnter`.

#### `disabledDate: boolean`

If `true`, then the date is disabled.

#### `isWithinHoverRange: boolean`

If `true`, then the date is within hover range.

#### `isStartOrEnd: boolean`

If `true`, then the date is first or last selected date.

#### `isActive: boolean`

If `true`, then the date is selected.

## Who's using

[LifeOnScreen](https://lifeonscreen.com) <br/>
[@datepicker-react/styled](https://github.com/tresko/react-datepicker/tree/master/packages/styled)

## License

Licensed under the MIT License, Copyright © 2019-present Miha Sedej.

See [LICENSE](https://github.com/tresko/react-datepicker/blob/master/LICENSE) for more information.

<br/>

[![Buy me a coffee](https://camo.githubusercontent.com/031fc5a134cdca5ae3460822aba371e63f794233/68747470733a2f2f7777772e6275796d6561636f666665652e636f6d2f6173736574732f696d672f637573746f6d5f696d616765732f6f72616e67655f696d672e706e67)](https://www.buymeacoffee.com/T1Eu7XSoF)
