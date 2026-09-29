type EventName<T extends string> = `on${Capitalize<T>}`;

type Handlers = {
  [K in EventName<'click' | 'submit'>]: () => void;
};
