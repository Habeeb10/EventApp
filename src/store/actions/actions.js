import { COUNTER_CHANGE } from "../types";

export function changecount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
