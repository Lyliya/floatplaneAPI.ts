import got from "got";

type Got = typeof got;
export class Core {
	public got: Got;
	protected readonly BaseUrl;
	constructor(got: Got, baseUrl: string = "https://www.floatplane.com") {
		this.got = got;
		this.BaseUrl = baseUrl;
	}
}
