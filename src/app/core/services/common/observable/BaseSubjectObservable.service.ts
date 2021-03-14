import { Subject } from "rxjs";
import { BaseObservableService } from "./BaseObservable.service";
import { HttpMapperService } from "../regular/HttpMapper.service";

export abstract class BaseSubjectObservableService<T> extends BaseObservableService<T> {

	protected constructor(clearObject: T, protected httpMapperService: HttpMapperService) {
		super(clearObject, httpMapperService);
	}

	initSubject(): void {
		this.subject = new Subject();
		this.observable = this.subject.asObservable();
	}
}
