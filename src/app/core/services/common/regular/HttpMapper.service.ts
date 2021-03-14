import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { IErrorModel, ErrorModel } from "../../../models";

@Injectable({
	providedIn: "root"
})

export class HttpMapperService {

	HttpErrorResponseToIErrorModel(src: HttpErrorResponse, dest = new ErrorModel()): IErrorModel {
		dest.id = src.statusText;
		dest.message = src.message;
		dest.code = src.status;
		return dest;
	}
}
