import type { Document, IComment, IElement } from 'happy-dom';
import type { Options as PrettyOptions } from 'prettier';

export type Props = {
  [key: string]: any;
};

export type Children = IElement | IElement[] | IComment | undefined;

export type Options = {
  addDocType?: boolean;
  pretty?: boolean;
  prettyOptions?: PrettyOptions;
};

export type Component<T extends {} = {}> = (
  props: { children?: Children } & T,
  domDocument: Document
) => IElement | IComment | null;
