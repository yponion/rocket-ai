export type SajuCellData =
  string
  | undefined
  | { chinese: string; mean: string }
  | { chinese1: string; chinese2: string; mean: string, bg: string, fg: string, border?: string }
  | { chinese: string; mean: string }[];