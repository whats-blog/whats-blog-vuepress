"use strict";(self.webpackChunkwhats_blog_vuepress=self.webpackChunkwhats_blog_vuepress||[]).push([[626],{4802:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-ee796afe",path:"/2018/11/07/frontmatter-in-vuepress.html",title:"frontmatter in vuepress 1",lang:"en-US",frontmatter:{permalinkPattern:"/:year/:month/:day/:slug.html",pagination:{type:"post",id:"post"},title:"frontmatter in vuepress 1",date:"2018-11-07T00:00:00.000Z",tags:["frontmatter","vuepress"],author:"ULIVZ",location:"Hangzhou"},excerpt:'<p>Any markdown file that contains a YAML front matter block will be processed by <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noopener noreferrer">gray-matter<OutboundLink/></a>. The front matter must be the first thing in the markdown file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:</p>\n',headers:[{level:2,title:"Alternative Front Matter Formats",slug:"alternative-front-matter-formats",children:[]},{level:2,title:"Predefined Variables",slug:"predefined-variables",children:[{level:3,title:"title",slug:"title",children:[]},{level:3,title:"lang",slug:"lang",children:[]},{level:3,title:"description",slug:"description",children:[]},{level:3,title:"layout",slug:"layout",children:[]},{level:3,title:"permalink",slug:"permalink",children:[]},{level:3,title:"metaTitle",slug:"metatitle",children:[]},{level:3,title:"meta",slug:"meta",children:[]}]},{level:2,title:"Predefined Variables Powered By Default Theme",slug:"predefined-variables-powered-by-default-theme",children:[{level:3,title:"navbar",slug:"navbar",children:[]},{level:3,title:"sidebar",slug:"sidebar",children:[]}]}]}},5119:(e,a,n)=>{n.r(a),n.d(a,{default:()=>A});var t=n(7951);const l=(0,t.Uk)("Any markdown file that contains a YAML front matter block will be processed by "),s={href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("gray-matter"),i=(0,t.Uk)(". The front matter must be the first thing in the markdown file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:"),o=(0,t.uE)('<div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Blogging Like a Hacker\n<span class="token key atrule">lang</span><span class="token punctuation">:</span> en<span class="token punctuation">-</span>US</span>\n<span class="token punctuation">---</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',1),d=(0,t.Uk)("Between these triple-dashed lines, you can set predefined variables (see "),u=(0,t._)("a",{href:"#predefined-variables"},"below",-1),p=(0,t.Uk)(" for a reference), or even create custom ones of your own. These variables will then be available to you to access using "),c=(0,t.Uk)("$frontmatter"),h=(0,t.Uk)(" at the rest of the page, plus all custom and theming components."),m=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",null,[(0,t.Uk)("Front matter variables are "),(0,t._)("strong",null,"optional"),(0,t.Uk)(" in VuePress.")])],-1),b=(0,t._)("h2",{id:"alternative-front-matter-formats",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#alternative-front-matter-formats","aria-hidden":"true"},"#"),(0,t.Uk)(" Alternative Front Matter Formats")],-1),f=(0,t.Uk)("In addition, VuePress also supports JSON or "),k={href:"https://github.com/toml-lang/toml",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("TOML"),v=(0,t.Uk)(" front matter."),y=(0,t.uE)('<p>JSON front matter needs to start and end in curly braces:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---\n{\n  &quot;title&quot;: &quot;Blogging Like a Hacker&quot;,\n  &quot;lang&quot;: &quot;en-US&quot;\n}\n---\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>TOML front matter needs to be explicitly marked as TOML:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>---toml\ntitle = &quot;Blogging Like a Hacker&quot;\nlang = &quot;en-US&quot;\n---\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="predefined-variables" tabindex="-1"><a class="header-anchor" href="#predefined-variables" aria-hidden="true">#</a> Predefined Variables</h2><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>Type: <code>string</code></li><li>Default: <code>h1_title || siteConfig.title</code></li></ul><p>Title of current page.</p><h3 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h3><ul><li>Type: <code>string</code></li><li>Default: <code>en-US</code></li></ul><p>Language of current page.</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> description</h3><ul><li>Type: <code>string</code></li><li>Default: <code>siteConfig.description</code></li></ul><p>Description of current page.</p><h3 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h3><ul><li>Type: <code>string</code></li><li>Default: <code>Layout</code></li></ul><p>Set the layout component of the current page.</p><h3 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink" aria-hidden="true">#</a> permalink</h3><ul><li>Type: <code>string</code></li><li>Default: <code>siteConfig.permalink</code></li></ul>',19),_=(0,t.Uk)("Refer to: "),U=(0,t.Uk)("Permalinks"),w=(0,t.Uk)("."),x=(0,t.uE)('<h3 id="metatitle" tabindex="-1"><a class="header-anchor" href="#metatitle" aria-hidden="true">#</a> metaTitle</h3><ul><li>Type: <code>string</code></li><li>Default: <code>`${page.title} | ${siteConfig.title}`</code></li></ul><p>Override the default meta title.</p><h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h3><ul><li>Type: <code>array</code></li><li>Default: <code>undefined</code></li></ul><p>Specify extra meta tags to be injected:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">---</span>\n<span class="token key atrule">meta</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> description\n    <span class="token key atrule">content</span><span class="token punctuation">:</span> hello\n  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords\n    <span class="token key atrule">content</span><span class="token punctuation">:</span> super duper SEO\n<span class="token punctuation">---</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="predefined-variables-powered-by-default-theme" tabindex="-1"><a class="header-anchor" href="#predefined-variables-powered-by-default-theme" aria-hidden="true">#</a> Predefined Variables Powered By Default Theme</h2><h3 id="navbar" tabindex="-1"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>undefined</code></li></ul>',10),T=(0,t.Uk)("See: "),D=(0,t.Uk)("Default Theme Config > Disable the Navbar"),L=(0,t.Uk)("."),S=(0,t._)("h3",{id:"sidebar",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),(0,t.Uk)(" sidebar")],-1),q=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Type: "),(0,t._)("code",null,"boolean|'auto'")]),(0,t._)("li",null,[(0,t.Uk)("Default: "),(0,t._)("code",null,"undefined")])],-1),P=(0,t.Uk)("See: "),M=(0,t.Uk)("Default Theme Config > Sidebar"),O=(0,t.Uk)("."),A={render:function(e,a){const n=(0,t.up)("OutboundLink"),A=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("p",null,[l,(0,t._)("a",s,[r,(0,t.Wm)(n)]),i]),o,(0,t._)("p",null,[d,u,p,(0,t._)("code",null,[(0,t.Wm)(A,{to:"/_posts/global-computed.html#frontmatter"},{default:(0,t.w5)((()=>[c])),_:1})]),h]),m,b,(0,t._)("p",null,[f,(0,t._)("a",k,[g,(0,t.Wm)(n)]),v]),y,(0,t._)("p",null,[_,(0,t.Wm)(A,{to:"/_posts/permalinks.html"},{default:(0,t.w5)((()=>[U])),_:1}),w]),x,(0,t._)("p",null,[T,(0,t.Wm)(A,{to:"/theme/default-theme-config.html#disable-the-navbar"},{default:(0,t.w5)((()=>[D])),_:1}),L]),S,q,(0,t._)("p",null,[P,(0,t.Wm)(A,{to:"/theme/default-theme-config.html#sidebar"},{default:(0,t.w5)((()=>[M])),_:1}),O])],64)}}}}]);