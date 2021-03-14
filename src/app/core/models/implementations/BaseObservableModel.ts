import { IBaseObservableModel } from "../interfaces/IBaseObservableModel";
import { ErrorModel } from "./ErrorModel";
import { CommunicationState } from "../enums/CommunicationState";
import { IErrorModel } from "../interfaces/IErrorModel";

export class BaseObservableModel<T> implements IBaseObservableModel<T> {

	constructor(
		public data: T,
		public error: IErrorModel = new ErrorModel(),
		public communicationState: CommunicationState = CommunicationState.NONE
	) { }
}
