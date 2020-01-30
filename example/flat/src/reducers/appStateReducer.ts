import { AppState, AppEvent } from "types/appTypes";

export const appStateReducer = (state: AppState, event: AppEvent) => {
    switch(event.name) {
        default:
            return state;
    }
}