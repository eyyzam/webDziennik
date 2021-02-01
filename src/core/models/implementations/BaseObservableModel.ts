import { IBaseObservableModel, IErrorModel, CommunicationState } from "../";

export class BaseObservableModel<T> implements IBaseObservableModel<T> {
	constructor(
		public data: T,
		public error: IErrorModel,
		public communicationState: CommunicationState = CommunicationState.NONE
	) {}
}
