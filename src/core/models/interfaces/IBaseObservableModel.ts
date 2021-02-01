import { IErrorModel, CommunicationState } from "../";

export interface IBaseObservableModel<T> {
	error: IErrorModel;
	data: T;
	communicationState: CommunicationState;
}
