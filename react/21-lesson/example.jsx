import { useTransition } from 'react';

function Search() {
  const [isPending, startTransition] = useTransition();
  // ...
}
