export type Config = {
  /**
   * Integer: posts to fetch
   *
   * Bounds: [1, 100]
   */
  fetchCount: number
  /**
   * Integer: panels to show when the page loads
   *
   * Bounds: [0, `fetchCount`]
   */
  initialPanelCount: number
  /**
   * Integer: index of panel to show as expanded when the page loads
   *
   * Use `-1` for no panel expanded
   *
   * Bounds: [-1, `initialPanelCount`]
   */
  initialExpandedPanel: number
  /**
   * Integer: Maximum number of panels to allow the user to display
   *
   * Bounds: [`initialPanelCount`, `fetchCount`]
   */
  maxPanelCount: number
  /**
   * Integer: Minimum number of panels to allow the user to display
   *
   * Bounds: [0, `fetchCount`]
   */
  minPanelCount: number
  /**
   * Integer: Maximum number of expanded panels the user to display
   *
   * Bounds: [-1, 1]
   *
   * If `-1`, there are no restrictions on the number of concurrent expanded panels
   *
   * If `0`, no panels can be expanded; all panel titles should appear disabled
   *
   * If `1`, expanding a panel should collapse the previously expanded panel
   */
  maxExpandedPanelCount: number
}
export const config: Config = {
  fetchCount: 20,
  initialPanelCount: 3,
  initialExpandedPanel: -1,
  maxPanelCount: 10,
  minPanelCount: 1,
  maxExpandedPanelCount: 1,
}
