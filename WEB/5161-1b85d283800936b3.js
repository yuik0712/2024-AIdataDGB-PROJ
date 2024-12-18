"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5161],{31162:function(e,t,n){n.d(t,{$m:function(){return postFormQuestionImage},Dx:function(){return getProductQuestionsMy},Og:function(){return postProductQuestion},_L:function(){return putProductQuestion},cZ:function(){return getProductQuestions},pW:function(){return deleteProductQuestion}});var u=n(36503),i=n(57578);let getProductQuestionsMy=async e=>{let{data:t}=await u.Z.get("/product-questions/my",{params:e});return{data:t}},deleteProductQuestion=async e=>{let{data:t}=await u.Z.delete("/product-questions/".concat(e));return{data:t}},postFormQuestionImage=async e=>{let{data:t}=await u.Z.post("/questions/image",e,i.T);return{data:t}},postProductQuestion=async e=>{let{data:t}=await u.Z.post("/product-questions",e);return{data:t}},putProductQuestion=async(e,t)=>{let{data:n}=await u.Z.put("/product-questions/".concat(e),t);return{data:n}},getProductQuestions=async(e,t)=>{let{data:n}=await u.Z.get("/product-questions/product/".concat(e),{params:t});return{data:n}}},91794:function(e,t,n){n.d(t,{N6:function(){return getQuestionsMy},Sh:function(){return postQuestion},Us:function(){return putQuestion},bl:function(){return deleteQuestionById}});var u=n(36503);let getQuestionsMy=async e=>{let{data:t}=await u.Z.get("/questions/my",{params:e});return{data:t}},deleteQuestionById=async e=>{let{data:t}=await u.Z.delete("/questions/".concat(e));return{data:t}},postQuestion=async e=>{let{data:t}=await u.Z.post("/questions",e);return{data:t}},putQuestion=async(e,t)=>{let{data:n}=await u.Z.put("/questions/".concat(e),t);return{data:n}}},21483:function(e,t,n){n.d(t,{H:function(){return Lock}});var u=n(85893);n(67294);let Lock=e=>{let{width:t=14,height:n=18,color:i="#000",...r}=e;return(0,u.jsx)("svg",{width:t,height:n,viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,u.jsx)("path",{d:"M1.61537 18C1.16794 18 0.78685 17.8426 0.4721 17.5279C0.157367 17.2131 0 16.8321 0 16.3846V7.61538C0 7.16794 0.157367 6.78685 0.4721 6.4721C0.78685 6.15737 1.16794 6 1.61537 6H3V4C3 2.8859 3.38814 1.94071 4.16442 1.16443C4.94071 0.388142 5.8859 0 7 0C8.1141 0 9.05929 0.388142 9.83557 1.16443C10.6119 1.94071 11 2.8859 11 4V6H12.3846C12.8321 6 13.2132 6.15737 13.5279 6.4721C13.8426 6.78685 14 7.16794 14 7.61538V16.3846C14 16.8321 13.8426 17.2131 13.5279 17.5279C13.2132 17.8426 12.8321 18 12.3846 18H1.61537ZM1.61537 17H12.3846C12.5641 17 12.7115 16.9423 12.8269 16.8269C12.9423 16.7115 13 16.5641 13 16.3846V7.61538C13 7.43589 12.9423 7.28846 12.8269 7.17307C12.7115 7.05769 12.5641 7 12.3846 7H1.61537C1.43589 7 1.28846 7.05769 1.17308 7.17307C1.05769 7.28846 1 7.43589 1 7.61538V16.3846C1 16.5641 1.05769 16.7115 1.17308 16.8269C1.28846 16.9423 1.43589 17 1.61537 17ZM7 13.5C7.4218 13.5 7.77725 13.3554 8.06635 13.0663C8.35545 12.7773 8.5 12.4218 8.5 12C8.5 11.5782 8.35545 11.2227 8.06635 10.9337C7.77725 10.6446 7.4218 10.5 7 10.5C6.5782 10.5 6.22275 10.6446 5.93365 10.9337C5.64455 11.2227 5.5 11.5782 5.5 12C5.5 12.4218 5.64455 12.7773 5.93365 13.0663C6.22275 13.3554 6.5782 13.5 7 13.5ZM4 6H10V4C10 3.16667 9.70833 2.45833 9.125 1.875C8.54167 1.29167 7.83333 1 7 1C6.16667 1 5.45833 1.29167 4.875 1.875C4.29167 2.45833 4 3.16667 4 4V6Z",fill:i})})}},74172:function(e,t,n){n.d(t,{Z:function(){return UserInquiry_Write}});var u=n(85893),i=n(67294),r=n(87536),s=n(79557),a=n(66952);n(24431);var o=n(99996),l=n(94525);n(31262);var c=n(54507),d=n(7986),p=n(82729),m=n(16829);function _templateObject(){let e=(0,p._)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  .imgListBox {\n    > div {\n      width: 55px;\n      height: 55px;\n    }\n    label,\n    img {\n      width: 55px;\n      height: 55px;\n      /* border: 3px solid; */\n    }\n  }\n  /* width: 650px; */\n  /* margin: 30px 4px 0; */\n  @media (max-width: 767px) {\n    width: unset;\n  }\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,p._)(["\n  display: flex;\n  flex-direction: column;\n  align-items: inherit;\n  gap: 32px;\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,p._)(["\n  display: flex;\n  align-items: center;\n  .required {\n    color: #ff0000;\n    padding: 4px 4px 0;\n  }\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,p._)(["\n  flex: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-top: 32px;\n"]);return _templateObject3=function(){return e},e}n(59395);let g=m.Z.form(_templateObject()),f=m.Z.div(_templateObject1());m.Z.div(_templateObject2()),m.Z.div(_templateObject3()),n(60518);var h=n(44543),v=n(53583),y=n(83668),Q=n(97877),C=n(87993),UserInquiry_Write=e=>{var t,n;let{selectedInquiry:p,onClose:m,isEditing:x=!1,questionType:Z=1}=e,S=(0,r.cI)({defaultValues:{title:(null==p?void 0:p.title)||"",contents:(null==p?void 0:p.contents)||"",images:[],imageIds:null==p?void 0:p.images,type:p?c.Qj.find(e=>(null==e?void 0:e.type)===p.type):"선택",isReceiveSms:p?p.isReceiveSms?"Y":"N":"Y",receiveSms:(null==p?void 0:p.receiveSms)||"",isSecret:(null==p?void 0:p.isSecret)!==0&&null!=p&&!!p.isSecret}}),{watch:M,setValue:P,handleSubmit:j,control:b}=S,[q,w,_,I,H,L]=(0,r.qo)({control:b,name:["title","contents","imageIds","type","isSecret","images"]}),[O,k]=(0,i.useState)(!1),{handleApiError:F}=(0,l.Z)(),U=(0,v.Sd)(),{checkImageLength:K,checkImageSize:V}=(0,h.Z)(),handleImgInput=async e=>{try{k(!0);let t=e.target.files;if(!K(L.length+t.length))return;for(let e=0;e<t.length;e++)if(!V(t[e]))return;let n=await (0,C.gV)(t,U.mutateAsync);P("images",L?[...L,...n.map(e=>({id:e.id,url:e.url}))]:[...n.map(e=>({id:e.id,url:e.url}))])}catch(e){F(e)}finally{k(!1),e.target.value=""}},{openCloseAndConfirmPopup:E}=(0,y.Z)(),D=(0,i.useCallback)(()=>{E({message:"창을 닫으면 작성한 내용이 삭제됩니다.\n계속 하시겠습니까?",onConfirm:()=>m()})},[]),B=(0,v.Kv)({onSuccess:()=>m()}),R=(0,v.k9)({params:{id:null==p?void 0:p.id},onSuccess:()=>m()}),N=(0,v.D4)({onSuccess:()=>m()}),T=(0,v.eq)({params:{id:null==p?void 0:p.id},onSuccess:()=>m()}),W=(0,i.useCallback)(e=>{P("images",null==L?void 0:L.filter(t=>t.id!==e.id))},[L]),$=(0,i.useCallback)(()=>{if(O){alert("이미지가 업로딩 중입니다. 잠시 후에 시도해주세요.");return}let e=L.map(e=>e.id),t={title:q,contents:w,isReceiveSms:!1,isSecret:H,...L&&{imageIds:e}};x&&p?0===Z?R.mutate(t):T.mutate(t):0===Z?B.mutate({...t,productId:null==p?void 0:p.productId}):N.mutate(t)},[q,w,I,H,L,_,O,L]);return(0,i.useEffect)(()=>{if(null==p?void 0:p.images){var e;P("images",[...null==p?void 0:null===(e=p.images)||void 0===e?void 0:e.map(e=>({id:e.id,url:e.url}))])}},[]),(0,u.jsx)(a.Z,{handleConfirmPopup:j($),handleClosePopup:D,handleBackPopup:D,type:"submit",disabled:!M("title")||!M("contents")||M("title").length>40||(null===(n=M("contents"))||void 0===n?void 0:null===(t=n.trim())||void 0===t?void 0:t.length)<10,title:"".concat(Z?"1:1 문의":"상품 문의"," ").concat(x?"수정":"작성"),confirmTitle:x?"수정하기":"등록하기",children:(0,u.jsx)(r.RV,{...S,children:(0,u.jsx)(g,{children:(0,u.jsxs)(d.Rx.tu,{gap:"30px",align:"inherits",children:[(0,u.jsxs)(f,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)(o.Z,{placeholder:"제목을 입력해 주세요. (최대 40자)",value:"title",label:"문의 제목",required:!0,maxLength:40,validatePattern:/^\S.*\S$/}),1!==Z&&(0,u.jsx)("div",{style:{marginTop:"10px"},children:(0,u.jsx)(s.default,{checked:H,onChange:e=>P("isSecret",!!e.target.checked),children:"비밀글 설정"})})]}),(0,u.jsx)(o.Z,{textarea:!0,placeholder:"문의 내용은 최소 10자 이상 작성해 주세요.",value:"contents",textLength:M("contents").length,label:"문의 내용",required:!0,maxLength:1e3,isTextLength:!0,style:{minHeight:210,padding:16}})]}),(0,u.jsx)(Q.Z,{handleImgInput:handleImgInput,handleDeleteImg:W,images:L,isImgLoading:O})]})})})})}},53583:function(e,t,n){n.d(t,{Bc:function(){return useDeleteUserQnaMutation},D4:function(){return useCreateUserQnaMutation},Kv:function(){return useCreateProductQnaMutation},Sd:function(){return useUploadQuestionImageMutation},eq:function(){return useModifyUserQnaMutation},hh:function(){return useDeleteProductQnaMutation},k9:function(){return useModifyProductQnaMutation}});var u=n(88767),i=n(94525),r=n(31162),s=n(42738),a=n(91794),o=n(83668);let useUploadQuestionImageMutation=function(){let{onSuccess:e,onError:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{handleApiError:n}=(0,i.Z)();return(0,u.useMutation)(r.$m,{onSuccess:t=>{let{data:n}=t;e&&e(n)},onError:e=>{n(e),t&&t(e)}})},useCreateProductQnaMutation=function(){let{onSuccess:e,onError:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{openConfirmPopup:n}=(0,o.Z)(),{handleApiError:a}=(0,i.Z)(),l=(0,u.useQueryClient)(),handleSuccess=t=>{l.invalidateQueries(s.Ky),l.invalidateQueries(s.HF),l.invalidateQueries(s.CZ),e&&e(t)};return(0,u.useMutation)(r.Og,{onSuccess:e=>{let{data:t}=e;n({message:"상품 문의가 작성되었습니다.",onConfirm:()=>handleSuccess(t)})},onError:e=>{a(e),t&&t(e)}})},useModifyProductQnaMutation=function(){let{onSuccess:e,onError:t,params:{id:n}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{openConfirmPopup:a}=(0,o.Z)(),{handleApiError:l}=(0,i.Z)(),c=(0,u.useQueryClient)(),handleSuccess=t=>{c.invalidateQueries(s.Ky),c.invalidateQueries(s.HF),c.invalidateQueries(s.CZ),e&&e(t)};return(0,u.useMutation)(e=>(0,r._L)(n,e),{onSuccess:e=>{let{data:t}=e;a({message:"상품 문의가 수정되었습니다.",onConfirm:()=>handleSuccess(t)})},onError:e=>{l(e),t&&t(e)}})},useDeleteProductQnaMutation=function(){let{onSuccess:e,onError:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{openConfirmPopup:n}=(0,o.Z)(),{handleApiError:a}=(0,i.Z)(),l=(0,u.useQueryClient)(),handleSuccess=t=>{l.invalidateQueries(s.Ky),l.invalidateQueries(s.HF),l.invalidateQueries(s.CZ),e&&e(t)};return(0,u.useMutation)(r.pW,{onSuccess:e=>{let{data:t}=e;n({message:"상품 문의가 삭제되었습니다.",onConfirm:()=>handleSuccess(t)})},onError:e=>{a(e),t&&t(e)}})},useCreateUserQnaMutation=function(){let{onSuccess:e,onError:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{openConfirmPopup:n}=(0,o.Z)(),{handleApiError:r}=(0,i.Z)(),l=(0,u.useQueryClient)(),handleSuccess=t=>{l.invalidateQueries(s.Ky),l.invalidateQueries(s.HF),e&&e(t)};return(0,u.useMutation)(a.Sh,{onSuccess:e=>{let{data:t}=e;n({message:"1:1 문의가 작성되었습니다.",onConfirm:()=>handleSuccess(t)})},onError:e=>{r(e),t&&t(e)}})},useModifyUserQnaMutation=function(){let{onSuccess:e,onError:t,params:{id:n}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{openConfirmPopup:r}=(0,o.Z)(),{handleApiError:l}=(0,i.Z)(),c=(0,u.useQueryClient)(),handleSuccess=t=>{c.invalidateQueries(s.Ky),c.invalidateQueries(s.HF),e&&e(t)};return(0,u.useMutation)(e=>(0,a.Us)(n,e),{onSuccess:e=>{let{data:t}=e;r({message:"1:1 문의가 수정되었습니다.",onConfirm:()=>handleSuccess(t)})},onError:e=>{l(e),t&&t(e)}})},useDeleteUserQnaMutation=function(){let{onSuccess:e,onError:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{openConfirmPopup:n}=(0,o.Z)(),{handleApiError:r}=(0,i.Z)(),l=(0,u.useQueryClient)(),handleSuccess=t=>{l.invalidateQueries(s.HF),e&&e(t)};return(0,u.useMutation)(a.bl,{onSuccess:e=>{let{data:t}=e;n({message:"1:1 문의가 삭제되었습니다.",onConfirm:()=>handleSuccess(t)})},onError:e=>{r(e),t&&t(e)}})}},79256:function(e,t,n){n.d(t,{HS:function(){return useProductQnaListQuery},OR:function(){return useProductPrivateQnaListQuery},e1:function(){return useMyProductQnaListQuery}});var u=n(31162),i=n(91794),r=n(42738),s=n(88767);let useMyProductQnaListQuery=(e,t)=>{let{page:n,count:i,hasAnswer:a}=e,o=(0,s.useQuery)({queryKey:[r.Ky,n,i,a],queryFn:()=>(0,u.Dx)({page:n,count:i,hasAnswer:a}),select:e=>e.data,...t});return o},useProductPrivateQnaListQuery=(e,t)=>{let{page:n,count:u,hasAnswer:a}=e,o=(0,s.useQuery)({queryKey:[r.HF,n,u,a],queryFn:()=>(0,i.N6)({page:n,count:u,hasAnswer:a}),select:e=>e.data,...t});return o},useProductQnaListQuery=(e,t)=>{let{page:n,count:i,productId:a}=e,o=(0,s.useQuery)({queryKey:[r.CZ,n,i,a],queryFn:()=>(0,u.cZ)(a,{page:n,count:i}),select:e=>e.data,...t});return o}}}]);