/*!CK:2940817412!*//*1412280759,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CZ2Qz"]); }

__d("XCollectionRecommendationCarouselControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/timeline\/app_collection\/recommendation\/carousel\/",{collection_token:{type:"String",required:true},cursor:{type:"String",required:true},id:{type:"String",required:true},itemsize:{type:"Int",required:true},itemsperpage:{type:"Int",required:true},itemstooverfetch:{type:"Int",required:true},surface:{type:"String",required:true},surface_collection_id:{type:"Int",required:true}});},null);
__d("OGCollectionRecommendationCarousel",["Arbiter","AsyncRequest","CSS","DataStore","DOM","Event","Parent","PageLikeButton","XCollectionRecommendationCarouselControllerURIBuilder","csx","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s='OGCollectionRecommendationCarousel',t={},u={};function v(da,ea,fa,ga){"use strict";this.$OGCollectionRecommendationCarousel0=ea;this.$OGCollectionRecommendationCarousel1=ga.collection_token;this.$OGCollectionRecommendationCarousel2=fa;this.$OGCollectionRecommendationCarousel3=ea.getNode().id;this.$OGCollectionRecommendationCarousel4=ga.surface;this.$OGCollectionRecommendationCarousel5=ga.surface_collection_id;this.$OGCollectionRecommendationCarousel6=da;this.$OGCollectionRecommendationCarousel7=ga.item_size;this.$OGCollectionRecommendationCarousel8=ga.items_per_page;this.$OGCollectionRecommendationCarousel9=ga.items_to_over_fetch;t[da]={carousel:ea,collectionToken:ga.collection_token};j.set(s,this.$OGCollectionRecommendationCarousel3,this);j.set(s,this.$OGCollectionRecommendationCarousel1,this);if(!fa){ea.endCarousel();return;}r([this.$OGCollectionRecommendationCarousel0.subscribe('needsitems',this.$OGCollectionRecommendationCarousela.bind(this))]);g.subscribe(n.LIKED,this.$OGCollectionRecommendationCarouselb.bind(this));g.subscribe(n.UNLIKED,this.$OGCollectionRecommendationCarouselc.bind(this));}v.prototype.$OGCollectionRecommendationCarousela=function(){"use strict";new h((new o()).setString('collection_token',this.$OGCollectionRecommendationCarousel1).setString('cursor',this.$OGCollectionRecommendationCarousel2).setString('id',this.$OGCollectionRecommendationCarousel3).setInt('itemsize',this.$OGCollectionRecommendationCarousel7).setInt('itemsperpage',this.$OGCollectionRecommendationCarousel8).setInt('itemstooverfetch',this.$OGCollectionRecommendationCarousel9).setString('surface',this.$OGCollectionRecommendationCarousel4).setInt('surface_collection_id',this.$OGCollectionRecommendationCarousel5).getURI()).send();};v.prototype.$OGCollectionRecommendationCarouselb=function(da,ea){"use strict";var fa=m.byClass(ea.target,"_58rc");if(!fa)return;u[ea.profile_id]=fa;w(fa,true);var ga=m.byClass(fa,"_596n");if(ga&&this.$OGCollectionRecommendationCarousel6===ga.id)ca(ga.id);};v.prototype.$OGCollectionRecommendationCarouselc=function(da,ea){"use strict";var fa=u[ea.profile_id];if(!fa)return;w(fa,false);};v.prototype.$OGCollectionRecommendationCarousele=function(da,ea){"use strict";if(!ea||!da||da.length===0){this.$OGCollectionRecommendationCarousel0.endCarousel();return;}this.$OGCollectionRecommendationCarousel2=ea;this.$OGCollectionRecommendationCarousel0.addItems(da);};v.update=function(da,ea,fa){"use strict";var ga=j.get(s,fa);if(ga)ga.$OGCollectionRecommendationCarousele(da,ea);};v.removeItemFromRecommendations=function(da,ea){"use strict";return ba(da,ea);};v.plusRecommendation=function(da,ea,fa,ga,ha,ia){"use strict";var ja=t[ea];if(da!=ea&&ja){var ka=k.scry(ja.carousel.getNode(),'[data-obj="'+ga+'"]');if(ka&&ka.length>0){var la=m.byClass(ka[0],"_58rc");aa(ea,la);}}var ma=null;if(ia){ma=ba(da,fa);}else ma=y(da,fa);return {ignored_item_ids:ma};};v.postPlusRecommendation=function(da,ea){"use strict";var fa=v.getWrapperID(da,ea);ca(fa);};v.slideLeftOneUnitAfterAction=function(da){"use strict";ca(da);};v.getWrapperID=function(da,ea){"use strict";return 'recommendation_carousel_'+da+'_'+ea;};function w(da,ea){var fa=k.scry(da,"._vfm")[0],ga="_4rtx";if(fa)ea?i.addClass(fa,ga):i.removeClass(fa,ga);}function x(da){var ea=k.scry(da,"._3owb")[0];if(ea)return ea.getAttribute('data-obj');}function y(da,ea){var fa=[],ga=t[da].carousel.getVisibleNodes(),ha=x(ea);for(var ia=0;ia<ga.length;++ia){var ja=x(ga[ia]);if(ha===ja)break;if(ja)fa.push(ja);}return fa;}function z(da){i.addClass(da,"_42fn");var ea=l.listen(da,'mouseover',function(){i.removeClass(da,"_42fn");ea.remove();});}function aa(da,ea){if(ea){var fa=ea.nextSibling;fa&&z(fa);t[da].carousel.removeItem(ea);}t[da].carousel.refresh();}function ba(da,ea){var fa=y(da,ea);aa(da,ea);return fa;}function ca(da){var ea=t[da].carousel;if(ea){var fa=ea._carousel._grid.querySelector(':hover');ea.slide(1,300);var ga=fa.nextSibling;if(ga){i.addClass(ga,"_46lc");var ha=l.listen(ga,'mouseover',function(){i.removeClass(ga,"_46lc");ha.remove();});}}}e.exports=v;},null);
__d("OGCollectionRecommendationQuestionWrapper",["CSS","Event","Parent","OGCollectionRecommendationCarousel","copyProperties","cx","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p,q,r,s,t,u){"use strict";this.$OGCollectionRecommendationQuestionWrapper0=o;this.$OGCollectionRecommendationQuestionWrapper1=p;this.$OGCollectionRecommendationQuestionWrapper2=q;this.$OGCollectionRecommendationQuestionWrapper3=r;this.$OGCollectionRecommendationQuestionWrapper4=t;this.$OGCollectionRecommendationQuestionWrapper5=u;m(s.subscribe('answered',function(v,w){var x=i.byClass(this.$OGCollectionRecommendationQuestionWrapper4,'selected');if(w==='yes'){var y=this.$OGCollectionRecommendationQuestionWrapper3;if(this.$OGCollectionRecommendationQuestionWrapper5)y=j.getWrapperID(this.$OGCollectionRecommendationQuestionWrapper1,this.$OGCollectionRecommendationQuestionWrapper0);g.hide(x);var z=j.plusRecommendation(this.$OGCollectionRecommendationQuestionWrapper3,y,i.byClass(this.$OGCollectionRecommendationQuestionWrapper4,"_58rc"),this.$OGCollectionRecommendationQuestionWrapper2,this.$OGCollectionRecommendationQuestionWrapper0,this.$OGCollectionRecommendationQuestionWrapper5);return k(z,{collection_token:this.$OGCollectionRecommendationQuestionWrapper0,show_edit_menu:false,show_added_check:true});}else{var aa=j.slideLeftOneUnitAfterAction(this.$OGCollectionRecommendationQuestionWrapper3);g.addClass(x,"_2pbd");var ba=h.listen(x.parentNode,'mouseover',function(){g.removeClass(x,"_2pbd");ba.remove();});return {ignored_item_ids:aa,objectid:this.$OGCollectionRecommendationQuestionWrapper2};}}.bind(this)));}e.exports=n;},null);
__d("CollectionSuggestionAddQuestion",["AsyncRequest","Event","TidyArbiterMixin","mixin","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k){var l=j(i);for(var m in l)if(l.hasOwnProperty(m))o[m]=l[m];var n=l===null?null:l.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=l;function o(p,q,r){"use strict";this.$CollectionSuggestionAddQuestion0=r;k(h.listen(p.yes,'click',this.handleClick.bind(this).bind(null,'yes',q.yes)));if(p.no)k(h.listen(p.no,'click',this.handleClick.bind(this).bind(null,'no',q.no)));if(p.want)k(h.listen(p.want,'click',this.handleClick.bind(this).bind(null,'want',q.want)));}o.prototype.handleClick=function(p,q){"use strict";var r=this.inform('answered',p);new g(q).setRelativeTo(this.$CollectionSuggestionAddQuestion0).setData(r).send();};e.exports=o;},null);
__d("TimelineCollectionsCarousel",["Animation","CSS","DOM","Ease","Event","Locale","TidyArbiterMixin","cx","mixin","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=2,r=2,s=154,t=40,u=o(m);for(var v in u)if(u.hasOwnProperty(v))x[v]=u[v];var w=u===null?null:u.prototype;x.prototype=Object.create(w);x.prototype.constructor=x;x.__superConstructor__=u;function x(y,z,aa,ba){"use strict";this._node=y.node;this._grid=y.grid;this._prevLink=y.prev_link;this._nextLink=y.next_link;this._disabledNext=false;this._visibleCount=z;this._slideMaxItems=this._visibleCount-r;var ca=this._prevLink.offsetWidth||t;this._itemWidth=(ba&&ba>0)?ba:s;this._visibleIndex=-1;var da=this._itemWidth*-1,ea=ca+q+aa+da;this._position=ea;this._positionProperty=l.isRTL()?'right':'left';this._grid.style[this._positionProperty]=this._position+'px';this._lastBoundaryItem=this._grid.lastChild;this.updateBoundaryItems();h.addClass(this._node,"_5rr8");p([k.listen(this._prevLink,'click',this._onPrevClick.bind(this)),k.listen(this._prevLink,'mouseenter',this._onPrevEnter.bind(this)),k.listen(this._prevLink,'mouseleave',this._onPrevLeave.bind(this)),k.listen(this._nextLink,'click',this._onNextClick.bind(this)),k.listen(this._nextLink,'mouseenter',this._onNextEnter.bind(this)),k.listen(this._nextLink,'mouseleave',this._onNextLeave.bind(this))]);this.refresh();}x.prototype.getGrid=function(){"use strict";return this._grid;};x.prototype.removeItem=function(y){"use strict";i.remove(y);this.refresh();if(this.getVisibleNodes().length-r===0)this.inform('lastelementremoved');};x.prototype.disableNext=function(){"use strict";this._disabledNext=true;this.refresh();};x.prototype.enableNext=function(){"use strict";this._disabledNext=false;this.refresh();};x.prototype.getNode=function(){"use strict";return this._node;};x.prototype.getNextLink=function(){"use strict";return this._nextLink;};x.prototype.getVisibleNodes=function(){"use strict";var y=[],z=Math.min(this._visibleCount,this._grid.childNodes.length);for(var aa=1;aa<=z;aa++){var ba=this._grid.childNodes[this._visibleIndex+aa];y.push(ba);}return y;};x.prototype.getVisibleNodesMax=function(){"use strict";return this._visibleCount;};x.prototype.getLastVisibleIndex=function(){"use strict";return this._visibleIndex+this._visibleCount-1;};x.prototype.insertBefore=function(y,z){"use strict";if(z){this._grid.insertBefore(y,z);}else i.insertBefore(this._lastBoundaryItem,y);this.refresh();};x.prototype.refresh=function(){"use strict";h.conditionClass(this._node,"_58rf",!this._isPrevEnabled());h.conditionClass(this._node,"_58rg",!this._isNextEnabled());};x.prototype.updateBoundaryItems=function(){"use strict";if(this._grid.childNodes.length<this._visibleCount){h.hide(this._lastBoundaryItem);}else h.show(this._lastBoundaryItem);};x.prototype._getNextOverflowCount=function(){"use strict";return this._grid.childNodes.length-(this.getLastVisibleIndex()+r);};x.prototype._getPrevOverflowCount=function(){"use strict";return this._visibleIndex+1;};x.prototype._isPrevEnabled=function(){"use strict";return this._getPrevOverflowCount()>0;};x.prototype._isNextEnabled=function(){"use strict";return this._getNextOverflowCount()>0&&!this._disabledNext;};x.prototype._onNextClick=function(){"use strict";if(this._isNextEnabled()){if(this._getPrevOverflowCount()===0)h.removeClass(this._node,"_5rr8");this._slide(Math.min(this._getNextOverflowCount(),this._slideMaxItems));this.inform('nextclick');}};x.prototype._onNextEnter=function(){"use strict";if(this._isNextEnabled()){h.addClass(this._node,"_5di5");this.inform('nextenter');}};x.prototype._onNextLeave=function(){"use strict";h.removeClass(this._node,"_5di5");this.inform('nextleave');};x.prototype._onPrevClick=function(){"use strict";if(this._isPrevEnabled()){if(this._getPrevOverflowCount()<=this._slideMaxItems)h.addClass(this._node,"_5rr8");this._slide(-1*Math.min(this._getPrevOverflowCount(),this._slideMaxItems));this.inform('prevclick');}};x.prototype._onPrevEnter=function(){"use strict";if(this._isPrevEnabled()){h.addClass(this._node,"_5di6");this.inform('preventer');}};x.prototype._onPrevLeave=function(){"use strict";h.removeClass(this._node,"_5di6");this.inform('prevleave');};x.prototype.silentSlide=function(y){"use strict";this._visibleIndex+=y;this._position-=y*this._itemWidth;this._grid.style[this._positionProperty]=this._position+'px';this.refresh();};x.prototype.slide=function(y,z){"use strict";y=Math.min(this._getNextOverflowCount(),y);if(y>0){h.removeClass(this._node,"_5rr8");this._slide(y,z);return true;}return false;};x.prototype._slide=function(y,z){"use strict";this._visibleIndex+=y;this._position-=y*this._itemWidth;if(!z)z=500*Math.abs(y/this._slideMaxItems);var aa=this._node;h.addClass(aa,"_58rj");new g(this._grid).to(this._positionProperty,this._position).duration(z).ease(j.sineOut).ondone(function(){h.removeClass(aa,"_58rj");this.inform('onSlideDone');this.refresh();}.bind(this)).go();this.inform('onSlide');};e.exports=x;},null);
__d("TimelineCollectionsInfiniteCarousel",["Arbiter","CSS","DOM","TidyArbiterMixin","csx","cx","tidyEvent","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=2,p=n(j);for(var q in p)if(p.hasOwnProperty(q))s[q]=p[q];var r=p===null?null:p.prototype;s.prototype=Object.create(r);s.prototype.constructor=s;s.__superConstructor__=p;function s(t,u,v){"use strict";this._carousel=t;this._items=u;this._needsItems=false;this._placeholderIndex=0;this._visibleCount=this._carousel.getVisibleNodesMax();this._carouselDone=false;for(var w=0;w<this._visibleCount-1;++w){var x=v.cloneNode(true);this._carousel.insertBefore(x,this._placeholder);this._placeholder=x;}m([this._carousel.subscribe('onSlide',this.refresh.bind(this)),this._carousel.subscribe('nextclick',this.inform.bind(this,'nextclick')),this._carousel.subscribe('nextenter',this.inform.bind(this,'nextenter')),this._carousel.subscribe('nextleave',this.inform.bind(this,'nextleave')),this._carousel.subscribe('prevclick',this.inform.bind(this,'prevclick')),this._carousel.subscribe('preventer',this.inform.bind(this,'preventer')),this._carousel.subscribe('prevleave',this.inform.bind(this,'prevleave'))]);this.refresh();}s.prototype.addItems=function(t){"use strict";this._needsItems=false;for(var u=0;u<t.length;++u)this._items.push(t[u]);this.refresh();this.inform('newitemsadded',t);};s.prototype.endCarousel=function(){"use strict";this._placeholder=null;var t=i.scry(this._carousel.getNode(),"li._5b4r");t.forEach(function(u){i.remove(u);}.bind(this));this._carouselDone=true;this._carousel.updateBoundaryItems();this.refresh();};s.prototype.getGrid=function(){"use strict";return this._carousel.getGrid();};s.prototype.getNode=function(){"use strict";return this._carousel.getNode();};s.prototype.getNextLink=function(){"use strict";return this._carousel.getNextLink();};s.prototype.getVisibleNodes=function(){"use strict";return this._carousel.getVisibleNodes();};s.prototype.getVisibleNodesMax=function(){"use strict";return this._carousel.getVisibleNodesMax();};s.prototype.removeItem=function(t){"use strict";i.remove(t);this._placeholderIndex--;if(this.getVisibleNodes().length-o===0)this.inform('lastelementremoved');this.refresh();};s.prototype._addItem=function(t){"use strict";this._placeholderIndex++;this._carousel.insertBefore(t,this._placeholder);};s.prototype.refresh=function(){"use strict";while((this._carousel.getLastVisibleIndex()>=this._placeholderIndex||this._carouselDone)&&this._items.length)this._addItem(this._items.shift());if(this._carousel.getLastVisibleIndex()>=this._placeholderIndex&&!this._carouselDone){h.addClass(this._carousel.getNode(),"_58rd");this._carousel.disableNext();}else{h.removeClass(this._carousel.getNode(),"_58rd");this._carousel.enableNext();}if(this._items.length<this._visibleCount&&!this._needsItems&&!this._carouselDone){this._needsItems=true;this.inform('needsitems',null,g.BEHAVIOR_PERSISTENT);}this._carousel.refresh();this.inform('refreshed');};s.prototype.slide=function(t,u){"use strict";return this._carousel.slide(t,u);};e.exports=s;},null);
__d("EgoCollectionsRecommendation",["Arbiter","AsyncRequest","DOM","DOMClone","Tooltip","csx","isEmpty"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={},o={},p=1500;function q(t,u){new h(t).setHandler(function(v){if(!v.payload)return;var w=null;for(var x in u){if(!w){i.setContent(u[x],v.payload.icon);w=(u[x]).firstChild;}else i.setContent(u[x],w=j.shallowClone(w));k.set(w,v.payload.tooltip);}}).send();}function r(t,u,event,v){if(v.category!==t)return;var w=o[t];if(!m(w))setTimeout(q.bind(null,u,w),p);}var s={keepIconSynced:function(t,u,v){if(!n[v])n[v]=g.subscribe('AudienceSelector/syncNonSelectorIcon',r.bind(null,v,u));o[v]||(o[v]={});o[v][t.id]=t;},replaceOrInsertTopUnit:function(t,u){if(!t)return;var v=i.scry(t,'^.ego_unit_container')[0];if(!v)return;var w=i.scry(v,"._53ee");if(w[0]){i.replace(w[0],u);}else i.prependContent(v,u);}};e.exports=s;},null);