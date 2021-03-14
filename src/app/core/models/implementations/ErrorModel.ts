import { IErrorModel } from "../../models";

export class ErrorModel implements IErrorModel {

	constructor(
		public id: string = "",
		public message: string = "",
		public code: number = 400
	) { }
}
