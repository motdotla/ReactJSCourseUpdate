import { rest } from "msw";

export const handlers = [
	rest.post("https://api.medium.com/*", (req, res, ctx) => {
		return res(
			ctx.status(201),
			ctx.json({
				data: {
					id: "e6f36a",
					title: "Liverpool FC",
					authorId: "5303d74c64f66366f00cb9b2a94f3251bf5",
					tags: ["football", "sport", "Liverpool"],
					url: "https://medium.com/@majelbstoat/liverpool-fc-e6f36a",
					canonicalUrl: "http://jamietalbot.com/posts/liverpool-fc",
					publishStatus: "public",
					publishedAt: 1442286338435,
					license: "all-rights-reserved",
					licenseUrl: "https://medium.com/policy/9db0094a1e0f",
				},
			})
		);
	}),
];
