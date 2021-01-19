import * as React from 'react';
import Banner from '~/components/Banner';
import { CursorType, useGlobalDispatchContext } from '~/context/context';
import Layout, { OnCursor } from '../components/layout';

const IndexPage = () => {
  const dispatch = useGlobalDispatchContext();
  const onCursor: OnCursor = (cursorType?: CursorType) =>
    dispatch({ type: 'CURSOR_TYPE', cursorType });
  return (
    <Layout onCursor={onCursor}>
      <Banner onCursor={onCursor} />
    </Layout>
  );
};
export default IndexPage;
