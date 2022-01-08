import LogicfulTemplates, { Magic } from '../..';

describe('<Magic> "component"', () => {
  it('hoists its children when passing a "hoist" prop', () => {
    const CustomElement1 = (
      <div className='some_class'>
        <Magic hoist>
          <span>Hello World</span>
        </Magic>
      </div>
    );

    const result1 = LogicfulTemplates.compileTemplate(CustomElement1);
    expect(result1).toBe('<div class="some_class"><span>Hello World</span></div>');
  });

  it('compiles components later when passing "compileLast" props', () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();

    const CustomElement1 = (
      <div className='some_class'>
        <Magic compileLater>
          {() => {
            mockFn1();
            expect(mockFn1).toHaveBeenCalledTimes(1);
            expect(mockFn2).toHaveBeenCalledTimes(1);
          }}
          <span>Hello World</span>
        </Magic>
        <div className='some_other_class'>
          <Magic hoist>
            {() => {
              mockFn2();
              expect(mockFn1).toHaveBeenCalledTimes(0);
              expect(mockFn2).toHaveBeenCalledTimes(1);
              return <span>Goodbye Mars</span>;
            }}
          </Magic>
        </div>
      </div>
    );

    const result1 = LogicfulTemplates.compileTemplate(CustomElement1);
    expect(result1).toBe(
      '<div class="some_class"><span>Hello World</span><div class="some_other_class"><span>Goodbye Mars</span></div></div>'
    );
  });

  it('compiles components later when passing "compileLast" props /w a number', () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();
    const mockFn3 = jest.fn();

    const CustomElement1 = (
      <div className='some_class'>
        <Magic compileLater={100}>
          {() => {
            mockFn1();
            expect(mockFn1).toHaveBeenCalledTimes(1);
            expect(mockFn2).toHaveBeenCalledTimes(0);
            expect(mockFn3).toHaveBeenCalledTimes(0);
          }}
          <span>Hello World</span>
        </Magic>
        <Magic compileLater={300}>
          {() => {
            mockFn1();
            expect(mockFn1).toHaveBeenCalledTimes(1);
            expect(mockFn2).toHaveBeenCalledTimes(1);
            expect(mockFn3).toHaveBeenCalledTimes(1);
          }}
          <span>Hello World</span>
        </Magic>
        <Magic compileLater={200}>
          {() => {
            mockFn3();
            expect(mockFn1).toHaveBeenCalledTimes(1);
            expect(mockFn2).toHaveBeenCalledTimes(1);
            expect(mockFn3).toHaveBeenCalledTimes(0);
          }}
          <span>Hello World</span>
        </Magic>
      </div>
    );

    const result1 = LogicfulTemplates.compileTemplate(CustomElement1);
    expect(result1).toBe(
      '<div class="some_class"><span>Hello World</span><span>Hello World</span><span>Hello World</span></div>'
    );
  });

  it('compiles components later when passing "compileLast" props (mix of boolean + number)', () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();

    const CustomElement1 = (
      <div className='some_class'>
        <Magic compileLater={1}>
          {() => {
            mockFn1();
            expect(mockFn1).toHaveBeenCalledTimes(1);
            expect(mockFn2).toHaveBeenCalledTimes(1);
          }}
          <span>Hello World</span>
        </Magic>
        <div className='some_other_class'>
          <Magic compileLater>
            {() => {
              mockFn2();
              expect(mockFn1).toHaveBeenCalledTimes(0);
              expect(mockFn2).toHaveBeenCalledTimes(1);
              return <span>Goodbye Mars</span>;
            }}
          </Magic>
        </div>
      </div>
    );

    const result1 = LogicfulTemplates.compileTemplate(CustomElement1);
    expect(result1).toBe(
      '<div class="some_class"><span>Hello World</span><div class="some_other_class"><span>Goodbye Mars</span></div></div>'
    );
  });
});
