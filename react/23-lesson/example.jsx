import { memo, useMemo } from 'react';

const ExpensiveList = memo(function ExpensiveList({ items }) {
  const processed = useMemo(() => items.map(complexTransform), [items]);
  return <div>{processed.length} items</div>;
});
