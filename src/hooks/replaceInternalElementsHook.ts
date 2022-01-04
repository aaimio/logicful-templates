/**
 * A hook replacing special logicful-templates elements with actual HTML comments.
 *
 * - For "logicful-templates-comment" a HTML comment is created
 * - For "logicful-templates-root" its tags are removed to "hoist" its children up.
 *
 * This is an internal hook and cannot be removed.
 */
const replaceInternalElementsHook = (html: string) => {
  let transformedHTML = html;

  const regexps: [RegExp, string][] = [
    [/<logicful-templates-comment>/g, '<!-- '],
    [/<\/logicful-templates-comment>/g, ' -->'],
    [/<logicful-templates-root>/g, ''],
    [/<\/logicful-templates-root>/g, ''],
  ];

  for (let i = 0; i < regexps.length; i++) {
    const [searchValue, replaceValue] = regexps[i];
    transformedHTML = transformedHTML.replace(searchValue, replaceValue);
  }

  return transformedHTML;
};

export default replaceInternalElementsHook;
