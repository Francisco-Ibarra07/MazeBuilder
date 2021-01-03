export enum TileType {
  BLOCKADE = "BLOCKADE", // invalid path
  ROAD = "ROAD", // valid pathway
  FLAG = "FLAG", // start or finish marker
  ROADBLOCK = "ROADBLOCK", // still looks like a road but is blocked
  PORTAL = "PORTAL",
}

export interface Location {
  row: number;
  col: number;
}
