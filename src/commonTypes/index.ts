declare module "common-types" {
  export type ISODateString = string;

  export type UUID = string;

  export type EmailAddress = string;

  export type HSLColor = string;

  export type Maybe<T> = T | null;

  export type ReactRefFunc = (el: Maybe<Element>) => Maybe<Element>;

  export type GenericEventHandler = (event: Event) => void;

  export type GenericMouseEventHandler = (event: React.MouseEvent<any>) => void;

  export type GenericFocusEventHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => void;

  export type GenericOnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  export type GenericOnKeyDownHandler = (
    event: React.KeyboardEvent<any>
  ) => void;
}
