import { IBaseObservableModel, IErrorModel, CommunicationState, ErrorModel } from "../../models";

export class BaseObservableModel<T> implements IBaseObservableModel<T> {

	constructor(
		public data: T,
		public error: IErrorModel = new ErrorModel(),
		public communicationState: CommunicationState = CommunicationState.NONE
	) { }
}
