import prettier from 'prettier';
import type { Options as PrettyOptions } from 'prettier';

/**
 * Creates a Prettier hook that runs over HTML output with provided "options"
 */
const createPrettierHook = (options: PrettyOptions) => (html: string) => {
  return prettier.format(html, { parser: 'html', ...options });
};

export default createPrettierHook;
