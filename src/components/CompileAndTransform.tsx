import { FunctionComponent } from 'react';
import LogicfulTemplates, { Root } from '..';

interface CompileAndTransformProps {
  transform: (html: string) => string;
}

const CompileAndTransform: FunctionComponent<CompileAndTransformProps> = ({ children, transform }) => {
  const compiledChildren = LogicfulTemplates.compileTemplateWithoutHooks(<>{children}</>);
  return <Root dangerouslySetInnerHTML={{ __html: transform(compiledChildren) }} />;
};

export default CompileAndTransform;
