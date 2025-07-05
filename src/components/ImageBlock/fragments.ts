// ImageBlock fragment types
// Since we're using the ImageBlockRecord directly in queries with ...on ImageBlockRecord
// we define the expected structure here for type safety

import type { ResponsiveImageFragmentFragment } from '@lib/datocms/types';

export interface ImageBlockFragment {
  __typename?: 'ImageBlockRecord';
  asset: {
    title?: string | null;
    responsiveImage: ResponsiveImageFragmentFragment;
  };
}
