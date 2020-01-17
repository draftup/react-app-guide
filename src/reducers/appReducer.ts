import { AppState, AppEvent } from "../types/app";

export const appReducer = (state: AppState, event: AppEvent) => {
    switch(event.name) {
        default:
            return state;
    }
}