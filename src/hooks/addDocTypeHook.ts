/**
 * A hook that adds a doctype to the HTML output
 */
const addDocTypeHook = (html: string) => {
  return `<!doctype html>${html}`;
};

export default addDocTypeHook;
