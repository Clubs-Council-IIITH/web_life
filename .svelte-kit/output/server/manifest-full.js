export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carousel/1.jpg","carousel/10.jpg","carousel/11.jpg","carousel/12.jpg","carousel/2.jpg","carousel/3.jpg","carousel/4.jpg","carousel/5.jpg","carousel/6.jpg","carousel/7.jpg","carousel/8.jpg","carousel/9.jpg","favicon.ico","life-iiit.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.RvtDxWte.js","app":"_app/immutable/entry/app.CeeP3NUB.js","imports":["_app/immutable/entry/start.RvtDxWte.js","_app/immutable/chunks/entry.C6bdUwV8.js","_app/immutable/chunks/scheduler.Ch0H1XW6.js","_app/immutable/chunks/index.D9h4qvIo.js","_app/immutable/chunks/paths.C8Yhukzv.js","_app/immutable/entry/app.CeeP3NUB.js","_app/immutable/chunks/scheduler.Ch0H1XW6.js","_app/immutable/chunks/index.CT4Qbzw8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/calendar",
				pattern: /^\/calendar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/committee",
				pattern: /^\/committee\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/student-bodies",
				pattern: /^\/student-bodies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
