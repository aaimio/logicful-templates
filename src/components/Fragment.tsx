import type { Children } from '../types';

export interface Fragment {
  children: Children;
}

const Fragment = ({ children }: Fragment) => {
  if (children) {
    return children;
  }

  return null;
};

export default Fragment;
