import * as _ from "lodash";
import { Subject, Observable } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { IBaseObservableModel, BaseObservableModel, CommunicationState } from "../../../models";
import { HttpMapperService } from "../../../services";

export abstract class BaseObservableService<T> {

	protected cleanObservableSubject: T;
	protected observableSubject: IBaseObservableModel<T>;
	protected subject!: Subject<IBaseObservableModel<T>>;

	observable!: Observable<IBaseObservableModel<T>>;

	protected constructor(clearObject: T, protected httpMapperService: HttpMapperService) {
		this.cleanObservableSubject = _.cloneDeep(clearObject);
		this.observableSubject = new BaseObservableModel(_.cloneDeep(clearObject));
		this.initSubject();
	}

	abstract initSubject(): void;

	get observableSubjectValue(): BaseObservableModel<T> {
		return this.observableSubject;
	}

	add(value: T) {
		this.observableSubject.data = value;
		this.next();
	}

	addWithoutNext(value: T) {
		Object.assign(this.observableSubject.data, value);
	}

	addCommunicationStateWithoutNext(state: CommunicationState) {
		this.observableSubject.communicationState = state;
	}

	addCommunicationState(state: CommunicationState) {
		this.observableSubject.communicationState = state;
		this.next();
	}

	addError(error: HttpErrorResponse) {
		this.observableSubject.error = this.httpMapperService.HttpErrorResponseToIErrorModel(error);
		this.next();
	}

	clear() {
		this.observableSubject.data = _.cloneDeep(this.cleanObservableSubject);
		this.next();
	}

	clearWithoutNext() {
		this.observableSubject.data = _.cloneDeep(this.cleanObservableSubject);
	}

	next() {
		this.subject.next(_.cloneDeep(this.observableSubject));
	}
}
