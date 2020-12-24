import { BoardSpec, ResourceType } from '../board';
import { BoardShape } from './shapes-enum';
import { createByCounts, generateStandardShapedBoard } from './spec-util';

export const STANDARD = {
  shape: BoardShape.STANDARD,
  dimensions: {width: 5, height: 5},
  resources: () => createByCounts(
      [ResourceType.BRICK, 3],
      [ResourceType.DESERT, 1],
      [ResourceType.ORE, 3],
      [ResourceType.SHEEP, 4],
      [ResourceType.WOOD, 4],
      [ResourceType.WHEAT, 4],
  ),
  hexes: (board) => generateStandardShapedBoard(board),
  requiredResources: [],
  isResourceAllowed: () => true,
  centerCoords: [{x: 4, y: 2}],
  ports: () => [
    {
      resource: ResourceType.ANY,
      corners: [{x: 2, y: 0}, {x: 3, y: 0}],
    }, {
      resource: ResourceType.SHEEP,
      corners: [{x: 5, y: 0}, {x: 6, y: 0}],
    },
    {
      resource: ResourceType.ANY,
      corners: [{x: 8, y: 1}, {x: 9, y: 1}],
    },
    {
      resource: ResourceType.ANY,
      corners: [{x: 10, y: 2}, {x: 10, y: 3}],
    }, {
      resource: ResourceType.BRICK,
      corners: [{x: 9, y: 4}, {x: 8, y: 4}],
    },
    {
      resource: ResourceType.WOOD,
      corners: [{x: 6, y: 5}, {x: 5, y: 5}],
    },
    {
      resource: ResourceType.ORE,
      corners: [{x: 1, y: 2}, {x: 1, y: 1}],
    },
    {
      resource: ResourceType.ANY,
      corners: [{x: 3, y: 5}, {x: 2, y: 5}],
    }, {
      resource: ResourceType.WHEAT,
      corners: [{x: 1, y: 4}, {x: 1, y: 3}],
    }
  ],
  beaches: () => [
    {
      connections: [6, 1],
      from: {x: 2, y: 0},
      to: {x: 7, y: 0},
    },
    {
      connections: [1, 2],
      from: {x: 7, y: 0},
      to: {x: 10, y: 2},
    },
    {
      connections: [2, 3],
      from: {x: 10, y: 2},
      to: {x: 8, y: 5}
    },
    {
      connections: [3, 4],
      from: {x: 8, y: 5},
      to: {x: 3, y: 5},
    },
    {
      connections: [4, 5],
      from: {x: 3, y: 5},
      to: {x: 0, y: 3},
    },
    {
      connections: [5, 6],
      from: {x: 0, y: 3},
      to: {x: 2, y: 0},
    }
  ],
  rollNumbers: () => [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12],
} as BoardSpec;
