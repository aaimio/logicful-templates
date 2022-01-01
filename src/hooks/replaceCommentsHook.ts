/**
 * A hook replacing special "logicful-templates-comment" elements with actual HTML comments.
 * This is an internal hook and cannot be removed.
 */
const replaceCommentsHook = (html: string) => {
  let transformedHTML = html;

  const commentRegexps: [RegExp, string][] = [
    [/<logicful-templates-comment>/g, '<!-- '],
    [/<\/logicful-templates-comment>/g, ' -->'],
  ];

  for (let i = 0; i < commentRegexps.length; i++) {
    const [searchValue, replaceValue] = commentRegexps[i];
    transformedHTML = transformedHTML.replace(searchValue, replaceValue);
  }

  return transformedHTML;
};

export default replaceCommentsHook;
