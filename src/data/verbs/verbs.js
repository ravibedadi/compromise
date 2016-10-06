//most-frequent non-irregular verbs, in infinitive form, to be conjugated for the lexicon
//this list is the seed, from which various forms are conjugated
'use strict';
const fns = require('../fns');

//suffix-index adjectives
//  {cial:'cru,spe'} -> 'crucial', 'special'

//suffix-index adjectives
//  {cial:'cru,spe'} -> 'crucial', 'special'
let compressed = {
  prove: ',im,ap,disap',
  serve: ',de,ob,re',
  ress: 'exp,p,prog,st,add,d',
  lect: 'ref,se,neg,col,e',
  sist: 'in,con,per,re,as',
  tain: 'ob,con,main,s,re',
  mble: 'rese,gru,asse,stu',
  ture: 'frac,lec,tor,fea',
  port: 're,sup,ex,im',
  ate: 'rel,oper,indic,cre,h,activ,estim,particip,d,anticip,evalu',
  use: ',ca,over,ref,acc,am,pa',
  ive: 'l,rece,d,arr,str,surv,thr,rel',
  are: 'prep,c,comp,sh,st,decl,d,sc',
  ine: 'exam,imag,determ,comb,l,decl,underm,def',
  nce: 'annou,da,experie,influe,bou,convi,enha',
  ain: 'tr,rem,expl,dr,compl,g,str',
  ent: 'prev,repres,r,res,rel,inv',
  age: 'dam,mess,man,encour,eng,discour',
  rge: 'su,cha,eme,u,me',
  ise: 'ra,exerc,prom,surpr,pra',
  ect: 'susp,dir,exp,def,rej',
  ter: 'en,mat,cen,ca,al',
  end: ',t,dep,ext,att',
  est: 't,sugg,prot,requ,r',
  ock: 'kn,l,sh,bl,unl',
  nge: 'cha,excha,ra,challe,plu',
  ase: 'incre,decre,purch,b,ce',
  ish: 'establ,publ,w,fin,distingu',
  mit: 'per,ad,sub,li',
  ure: 'fig,ens,end,meas',
  der: 'won,consi,mur,wan',
  ave: 's,sh,w,cr',
  ire: 'requ,des,h,ret',
  tch: 'scra,swi,ma,stre',
  ack: 'att,l,p,cr',
  ion: 'ment,quest,funct,envis',
  ump: 'j,l,p,d',
  ide: 'dec,prov,gu,s',
  ush: 'br,cr,p,r',
  eat: 'def,h,tr,ch',
  ash: 'sm,spl,w,fl',
  rry: 'ca,ma,hu,wo',
  ear: 'app,f,b,disapp',
  er: 'answ,rememb,off,suff,cov,discov,diff,gath,deliv,both,empow,with',
  le: 'fi,sett,hand,sca,whist,enab,smi,ming,ru,sprink,pi',
  st: 'exi,foreca,ho,po,twi,tru,li,adju,boa,contra,boo',
  it: 'vis,ed,depos,sp,awa,inhib,cred,benef,prohib,inhab',
  nt: 'wa,hu,pri,poi,cou,accou,confro,warra,pai',
  ch: 'laun,rea,approa,sear,tou,ar,enri,atta',
  ss: 'discu,gue,ki,pa,proce,cro,glo,dismi',
  ll: 'fi,pu,ki,ca,ro,sme,reca,insta',
  rn: 'tu,lea,conce,retu,bu,ea,wa,gove',
  ce: 'redu,produ,divor,noti,for,repla',
  te: 'contribu,uni,tas,vo,no,constitu,ci',
  rt: 'sta,comfo,exe,depa,asse,reso,conve',
  ck: 'su,pi,che,ki,tri,wre',
  ct: 'intera,restri,predi,attra,depi,condu',
  ke: 'sta,li,bra,overta,smo,disli',
  se: 'collap,suppo,clo,rever,po,sen',
  nd: 'mi,surrou,dema,remi,expa,comma',
  ve: 'achie,invol,remo,lo,belie,mo',
  rm: 'fo,perfo,confi,confo,ha',
  or: 'lab,mirr,fav,monit,hon',
  ue: 'arg,contin,val,iss,purs',
  ow: 'all,foll,sn,fl,borr',
  ay: 'pl,st,betr,displ,portr',
  ze: 'recogni,reali,snee,ga,emphasi',
  ip: 'cl,d,gr,sl,sk',
  re: 'igno,sto,interfe,sco',
  ng: 'spri,ba,belo,cli',
  ew: 'scr,vi,revi,ch',
  gh: 'cou,lau,outwei,wei',
  ly: 'app,supp,re,multip',
  ge: 'jud,acknowled,dod,alle',
  en: 'list,happ,threat,strength',
  ee: 'fors,agr,disagr,guarant',
  et: 'budg,regr,mark,targ',
  rd: 'rega,gua,rewa,affo',
  am: 'dre,j,sl,ro',
  ry: 'va,t,c,bu'
};
let arr = [
  'abandon',
  'accept',
  'add',
  'added',
  'adopt',
  'aid',
  'appeal',
  'applaud',
  'archive',
  'ask',
  'assign',
  'associate',
  'assume',
  'attempt',
  'avoid',
  'become',
  'bomb',
  'cancel',
  'claim',
  'claw',
  'come',
  'control',
  'convey',
  'cook',
  'copy',
  'cut',
  'deem',
  'defy',
  'deny',
  'describe',
  'design',
  'destroy',
  'die',
  'divide',
  'do',
  'doubt',
  'drag',
  'drift',
  'drop',
  'echo',
  'embody',
  'enjoy',
  'envy',
  'excel',
  'fail',
  'fix',
  'float',
  'flood',
  'focus',
  'fold',
  'get',
  'goes',
  'grab',
  'grasp',
  'grow',
  'happen',
  'head',
  'help',
  'hold fast',
  'hope',
  'include',
  'instruct',
  'join',
  'keep',
  'know',
  'learn',
  'let',
  'lift',
  'link',
  'load',
  'loan',
  'look',
  'make due',
  'mark',
  'melt',
  'minus',
  'multiply',
  'name',
  'need',
  'occur',
  'overcome',
  'overlap',
  'overwhelm',
  'owe',
  'pay',
  'plan',
  'plug',
  'plus',
  'pop',
  'pour',
  'proclaim',
  'put',
  'rank',
  'reason',
  'reckon',
  'relax',
  'repair',
  'reply',
  'reveal',
  'revel',
  'risk',
  'rub',
  'ruin',
  'sail',
  'seek',
  'seem',
  'send',
  'set',
  'shout',
  'sleep',
  'sneak',
  'sort',
  'spoil',
  'stem',
  'step',
  'stop',
  'study',
  'take',
  'talk',
  'thank',
  'took',
  'trade',
  'transfer',
  'trap',
  'travel',
  'tune',
  'undergo',
  'undo',
  'uplift',
  'walk',
  'watch',
  'win',
  'wipe',
  'work',
  'yawn',
  'yield'
];

module.exports = fns.uncompress_suffixes(arr, compressed);
