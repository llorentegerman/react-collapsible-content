import CollapsibleContent, { useScrollHeight } from '.';

describe('Exported', () => {
    it('useScrollHeight correctly exported', () => {
        expect(useScrollHeight).toBeTruthy();
    });
    it('CollapsibleContent correctly exported', () => {
        expect(CollapsibleContent).toBeTruthy();
    });
});
