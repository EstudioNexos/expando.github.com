setShareLinks((function(s,h,a,r,e){for(h=0;h<s.length;h++){
e=s[h].split(" ");r=a[decodeURIComponent(e[0])]={};
r.url=e[1].replace(/^(\w*\:\/\/)?(\.)?([^\/]+)/,function(l,i,n,k){
return(i||"http://")+(n?"www.":"")+k.replace(/(\.\w?)(\.\w{2,})?$/,function(n,o,w){
return(o?({".":".com",".o":".org",".n":".net"})[o]:"")+(w||"")})
});r.lang=e[2];r.size=e[3];a._list[h]=r}return a})([

"Facebook .facebook./share.php?u=@u&t=@t",
"Twitter twitter./home?status=@t%20-%20@u",
"Tumblr .tumblr./share?v=3&u=@u&t=@t&s=@s",
"StumbleUpon .stumbleupon./submit?url=@u&title=@t",
"LinkedIn .linkedin./shareArticle?mini=true&url=@u&title=@t&summary=@s",
"Reddit reddit./submit?url=@u&title=@t",
"Technorati technorati./faves?add=@u",
"Blogger .blogger./blog_this.pyra?t=@t&u=@u",
"Digg digg./submit?phase=2&url=@u&title=@t&bodytext=@s",
"Delicious delicious./post?url=@u&title=@t&notes=@s",
"Fark cgi.fark./cgi/fark/farkit.pl?h=@t&u=@u",
"Friendfeed .friendfeed./share?title=@t&link=@u",
"MySpace .myspace./Modules/PostTo/Pages/?u=@u&t=@t",
"Mister%20Wong .mister-wong./addurl/?bm_url=@u&bm_description=@t",
"NetVibes .netvibes./share?title=@t&url=@u",
"NewsVine .newsvine./_tools/seed&save?u=@u&h=@t",
"Evernote .evernote./clip.action?url=@u&title=@t",
"Wanelo wanelo./p/post?bookmarklet=&source=toolbar&title=@t&url=@u",
"VK vk./share.php?url=@u ru",
"%E6%96%B0%E6%B5%AA%E5%BE%AE%E5%8D%9A service.weibo./share/share.php?title=@t&url=@u zh_cn",
"%E8%85%BE%E8%AE%AF%E5%BE%AE%E5%8D%9A v.t.qq./share/share.php?title=@t&url=@u zh_cn",
"QQ%E7%A9%BA%E9%97%B4 sns.qzone.qq./cgi-bin/qzshare/cgi_qzshare_onekey?url=@u&title=@t zh_cn",
"%E4%BA%BA%E4%BA%BA%E7%BD%91 share.renren./share/buttonshare.do?title=@t&link=@u zh_cn",
"%E7%BD%91%E6%98%93%E5%BE%AE%E5%8D%9A t.163./article/user/checkLogin.do?link=@u&info=@t zh_cn"

],0,{_list:[]}));
