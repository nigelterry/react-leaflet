import { PathProps, createPathComponent } from '@react-leaflet/core'
import {
  LatLngBoundsExpression,
  Rectangle as LeafletRectangle,
  PathOptions,
} from 'leaflet'
import { ReactNode } from 'react'

export interface RectangleProps extends PathOptions, PathProps {
  bounds: LatLngBoundsExpression
  children?: ReactNode
}

export const Rectangle = createPathComponent<LeafletRectangle, RectangleProps>(
  function createRectangle({ bounds, ...options }, ctx) {
    const instance = new LeafletRectangle(bounds, options)
    const context = ctx === null ? null : { ...ctx, overlayContainer: instance }
    return { instance, context }
  },
  function updateRectangle(layer, props, prevProps) {
    if (props.bounds !== prevProps.bounds) {
      layer.setBounds(props.bounds)
    }
  },
)
