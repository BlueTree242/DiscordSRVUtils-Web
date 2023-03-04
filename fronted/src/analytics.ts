import { Analytics } from "analytics";
import googleAnalytics from "@analytics/google-analytics";
const analytics = Analytics({
    plugins: [
      googleAnalytics({
        measurementIds: ['G-99S6J5MHBJ']
      })
    ]
  });

export default analytics;
export const buttonClick = (name: string, payload?: any) => analytics.track("button_click", Object.assign({name: name}, payload))