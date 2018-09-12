var max = 200;
var N = 0,ed = 0,maxlen = 0,ans = 0,dp = [],pre = [],g = [];

var dfs = function(u,fa,len,limit){
	dp[u] = len;
	pre[u] = fa;
	for (var i = 0; i < g[u].length; ++i) {
		let v = g[u][i];
		if (v != fa && v != limit) {
			dfs(v, u, len + 1,limit);
		}
	}
}

var getMax = function(u, v){
	dfs(u, -1, 0, v);
	maxlen = 0;
	ed = u;
	for (var i = 1; i <= N; ++i) {
		if (dp[i] > maxlen) {
			maxlen = dp[i];
			ed = i;
		}
		dfs(ed, -1, 0, v);
		maxlen = 0;
	}
	for (var i = 0; i < N; ++i) {
		if (dp[i] > maxlen) {
			maxlen = dp[i];
			ed = i;
		}
		maxlen = 0;
	}
	while(pre[ed] != -1) {
		ed = pre[ed];
		++maxlen;
		return maxlen
	}
}

var resolve = function(){
	var N = readInt();
	for (var i = 1; i < N; ++i) {
		var u = readInt();
		var v = readInt();
		g[u].push(v);
		g[v].push(u);
	}
	for (var i = 1; i <= N; ++i) {
		for (var j = 0; i < g[i].length; ++i) {
			var l = getMax(i,g[i][j]);
			var r = getMax(g[i][j],i);
			ans = Math.max(ans, l * r);
		}
	}
}

resolve();
print(ans);