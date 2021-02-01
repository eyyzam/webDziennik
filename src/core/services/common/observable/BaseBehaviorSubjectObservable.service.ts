import { BehaviorSubject } from "rxjs";
import { BaseObservableService, HttpMapperService } from "../../../services";

export abstract class BaseBehaviorSubjectObservableService<T> extends  BaseObservableService<T> {

	protected constructor(clearObject: T, protected httpMapperService: HttpMapperService) {
		super(clearObject, httpMapperService);
	}

	initSubject(): void {
		this.subject = new BehaviorSubject(this.observableSubject);
		this.observable = this.subject.asObservable();
	}
}
