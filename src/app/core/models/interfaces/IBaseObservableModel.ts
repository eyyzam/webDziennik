import { IErrorModel, CommunicationState } from "../../models";

export interface IBaseObservableModel<T> {
	error: IErrorModel;
	data: T;
	communicationState: CommunicationState;
}
