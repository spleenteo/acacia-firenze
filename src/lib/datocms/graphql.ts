// Re-export graphql utilities for fragment composition
export { gql as graphql } from 'graphql-request'

// Import the generated fragment type
export type { ResponsiveImageFragmentFragment } from './types'

// Type for fragment handling - using the actual data type
export type FragmentOf<T> = T

// Utility to read fragments - identity function since we're using codegen
export function readFragment<T>(fragment: any, data: T): T {
  return data
}