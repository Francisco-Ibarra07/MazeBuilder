export enum TileType {
  BLOCKADE = "BLOCKADE", // invalid path
  ROAD = "ROAD", // valid pathway
  FLAG = "FLAG", // start or finish marker
  ROADBLOCK = "ROADBLOCK", // still looks like a road but is blocked
  ISPATH = "ISPATH", // Tile is part of answer
  PORTAL = "PORTAL",
}

export enum MouseState {
  UP = "UP",
  DOWN = "DOWN",
}

export interface Location {
  row: number;
  col: number;
}
