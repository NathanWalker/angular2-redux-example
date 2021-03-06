import {Injectable} from "angular2/core";

/**
 * Wrapper for app store
 */
@Injectable()
export class AppStore {

    public getState;
    public subscribe;
    public dispatch;

    constructor(store:any) {
        this.getState = () => {
            return store.getState();
        };
        this.subscribe = (subscribeFunction) => {
            return store.subscribe(subscribeFunction);
        };
        this.dispatch = (action) => {
            return store.dispatch(action);
        };
    }

}
